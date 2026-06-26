import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { csvData } = await req.json();
    
    if (!csvData) {
      return NextResponse.json({ error: "No CSV data provided" }, { status: 400 });
    }

    const lines = csvData.split("\n");
    const headers = lines[0].toLowerCase().split(",").map((h: string) => h.trim());
    
    const topicIdx = headers.findIndex((h: string) => h.includes("topic"));
    const keywordIdx = headers.findIndex((h: string) => h.includes("keyword"));
    const typeIdx = headers.findIndex((h: string) => h.includes("type"));
    const timingIdx = headers.findIndex((h: string) => h.includes("timing") || h.includes("date"));

    if (topicIdx === -1) {
      return NextResponse.json({ error: "CSV must contain a 'Topic' column" }, { status: 400 });
    }

    const tasksToCreate = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;
      
      const cols = line.split(",").map((c: string) => c.trim().replace(/^"|"$/g, ""));
      
      const topic = cols[topicIdx];
      const keyword = keywordIdx !== -1 ? cols[keywordIdx] : null;
      const type = typeIdx !== -1 && cols[typeIdx] ? cols[typeIdx].toUpperCase() : "BLOG";
      
      let targetDate = new Date();
      if (timingIdx !== -1 && cols[timingIdx]) {
        const parsedDate = new Date(cols[timingIdx]);
        if (!isNaN(parsedDate.getTime())) {
          targetDate = parsedDate;
        }
      }

      if (topic) {
        tasksToCreate.push({
          topic,
          keyword: keyword || null,
          type: type === "PAGE" ? "PAGE" : "BLOG",
          targetDate,
          status: "PENDING",
        });
      }
    }

    if (tasksToCreate.length === 0) {
      return NextResponse.json({ error: "No valid tasks found in CSV" }, { status: 400 });
    }

    await prisma.aiGenerationTask.createMany({
      data: tasksToCreate,
    });

    return NextResponse.json({ success: true, count: tasksToCreate.length });
  } catch (error) {
    console.error("Import error:", error);
    return NextResponse.json({ error: "Failed to import tasks" }, { status: 500 });
  }
}
