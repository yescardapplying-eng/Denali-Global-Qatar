export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  crNumber: string;
  domain: string;
  email: string;
  phone: string;
  phoneStatus: string;
  address: {
    office: string;
    floor: string;
    building: string;
    street: string;
    zone: string;
    area: string;
    city: string;
    country: string;
    full: string;
  };
  mapsUrl: string;
  mapsEmbedQuery: string;
  serviceDivision: string;
  designer: {
    name: string;
    url: string;
  };
  copyrightYear: number;
}

export const companyData: CompanyInfo = {
  name: "Denali Global Trading and Contracting",
  shortName: "Denali Global",
  tagline: "Engineering Solutions for a Better Tomorrow",
  crNumber: "255619",
  domain: "https://denaliglobalqatar.com",
  email: "info@denaliglobalqatar.com",
  phone: "+974 (Pending Confirmation)",
  phoneStatus: "To be confirmed by client",
  address: {
    office: "Office No. 01/05",
    floor: "First Floor",
    building: "Building No. 20",
    street: "Street No. 854",
    zone: "Zone 27",
    area: "Umm Ghuwailina Area",
    city: "Doha",
    country: "Qatar",
    full: "Office No. 01/05, First Floor, Building No. 20, Street No. 854, Zone 27, Umm Ghuwailina Area, Doha, Qatar"
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Building+No.+20+Street+No.+854+Zone+27+Umm+Ghuwailina+Doha+Qatar",
  mapsEmbedQuery: "Building 20, Street 854, Zone 27, Umm Ghuwailina, Doha, Qatar",
  serviceDivision: "DENALI TECHNICAL SERVICES",
  designer: {
    name: "Norweb",
    url: "https://norweb.in"
  },
  copyrightYear: 2026
};
