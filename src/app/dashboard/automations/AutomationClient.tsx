"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Zap, Upload, AlertCircle, Play, Settings2, Clock, CheckCircle2, XCircle } from "lucide-react";
import { getAutopilotConfig, updateAutopilotConfig, triggerAutopilotInstant, AutopilotConfig } from "@/app/actions/autopilot";
import { format } from "date-fns";

export default function AutomationClient() {
  const router = useRouter();
  const [config, setConfig] = useState<AutopilotConfig | null>(null);
  
  // CSV state
  const [csvData, setCsvData] = useState("");
  const [csvLoading, setCsvLoading] = useState(false);
  
  // Action states
  const [saveLoading, setSaveLoading] = useState(false);
  const [triggerLoading, setTriggerLoading] = useState(false);
  const [message, setMessage] = useState<{type: "success" | "error", text: string} | null>(null);

  // Load configuration on mount
  useEffect(() => {
    async function loadConfig() {
      const cfg = await getAutopilotConfig();
      setConfig(cfg);
    }
    loadConfig();
  }, []);

  const handleImport = async () => {
    if (!csvData.trim()) return;
    setCsvLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/automations/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ csvData }),
      });
      const data = await res.json();
      
      if (res.ok) {
        setMessage({ type: "success", text: `Successfully imported ${data.count} tasks!` });
        setCsvData("");
        router.refresh();
      } else {
        setMessage({ type: "error", text: data.error || "Failed to import tasks" });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Something went wrong" });
    } finally {
      setCsvLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result;
      if (typeof text === 'string') {
        setCsvData(text);
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input so same file can be selected again
  };

  const handleToggleAutopilot = async (enabled: boolean) => {
    if (!config) return;
    setSaveLoading(true);
    setMessage(null);
    const res = await updateAutopilotConfig({ enabled });
    if (res.error) {
      setMessage({ type: "error", text: res.error });
    } else {
      setConfig(res.config || null);
      setMessage({ type: "success", text: `Autopilot ${enabled ? 'enabled' : 'disabled'} successfully!` });
    }
    setSaveLoading(false);
  };

  const handleUpdateFrequency = async (seconds: number) => {
    if (!config) return;
    setSaveLoading(true);
    setMessage(null);
    const res = await updateAutopilotConfig({ intervalSeconds: seconds });
    if (res.error) {
      setMessage({ type: "error", text: res.error });
    } else {
      setConfig(res.config || null);
      setMessage({ type: "success", text: `Autopilot frequency updated successfully!` });
    }
    setSaveLoading(false);
  };

  const handleTriggerInstant = async () => {
    setTriggerLoading(true);
    setMessage(null);
    const res = await triggerAutopilotInstant();
    if (res.error) {
      setMessage({ type: "error", text: res.error });
    } else {
      setMessage({ type: "success", text: `Successfully generated blog post: "${res.topic}"!` });
      // Reload config to get updated history
      const cfg = await getAutopilotConfig();
      setConfig(cfg);
      router.refresh();
    }
    setTriggerLoading(false);
  };

  if (!config) {
    return (
      <div className="flex justify-center items-center py-12">
        <span className="animate-pulse text-muted-foreground">Loading configurations...</span>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {message && (
        <div className={`p-4 rounded-xl text-sm flex items-start gap-3 transition-all duration-300 ${message.type === 'error' ? 'bg-destructive/10 text-destructive border border-destructive/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{message.text}</span>
        </div>
      )}

      {/* Autopilot config card */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-card border-border/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings2 className="w-5 h-5 text-primary" />
              Autopilot Poster Settings
            </CardTitle>
            <CardDescription>Configure AI Autopilot niche blog posting settings.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Toggle Switch */}
            <div className="flex items-center justify-between p-4 bg-secondary/10 border border-border/30 rounded-xl">
              <div>
                <p className="font-semibold text-sm">Autopilot Poster Active</p>
                <p className="text-xs text-muted-foreground mt-0.5">When active, the background script will post blogs automatically.</p>
              </div>
              <button
                onClick={() => handleToggleAutopilot(!config.enabled)}
                disabled={saveLoading}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/25 focus:ring-offset-2 ${config.enabled ? 'bg-primary' : 'bg-secondary'}`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${config.enabled ? 'translate-x-5' : 'translate-x-0'}`}
                />
              </button>
            </div>

            {/* Frequency Dropdown */}
            <div className="space-y-2">
              <label className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Posting Frequency</label>
              <select
                value={config.intervalSeconds}
                onChange={(e) => handleUpdateFrequency(Number(e.target.value))}
                disabled={saveLoading}
                className="w-full bg-secondary/15 border border-border/40 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
              >
                <option value={5}>5 Seconds (Demo / Testing)</option>
                <option value={60}>1 Minute (Testing)</option>
                <option value={3600}>Every 1 Hour</option>
                <option value={43200}>Every 12 Hours</option>
                <option value={86400}>Every 24 Hours</option>
                <option value={172800}>Every 2 Days</option>
                <option value={432000}>Every 5 Days</option>
              </select>
            </div>

            {/* Trigger instant generation */}
            <div className="pt-2">
              <Button 
                onClick={handleTriggerInstant} 
                disabled={triggerLoading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2 py-5"
              >
                <Play className={`w-4 h-4 ${triggerLoading ? 'animate-spin' : ''}`} />
                {triggerLoading ? "Generating Niche Blog..." : "Instant Autopilot Generate Now"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* CSV Scheduler */}
        <Card className="bg-card border-border/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-primary" />
              Import CSV Schedule
            </CardTitle>
            <CardDescription>Select a CSV file from your computer or paste records below (Topic, Keyword, Instructions, Type, Timing).</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <input 
                type="file" 
                accept=".csv" 
                id="csv-upload" 
                className="hidden" 
                onChange={handleFileUpload} 
              />
              <label htmlFor="csv-upload" className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium cursor-pointer border border-primary/30 hover:bg-primary/10 text-primary transition-colors">
                <Upload className="w-4 h-4" />
                Select CSV from PC
              </label>
              <span className="text-xs text-muted-foreground">Or paste records below</span>
            </div>
            
            <Textarea 
              placeholder="Topic, Keyword, Instructions, Type, Timing&#10;Digital Marketing Agency, agency|delhi, focus on local SEO, PAGE, 2026-06-01&#10;Top 10 SEO Tips, SEO tips 2026, add 5 tips for beginners, BLOG, 2026-06-02"
              value={csvData}
              onChange={(e) => setCsvData(e.target.value)}
              className="font-mono text-xs h-32 bg-secondary/10"
            />
            <Button 
              onClick={handleImport} 
              disabled={csvLoading || !csvData.trim()}
              className="w-full bg-secondary/20 hover:bg-secondary/35 text-foreground border border-border/40"
            >
              {csvLoading ? "Importing Tasks..." : "Upload Schedule"}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Autopilot History logs */}
      <Card className="bg-card border-border/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-500" />
            Autopilot Execution History
          </CardTitle>
          <CardDescription>Recent articles automatically generated by the background daemon.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground bg-secondary/20 uppercase border-b border-border/40">
                <tr>
                  <th className="px-4 py-3 font-medium">Generated Content</th>
                  <th className="px-4 py-3 font-medium">Type</th>
                  <th className="px-4 py-3 font-medium">Primary Keyword</th>
                  <th className="px-4 py-3 font-medium">Secondary Keywords</th>
                  <th className="px-4 py-3 font-medium">Run Timestamp</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {config.history.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                      No autopilot runs executed yet. Toggle autopilot or trigger a run above to start logs.
                    </td>
                  </tr>
                ) : (
                  config.history.map((run, idx) => (
                    <tr key={idx} className="hover:bg-secondary/10 transition-colors">
                      <td className="px-4 py-3 font-medium">
                        {run.slug ? (
                          <Link href={`/blog/${run.slug}`} target="_blank" className="hover:text-primary transition-colors hover:underline">
                            {run.topic}
                          </Link>
                        ) : (
                          <span>{run.topic}</span>
                        )}
                        {run.error && <p className="text-xs text-destructive mt-1 font-mono">{run.error}</p>}
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-500 border border-blue-500/20">
                          {run.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground text-xs font-mono max-w-[150px] truncate" title={run.primaryKeyword || "-"}>
                        {run.primaryKeyword || "-"}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground text-xs max-w-[200px] truncate" title={run.secondaryKeyword || "-"}>
                        {run.secondaryKeyword || "-"}
                      </td>
                      <td suppressHydrationWarning className="px-4 py-3 text-muted-foreground text-xs whitespace-nowrap">
                        {format(new Date(run.timestamp), "MMM d, yyyy h:mm:ss a")}
                      </td>
                      <td className="px-4 py-3">
                        {run.status === 'COMPLETED' ? (
                          <span className="flex items-center gap-1 text-xs text-emerald-500 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Success
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs text-destructive font-medium">
                            <XCircle className="w-3.5 h-3.5" /> Failed
                          </span>
                        )}
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
