export interface SolutionCard {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  link: string;
  features: string[];
  keyBrands: string[];
}

export const solutionsData: SolutionCard[] = [
  {
    id: "hvac-solutions",
    title: "HVAC Solutions",
    category: "Climate & Air Conditioning",
    shortDescription: "Integrated commercial and industrial air conditioning systems engineered for extreme Middle Eastern ambient temperatures.",
    fullDescription: "Denali Global supplies and supports engineered air conditioning systems including VRF systems, ducted splits, air handling units (AHU), fan coil units (FCU), and close control units for precision data cooling.",
    image: "/services/solution-hvac.jpg",
    iconName: "ThermometerSnowflake",
    link: "/services#hvac",
    features: ["Variable Refrigerant Flow (VRF)", "Eurovent Certified AHUs", "Cleanroom Close Control", "High-Ambient Compressors"],
    keyBrands: ["Rheem", "Clima Uno", "DOGU", "Tecnair", "Emerson"]
  },
  {
    id: "mep-solutions",
    title: "MEP Solutions",
    category: "Mechanical, Electrical & Plumbing",
    shortDescription: "Comprehensive mechanical and electrical engineering products facilitating seamless building infrastructure integration.",
    fullDescription: "We partner with leading MEP consultants and contractors across Qatar to provide fully coordinated mechanical, piping, and building control packages meeting stringent Kahramaa and civil defense standards.",
    image: "/services/solution-mep.jpg",
    iconName: "Cpu",
    link: "/services#mep",
    features: ["Coordinated Engineering Packages", "BMS Sensors & Controls", "Modular Metal Framing", "Civil Defense Approved"],
    keyBrands: ["STRUT", "Landis+Gyr", "AXIO Annicom", "Weicco"]
  },
  {
    id: "ventilation-systems",
    title: "Ventilation Systems",
    category: "Air Movement & Smoke Evacuation",
    shortDescription: "High-efficiency commercial, industrial, and car park jet ventilation systems engineered for clean air quality.",
    fullDescription: "From acoustic sound-attenuated inline duct fans to high-thrust car park impulse jet fans and smoke evacuation equipment designed to endure 400°C for 2 hours during emergency scenarios.",
    image: "/services/solution-ventilation.jpg",
    iconName: "Wind",
    link: "/services#ventilation",
    features: ["Car Park Jet Fans", "Smoke Spill 400°C/2h Rated", "Acoustic Inline Blowers", "VAV Air Terminal Units"],
    keyBrands: ["Soler & Palau (S&P)", "Barcol-Air"]
  },
  {
    id: "hydronic-solutions",
    title: "Hydronic Solutions",
    category: "Chilled Water & Hydronic Balancing",
    shortDescription: "Precision pressure independent control valves, balancing valves, flexible connectors, and plate heat exchangers.",
    fullDescription: "Ensuring optimal thermal delta-T and hydraulic balance across chilled water networks in district cooling plants, commercial towers, and industrial facilities.",
    image: "/services/solution-hydronic.jpg",
    iconName: "Droplets",
    link: "/services#hydronic",
    features: ["Dynamic PICV Valves", "Gasketed Plate Heat Exchangers", "Expansion Joints & Couplings", "Commissioning Valves"],
    keyBrands: ["Frese", "Hattersley", "Alfa Laval", "Weicco", "RBM"]
  },
  {
    id: "plumbing-solutions",
    title: "Plumbing Solutions",
    category: "Water Supply & Piping Networks",
    shortDescription: "High-specification copper piping, compression fittings, pressure reducing stations, and expansion vessels.",
    fullDescription: "Engineered water distribution packages featuring BS EN certified medical gas and domestic copper tubes, brass capillary fittings, and calibrated pressure regulating valves for multi-storey risers.",
    image: "/services/solution-plumbing.jpg",
    iconName: "Pipette",
    link: "/services#plumbing",
    features: ["BS EN 1057 Kitemark Copper", "Precision Brass Fittings", "Direct-Acting PR Valves", "Hygienic Storage Tanks"],
    keyBrands: ["Mueller Industries", "Wednesbury", "Flowflex", "CSA", "Alpak"]
  },
  {
    id: "fire-protection",
    title: "Fire Protection",
    category: "Life Safety & Fire Suppression",
    shortDescription: "Certified UL/FM fire sprinkler heads, deluge valves, Patterson fire pumps, and clean agent gas flooding systems.",
    fullDescription: "Complete life safety solutions approved by Qatar Civil Defense, including automated fire suppression, hose reels, Siamese FDC breeching inlets, and landing valves for critical infrastructure.",
    image: "/services/solution-fire.jpg",
    iconName: "Flame",
    link: "/services#fire",
    features: ["UL Listed / FM Approved", "Packaged Fire Pump Skids", "Clean Agent Suppression", "Sprinkler & Alarm Valves"],
    keyBrands: ["Reliable", "Patterson", "NewAge", "Eurofeu", "SIEX", "Ayvaz"]
  },
  {
    id: "engineering-products",
    title: "Engineering Products",
    category: "Instrumentation & Structural Supports",
    shortDescription: "Digital BTU energy meters, industrial dial pressure gauges, vibration isolation, and modular channel framing.",
    fullDescription: "Precision monitoring and structural support infrastructure engineered to safeguard equipment integrity and measure thermal consumption accurately.",
    image: "/services/solution-engineering.jpg",
    iconName: "Gauge",
    link: "/services#engineering",
    features: ["Ultrasonic BTU Metering", "Stainless Pressure Gauges", "Spring Vibration Isolators", "Seismic Strut Framing"],
    keyBrands: ["Winters Instruments", "Landis+Gyr", "AXIO Annicom", "STRUT", "DEWALT"]
  },
  {
    id: "technical-services",
    title: "Technical Services",
    category: "Commissioning & Maintenance",
    shortDescription: "Specialized engineering division delivering AMC contracts, equipment replacement, retrofits, and NEBB-aligned TAB services.",
    fullDescription: "Operating under Denali Technical Services, our dedicated mobile engineering force ensures building performance beyond installation through preventive maintenance, chiller replacement, and precision airflow/water balancing.",
    image: "/services/solution-technical.jpg",
    iconName: "Wrench",
    link: "/technical-services",
    features: ["24/7 AMC Preventive Maintenance", "Chiller & AHU Replacement", "Energy Retrofit Upgrades", "Testing, Adjusting & Balancing (TAB)"],
    keyBrands: ["Denali Technical Services"]
  }
];

