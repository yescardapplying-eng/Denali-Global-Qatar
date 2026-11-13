export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  projectType: string;
  isPlaceholder: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Client Partner (Commercial Project)",
    role: "Senior MEP Project Manager",
    company: "Tier-1 Contracting Partner, Qatar",
    text: "Denali Global demonstrated exceptional engineering support throughout the procurement and installation phases. The technical submittals for the AHUs and hydronic balancing valves met consultant specifications without revision.",
    rating: 5,
    projectType: "Commercial High-Rise Development",
    isPlaceholder: true
  },
  {
    id: "test-2",
    name: "Engineering Consultant",
    role: "Principal HVAC Design Engineer",
    company: "International MEP Consultancy, Doha",
    text: "The technical coordination and acoustic performance data provided for the car park jet fan package were exemplary. Reliable documentation and prompt delivery schedules make them a valued supply partner.",
    rating: 5,
    projectType: "Underground Infrastructure & Transit Hub",
    isPlaceholder: true
  },
  {
    id: "test-3",
    name: "Facility Operations Director",
    role: "Head of Facility Engineering",
    company: "Hospitality & Resort Group, Doha",
    text: "Denali Technical Services manages our chiller plant AMC with precision. Their scheduled preventive maintenance and immediate response times ensure zero unexpected equipment downtime during peak summer operations.",
    rating: 5,
    projectType: "Luxury Hotel & Resort Complex",
    isPlaceholder: true
  },
  {
    id: "test-4",
    name: "Lead Commissioning Agent",
    role: "Senior TAB Specialist",
    company: "Building Commissioning Consultancy, Qatar",
    text: "The testing, adjusting, and balancing team completed comprehensive air and water balancing reports in strict accordance with international standards. All calibration logs were thoroughly verified and approved.",
    rating: 5,
    projectType: "Healthcare & Research Facility",
    isPlaceholder: true
  },
  {
    id: "test-5",
    name: "Procurement Lead",
    role: "Contracts & Sourcing Manager",
    company: "Industrial Construction Consortium, Qatar",
    text: "Sourcing certified fire fighting pumps, UL-listed sprinkler assemblies, and BS EN copper tubes under one roof streamlined our procurement workflow significantly. Highly professional B2B service.",
    rating: 5,
    projectType: "Industrial Logistics & Warehouse Park",
    isPlaceholder: true
  },
  {
    id: "test-6",
    name: "Site Operations Manager",
    role: "Building Operations Manager",
    company: "Corporate Commercial Tower, Lusail",
    text: "When our chiller coils required urgent replacement, Denali engineered and executed the replacement within the promised timeframe, avoiding costly disruption to tenant comfort.",
    rating: 5,
    projectType: "Corporate Headquarters Complex",
    isPlaceholder: true
  }
];
