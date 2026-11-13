export interface Product {
  id: string;
  name: string;
  category: string;
  brandId: string;
  brandName: string;
  brandLogo: string;
  image: string;
  shortDescription: string;
  specifications: { [key: string]: string };
  applications: string[];
  featured?: boolean;
}

export const productsData: Product[] = [
  // A. HVAC & AIR CONDITIONING
  {
    id: "rheem-dx-ac",
    name: "Commercial DX Air Conditioners",
    category: "HVAC & Air Conditioning",
    brandId: "rheem",
    brandName: "Rheem",
    brandLogo: "/brands/rheem.png",
    image: "/products/rheem-dx.svg",
    shortDescription: "High-efficiency commercial direct expansion (DX) rooftop packages and ducted split systems engineered for high-ambient desert environments up to 52°C.",
    specifications: {
      "Cooling Capacity": "5.0 to 30.0 TR",
      "Refrigerant": "R-410A Eco-Friendly",
      "Compressor Type": "High-Efficiency Copeland Scroll",
      "Ambient Rating": "Tested up to 52°C Ambient"
    },
    applications: ["Commercial Offices", "Retail Centers", "Educational Institutions"],
    featured: true
  },
  {
    id: "rheem-vrf-system",
    name: "Commercial VRF Systems",
    category: "HVAC & Air Conditioning",
    brandId: "rheem",
    brandName: "Rheem",
    brandLogo: "/brands/rheem.png",
    image: "/products/rheem-vrf.svg",
    shortDescription: "Variable Refrigerant Flow (VRF) outdoor condenser units delivering simultaneous cooling and heating with intelligent inverter technology.",
    specifications: {
      "System Modules": "Up to 96 HP Combined",
      "Inverter Tech": "DC Inverter Twin Rotary / Scroll",
      "Piping Length": "Up to 1000m Total Equivalent",
      "Energy Rating": "High EER / IEER Compliance"
    },
    applications: ["Luxury Hotels", "Corporate Towers", "Residential Complexes"],
    featured: true
  },
  {
    id: "clima-uno-ahu",
    name: "Eurovent Air Handling Units (AHU)",
    category: "HVAC & Air Conditioning",
    brandId: "clima-uno",
    brandName: "Clima Uno",
    brandLogo: "/brands/clima-uno.png",
    image: "/products/clima-uno-ahu.svg",
    shortDescription: "Eurovent-certified double-skin AHUs with thermal break profiles, plug fans, and high-efficiency chilled water cooling coils.",
    specifications: {
      "Airflow Range": "1,000 to 100,000 m³/h",
      "Casing Construction": "50mm Thermal Break Panel",
      "Leakage Class": "Casing Air Leakage Class L1 / D1",
      "Certification": "Eurovent Certified"
    },
    applications: ["Hospitals", "Data Centers", "Shopping Malls", "Airports"],
    featured: true
  },
  {
    id: "clima-uno-fcu",
    name: "Fan Coil Units (FCU)",
    category: "HVAC & Air Conditioning",
    brandId: "clima-uno",
    brandName: "Clima Uno",
    brandLogo: "/brands/clima-uno.png",
    image: "/products/clima-uno-fcu.svg",
    shortDescription: "Concealed ducted and cassette chilled water fan coil units designed for ultra-low noise operation and versatile static pressure.",
    specifications: {
      "Airflow Range": "200 to 3,000 CFM",
      "Motor Type": "Energy-Saving EC Motor / 3-Speed AC",
      "Static Pressure": "Up to 150 Pa External Static",
      "Configuration": "2-Pipe / 4-Pipe System"
    },
    applications: ["Hotels", "Residential Towers", "Commercial Offices"]
  },
  {
    id: "clima-uno-ecology",
    name: "Commercial Kitchen Ecology Units",
    category: "HVAC & Air Conditioning",
    brandId: "clima-uno",
    brandName: "Clima Uno",
    brandLogo: "/brands/clima-uno.png",
    image: "/products/clima-uno-ecology.svg",
    shortDescription: "Multi-stage kitchen exhaust filtration units featuring electrostatic precipitators (ESP), UV-C ozone treatment, and carbon filters.",
    specifications: {
      "Filtration Stages": "Pre-filter + ESP + UV-C + Activated Carbon",
      "Efficiency": "Up to 98% Smoke & Grease Removal",
      "Odor Control": "High Adsorption Carbon Panels",
      "Compliance": "Civil Defense & Municipality Standards"
    },
    applications: ["Commercial Kitchens", "Hotel Restaurants", "Food Courts"]
  },
  {
    id: "clima-uno-erv",
    name: "Energy Recovery Ventilators (ERV)",
    category: "HVAC & Air Conditioning",
    brandId: "clima-uno",
    brandName: "Clima Uno",
    brandLogo: "/brands/clima-uno.png",
    image: "/products/clima-uno-erv.svg",
    shortDescription: "Total heat recovery fresh air units transferring both sensible and latent heat between exhaust and supply air streams.",
    specifications: {
      "Recovery Core": "Enthalpy Plate Heat Exchanger",
      "Thermal Efficiency": "Up to 75% Total Enthalpy Transfer",
      "Airflow Range": "500 to 15,000 m³/h",
      "Filtration": "ePM1 70% (F7) High-Grade Filter"
    },
    applications: ["Commercial Buildings", "Schools", "Health Facilities"]
  },
  {
    id: "dogu-ahu",
    name: "Modular Air Handling Units",
    category: "HVAC & Air Conditioning",
    brandId: "dogu",
    brandName: "DOGU Four Seasons",
    brandLogo: "/brands/dogu.png",
    image: "/products/dogu-ahu.svg",
    shortDescription: "Rugged modular air handling units tailored for Middle East climatic conditions with hygienic internal surfaces.",
    specifications: {
      "Profile Framework": "Extruded Aluminum with Thermal Break",
      "Panel Insulation": "60 kg/m³ Rockwool / Polyurethane",
      "Fan Types": "Direct Drive Backward Curved Plug Fans",
      "Standards": "EN 1886 Compliant"
    },
    applications: ["Industrial Plants", "Commercial Complexes", "Exhibition Centers"]
  },
  {
    id: "dogu-dehumidifier",
    name: "Industrial Dehumidifiers",
    category: "HVAC & Air Conditioning",
    brandId: "dogu",
    brandName: "DOGU Four Seasons",
    brandLogo: "/brands/dogu.png",
    image: "/products/dogu-dehumidifier.svg",
    shortDescription: "Rotary desiccant and mechanical condensation dehumidification systems for humidity-controlled storage and swimming pools.",
    specifications: {
      "Desiccant Rotor": "High-Efficiency Silica Gel Rotor",
      "Moisture Removal": "Up to 250 kg/h Extraction Rate",
      "Control Precision": "Relative Humidity Control ±2%",
      "Operating Range": "-20°C to +40°C Process Air"
    },
    applications: ["Indoor Pools", "Pharmaceutical Storage", "Cold Stores"]
  },
  {
    id: "tecnair-ccu",
    name: "Precision Close Control Units (CCU)",
    category: "HVAC & Air Conditioning",
    brandId: "tecnair",
    brandName: "Tecnair (Panasonic)",
    brandLogo: "/brands/tecnair.png",
    image: "/products/tecnair-ccu.svg",
    shortDescription: "Mission-critical perimeter cooling units engineered for data centers, telecommunication exchanges, and surgical operating suites.",
    specifications: {
      "Sensible Heat Ratio": "SHR > 0.95 to 1.0",
      "Air Delivery": "Downflow / Upflow Underfloor Plenum",
      "Electronic Expansion": "Precision Stepper Motor EEV",
      "BMS Interface": "Modbus, BACnet, SNMP Protocols"
    },
    applications: ["Data Centers", "Server Rooms", "Operating Theatres", "Laboratories"],
    featured: true
  },
  {
    id: "emerson-compressor",
    name: "Copeland Scroll Compressors",
    category: "HVAC & Air Conditioning",
    brandId: "emerson",
    brandName: "Emerson Climate Technologies",
    brandLogo: "/brands/emerson.png",
    image: "/products/emerson-compressor.svg",
    shortDescription: "Industry-standard Copeland compliant scroll compressors with CoreSense diagnostic electronics for commercial HVAC & refrigeration.",
    specifications: {
      "Displacement Range": "2.0 to 40.0 HP",
      "Refrigerant Compatibility": "R-410A, R-407C, R-134a, R-32",
      "Protection": "Integrated CoreSense Electronics",
      "Efficiency": "High Seasonal SEER Performance"
    },
    applications: ["Chillers", "Rooftop Units", "Process Refrigeration"]
  },
  {
    id: "barcol-air-vav",
    name: "Variable Air Volume (VAV) Units",
    category: "HVAC & Air Conditioning",
    brandId: "barcol-air",
    brandName: "Barcol-Air",
    brandLogo: "/brands/barcol-air.png",
    image: "/products/barcol-air-vav.svg",
    shortDescription: "Single-duct, dual-duct, and fan-powered VAV terminal units with electronic airflow sensor rings for zoned thermal comfort.",
    specifications: {
      "Airflow Capacity": "100 to 7,500 m³/h",
      "Acoustic Insulation": "Internal Fiber-Free Engineered Lining",
      "Casing Leakage": "Class II Tightness (EN 1751)",
      "Actuator Interface": "DDC Analog / BACnet MS/TP"
    },
    applications: ["Corporate High-Rises", "Multi-Tenant Offices", "Educational Facilities"]
  },

  // B. VENTILATION
  {
    id: "sp-ventilation",
    name: "Industrial & Commercial Ventilation Fans",
    category: "Ventilation Systems",
    brandId: "sp",
    brandName: "Soler & Palau (S&P)",
    brandLogo: "/brands/sp.png",
    image: "/products/sp-ventilation.svg",
    shortDescription: "Acoustically insulated inline centrifugal duct fans, roof extractors, and smoke extract fans certified for F400 (400°C/2h).",
    specifications: {
      "Smoke Rating": "F400 (400°C for 120 minutes) EN 12101-3",
      "Impeller Type": "High-Efficiency Backward Curved Centrifugal",
      "Acoustics": "Integrated Double-Wall Sound Baffles",
      "Motor Ingress": "IP55 / Class H Insulation"
    },
    applications: ["Smoke Extraction", "Car Parks", "Industrial Warehouses"],
    featured: true
  },
  {
    id: "sp-jet-fans",
    name: "Car Park Impulse Jet Fans",
    category: "Ventilation Systems",
    brandId: "sp",
    brandName: "Soler & Palau (S&P)",
    brandLogo: "/brands/sp.png",
    image: "/products/sp-jet-fans.svg",
    shortDescription: "Low-profile reversible induction and axial impulse jet fans for underground parking carbon monoxide and smoke management.",
    specifications: {
      "Thrust Output": "20 N to 100 N Thrust Force",
      "Smoke Rating": "F300 / F400 Certified",
      "Profile Height": "Ultra-Low Profile Down to 320mm",
      "Silencing": "Built-in Circular Attenuators"
    },
    applications: ["Underground Car Parks", "Tunnel Ventilation", "Loading Docks"]
  },

  // C. HYDRONIC AND PIPING
  {
    id: "weicco-expansion-joint",
    name: "Expansion Joints & Flexible Connectors",
    category: "Hydronic & Piping",
    brandId: "weicco",
    brandName: "Weicco",
    brandLogo: "/brands/weicco.png",
    image: "/products/weicco-expansion.svg",
    shortDescription: "Stainless steel braided pump connectors, metallic bellows expansion joints, and rubber spool joints for thermal compensation.",
    specifications: {
      "Nominal Diameter": "DN15 to DN1200",
      "Pressure Rating": "PN10, PN16, PN25, PN40",
      "Bellows Material": "AISI 304 / 316 Stainless Steel",
      "End Connections": "Flanged BS EN 1092 / ANSI B16.5"
    },
    applications: ["Chilled Water Risers", "Pumping Stations", "District Cooling"]
  },
  {
    id: "weicco-vibration-isolator",
    name: "Vibration Isolators & Pipe Supports",
    category: "Hydronic & Piping",
    brandId: "weicco",
    brandName: "Weicco",
    brandLogo: "/brands/weicco.png",
    image: "/products/weicco-vibration.svg",
    shortDescription: "Enclosed spring mounts, neoprene waffle pads, and seismic restrained vibration isolators for mechanical equipment.",
    specifications: {
      "Static Deflection": "25mm, 50mm, 75mm Deflection",
      "Load Capacity": "Up to 5,000 kg per Isolator Mount",
      "Seismic Rating": "Seismic Restraint IBC Compliant",
      "Spring Coating": "Powder-Coated Anti-Corrosive Finish"
    },
    applications: ["Chillers", "Cooling Towers", "Air Handling Units", "Pumps"]
  },
  {
    id: "hattersley-valves",
    name: "Commissioning & Balancing Valves",
    category: "Hydronic & Piping",
    brandId: "hattersley",
    brandName: "Hattersley",
    brandLogo: "/brands/hattersley.png",
    image: "/products/hattersley-valves.svg",
    shortDescription: "British engineered double-regulating balancing valves, variable orifice commissioning sets, and cast bronze gate/globe valves.",
    specifications: {
      "Size Range": "DN15 to DN300 (1/2\" to 12\")",
      "Pressure Class": "PN16 / PN25 Rating",
      "Body Material": "Ductile Iron / Bronze / DZR Brass",
      "Measurement": "Built-in P84 Pressure Test Points"
    },
    applications: ["Chilled Water Loops", "HVAC Riser Balancing", "Heating Networks"]
  },
  {
    id: "frese-picv",
    name: "Pressure Independent Control Valves (PICV)",
    category: "Hydronic & Piping",
    brandId: "frese",
    brandName: "Frese",
    brandLogo: "/brands/frese.png",
    image: "/products/frese-picv.svg",
    shortDescription: "Dynamic PICV balancing valves combining automatic differential pressure control, flow limiting, and BMS modulation in one body.",
    specifications: {
      "Size Range": "DN15 to DN150",
      "Max Differential": "Up to 800 kPa Differential Pressure",
      "Control Valve Authority": "100% Valve Authority",
      "Actuation": "0-10V Modulating / 3-Point Floating"
    },
    applications: ["AHU Coils", "FCU Terminals", "District Cooling Substations"],
    featured: true
  },
  {
    id: "alfa-laval-heat-exchangers",
    name: "Gasketed Plate Heat Exchangers",
    category: "Hydronic & Piping",
    brandId: "alfa-laval",
    brandName: "Alfa Laval",
    brandLogo: "/brands/alfa-laval.png",
    image: "/products/alfa-laval-phex.svg",
    shortDescription: "World-class gasketed plate heat exchangers delivering high thermal efficiency for district cooling energy transfer stations (ETS).",
    specifications: {
      "Design Pressure": "Up to 25 / 30 bar Design Rating",
      "Plate Materials": "AISI 316 Stainless Steel / Titanium",
      "Gasket Type": "NBR Clip-on / EPDM Industrial Gaskets",
      "Certification": "AHRI Certified Performance"
    },
    applications: ["District Cooling ETS", "Pressure Breaker Systems", "Thermal Energy Storage"],
    featured: true
  },
  {
    id: "mueller-copper",
    name: "Copper Coils, Pipes & ACR Fittings",
    category: "Hydronic & Piping",
    brandId: "mueller-industries",
    brandName: "Mueller Industries",
    brandLogo: "/brands/mueller-industries.png",
    image: "/products/mueller-copper.svg",
    shortDescription: "ASTM B280 seamless refrigeration copper coils, nitrogen-purged ACR copper tubes, and wrought copper solder joint fittings.",
    specifications: {
      "Standard": "ASTM B280 / ASTM B88 Seamless Copper",
      "Cleanliness": "Nitrogen-Purged and Capped Ends",
      "Wall Thickness": "Type K / L / ACR Heavy Gauge",
      "Working Pressure": "Suitable for R-410A High Pressure"
    },
    applications: ["VRF Piping", "Refrigeration Systems", "Medical Gas Distribution"]
  },
  {
    id: "wednesbury-pipes",
    name: "BS EN 1057 Copper Pipes & Fittings",
    category: "Hydronic & Piping",
    brandId: "wednesbury",
    brandName: "Wednesbury (Mueller Europe)",
    brandLogo: "/brands/wednesbury.png",
    image: "/products/wednesbury-pipes.svg",
    shortDescription: "British Kitemark approved copper tubing manufactured to BS EN 1057 Table X and Table Y specifications for domestic and medical piping.",
    specifications: {
      "Standards": "BS EN 1057 / BS 2871",
      "Certification": "BSI Kitemark KM06622",
      "Temper": "Hard Drawn / Half Hard / Annealed",
      "Applications": "Potable Water, Sanitation, Medical Gas"
    },
    applications: ["Potable Water Riser", "Medical Gas Pipelines", "Plumbing Networks"]
  },
  {
    id: "flowflex-fittings",
    name: "Copper Capillary & Compression Fittings",
    category: "Hydronic & Piping",
    brandId: "flowflex",
    brandName: "Flowflex",
    brandLogo: "/brands/flowflex.png",
    image: "/products/flowflex-fittings.svg",
    shortDescription: "Precision UK manufactured brass compression fittings, end-feed copper fittings, and full-bore plumbing isolation valves.",
    specifications: {
      "Standard": "BS EN 1254-2 Compression Fittings",
      "Pressure Rating": "16 bar at 30°C / 5 bar at 120°C",
      "Material": "CW617N Dezincification Resistant Brass",
      "Approvals": "WRAS Approved for Drinking Water"
    },
    applications: ["Commercial Plumbing", "Chilled Water Risers", "Sanitary Installations"]
  },
  {
    id: "csa-prv-valves",
    name: "Direct-Acting Pressure Reducing Valves",
    category: "Hydronic & Piping",
    brandId: "csa",
    brandName: "CSA",
    brandLogo: "/brands/csa.png",
    image: "/products/csa-prv.svg",
    shortDescription: "Direct-acting water pressure reducing valves and anti-slam air release valves designed to stabilize high-rise plumbing pressures.",
    specifications: {
      "Inlet Pressure": "Up to 25 bar Inflow Pressure",
      "Outlet Range": "Adjustable 1.5 to 6.0 bar",
      "Diaphragm": "Reinforced EPDM Membrane",
      "Cavitation": "Anti-Cavitation Stainless Cartridge"
    },
    applications: ["High-Rise Water Distribution", "Plumbing Risers", "Municipal Networks"]
  },
  {
    id: "rbm-prv",
    name: "Precision Pressure Reducing Valves",
    category: "Hydronic & Piping",
    brandId: "rbm",
    brandName: "RBM",
    brandLogo: "/brands/rbm.png",
    image: "/products/rbm-prv.svg",
    shortDescription: "Italian engineered piston-type and diaphragm pressure regulating valves with integrated stainless steel filter screens.",
    specifications: {
      "Size Range": "1/2\" to 2\" Threaded BSP",
      "Max Inlet Pressure": "25 bar",
      "Pressure Gauge Port": "1/4\" Dial Port Included",
      "Temperature Limit": "Max 80°C Fluid Temperature"
    },
    applications: ["Domestic Water Supply", "Commercial Boilers", "Sub-Metering Manifolds"]
  },
  {
    id: "mueller-hydrants",
    name: "Resilient Wedge Gate Valves & Hydrants",
    category: "Hydronic & Piping",
    brandId: "mueller",
    brandName: "Mueller",
    brandLogo: "/brands/mueller.png",
    image: "/products/mueller-hydrant.svg",
    shortDescription: "Heavy-duty AWWA C509/C515 resilient wedge gate valves, indicator posts, and dry barrel municipal fire hydrants.",
    specifications: {
      "Pressure Rating": "250 psi / 350 psi Working Pressure",
      "Coating": "Electrostatically Applied Fusion Epoxy",
      "Stem Type": "OS&Y (Outside Screw & Yoke) / Non-Rising",
      "Certifications": "UL Listed / FM Approved"
    },
    applications: ["Fire Water Mains", "Municipal Infrastructure", "Underground Piping"]
  },
  {
    id: "strut-support-systems",
    name: "Modular Metal Framing & Strut Systems",
    category: "Hydronic & Piping",
    brandId: "strut",
    brandName: "STRUT Support Systems",
    brandLogo: "/brands/strut.png",
    image: "/products/strut-framing.svg",
    shortDescription: "Slotted and plain cold-rolled metal framing channels, pipe clamps, cantilever brackets, and seismic bracing accessories.",
    specifications: {
      "Channel Profile": "41x41mm / 41x21mm Unistrut Compatible",
      "Finishes": "Hot-Dip Galvanized / Pre-Galv / Stainless",
      "Gauge Thickness": "2.5mm / 2.0mm Heavy Structural Gauge",
      "Compliance": "BS 6946 Metal Channel Standards"
    },
    applications: ["Pipe Racks", "Cable Trays", "Ductwork Trapeze", "HVAC Supports"]
  },

  // D. SOLAR AND WATER HEATING
  {
    id: "alpak-solar-systems",
    name: "Thermosiphonic & Forced Solar Systems",
    category: "Solar & Water Heating",
    brandId: "alpak",
    brandName: "Alpak",
    brandLogo: "/brands/alpak.png",
    image: "/products/alpak-solar.svg",
    shortDescription: "European engineered thermosiphonic solar hot water systems and high-capacity ultratanks with selective blue solar absorbers.",
    specifications: {
      "Tank Volume": "150L to 500L Storage Capacities",
      "Solar Absorber": "Titanium PVD Selective Coating (95% Absorptivity)",
      "Tank Material": "Enamelled Steel with Double Glass Lining",
      "Efficiency": "Solar Keymark EN 12976 Certified"
    },
    applications: ["Residential Villas", "Hotels", "Staff Accommodation", "Commercial Laundry"]
  },

  // E. PUMPS AND INSTRUMENTATION
  {
    id: "general-pumps-centrifugal",
    name: "Commercial Centrifugal Water Pumps",
    category: "Pumps & Instrumentation",
    brandId: "general-pumps",
    brandName: "General Pumps Spain",
    brandLogo: "/brands/general-pumps.png",
    image: "/products/general-pumps.svg",
    shortDescription: "Spanish end-suction, in-line circulator, and vertical multistage centrifugal pumps for chilled water and domestic booster packages.",
    specifications: {
      "Flow Range": "Up to 1,200 m³/h Flow Rate",
      "Head Range": "Up to 160 meters Head Pressure",
      "Impeller Material": "AISI 316 Stainless Steel / Bronze",
      "Motor Efficiency": "IE3 Premium High Efficiency Motors"
    },
    applications: ["Chilled Water Circulation", "Pressure Boosting", "Irrigation"],
    featured: true
  },
  {
    id: "winters-pressure-gauges",
    name: "Industrial Pressure Gauges & Thermometers",
    category: "Pumps & Instrumentation",
    brandId: "winters",
    brandName: "Winters Instruments",
    brandLogo: "/brands/winters.png",
    image: "/products/winters-gauge.svg",
    shortDescription: "All-stainless steel liquid-filled pressure gauges, bimetal dial thermometers, and brass thermowells for HVAC and industrial piping.",
    specifications: {
      "Dial Sizes": "63mm (2.5\"), 100mm (4\"), 150mm (6\")",
      "Accuracy": "ASME B40.100 Grade 1A (±1.0% FS)",
      "Case Material": "AISI 304 / 316 Stainless Steel Hermetic",
      "Filling Liquid": "Glycerin / Silicone Filled Dampened"
    },
    applications: ["Plant Rooms", "Boiler Headers", "Pump Discharges", "HVAC Risers"]
  },
  {
    id: "landis-gyr-btu",
    name: "Ultrasonic BTU Energy Meters",
    category: "Pumps & Instrumentation",
    brandId: "landis-gyr",
    brandName: "Landis+Gyr",
    brandLogo: "/brands/landis-gyr.png",
    image: "/products/landis-btu.svg",
    shortDescription: "MID Class 2 approved ultrasonic thermal energy meters for district cooling billing, tenant sub-metering, and energy management.",
    specifications: {
      "Measuring Method": "Ultrasonic Transit-Time Principle (No Moving Parts)",
      "Accuracy Class": "EN 1434 Class 2 MID Certified",
      "Communication": "M-Bus, Modbus RTU, BACnet, Pulse Output",
      "Power Supply": "11-Year Lithium Battery / 24V AC"
    },
    applications: ["District Cooling Billing", "Tenant Sub-Metering", "Commercial Towers"]
  },
  {
    id: "axio-co-sensors",
    name: "Thermostats, CO Sensors & Control Panels",
    category: "Pumps & Instrumentation",
    brandId: "axio-annicom",
    brandName: "AXIO Annicom",
    brandLogo: "/brands/axio-annicom.png",
    image: "/products/axio-sensors.svg",
    shortDescription: "Electrochemical carbon monoxide sensors, parking garage gas detection panels, and commercial touch-screen room thermostats.",
    specifications: {
      "Sensor Element": "Solid Polymer Electrochemical Cell",
      "Detection Range": "0 to 300 ppm CO Gas",
      "Output Signals": "4-20mA, 0-10V DC, Modbus RS485",
      "Compliance": "Civil Defense Parking Garage Standards"
    },
    applications: ["Underground Car Parks", "Loading Bays", "Enclosed Garages"]
  },

  // F. FIRE FIGHTING AND FIRE PROTECTION
  {
    id: "patterson-fire-pumps",
    name: "UL/FM Packaged Fire Pump Skids",
    category: "Fire Fighting & Protection",
    brandId: "patterson",
    brandName: "Patterson Fire Pumps",
    brandLogo: "/brands/patterson.png",
    image: "/products/patterson-pump.svg",
    shortDescription: "Horizontal split-case, end-suction, and vertical turbine fire pump packages with diesel engine or electric motor drives and UL-listed controllers.",
    specifications: {
      "Flow Capacity": "250 to 5,000 GPM Flow Rates",
      "Pressure Range": "40 to 390 psi Operating Pressure",
      "Certifications": "UL Listed / FM Approved / NFPA 20 Compliant",
      "Drive Types": "Diesel Engine / Electric Motor / Jockey System"
    },
    applications: ["Commercial High-Rises", "Industrial Refineries", "Airports", "Hospitals"],
    featured: true
  },
  {
    id: "reliable-sprinklers",
    name: "Fire Sprinklers & Alarm Check Valves",
    category: "Fire Fighting & Protection",
    brandId: "reliable",
    brandName: "Reliable",
    brandLogo: "/brands/reliable.png",
    image: "/products/reliable-sprinkler.svg",
    shortDescription: "Standard and quick response pendant, upright, and concealed fire sprinkler heads, wet alarm check valves, and deluge valves.",
    specifications: {
      "K-Factors": "K5.6 (80), K8.0 (115), K11.2, K14.0, K16.8",
      "Temperature Ratings": "57°C, 68°C, 79°C, 93°C, 141°C",
      "Finish Options": "Chrome, Brass, White Polyester, Custom",
      "Approvals": "UL Listed / FM Approved / QCDD Approved"
    },
    applications: ["Commercial Buildings", "Warehouses", "Shopping Malls", "Hotels"],
    featured: true
  },
  {
    id: "eurofeu-extinguishers",
    name: "Certified Fire Extinguishers & Mobile Units",
    category: "Fire Fighting & Protection",
    brandId: "eurofeu",
    brandName: "Eurofeu",
    brandLogo: "/brands/eurofeu.png",
    image: "/products/eurofeu-extinguisher.svg",
    shortDescription: "European standard portable and mobile dry powder, foam, and CO2 fire extinguishers with heavy-duty corrosion-resistant finish.",
    specifications: {
      "Capacities": "1kg to 12kg Portable / 25kg to 100kg Wheeled Units",
      "Extinguishing Agents": "ABC Multipurpose Powder, AFFF Foam, Clean CO2",
      "Standard": "EN 3-7 / CE Marked / Marine MED Certified",
      "Cylinder": "High-Strength Deep-Drawn Steel Body"
    },
    applications: ["Offices", "Industrial Warehouses", "Electrical Substations", "Marine Vessels"]
  },
  {
    id: "newage-fire-hoses",
    name: "Fire Hoses, Branchpipes & Foam Equipment",
    category: "Fire Fighting & Protection",
    brandId: "newage",
    brandName: "NewAge Group",
    brandLogo: "/brands/newage.png",
    image: "/products/newage-hose.svg",
    shortDescription: "Synthetic rubber lined all-weather percolating and non-percolating fire delivery hoses, multi-purpose jet/spray fog nozzles.",
    specifications: {
      "Working Pressure": "15 bar to 25 bar Working / 45 bar Burst",
      "Hose Diameters": "38mm (1.5\"), 65mm (2.5\") Internal Diameter",
      "Coupling Standard": "BS 336 Instantaneous British Couplings",
      "Certification": "UL Listed / BSI Kitemark"
    },
    applications: ["Fire Brigades", "Riser Landing Systems", "Refineries"]
  },
  {
    id: "ayvaz-sprinkler-drops",
    name: "Flexible Fire Sprinkler Connection Drops",
    category: "Fire Fighting & Protection",
    brandId: "ayvaz",
    brandName: "Ayvaz",
    brandLogo: "/brands/ayvaz.png",
    image: "/products/ayvaz-drops.svg",
    shortDescription: "Corrugated stainless steel braided flexible sprinkler hose assemblies with ceiling brackets for quick drop ceiling installation.",
    specifications: {
      "Hose Lengths": "700mm, 1000mm, 1200mm, 1500mm, 1800mm",
      "Pressure Rating": "175 psi / 200 psi Working Pressure",
      "Tube Material": "AISI 316L Stainless Corrugated Steel",
      "Certification": "UL Listed / FM Approved / VdS"
    },
    applications: ["False Ceiling Offices", "Hotels", "Hospitals", "Retail Malls"]
  },
  {
    id: "flotek-cabinets",
    name: "Stainless Steel Fire Hose Reel Cabinets",
    category: "Fire Fighting & Protection",
    brandId: "flotek",
    brandName: "Flotex / Flotek",
    brandLogo: "/brands/flotek.png",
    image: "/products/flotek-cabinet.svg",
    shortDescription: "Surface and recessed fire hose reel cabinets manufactured in hairline stainless steel or electro-galvanized red powder coated finish.",
    specifications: {
      "Material": "SS 304 Hairline / SS 316 / 1.5mm Mild Steel",
      "Reel Hose": "3/4\" or 1\" x 30m Semirigid Rubber Hose",
      "Door Styles": "Full Glass Door / Solid Stainless / Key Lock",
      "Standards": "BS EN 671-1 Compliant"
    },
    applications: ["Commercial Lobbies", "Hotel Corridors", "Parking Basements"]
  },
  {
    id: "siex-suppression",
    name: "Clean Agent Total Flooding Suppression Systems",
    category: "Fire Fighting & Protection",
    brandId: "siex",
    brandName: "SIEX Fire Suppression",
    brandLogo: "/brands/siex.png",
    image: "/products/siex-suppression.svg",
    shortDescription: "Engineered automatic gaseous total flooding systems using FK-5-1-12 (Novec 1230), HFC-227ea (FM-200), and Inergen inert gases.",
    specifications: {
      "Agents": "FK-5-1-12, HFC-227ea, IG-541, IG-55, Carbon Dioxide",
      "Cylinder Storage": "25 bar, 42 bar, 50 bar, 300 bar Systems",
      "Discharge Time": "Within 10 seconds rapid extinguishing",
      "Environmental": "Zero ODP (Ozone Depletion Potential)"
    },
    applications: ["Server Rooms", "Control Rooms", "Museum Archives", "Telecommunication Hubs"]
  },
  {
    id: "wilson-cousins-fdc",
    name: "Fire Department Connections (FDC)",
    category: "Fire Fighting & Protection",
    brandId: "wilson-cousins",
    brandName: "Wilson & Cousins",
    brandLogo: "/brands/wilson-cousins.png",
    image: "/products/wilson-fdc.svg",
    shortDescription: "Solid cast brass Siamese two-way and four-way fire department connections (FDC) with clappers and polished escutcheons.",
    specifications: {
      "Configuration": "Two-Way 4\" x 2.5\" x 2.5\" Siamese Inlets",
      "Threads": "BS 336 Instantaneous Female / NST Threads",
      "Material": "Cast Red Brass with Polished Chrome or Brass",
      "Compliance": "NFPA 14 / UL Listed Standards"
    },
    applications: ["Building Perimeter Risers", "Civil Defense Inlets", "Dry/Wet Risers"]
  },
  {
    id: "lingjack-landing-valves",
    name: "Flanged Oblique Fire Landing Valves",
    category: "Fire Fighting & Protection",
    brandId: "lingjack",
    brandName: "Lingjack Fire & Safety",
    brandLogo: "/brands/lingjack.png",
    image: "/products/lingjack-valves.svg",
    shortDescription: "Gunmetal and bronze oblique pattern landing valves designed for wet risers and standpipe systems in high-rise buildings.",
    specifications: {
      "Size": "DN65 (2.5\") Flanged PN16 Inlet",
      "Outlet": "BS 336 Female Instantaneous with Cap & Chain",
      "Body Material": "Leaded Gunmetal LG2 / High Tensile Bronze",
      "Hydrostatic Test": "20 bar Shell / 16 bar Seat Tested"
    },
    applications: ["Fire Exit Stairwells", "Wet Riser Manifolds", "Industrial Complexes"]
  },
  {
    id: "ceasefire-auto-extinguisher",
    name: "Ceiling Automatic Modular Extinguishers",
    category: "Fire Fighting & Protection",
    brandId: "ceasefire",
    brandName: "Ceasefire",
    brandLogo: "/brands/ceasefire.png",
    image: "/products/ceasefire-auto.svg",
    shortDescription: "Ceiling-suspended automatic clean agent extinguishing units with thermo-sensitive glass bulb trigger for unmanned equipment spaces.",
    specifications: {
      "Capacities": "2kg, 5kg, 10kg Modular Cylinders",
      "Thermal Trigger": "68°C Red Glass Bulb Release",
      "Coverage": "Up to 15 m³ Enclosed Volume per Unit",
      "Agent": "Clean Agent / ABC Dry Chemical Powder"
    },
    applications: ["Electrical Transformer Rooms", "Elevator Machine Rooms", "Generator Rooms"]
  },

  // G. TOOLS AND INDUSTRIAL EQUIPMENT
  {
    id: "dewalt-rotary-hammers",
    name: "Heavy-Duty MEP Industrial Power Tools",
    category: "Tools & Industrial Equipment",
    brandId: "dewalt",
    brandName: "DEWALT",
    brandLogo: "/brands/dewalt.png",
    image: "/products/dewalt-tools.svg",
    shortDescription: "Heavy-duty SDS-Max cordless rotary hammers, hydraulic threaded rod cutters, and mechanical concrete anchor fastening systems.",
    specifications: {
      "Platform": "54V XR FLEXVOLT Cordless Platform",
      "Impact Energy": "6.1 Joules to 13.3 Joules SDS-Max",
      "Vibration Control": "Active Vibration Control (AVC) < 8.5 m/s²",
      "Applications": "Core Drilling, Chipping, Riser Anchoring"
    },
    applications: ["Mechanical Installations", "Ductwork Trapeze Hanging", "Pipe Anchor Fixing"]
  }
];

export const productCategories = [
  "All Categories",
  "HVAC & Air Conditioning",
  "Ventilation Systems",
  "Hydronic & Piping",
  "Solar & Water Heating",
  "Pumps & Instrumentation",
  "Fire Fighting & Protection",
  "Tools & Industrial Equipment"
];

