import React from "react";
import { Product } from "@/data/products";

interface ProductLeadManagementProps {
  product: Product;
}

export function ProductLeadManagement({ product }: ProductLeadManagementProps) {
  const pipeline = [
    { label: "Conversation", description: "New inquiry arrives via WhatsApp", status: "start" },
    { label: "AI Qualifying", description: "AI analyzing intent and needs", status: "process" },
    { label: "AI Qualified", description: "Intent confirmed, lead categorized", status: "process" },
    { label: "Warm Lead", description: "High intent, ready for sales follow-up", status: "success" },
    { label: "Hot Lead", description: "Immediate priority, high conversion chance", status: "success" },
  ];

  return (
    <section className="py-20 px-4 sm:px-7 lg:px-16 bg-white">
      <div className="mx-auto max-w-[1380px]">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--project-text)] sm:text-4xl">
            Turn conversations into actionable leads.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--project-secondary)] sm:text-lg">
            Don't let potential customers slip through the cracks. Move them through a visual pipeline.
          </p>
        </div>

        <div className="relative flex flex-col items-center gap-8 sm:flex-row justify-between">
          {pipeline.map((step, i) => (
            <React.Fragment key={i}>
              <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[200px]">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold border-2 mb-4 transition-transform hover:scale-110 cursor-default ${
                  step.status === 'success'
                  ? 'bg-[var(--project-primary)] text-white border-[var(--project-primary)]'
                  : 'bg-white text-[var(--project-primary)] border-[var(--project-primary)]'
                }`}>
                  {i + 1}
                </div>
                <h3 className="font-semibold text-sm text-[var(--project-text)] mb-1">{step.label}</h3>
                <p className="text-xs text-[var(--project-secondary)] leading-snug">{step.description}</p>
              </div>
              {i < pipeline.length - 1 && (
                <div className="hidden sm:block h-[2px] flex-1 bg-gradient-to-r from-[var(--project-primary)] to-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
