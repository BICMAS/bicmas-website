"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { inquiryTypes } from "@/data/contact";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  workEmail: z.string().email("Enter a valid work email"),
  organization: z.string().min(2, "Organization is required"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(20, "Please provide at least 20 characters")
});

type ContactInput = z.infer<typeof contactSchema>;

const inputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { inquiryType: inquiryTypes[0] }
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50/50 p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-emerald-600" />
        <h3 className="mt-5 text-xl font-semibold text-slate-900">Thank you — we&apos;ve received your request</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-600">
          A member of our team will respond within one business day to schedule your consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
      <h2 className="text-lg font-semibold text-slate-900">Send us a message</h2>
      <p className="mt-1 text-sm text-slate-500">Tell us about your workforce learning goals and we&apos;ll be in touch.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Full Name
          <input {...register("fullName")} placeholder="Ada Nwoke" className={inputClass} />
          {errors.fullName ? <span className="mt-1 block text-xs text-rose-600">{errors.fullName.message}</span> : null}
        </label>
        <label className="text-sm font-medium text-slate-700">
          Work Email
          <input {...register("workEmail")} type="email" placeholder="you@company.com" className={inputClass} />
          {errors.workEmail ? <span className="mt-1 block text-xs text-rose-600">{errors.workEmail.message}</span> : null}
        </label>
      </div>

      <label className="mt-4 block text-sm font-medium text-slate-700">
        Organization
        <input {...register("organization")} placeholder="Your company name" className={inputClass} />
        {errors.organization ? (
          <span className="mt-1 block text-xs text-rose-600">{errors.organization.message}</span>
        ) : null}
      </label>

      <label className="mt-4 block text-sm font-medium text-slate-700">
        Inquiry Type
        <select {...register("inquiryType")} className={inputClass}>
          {inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.inquiryType ? (
          <span className="mt-1 block text-xs text-rose-600">{errors.inquiryType.message}</span>
        ) : null}
      </label>

      <label className="mt-4 block text-sm font-medium text-slate-700">
        How can we support your learning goals?
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Share your workforce challenges, team size, regions, and timeline..."
          className={`${inputClass} resize-y`}
        />
        {errors.message ? <span className="mt-1 block text-xs text-rose-600">{errors.message.message}</span> : null}
      </label>

      <button type="submit" disabled={isSubmitting} className="btn-primary mt-6 w-full justify-center sm:w-auto">
        {isSubmitting ? "Submitting..." : "Book a Demo Consultation"}
        {!isSubmitting ? <ArrowRight className="h-4 w-4" /> : null}
      </button>
    </form>
  );
}
