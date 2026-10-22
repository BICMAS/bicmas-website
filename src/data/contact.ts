export type OfficeLocation = {
  id: string;
  city: string;
  country: string;
  address: string;
  timezone: string;
};

export const officeLocations: OfficeLocation[] = [
  {
    id: "lagos",
    city: "Lagos",
    country: "Nigeria",
    address: "12 Admiralty Way, Lekki Phase 1",
    timezone: "WAT (UTC+1)"
  },
  {
    id: "nairobi",
    city: "Nairobi",
    country: "Kenya",
    address: "Westlands Business Park",
    timezone: "EAT (UTC+3)"
  },
  {
    id: "accra",
    city: "Accra",
    country: "Ghana",
    address: "Airport City, Accra",
    timezone: "GMT (UTC+0)"
  }
];

export const contactChannels = [
  { label: "Email", value: "hello@bicmasinstitute.com", href: "mailto:hello@bicmasinstitute.com" },
  { label: "Phone", value: "+234 700 000 0000", href: "tel:+2347000000000" },
  { label: "Website", value: "www.bicmasinstitute.com", href: "https://bicmasinstitute.com" }
];

export const inquiryTypes = [
  "Book a Demo",
  "Enterprise LMS Enquiry",
  "Workforce Readiness Consultation",
  "Partnership Opportunity"
] as const;
