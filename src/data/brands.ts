export interface Brand {
  id: string;
  name: string;
  logo: string;
  category: string;
  origin: string;
  description: string;
  specialty: string[];
}

export const brandsData: Brand[] = [
  // Sheet 1 Row 0
  {
    id: "rheem",
    name: "Rheem",
    logo: "/brands/rheem.png",
    category: "HVAC & Air Conditioning",
    origin: "USA",
    description: "Global manufacturer of high-efficiency DX and VRF air conditioning systems and water heating solutions.",
    specialty: ["DX Air Conditioners", "VRF Systems", "Commercial Chillers"]
  },
  {
    id: "sp",
    name: "Soler & Palau (S&P)",
    logo: "/brands/sp.png",
    category: "Ventilation Systems",
    origin: "Spain",
    description: "World leader in commercial and industrial ventilation, acoustic fans, jet fans, and air movement engineering.",
    specialty: ["Industrial Fans", "Inline Duct Fans", "Car Park Jet Fans"]
  },
  {
    id: "weicco",
    name: "Weicco",
    logo: "/brands/weicco.png",
    category: "Hydronic & Piping",
    origin: "International",
    description: "Specialist in engineered piping accessories, vibration isolators, expansion joints, and flexible connectors.",
    specialty: ["Expansion Joints", "Vibration Isolators", "Pipe Supports"]
  },
  {
    id: "hattersley",
    name: "Hattersley",
    logo: "/brands/hattersley.png",
    category: "Hydronic & Piping",
    origin: "UK",
    description: "Renowned British manufacturer of premium commissioning valves, balancing valves, gate, and globe valves.",
    specialty: ["Commissioning Valves", "Balancing Valves", "Gate Valves"]
  },
  {
    id: "frese",
    name: "Frese",
    logo: "/brands/frese.png",
    category: "Hydronic & Piping",
    origin: "Denmark",
    description: "Leading European developer of pressure independent control valves (PICV) and dynamic balancing solutions.",
    specialty: ["PICV Valves", "Dynamic Balancing", "Actuated Valves"]
  },
  // Sheet 1 Row 1
  {
    id: "clima-uno",
    name: "Clima Uno",
    logo: "/brands/clima-uno.png",
    category: "HVAC & Air Conditioning",
    origin: "Europe / GCC",
    description: "Eurovent-certified air handling units, fan coil units, ecology units, and energy recovery ventilators.",
    specialty: ["Air Handling Units (AHU)", "Fan Coil Units (FCU)", "Ecology Units"]
  },
  {
    id: "mueller-industries",
    name: "Mueller Industries",
    logo: "/brands/mueller-industries.png",
    category: "Hydronic & Piping",
    origin: "USA",
    description: "World-class manufacturer of copper tubes, ACR copper coils, refrigeration fittings, and valves.",
    specialty: ["Copper Coils", "Refrigeration Tube", "Copper Fittings"]
  },
  {
    id: "alpak",
    name: "Alpak",
    logo: "/brands/alpak.png",
    category: "Solar & Water Heating",
    origin: "Greece / Europe",
    description: "High-performance thermosiphonic solar systems, forced circulation solar collectors, and hygienic ultratanks.",
    specialty: ["Thermosiphonic Systems", "Ultratanks", "Solar Collectors"]
  },
  {
    id: "winters",
    name: "Winters Instruments",
    logo: "/brands/winters.png",
    category: "Pumps & Instrumentation",
    origin: "Canada",
    description: "Comprehensive precision industrial pressure gauges, thermowells, and commercial bimetal thermometers.",
    specialty: ["Pressure Gauges", "Industrial Thermometers", "Diaphragm Seals"]
  },
  {
    id: "general-pumps",
    name: "General Pumps Spain",
    logo: "/brands/general-pumps.png",
    category: "Pumps & Instrumentation",
    origin: "Spain",
    description: "Engineered centrifugal water pumps, booster sets, in-line circulators, and sewage drainage pumps.",
    specialty: ["Centrifugal Pumps", "Booster Systems", "Circulator Pumps"]
  },
  // Sheet 1 Row 2
  {
    id: "ayvaz",
    name: "Ayvaz",
    logo: "/brands/ayvaz.png",
    category: "Fire Fighting & Protection",
    origin: "Turkey",
    description: "UL/FM certified fire fighting products, flexible sprinkler connection hoses, and seismic expansion joints.",
    specialty: ["Flexible Sprinkler Drops", "Seismic Joints", "Steam Traps"]
  },
  {
    id: "eurofeu",
    name: "Eurofeu",
    logo: "/brands/eurofeu.png",
    category: "Fire Fighting & Protection",
    origin: "France",
    description: "European certified fire extinguishers, mobile extinguishing units, and commercial life safety products.",
    specialty: ["Portable Extinguishers", "Wheeled Units", "Foam Extinguishers"]
  },
  {
    id: "dogu",
    name: "DOGU Four Seasons",
    logo: "/brands/dogu.png",
    category: "HVAC & Air Conditioning",
    origin: "Turkey",
    description: "Engineered air handling units, dehumidifiers, hygienic units, and fan coil units for harsh desert climates.",
    specialty: ["AHU Four Seasons", "Dehumidifiers", "Fan Coil Units"]
  },
  {
    id: "alfa-laval",
    name: "Alfa Laval",
    logo: "/brands/alfa-laval.png",
    category: "Hydronic & Piping",
    origin: "Sweden",
    description: "Global benchmark in gasketed plate heat exchangers, thermal transfer, and district cooling systems.",
    specialty: ["Plate Heat Exchangers", "District Cooling", "Thermal Storage"]
  },
  {
    id: "tecnair",
    name: "Tecnair (Panasonic)",
    logo: "/brands/tecnair.png",
    category: "HVAC & Air Conditioning",
    origin: "Italy",
    description: "Precision close control units (CCU) designed for data centres, clean rooms, and surgical healthcare rooms.",
    specialty: ["Close Control Units", "Data Centre Cooling", "Surgical AC"]
  },
  // Sheet 2 Row 0
  {
    id: "barcol-air",
    name: "Barcol-Air",
    logo: "/brands/barcol-air.png",
    category: "Ventilation Systems",
    origin: "Switzerland",
    description: "Precision variable air volume (VAV) systems, air terminal units, and intelligent air distribution.",
    specialty: ["VAV Terminal Units", "Air Diffusers", "Chilled Beams"]
  },
  {
    id: "axio-annicom",
    name: "AXIO Annicom",
    logo: "/brands/axio-annicom.png",
    category: "Pumps & Instrumentation",
    origin: "UK",
    description: "BMS environmental controls, carbon monoxide sensors, thermostat controllers, and car park gas panels.",
    specialty: ["CO Sensors", "CO Panels", "Smart Thermostats"]
  },
  {
    id: "landis-gyr",
    name: "Landis+Gyr",
    logo: "/brands/landis-gyr.png",
    category: "Pumps & Instrumentation",
    origin: "Switzerland",
    description: "High-precision ultrasonic BTU meters, heat meters, and smart energy management metering systems.",
    specialty: ["Ultrasonic BTU Meters", "Thermal Heat Meters", "Energy Management"]
  },
  {
    id: "wednesbury",
    name: "Wednesbury (Mueller Europe)",
    logo: "/brands/wednesbury.png",
    category: "Hydronic & Piping",
    origin: "UK",
    description: "Kitemark certified copper tubes, medical gas copper pipelines, and commercial plumbing copper.",
    specialty: ["Copper Plumbing Pipes", "Medical Gas Copper", "Table X / Y Pipes"]
  },
  {
    id: "emerson",
    name: "Emerson Climate Technologies",
    logo: "/brands/emerson.png",
    category: "HVAC & Air Conditioning",
    origin: "USA",
    description: "Copeland scroll compressors, hermetic condensing units, and electronic refrigeration expansion controls.",
    specialty: ["Copeland Compressors", "Scroll Units", "Electronic Valves"]
  },
  // Sheet 2 Row 1
  {
    id: "csa",
    name: "CSA",
    logo: "/brands/csa.png",
    category: "Hydronic & Piping",
    origin: "Italy",
    description: "Direct-acting pressure reducing valves (PRV), anti-slam air release valves, and water expansion tanks.",
    specialty: ["PR Valves", "Air Release Valves", "Surge Anticipator Valves"]
  },
  {
    id: "rbm",
    name: "RBM",
    logo: "/brands/rbm.png",
    category: "Hydronic & Piping",
    origin: "Italy",
    description: "Italian precision plumbing manifolds, pressure reducing valves, magnetic dirt separators, and vents.",
    specialty: ["Pressure Reducing Valves", "Dirt Separators", "Manifolds"]
  },
  {
    id: "mueller",
    name: "Mueller",
    logo: "/brands/mueller.png",
    category: "Hydronic & Piping",
    origin: "USA",
    description: "Municipal and industrial fire hydrants, resilient wedge gate valves, and check valves.",
    specialty: ["Fire Hydrants", "Resilient Wedge Valves", "Indicator Posts"]
  },
  {
    id: "ag-fire",
    name: "AGF Fire Sprinkler",
    logo: "/brands/ag-fire.png",
    category: "Fire Fighting & Protection",
    origin: "USA",
    description: "Specialized fire sprinkler valves, TESTanDRAIN inspector valves, and riser collection manifolds.",
    specialty: ["TESTanDRAIN Valves", "Riser Manifolds", "Sprinkler Flow Switches"]
  },
  {
    id: "strut",
    name: "STRUT Support Systems",
    logo: "/brands/strut.png",
    category: "Hydronic & Piping",
    origin: "International",
    description: "Modular metal framing channels, pipe clamp assemblies, seismic brackets, and cable tray supports.",
    specialty: ["Metal Framing Channels", "Pipe Clamps", "Cantilever Arms"]
  },
  // Sheet 2 Row 2
  {
    id: "patterson",
    name: "Patterson Fire Pumps",
    logo: "/brands/patterson.png",
    category: "Fire Fighting & Protection",
    origin: "USA",
    description: "UL Listed and FM Approved commercial fire pumps, split-case diesel and electric fire skid packages.",
    specialty: ["Horizontal Split Case Pumps", "Diesel Fire Packages", "Jockey Pumps"]
  },
  {
    id: "flotek",
    name: "Flotex / Flotek",
    logo: "/brands/flotek.png",
    category: "Fire Fighting & Protection",
    origin: "International",
    description: "High-grade stainless steel and mild steel fire hose reel cabinets, foam cabinets, and breachings.",
    specialty: ["Fire Hose Cabinets", "Foam Cabinets", "Landing Valve Boxes"]
  },
  {
    id: "lingjack",
    name: "Lingjack Fire & Safety",
    logo: "/brands/lingjack.png",
    category: "Fire Fighting & Protection",
    origin: "Singapore",
    description: "Commercial landing valves, standpipe equipment, breeching inlets, and fire protection accessories.",
    specialty: ["Landing Valves", "Breeching Inlets", "Dry Riser Equipment"]
  },
  {
    id: "siex",
    name: "SIEX Fire Suppression",
    logo: "/brands/siex.png",
    category: "Fire Fighting & Protection",
    origin: "Spain",
    description: "Engineered clean agent total flooding suppression systems (Novec 1230, FM-200, Inergen, and CO2).",
    specialty: ["Clean Agent Suppression", "Novec 1230", "Inert Gas Systems"]
  },
  {
    id: "flowflex",
    name: "Flowflex",
    logo: "/brands/flowflex.png",
    category: "Hydronic & Piping",
    origin: "UK",
    description: "British BS EN 1254 compliant copper capillary and brass compression fittings, isolation valves.",
    specialty: ["Compression Fittings", "Copper Capillary", "Plumbing Isolation Valves"]
  },
  // Sheet 3 Row 0
  {
    id: "ceasefire",
    name: "Ceasefire",
    logo: "/brands/ceasefire.png",
    category: "Fire Fighting & Protection",
    origin: "India / UK",
    description: "Total quality automatic clean agent fire extinguishers, kitchen suppression systems, and alarms.",
    specialty: ["Automatic Modular Extinguishers", "Kitchen Suppression", "Smoke Alarms"]
  },
  {
    id: "newage",
    name: "NewAge Group",
    logo: "/brands/newage.png",
    category: "Fire Fighting & Protection",
    origin: "India / International",
    description: "UL/FM compliant fire delivery hoses, multi-purpose fog nozzles, monitors, and foam equipment.",
    specialty: ["Fire Delivery Hoses", "Branchpipe Nozzles", "Fire Monitors"]
  },
  {
    id: "wilson-cousins",
    name: "Wilson & Cousins",
    logo: "/brands/wilson-cousins.png",
    category: "Fire Fighting & Protection",
    origin: "Canada / USA",
    description: "Interior fire protection equipment, fire department connections (FDC), standpipe valves, and hose racks.",
    specialty: ["FDC Siamese Connections", "Standpipe Valves", "Hose Racks"]
  },
  {
    id: "dewalt",
    name: "DEWALT",
    logo: "/brands/dewalt.png",
    category: "Tools & Industrial Equipment",
    origin: "USA",
    description: "Heavy-duty industrial power tools, cordless rotary hammers, pipe cutters, and MEP anchoring systems.",
    specialty: ["Rotary SDS Hammers", "Cordless Pipe Cutters", "Mechanical Anchors"]
  },
  {
    id: "reliable",
    name: "Reliable",
    logo: "/brands/reliable.png",
    category: "Fire Fighting & Protection",
    origin: "USA",
    description: "Pioneering UL/FM fire sprinkler heads, dry pipe valves, deluge valves, and alarm check assemblies.",
    specialty: ["Fire Sprinkler Heads", "Alarm Check Valves", "Deluge Systems"]
  }
];

export const brandCategories = [
  "All Categories",
  "HVAC & Air Conditioning",
  "Ventilation Systems",
  "Hydronic & Piping",
  "Solar & Water Heating",
  "Pumps & Instrumentation",
  "Fire Fighting & Protection",
  "Tools & Industrial Equipment"
];

