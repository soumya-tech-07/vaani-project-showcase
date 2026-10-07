"use client";

import { Check, Clipboard, Play, RotateCcw, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

type DemoStage = "ready" | "recording" | "processing" | "completed";

const demoTranscript = "so basically yesterday I was going to office and actually we had a meeting at 10 30...";
const demoOutput = "Yesterday, I was going to the office, but we had an important meeting at 10:30 AM.";
const waveformBars = [20, 34, 48, 28, 42, 56, 31, 46, 24, 52, 36, 45, 27, 50, 32, 43, 25, 37, 54, 29];

const stageDetails: Record<DemoStage, { label: string; helper: string }> = {
  ready: { label: "Ready", helper: "Watch the Vaani workflow" },
  recording: { label: "Recording", helper: "Capturing natural speech" },
  processing: { label: "Processing", helper: "Turning speech into structure" },
  completed: { label: "Ready to use", helper: "Polished text is ready" },
};

function EqualizerMark({ active = false, large = false }: { active?: boolean; large?: boolean }) {
  const heights = large ? [15, 29, 40, 24, 34, 18] : [11, 22, 31, 18, 26, 13];

  return (
    <span className={`inline-flex items-center justify-center gap-1 ${large ? "h-9 w-11" : "h-8 w-8"}`} aria-hidden="true">
      {heights.map((height, index) => (
        <span
          key={index}
          className={`w-1 rounded-full transition-colors ${active ? "bg-white equalizer-bar" : "bg-white"}`}
          style={{ height: `${height}px`, animationDelay: `${index * 0.08}s` }}
        />
      ))}
    </span>
  );
}

export function VoiceWorkspace() {
  const [stage, setStage] = useState<DemoStage>("ready");
  const [replayKey, setReplayKey] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeline: Array<[number, DemoStage]> = [
      [900, "recording"],
      [4600, "processing"],
      [6200, "completed"],
      [10800, "ready"],
    ];
    const timers = timeline.map(([delay, nextStage]) => window.setTimeout(() => setStage(nextStage), delay));
    const loop = window.setTimeout(() => setReplayKey((key) => key + 1), 11600);

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(loop);
    };
  }, [replayKey]);

  const copyOutput = async () => {
    try {
      await navigator.clipboard.writeText(demoOutput);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const replayDemo = () => {
    setStage("ready");
    setReplayKey((key) => key + 1);
  };

  const isRecording = stage === "recording";
  const isProcessing = stage === "processing";
  const isCompleted = stage === "completed";
  const details = stageDetails[stage];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_24px_60px_rgba(17,24,39,0.10)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,46,219,0.08),transparent_38%)]" />
      <div className="relative border-b border-[#E2E8F0] px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-[#2438E8] text-white ${isRecording ? "shadow-[0_0_22px_rgba(36,56,232,0.28)]" : ""}`}><EqualizerMark active={isRecording} /></div>
            <div><p className="text-sm font-semibold text-[#111827]">Vaani workspace</p><p className="text-[11px] text-[#64748B]">voice to polished text</p></div>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#2438E8]/25 bg-[#2438E8]/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#7C2EDB]"><span className={`h-1.5 w-1.5 rounded-full bg-[#2438E8] ${isRecording ? "animate-pulse" : ""}`} /> {details.label}</div>
        </div>
      </div>

      <div className="relative p-4 sm:p-6">
        <div className="mb-5 flex flex-col items-center gap-5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-5 sm:flex-row sm:justify-between sm:px-6">
          <div className="flex items-center gap-4"><div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#2438E8] text-white ${isRecording ? "animate-pulse shadow-[0_0_35px_rgba(36,56,232,0.28)]" : "shadow-[0_0_18px_rgba(124,46,219,0.12)]"}`}>{isProcessing ? <Sparkles size={21} className="animate-pulse" /> : isCompleted ? <Check size={23} /> : <EqualizerMark active={isRecording} large />}</div><div><p className="text-sm font-medium text-[#111827]">{details.helper}</p><p className="mt-1 text-xs text-[#64748B]">Presentation demo · no microphone required</p></div></div>
          <button type="button" onClick={replayDemo} className="inline-flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-3 py-2 text-xs text-[#475569] transition-colors hover:border-[#2438E8]/50 hover:bg-[#EEF0FF] hover:text-[#2838D8]"><RotateCcw size={14} /> Replay demo</button>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-4 sm:p-5"><div className="mb-4 flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#64748B]">Raw speech</span><span className="text-[11px] text-[#2438E8]">English · Hindi ready</span></div><div className="mb-5 flex h-14 items-center gap-1 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 sm:gap-1.5">{waveformBars.map((height, index) => <span key={index} className={`block w-1 flex-1 rounded-full transition-all duration-500 ${isRecording ? "waveform-bar bg-[#2438E8]" : "bg-[#EEF0FF]"}`} style={{ height: `${isRecording ? height * 0.72 : Math.max(5, height * 0.12)}px`, animationDelay: `${index * 0.06}s` }} />)}</div><p className="min-h-28 text-sm leading-7 text-[#475569]">{stage === "ready" ? <span className="text-[#64748B]">Vaani will show the spoken thought here.</span> : demoTranscript}</p>{isRecording && <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-[#2438E8]">Capturing natural speech...</p>}</div>
          <div className="rounded-xl border border-[#2438E8]/20 bg-[#F8FAFC] p-4 sm:p-5"><div className="mb-4 flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#64748B]">Polished output</span><span className="text-[11px] text-[#7C2EDB]">{isProcessing ? "Processing..." : isCompleted ? "Ready to use" : "Waiting for speech"}</span></div><p className="min-h-28 text-base leading-8 text-[#111827]">{isCompleted ? demoOutput : <span className="text-[#64748B]">The cleaned-up result appears here.</span>}</p><div className="mt-6 flex gap-2"><button type="button" onClick={copyOutput} disabled={!isCompleted} className="inline-flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-3 py-2 text-xs text-[#475569] transition-colors hover:border-[#2438E8]/50 hover:bg-[#EEF0FF] hover:text-[#2838D8] disabled:cursor-not-allowed disabled:opacity-40">{copied ? <Check size={14} className="text-[#2438E8]" /> : <Clipboard size={14} />} {copied ? "Copied" : "Copy"}</button><button type="button" disabled={!isCompleted} className="inline-flex items-center gap-2 rounded-lg bg-[#2438E8] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#2838D8] disabled:cursor-not-allowed disabled:opacity-40"><Play size={13} /> View output</button></div></div>
        </div>
      </div>
    </div>
  );
}
