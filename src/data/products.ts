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
    image: "/products/rheem-dx.png",
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
    image: "/products/rheem-vrf.png",
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
    image: "/products/clima-uno-ahu.png",
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
    image: "/products/clima-uno-fcu.png",
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
    image: "/products/clima-uno-ecology.png",
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
    image: "/products/clima-uno-erv.png",
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
    image: "/products/dogu-ahu.png",
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
    image: "/products/dogu-dehumidifier.png",
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
    image: "/products/tecnair-ccu.png",
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
    image: "/products/emerson-compressor.png",
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
    image: "/products/barcol-air-vav.png",
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
    id: "sp-jet-fans",
    name: "Car Park Impulse Jet Fans",
    category: "Ventilation Systems",
    brandId: "sp",
    brandName: "Soler & Palau (S&P)",
    brandLogo: "/brands/sp.png",
    image: "/products/sp-jet-fans.png",
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
    image: "/products/weicco-expansion.png",
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
    image: "/products/weicco-vibration.png",
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
    image: "/products/hattersley-valves.png",
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
    image: "/products/frese-picv.png",
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
    id: "mueller-copper",
    name: "Copper Coils, Pipes & ACR Fittings",
    category: "Hydronic & Piping",
    brandId: "mueller-industries",
    brandName: "Mueller Industries",
    brandLogo: "/brands/mueller-industries.png",
    image: "/products/mueller-copper.png",
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
    image: "/products/wednesbury-pipes.png",
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
    image: "/products/flowflex-fittings.png",
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
    image: "/products/csa-prv.png",
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
    image: "/products/rbm-prv.png",
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
    image: "/products/mueller-hydrant.png",
    shortDescription: "Heavy-duty AWWA C509/C515 resilient wedge gate valves, indicator posts, and dry barrel municipal fire hydrants.",
    specifications: {
      "Pressure Rating": "250 psi / 350 psi Working Pressure",
      "Coating": "Electrostatically Applied Fusion Epoxy",
      "Stem Type": "OS&Y (Outside Screw & Yoke) / Non-Rising",
      "Certifications": "UL Listed / FM Approved"
    },
    applications: ["Fire Water Mains", "Municipal Infrastructure", "Underground Piping"]
  },

  // D. SOLAR AND WATER HEATING

  // E. PUMPS AND INSTRUMENTATION
  {
    id: "winters-pressure-gauges",
    name: "Industrial Pressure Gauges & Thermometers",
    category: "Pumps & Instrumentation",
    brandId: "winters",
    brandName: "Winters Instruments",
    brandLogo: "/brands/winters.png",
    image: "/products/winters-gauge.png",
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
    image: "/products/landis-btu.png",
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
    image: "/products/axio-sensors.png",
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
    image: "/products/patterson-pump.png",
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
    image: "/products/reliable-sprinkler.png",
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
    image: "/products/eurofeu-extinguisher.png",
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
    image: "/products/newage-hose.png",
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
    image: "/products/ayvaz-drops.png",
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
    image: "/products/flotek-cabinet.png",
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
    id: "ceasefire-auto-extinguisher",
    name: "Ceiling Automatic Modular Extinguishers",
    category: "Fire Fighting & Protection",
    brandId: "ceasefire",
    brandName: "Ceasefire",
    brandLogo: "/brands/ceasefire.png",
    image: "/products/ceasefire-auto.png",
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
    image: "/products/dewalt-tools.png",
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

