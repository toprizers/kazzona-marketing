import { prisma } from "@/lib/db";
import AutomationClient from "./AutomationClient";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { format } from "date-fns";
import { Clock, CheckCircle, XCircle } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AutomationsPage() {
  const tasks = await prisma.aiGenerationTask.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h2 className="text-3xl font-bold font-heading mb-2">SEO Automations</h2>
        <p className="text-muted-foreground">Bulk schedule AI content generation using CSV data.</p>
      </div>

      <AutomationClient />

      <Card className="bg-card border-border/40">
        <CardHeader>
          <CardTitle>Scheduled Tasks</CardTitle>
          <CardDescription>Your upcoming and completed content generation tasks.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground bg-secondary/20 uppercase border-b border-border/40">
                <tr>
                  <th className="px-4 py-3 font-medium rounded-tl-md">Topic</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Keyword</th>
                  <th className="px-4 py-3 font-medium">Scheduled For</th>
                  <th className="px-4 py-3 font-medium rounded-tr-md">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {tasks.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                      No tasks scheduled yet. Import data above to get started.
                    </td>
                  </tr>
                ) : (
                  tasks.map((task) => (
                    <tr key={task.id} className="hover:bg-secondary/10 transition-colors">
                      <td className="px-4 py-3 font-medium">{task.topic}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          task.type === 'PAGE' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-blue-500/10 text-blue-500'
                        }`}>
                          {task.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground text-xs">{task.keyword || '-'}</td>
                      <td className="px-4 py-3 text-muted-foreground text-xs whitespace-nowrap">
                        {format(new Date(task.targetDate), "MMM d, yyyy h:mm a")}
                      </td>
                      <td className="px-4 py-3">
                        {task.status === 'PENDING' && <span className="flex items-center gap-1 text-xs text-amber-500"><Clock className="w-3 h-3" /> Pending</span>}
                        {task.status === 'COMPLETED' && <span className="flex items-center gap-1 text-xs text-emerald-500"><CheckCircle className="w-3 h-3" /> Done</span>}
                        {task.status === 'FAILED' && <span className="flex items-center gap-1 text-xs text-destructive"><XCircle className="w-3 h-3" /> Failed</span>}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
