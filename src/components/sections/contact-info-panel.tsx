"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone, Globe } from "lucide-react";
import { contactChannels, officeLocations } from "@/data/contact";

const channelIcons = {
  Email: Mail,
  Phone: Phone,
  Website: Globe
};

export function ContactInfoPanel() {
  const [activeOffice, setActiveOffice] = useState(officeLocations[0]?.id ?? "lagos");
  const office = officeLocations.find((o) => o.id === activeOffice) ?? officeLocations[0];

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
        <h2 className="text-lg font-semibold text-slate-900">Regional Offices</h2>
        <p className="mt-1 text-sm text-slate-500">Select a location to view details</p>

        <div className="mt-4 space-y-2">
          {officeLocations.map((loc) => {
            const isActive = activeOffice === loc.id;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setActiveOffice(loc.id)}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${
                  isActive
                    ? "border-cyan-400 bg-cyan-50 shadow-sm"
                    : "border-slate-200 bg-slate-50/50 hover:border-cyan-200"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    isActive ? "bg-cyan-100 text-cyan-700" : "bg-white text-cyan-600"
                  }`}
                >
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-900">
                    {loc.city}, {loc.country}
                  </span>
                  <span className="block text-xs text-slate-500">{loc.timezone}</span>
                </span>
              </button>
            );
          })}
        </div>

        {office ? (
          <div className="mt-4 rounded-xl border border-dashed border-cyan-200 bg-cyan-50/40 p-4">
            <p className="text-sm font-medium text-slate-900">{office.address}</p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-500">
              <Clock className="h-3.5 w-3.5" />
              {office.timezone}
            </p>
          </div>
        ) : null}
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="text-lg font-semibold text-slate-900">Reach Us</h3>
        <ul className="mt-4 space-y-3">
          {contactChannels.map((channel) => {
            const Icon = channelIcons[channel.label as keyof typeof channelIcons] ?? Mail;
            return (
              <li key={channel.label}>
                <Link
                  href={channel.href}
                  className="group flex items-center gap-3 rounded-lg p-2 transition hover:bg-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-cyan-600 shadow-sm group-hover:scale-105">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wide text-slate-500">
                      {channel.label}
                    </span>
                    <span className="block text-sm font-semibold text-slate-800 group-hover:text-cyan-700">
                      {channel.value}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
        <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-100 to-cyan-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto h-8 w-8 text-cyan-600" />
              <p className="mt-2 text-sm font-semibold text-slate-700">Lagos · Nairobi · Accra</p>
              <p className="text-xs text-slate-500">Pan-African enterprise support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
