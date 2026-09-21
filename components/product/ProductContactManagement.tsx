import React from "react";
import { Product } from "@/data/products";

interface ProductContactManagementProps {
  product: Product;
}

export function ProductContactManagement({ product }: ProductContactManagementProps) {
  const contacts = [
    { name: "John Doe", phone: "+1 234 567 890", status: "Warm Lead", lastActivity: "2h ago", tags: ["Enterprise", "Priority"] },
    { name: "Sarah Smith", phone: "+1 987 654 321", status: "AI Qualified", lastActivity: "5h ago", tags: ["SME", "Inquiry"] },
    { name: "Mike Ross", phone: "+1 456 789 012", status: "Hot Lead", lastActivity: "1d ago", tags: ["High Value", "Urgent"] },
    { name: "Emma Wilson", phone: "+1 321 654 987", status: "AI Qualifying", lastActivity: "3d ago", tags: ["Lead"] },
  ];

  return (
    <section className="py-20 px-4 sm:px-7 lg:px-16 bg-[var(--project-surface)]">
      <div className="mx-auto max-w-[1380px]">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--project-text)] sm:text-4xl">
            Keep customer context organized.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--project-secondary)] sm:text-lg">
            Detailed contact records integrated with your WhatsApp communication history.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact List */}
          <div className="lg:col-span-5 rounded-2xl border border-[var(--project-border)] bg-white shadow-sm overflow-hidden">
            <div className="p-4 border-b border-[var(--project-border)] bg-gray-50">
              <h3 className="font-semibold text-sm text-[var(--project-text)]">Contacts</h3>
            </div>
            <div className="divide-y divide-[var(--project-border)]">
              {contacts.map((contact, i) => (
                <div key={i} className={`p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors ${i === 0 ? 'bg-blue-50' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-200" />
                    <div>
                      <p className="text-sm font-medium text-[var(--project-text)]">{contact.name}</p>
                      <p className="text-xs text-[var(--project-secondary)]">{contact.phone}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] px-2 py-1 rounded-full font-medium ${
                    contact.status === 'Hot Lead' ? 'bg-orange-100 text-orange-600' :
                    contact.status === 'Warm Lead' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {contact.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Contact Detail */}
          <div className="lg:col-span-7 rounded-2xl border border-[var(--project-border)] bg-white shadow-sm p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-gray-200" />
              <div>
                <h3 className="text-2xl font-semibold text-[var(--project-text)]">John Doe</h3>
                <p className="text-sm text-[var(--project-secondary)]">+1 234 567 890</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase text-gray-400">Lead Status</p>
                <p className="text-sm font-medium text-[var(--project-text)]">Warm Lead</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase text-gray-400">Last Activity</p>
                <p className="text-sm font-medium text-[var(--project-text)]">2 hours ago</p>
              </div>
              <div className="space-y-1 md:col-span-2">
                <p className="text-xs font-semibold uppercase text-gray-400">Tags</p>
                <div className="flex gap-2 mt-1">
                  {["Enterprise", "Priority", "Tech Stack: Next.js"].map(tag => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-1 md:col-span-2">
                <p className="text-xs font-semibold uppercase text-gray-400">Notes</p>
                <p className="text-sm text-[var(--project-secondary)] leading-relaxed">
                  Interested in upgrading to the premium plan. Has a team of 15 employees. Looking for a more scalable solution for their agency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
