import React from "react";
import { Product } from "@/data/products";

interface ProductInboxShowcaseProps {
  product: Product;
}

export function ProductInboxShowcase({ product }: ProductInboxShowcaseProps) {
  return (
    <section className="py-20 px-4 sm:px-7 lg:px-16 bg-[var(--project-surface)]">
      <div className="mx-auto max-w-[1380px]">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--project-text)] sm:text-4xl">
            Every conversation in one place.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--project-secondary)] sm:text-lg">
            Manage your customer interactions with a unified inbox that combines chat, context, and workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 rounded-2xl border border-[var(--project-border)] bg-white shadow-xl overflow-hidden">
          {/* Sidebar */}
          <div className="lg:col-span-3 border-r border-[var(--project-border)] bg-[#F0F4F3] p-4 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-[var(--project-primary)] text-white font-medium text-sm cursor-pointer">
                <span>Inbox</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg text-[var(--project-secondary)] hover:bg-gray-100 transition-colors text-sm cursor-pointer">
                <span>Contacts</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg text-[var(--project-secondary)] hover:bg-gray-100 transition-colors text-sm cursor-pointer">
                <span>Projects</span>
              </div>
            </div>
          </div>

          {/* Conversation List */}
          <div className="lg:col-span-4 border-r border-[var(--project-border)] bg-white overflow-y-auto max-h-[600px]">
            <div className="p-4 border-b border-[var(--project-border)]">
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full px-3 py-2 text-sm rounded-md border border-[var(--project-border)] focus:outline-none focus:ring-2 focus:ring-[var(--project-primary)]"
              />
            </div>
            <div className="divide-y divide-[var(--project-border)]">
              {[
                { name: "John Doe", msg: "Interested in the premium plan", time: "10:24 AM", status: "unread" },
                { name: "Sarah Smith", msg: "Thanks for the documents!", time: "Yesterday", status: "read" },
                { name: "Mike Ross", msg: "Can we schedule a call?", time: "2 days ago", status: "read" },
                { name: "Emma Wilson", msg: "Where can I find the pricing?", time: "3 days ago", status: "read" },
              ].map((chat, i) => (
                <div key={i} className={`p-4 flex justify-between items-start cursor-pointer hover:bg-gray-50 transition-colors ${i === 0 ? 'bg-blue-50' : ''}`}>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-[var(--project-text)]">{chat.name}</span>
                      {chat.status === 'unread' && <span className="h-2 w-2 rounded-full bg-blue-500" />}
                    </div>
                    <p className="text-xs text-[var(--project-secondary)] truncate w-48">{chat.msg}</p>
                  </div>
                  <span className="text-[10px] text-gray-400">{chat.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-5 flex flex-col bg-[#F9FAFB]">
            <div className="p-4 border-b border-[var(--project-border)] bg-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gray-200" />
                <span className="font-semibold text-sm text-[var(--project-text)]">John Doe</span>
              </div>
              <span className="text-[10px] px-2 py-1 rounded-full bg-[var(--project-soft-green)] text-[var(--project-primary)] font-medium">
                Warm Lead
              </span>
            </div>
            <div className="flex-1 p-4 space-y-4 overflow-y-auto h-[450px]">
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-2xl rounded-bl-none bg-white border border-[var(--project-border)] text-sm text-[var(--project-text)]">
                  Hello! I saw your ad on LinkedIn and I'm interested in the premium plan for my agency.
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[80%] p-3 rounded-2xl rounded-br-none bg-[var(--project-primary)] text-white text-sm">
                  Hi John! I'd love to help you with that. Could you tell me a bit more about your agency's size?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-2xl rounded-bl-none bg-white border border-[var(--project-border)] text-sm text-[var(--project-text)]">
                  We have about 15 employees and manage around 50 clients.
                </div>
              </div>
            </div>
            <div className="p-4 bg-white border-t border-[var(--project-border)]">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 text-sm rounded-md border border-[var(--project-border)] focus:outline-none"
                />
                <button className="px-4 py-2 rounded-md bg-[var(--project-primary)] text-white text-sm font-medium">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
