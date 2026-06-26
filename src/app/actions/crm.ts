"use server";

import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth";

export async function submitLead(data: {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}) {
  try {
    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company,
        service: data.service,
        message: data.message,
      },
    });
    
    return { success: true, leadId: lead.id };
  } catch (error) {
    console.error("Error submitting lead:", error);
    return { error: "Failed to submit inquiry. Please try again." };
  }
}

export async function updateLeadStatus(leadId: string, status: string) {
  try {
    const session = await getSession();
    if (!session || !session.email) {
      return { error: "Not authorized" };
    }

    const validStatuses = ["NEW", "IN_PROGRESS", "CONVERTED", "CLOSED"];
    if (!validStatuses.includes(status)) {
      return { error: "Invalid status" };
    }

    await prisma.lead.update({
      where: { id: leadId },
      data: { status },
    });

    return { success: true };
  } catch (error) {
    console.error("Error updating lead status:", error);
    return { error: "Failed to update status." };
  }
}
