export interface SubService {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  scope: string[];
  standards: string[];
  deliverables: string[];
  icon: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  subServicesCount: number;
  subServices: SubService[];
  keyBenefits: string[];
}

export const servicesCategories: ServiceCategory[] = [
  {
    id: "installation-fitout",
    slug: "installation-fitout",
    name: "Installation & Fitout Works",
    tagline: "Turnkey Mechanical, Electrical & Field Fitout Execution",
    shortDesc: "Comprehensive on-site HVAC equipment installation, ductwork, chilled water piping, insulation, and commercial MEP fitout executed by certified engineers in full compliance with Kahramaa, ASHRAE, and QCDD regulations.",
    fullDesc: "Denali Global provides end-to-end HVAC and MEP installation and fitout services for commercial, industrial, healthcare, hospitality, and residential developments across Qatar. Our specialized field engineering teams manage rigorous equipment positioning, precision mechanical alignment, certified refrigeration brazing, dynamic vibration isolation, and airtight ductwork erection. From central chiller plant hookups to luxury retail fitouts, we ensure flawless execution that withstands Qatar's extreme climate.",
    image: "/services/solution-hvac.jpg",
    iconName: "Wrench",
    subServicesCount: 16,
    keyBenefits: [
      "Rigorous adherence to ASHRAE, SMACNA, and Kahramaa regulations",
      "Factory-trained rigging and certified installation technicians",
      "Precision laser alignment and certified vibration isolation",
      "Comprehensive pre-commissioning leak and pressure testing"
    ],
    subServices: [
      {
        id: "chiller-installation",
        title: "Chiller Installation",
        shortDesc: "Turnkey rigging, mounting, vibration isolation, and pipe interconnection for air-cooled and water-cooled central chillers.",
        fullDesc: "Complete heavy rigging and precision installation of air-cooled and water-cooled chillers, magnetic bearing centrifugal chillers, and modular screw units. We manage structural load distribution, inertia base positioning, spring vibration isolator leveling, and dual-flange chilled water piping connections.",
        scope: [
          "Heavy crane rigging and engineered roof/plant room positioning",
          "Neoprene and spring vibration isolator leveling and anchoring",
          "Flanged chilled water and condenser water header tie-ins",
          "Power termination, motor control center (MCC) hookup, and BMS sensor integration"
        ],
        standards: ["ASHRAE 15 & 34", "AHRI 550/590", "Kahramaa Electrical Standards"],
        deliverables: [
          "Rigging & Lift Engineering Plan",
          "Laser Alignment & Vibration Report",
          "Hydrostatic Pressure Test Certificate",
          "Pre-commissioning Checklist Log"
        ],
        icon: "Snowflake"
      },
      {
        id: "ahu-assembly-installation",
        title: "AHU Assembly & Installation",
        shortDesc: "Modular air handling unit sectional assembly, coil connection, filter installation, and vibration mounting.",
        fullDesc: "Professional modular assembly and erection of indoor and hygienic rooftop Air Handling Units (AHUs). Our teams assemble thermal-break casing panels, install plug and EC fan modules, mount chilled water and heating coils, and integrate HEPA/carbon filtration banks with certified airtight casing seals.",
        scope: [
          "Sectional panel assembly with airtight gasket compression",
          "Cooling coil piping with manual and dynamic balancing valve packages",
          "Fan-motor assembly dynamic balancing and flexible acoustic canvas connections",
          "Differential pressure gauge and filter monitoring switch installation"
        ],
        standards: ["Eurovent Casing Rating", "EN 1886 Deflection & Leakage", "ASHRAE 62.1"],
        deliverables: [
          "Casing Leakage Inspection Record",
          "Fan Dynamic Balancing Sign-off",
          "Coil Hydrostatic Pressure Certificate",
          "Commissioning Verification Sheet"
        ],
        icon: "Fan"
      },
      {
        id: "fan-coil-unit-installation",
        title: "Fan Coil Unit Installation",
        shortDesc: "Concealed ceiling, exposed, and cassette FCU positioning with condensate drainage and chilled water hookups.",
        fullDesc: "Precision installation of 2-pipe and 4-pipe Fan Coil Units across commercial offices, residential towers, and hotel suites. Works include acoustic threaded rod suspension, secondary condensate drip tray fabrication, dynamic PICV valve train installation, and motorized thermostat integration.",
        scope: [
          "Vibration-isolated unistrut ceiling rod mounting and leveling",
          "Insulated chilled water valve train with modulating actuator valves",
          "Gravity condensate drain line routing with accessible cleanout plugs",
          "Return air plenum box and flexible acoustic duct connections"
        ],
        standards: ["AHRI 440 Standard", "Kahramaa Plumbing Regulations", "ASHRAE 90.1"],
        deliverables: [
          "Condensate Gravity Flow Sign-off",
          "Valve Actuator Functionality Log",
          "Acoustic Noise Level Check",
          "Unit Submittal Sign-off Record"
        ],
        icon: "Wind"
      },
      {
        id: "heat-pipe-installation",
        title: "Heat Pipe Installation",
        shortDesc: "Passive energy recovery heat pipe integration in air conditioning loops for enhanced dehumidification and reheat savings.",
        fullDesc: "Installation of passive wrap-around and run-around heat pipes surrounding AHU cooling coils. This enhances deep moisture removal for Qatar's high-humidity coastal climate without requiring energy-intensive electrical or hot water reheat systems.",
        scope: [
          "Pre-cooling and reheat heat pipe frame insertion into AHU coil sections",
          "Hermetic refrigerant circuit vacuum holding and leak verification",
          "Condensate drainage coordination in high moisture recovery zones",
          "Bypass damper actuator installation for seasonal economizer control"
        ],
        standards: ["ASHRAE Energy Conservation 90.1", "TEMA Heat Exchanger Standards"],
        deliverables: [
          "Heat Recovery Effectiveness Log",
          "Refrigerant Circuit Pressure Test",
          "Dehumidification Performance Report",
          "Maintenance Guidelines Document"
        ],
        icon: "Activity"
      },
      {
        id: "heat-recovery-wheel-installation",
        title: "Heat Recovery Wheel Installation",
        shortDesc: "Rotary enthalpy heat recovery wheel installation across supply and exhaust air handling systems.",
        fullDesc: "Mounting and commissioning of total enthalpy rotary heat recovery wheels within energy recovery ventilators (ERVs) and dedicated outdoor air systems (DOAS). We ensure precision perimeter brush seal contact, purge sector alignment, and variable-speed motor drive calibration.",
        scope: [
          "Rotor casing alignment across split supply and exhaust air streams",
          "Airtight perimeter brush and neoprene seal adjustment to eliminate cross-contamination",
          "Variable frequency drive (VFD) motor and belt drive tensioning",
          "Purge angle adjustment and differential pressure sensor calibration"
        ],
        standards: ["AHRI 1060 Certification", "ASHRAE 62.1 Ventilation Requirements"],
        deliverables: [
          "Enthalpy Transfer Verification Log",
          "Seal Cross-Leakage Test Record",
          "VFD Drive Calibration Sheet",
          "Warranty & Operational Dossier"
        ],
        icon: "RefreshCw"
      },
      {
        id: "heat-pump-installation",
        title: "Heat Pump Installation",
        shortDesc: "Commercial and industrial heat pump system installation for energy-efficient hot water and auxiliary heating.",
        fullDesc: "Installation of air-source, water-source, and geothermal heat pump packages for commercial sanitary hot water production, swimming pool heating, and space heating applications, optimizing electrical coefficient of performance (COP).",
        scope: [
          "Outdoor compressor unit vibration mounting and acoustic treatment",
          "Refrigerant loop evacuation, dehydration, and precise scale-weighed charging",
          "Hydronic buffer vessel and primary-secondary circulation pump connection",
          "BMS dual-setpoint temperature controller and defrost cycle commissioning"
        ],
        standards: ["AHRI 210/240", "Kahramaa Water Regulations", "EN 14511"],
        deliverables: [
          "Refrigerant Pressure Log Sheet",
          "COP Thermal Performance Test",
          "Sanitary Water Heating Sign-off",
          "Operating Parameter Checklist"
        ],
        icon: "Flame"
      },
      {
        id: "split-unit-installation",
        title: "Hi Wall & Ducted Split Unit Installation",
        shortDesc: "Heavy-duty split AC installation, copper refrigerant brazing, vacuum testing, and electrical connection.",
        fullDesc: "Rapid, high-standard installation of decorative hi-wall, ceiling concealed ducted, and floor-standing split systems. We utilize medical-grade copper tubing, nitrogen-purged brazing techniques, deep micron vacuuming, and UV-resistant outdoor cable and pipe lagging.",
        scope: [
          "Indoor evaporator unit bracket anchoring and laser leveling",
          "Heavy-gauge condensing unit wall cantilever or rooftop plinth installation",
          "Deoxidized copper refrigerant piping with continuous nitrogen purging during brazing",
          "500-micron deep vacuum hold test and manufacturer-specified R-410A/R-32 top-up"
        ],
        standards: ["BS EN 378 Safety Standard", "Kahramaa Wiring Regulations"],
        deliverables: [
          "Nitrogen Pressure Holding Certificate",
          "Micron Vacuum Decay Sheet",
          "Air Flow & Temperature Drop Record",
          "Customer Handover Guarantee"
        ],
        icon: "Cpu"
      },
      {
        id: "package-vrv-installation",
        title: "Package Unit / VRV Installation",
        shortDesc: "Rooftop packaged air conditioners and Variable Refrigerant Flow multi-zone systems for commercial buildings.",
        fullDesc: "Complete deployment of rooftop packaged units and modern Variable Refrigerant Volume (VRV/VRF) multi-split systems with centralized intelligent touch controllers. Our certified technicians handle complex refnet branch piping, oil trap design, and automated refrigerant auto-charge procedures.",
        scope: [
          "Curb adapter mounting and weatherproof roof penetration sealing",
          "Multi-branch Refnet joint brazing with continuous inert nitrogen blanket",
          "Central communication D-III Net / BACnet wiring between indoor and outdoor modules",
          "Comprehensive high-pressure nitrogen hold test at 41.5 bar (600 psi) for 24 hours"
        ],
        standards: ["AHRI 1230 VRF Standard", "ASHRAE 15 Safety Code", "Qatar Civil Defense"],
        deliverables: [
          "24-Hour 41.5 Bar Pressure Chart",
          "Central BACnet Addressing Table",
          "Refrigerant Mass Balance Certificate",
          "Complete Handover Binder"
        ],
        icon: "Server"
      },
      {
        id: "ventilation-fan-installation",
        title: "Ventilation Fan Installation",
        shortDesc: "Centrifugal, axial, and inline exhaust fan mounting, acoustic flexible connections, and dynamic balancing.",
        fullDesc: "Installation of specialized air movement equipment including acoustic cabinet inline fans, heavy axial smoke extract fans, high-thrust car park induction jet fans, and roof cowl exhausters rated for extreme continuous service.",
        scope: [
          "Structural unistrut and spring hanger acoustic suspension",
          "Airtight fire-rated flexible canvas connections to prevent vibration transmission",
          "Gravity backdraft damper and insect mesh cowl mounting",
          "Local isolator switch wiring, rotation check, and motor full-load amp verification"
        ],
        standards: ["AMCA 210/300 Standards", "QCDD Fire Safety Regulations", "BS 7346-2"],
        deliverables: [
          "Airflow CFM & Static Pressure Log",
          "Motor Full Load Amp Measurement",
          "QCDD Emergency Interlock Record",
          "Acoustic Decibel Field Report"
        ],
        icon: "Wind"
      },
      {
        id: "kitchen-ecology-unit-installation",
        title: "Kitchen Ecology Unit Installation",
        shortDesc: "Commercial kitchen exhaust scrubbing units, electrostatic precipitators, and odor control carbon filtration systems.",
        fullDesc: "Turnkey installation of heavy-duty kitchen ecology filtration units for commercial restaurants, hotels, and food courts in Qatar. System incorporates double-pass Electrostatic Precipitators (ESP), UV-C ozone odor neutralizers, and activated carbon cylinder banks.",
        scope: [
          "Heavy modular filtration casing rigging and grease-tight flange connection",
          "High-voltage ESP cell rack alignment and interlock safety switch wiring",
          "UV-C germicidal and ozone oxidation module electrical integration",
          "Differential pressure transmitter and automatic wash-down manifold connection"
        ],
        standards: ["NFPA 96 Commercial Cooking", "QCDD Commercial Kitchen Codes", "ASHRAE 154"],
        deliverables: [
          "Smoke & Grease Removal Efficiency Report",
          "Safety High-Voltage Interlock Sign-off",
          "QCDD Compliance Inspection Sheet",
          "Filter Replacement Schedule Guide"
        ],
        icon: "Layers"
      },
      {
        id: "ductwork-insulation-installation",
        title: "Ductwork & Insulation Installation",
        shortDesc: "Galvanized steel (GI) and pre-insulated duct erection, acoustic lining, and thermal insulation wrapping to SMACNA standards.",
        fullDesc: "Fabrication review, delivery, and site erection of galvanized sheet metal rectangular and spiral circular ductwork, as well as PIR/Phenolic pre-insulated ducting systems. Finished with Class 0 acoustic internal lining and foil-faced elastomeric/fiberglass insulation.",
        scope: [
          "SMACNA-compliant duct hanger bracket and unistrut trapeze installation",
          "Duct flange gasket compression and mastic joint vapor sealing",
          "Foil-faced thermal insulation wrapping with reinforced tape vapor barrier",
          "Internal acoustic open-cell lining installation in high-velocity plant rooms"
        ],
        standards: ["SMACNA HVAC Duct Construction Standards", "BS 476 Fire Tests", "DW 144"],
        deliverables: [
          "SMACNA Class A Air Leakage Test Record",
          "Vapor Barrier Continuity Check",
          "Duct Gauge & Stiffener Verification",
          "Approved As-Built Route Drawings"
        ],
        icon: "Maximize"
      },
      {
        id: "damper-installation",
        title: "Damper Installation",
        shortDesc: "Motorized fire and smoke dampers (MFSD), volume control dampers (VCD), non-return dampers, and actuator interlocks.",
        fullDesc: "Engineered installation of Qatar Civil Defense-approved motorized fire and smoke dampers, manual opposed blade volume control dampers (VCD), gravity non-return dampers, and pressure relief dampers across concrete barrier penetrations.",
        scope: [
          "Retention angle and firestop masonry sleeve installation at compartment walls",
          "Fast-acting 24V/230V spring-return electric actuator mounting and testing",
          "Thermal fusible link (72°C) inspection and mechanical blade release verification",
          "Fire alarm matrix interface wiring and remote open/close feedback switch testing"
        ],
        standards: ["UL 555 Fire Dampers", "UL 555S Smoke Dampers", "QCDD Life Safety Codes"],
        deliverables: [
          "QCDD Damper Physical Release Certificate",
          "Fire Alarm Matrix Signal Test Log",
          "Retention Angle Installation Sign-off",
          "Asset Tagging & Location Register"
        ],
        icon: "ShieldAlert"
      },
      {
        id: "piping-valve-insulation-installation",
        title: "Piping, Valve & Insulation Installation",
        shortDesc: "Chilled water and domestic plumbing pipe routing, valve assemblies (PICV, balancing, strainers), and closed-cell elastomeric insulation.",
        fullDesc: "Complete piping network installation for chilled water, condenser water, domestic hot/cold water, and drainage. Scope encompasses schedule 40 black steel, copper, and polypropylene pipes, motorized control valve packages, triple-duty valves, and vapor-tight nitrile rubber insulation.",
        scope: [
          "Pipe routing with heavy-duty roller supports, anchors, and expansion loops",
          "Weld, grooved mechanical Victaulic coupling, and threaded connections",
          "Installation of Y-strainers, check valves, PICVs, and automated balancing valves",
          "Class 0 closed-cell elastomeric thermal insulation with aluminum cladding"
        ],
        standards: ["ASME B31.9 Building Services Piping", "Kahramaa Water Codes", "BS EN 1057"],
        deliverables: [
          "Hydrostatic Pressure Hold Log (1.5x working pressure)",
          "Weld Visual Inspection Report",
          "Insulation Vapor Seal Inspection",
          "Piping System Flushing Sign-off"
        ],
        icon: "GitBranch"
      },
      {
        id: "aluminium-cladding-works",
        title: "Duct & Pipe Aluminium Cladding Works",
        shortDesc: "Weatherproof embossing and sheet aluminium cladding for exposed rooftop ducting and chilled water piping.",
        fullDesc: "Precision sheet metal fabrication and on-site mechanical cladding using plain or stucco-embossed aluminum sheets (0.6mm to 0.9mm thickness). Protects external rooftop ductwork and chilled water piping from Qatar's intense solar UV radiation, sandstorms, and mechanical damage.",
        scope: [
          "On-site measurement and precision pattern profiling of pipe elbows, tees, and duct bends",
          "Stucco embossed aluminum sheet forming with water-shedding overlap seams",
          "Stainless steel toggle latches, bands, and non-corrosive pop rivet fastening",
          "Continuous weatherproof silicone sealant bead application across all joints"
        ],
        standards: ["BS 5970 Thermal Insulation Code", "CINI Insulation Manual"],
        deliverables: [
          "Weatherproof Water Tightness Inspection",
          "Sheet Thickness & Alloy Mill Certificate",
          "Aesthetic Alignment Verification",
          "Maintenance Access Door Report"
        ],
        icon: "Shield"
      },
      {
        id: "elv-cable-termination",
        title: "ELV Cable Termination",
        shortDesc: "Extra-low voltage control wiring, sensor termination, BMS controller field connections, and continuity testing.",
        fullDesc: "Specialized extra-low voltage (ELV) wiring and precision termination for Building Management Systems (BMS), DDC field controllers, temperature/humidity sensors, BTU meters, pressure transmitters, and motorized actuators.",
        scope: [
          "Shielded twisted-pair (STP) and CAT6 cable dressing within galvanized trunking and conduits",
          "Precision ferrule tagging, heat-shrink insulation, and terminal strip torque tightening",
          "End-to-end loop impedance, continuity, and insulation resistance (megger) testing",
          "Point-to-point verification with central BMS control graphics"
        ],
        standards: ["Kahramaa Wiring Guidelines", "TIA/EIA Commercial Building Standards", "IEC 60364"],
        deliverables: [
          "Cable Megger & Continuity Test Log",
          "I/O Point Schedule Verification",
          "BMS Communication Protocol Sign-off",
          "Termination Schedule As-Built Record"
        ],
        icon: "Cpu"
      },
      {
        id: "mep-fitout-works",
        title: "MEP Fitout Works",
        shortDesc: "Complete commercial interior MEP fitout contracting for corporate offices, retail spaces, and industrial facilities.",
        fullDesc: "Integrated turnkey interior MEP fitout solutions covering mechanical air distribution redesign, electrical lighting and small power distribution, life safety fire sprinkler relocations, and sanitary plumbing for high-end commercial tenant handovers.",
        scope: [
          "Space-coordinated MEP demolition, alteration, and architectural re-routing",
          "Linear slot diffuser, swirl diffuser, and exposed spiral duct installation",
          "Power distribution board (DB) installation, circuit wiring, and decorative lighting",
          "Quick-response concealed fire sprinkler head drops aligned with reflected ceiling plans (RCP)"
        ],
        standards: ["QCDD Fire Protection Standards", "Kahramaa Interior Regulations", "LEED Interior Design"],
        deliverables: [
          "QCDD Fitout Civil Defense Completion Certificate",
          "Kahramaa Electrical Inspection Clearance",
          "Architectural Ceiling Clash Matrix",
          "Complete As-Built Fitout Dossier"
        ],
        icon: "CheckCircle2"
      }
    ]
  },
  {
    id: "hvac-mep-contracting",
    slug: "hvac-mep-contracting",
    name: "HVAC & MEP Contracting",
    tagline: "Turnkey Commercial & Industrial Engineering Contracting",
    shortDesc: "End-to-end MEP contracting services delivering complete mechanical, electrical, plumbing, fire protection, and building automation solutions for infrastructure and commercial developments across Qatar.",
    fullDesc: "Denali Global acts as a trusted prime and specialized MEP contractor for leading developers, consultants, and general contractors in Qatar. We integrate mechanical cooling plants, ventilation infrastructure, electrical substations, water supply and drainage networks, and fire safety systems into a synchronized, energy-efficient building ecosystem. Our project delivery framework ensures strict adherence to project timelines, value engineering, stringent Kahramaa and Qatar Civil Defense approvals, and total quality assurance.",
    image: "/services/solution-mep.jpg",
    iconName: "Cpu",
    subServicesCount: 1,
    keyBenefits: [
      "Single-point turnkey accountability from procurement to commissioning",
      "Full compliance with Kahramaa, Ashghal, and Qatar Civil Defense (QCDD)",
      "Strict cost control, schedule management, and proactive value engineering",
      "Experienced project management and dedicated site supervision teams"
    ],
    subServices: [
      {
        id: "turnkey-hvac-mep-contracting",
        title: "HVAC & MEP Contracting",
        shortDesc: "Full-spectrum turnkey MEP contracting covering engineering procurement, site execution, authority approvals, testing, and handover.",
        fullDesc: "Our turnkey HVAC & MEP Contracting encompasses the full lifecycle of building services infrastructure. We manage technical material approvals, international equipment procurement, on-site mechanical and electrical erection, integration with district cooling networks, emergency life safety commissioning, and statutory approvals from Kahramaa and QCDD. We leverage advanced project scheduling, 3D BIM coordination, and rigorous QA/QC inspection regimes to deliver faultless installations.",
        scope: [
          "Engineering submittals, material compliance schedules, and consultant approval workflows",
          "Central chilled water plants, AHU/FCU networks, and commercial ventilation packages",
          "Electrical power distribution: Transformers, MV/LV switchgear, busbars, and distribution boards",
          "Public health and plumbing: Booster pumping stations, water filtration, and drainage piping",
          "Qatar Civil Defense (QCDD) compliant fire detection and automatic sprinkler suppression systems",
          "Integrated Building Management System (BMS) and intelligent energy metering networks",
          "Authority clearance liaison: Kahramaa power/water connection, Civil Defense approval, and Ashghal tie-ins"
        ],
        standards: [
          "Kahramaa Regulations for Electrical & Water Installations",
          "Qatar Construction Specifications (QCS 2014 / QCS 2018)",
          "QCDD Fire Safety Regulations",
          "ASHRAE, CIBSE, and NFPA International Standards",
          "ISO 9001, ISO 14001, and ISO 45001 Certified Procedures"
        ],
        deliverables: [
          "Complete Authority Approvals & Building NOCs",
          "Fully Coordinated BIM As-Built Models & Drawings",
          "Operation & Maintenance (O&M) Comprehensive Manuals",
          "Authority Metering & Energization Clearance",
          "Integrated Commissioning & TAB Verification Report",
          "Comprehensive Client Training & Handover Dossier"
        ],
        icon: "Building2"
      }
    ]
  },
  {
    id: "design-services",
    slug: "design-services",
    name: "Design Services",
    tagline: "Advanced Thermal Calculations, CFD Simulations & 3D BIM Coordination",
    shortDesc: "High-precision engineering calculations, thermal simulation, shop drawing generation, and BIM coordination delivered by experienced MEP design engineers in Doha.",
    fullDesc: "Denali Global provides comprehensive MEP engineering design and consulting support for consultants, contractors, and facility owners. Using industry-leading software suites like Carrier HAP, Autodesk Revit, Dialux, and ANSYS CFD, our design bureau delivers rigorous thermodynamic load analysis, equipment sizing, clash-free BIM coordination models up to LOD 500, and fully buildable shop drawings that eliminate site rework and streamline project handover.",
    image: "/services/solution-engineering.jpg",
    iconName: "Gauge",
    subServicesCount: 9,
    keyBenefits: [
      "Rigorous adherence to ASHRAE, CIBSE, and Kahramaa design guidelines",
      "Clash-free multi-disciplinary 3D BIM coordination (LOD 300 - 500)",
      "Optimized equipment sizing preventing energy wastage and high capital costs",
      "Accurate material takeoffs reducing procurement surplus and budget creep"
    ],
    subServices: [
      {
        id: "heat-load-calculation",
        title: "Heat Load Calculation",
        shortDesc: "Detailed block and space hourly thermal cooling load analysis using HAP for Qatar climatic conditions.",
        fullDesc: "High-precision hourly thermal load calculations utilizing Carrier HAP (Hourly Analysis Program) aligned with ASHRAE RTS (Radiant Time Series) methodologies. We model peak solar gain, building envelope thermal properties, internal lighting and plug loads, and Qatar-specific extreme ambient dry bulb/wet bulb conditions.",
        scope: [
          "Building envelope U-value analysis and glass shading coefficient calculation",
          "Zone-by-zone 8760-hour annual cooling load profile generation",
          "Fresh air ventilation load modeling based on ASHRAE 62.1 occupancy criteria",
          "Thermal diversity factor application and central plant capacity determination"
        ],
        standards: ["ASHRAE Handbook of Fundamentals", "Qatar Construction Specifications (QCS)"],
        deliverables: [
          "Comprehensive HAP Thermal Load Calculation Report",
          "Room-by-Room Cooling Airflow (CFM) Summary",
          "Peak Space vs. Block Plant Load Analysis",
          "Consultant Approval Submittal Pack"
        ],
        icon: "Thermometer"
      },
      {
        id: "hvac-equipment-sizing",
        title: "HVAC Equipment Sizing",
        shortDesc: "Optimal selection and capacity sizing for chillers, cooling towers, pumps, AHUs, and air terminal units.",
        fullDesc: "Engineering selection and sizing of all central and unitary HVAC equipment. We balance thermodynamic duty, electrical power consumption (kW/ton), acoustic limitations, and physical plant room footprints to recommend the most cost-effective and energy-efficient equipment.",
        scope: [
          "Chiller capacity and evaporator/condenser flow rate calculation",
          "Cooling tower range, approach, and drift loss engineering sizing",
          "AHU coil surface area, face velocity, and fan total static pressure calculation",
          "Chilled water pump head calculation based on most unfavorable hydraulic index run"
        ],
        standards: ["AHRI Standards", "ASHRAE 90.1 Energy Standard", "Hydraulic Institute (HI)"],
        deliverables: [
          "Equipment Selection Data Sheets",
          "Pump System Head Curve Calculations",
          "AHU Fan Static Pressure Drop Worksheets",
          "Manufacturer Technical Evaluation Comparison"
        ],
        icon: "Cpu"
      },
      {
        id: "quantity-takeoff",
        title: "Quantity Takeoff",
        shortDesc: "Comprehensive Bill of Quantities (BOQ) preparation, material schedules, and cost estimation for MEP packages.",
        fullDesc: "Precise digital quantity takeoff and material measurement from tender specifications and IFC drawings. We generate itemized Bill of Quantities (BOQ) for ductwork surface area, pipe linear meters, valve counts, electrical cabling, and life safety equipment.",
        scope: [
          "Digital planimeter and BIM-extracted quantity measurement",
          "POMI / NRM2 standard Bill of Quantities formatting",
          "Wastage allowance calculation and fabrication scrap factor analysis",
          "Tender comparison analysis and unit rate cost benchmarking"
        ],
        standards: ["RICS NRM2 Rules of Measurement", "POMI Standard Method"],
        deliverables: [
          "Itemized Excel BOQ with Detailed Descriptions",
          "Material Measurement Audit Trail",
          "Procurement Schedule Estimations",
          "Tender Scope Boundary Matrix"
        ],
        icon: "Calculator"
      },
      {
        id: "stress-analysis",
        title: "Stress Analysis",
        shortDesc: "Pipe flexibility, thermal expansion calculation, seismic bracing, and hanger load distribution analysis.",
        fullDesc: "Comprehensive pipe stress analysis for high-pressure chilled water risers, district cooling transmission headers, and steam networks. Using specialized software, we evaluate thermal displacement, allowable flange stresses, and calculate anchor and guide forces.",
        scope: [
          "3D piping network stress modeling under thermal cycling and pressure transients",
          "Expansion loop and axial bellows expansion joint requirement sizing",
          "Pipe hanger structural load reaction calculations and spring support selection",
          "Equipment nozzle allowable load verification against vendor standards"
        ],
        standards: ["ASME B31.1 & B31.9 Codes", "MSS SP-58 Pipe Hangers & Supports"],
        deliverables: [
          "Piping Stress Calculation Report",
          "Expansion Joint Specification & Schedule",
          "Anchor and Guide Reaction Force Table",
          "Spring Hanger Cold & Hot Setting Schedule"
        ],
        icon: "Activity"
      },
      {
        id: "lighting-calculation",
        title: "Lighting Calculation",
        shortDesc: "Dialux lux level simulation, uniformity optimization, and emergency egress lighting design complying with Kahramaa.",
        fullDesc: "Computerized lighting level simulations using DIALux and Relux software. We optimize interior working plane illuminance, unified glare rating (UGR), energy density (W/m²), and Qatar Civil Defense emergency escape route illuminance (minimum 1 lux along centerline).",
        scope: [
          "3D room modeling with surface reflectance characteristics",
          "Photometric IES/LDT data import from certified luminaire manufacturers",
          "Average lux level, minimum-to-average uniformity, and glare index verification",
          "Emergency lighting and illuminated exit signage photometrics to QCDD codes"
        ],
        standards: ["CIBSE Code for Lighting", "Kahramaa Electrical Regulations", "QCDD Emergency Codes"],
        deliverables: [
          "Detailed DIALux Photometric Calculation Dossier",
          "Pseudo-color Illuminance False Color Renderings",
          "Luminaire Schedule & Connected Wattage Summary",
          "Civil Defense Emergency Compliance Proof"
        ],
        icon: "Sun"
      },
      {
        id: "cfd-analysis",
        title: "CFD Analysis",
        shortDesc: "Computational Fluid Dynamics modeling for smoke clearance in car parks, atrium ventilation, and data center cooling.",
        fullDesc: "Advanced 3D Computational Fluid Dynamics (CFD) simulation modeling airflow velocity, thermal stratification, air age, and smoke dispersal. Essential for validating car park jet fan placement, high-ceiling atrium ventilation, and data center cold-aisle thermal performance.",
        scope: [
          "Fluid domain 3D geometry meshing and boundary condition setup",
          "Fire heat release rate (HRR) and smoke visibility decay simulation over 60 minutes",
          "Jet fan induction thrust vector analysis and dead zone elimination",
          "Comfort parameter evaluation (PMV / PPD) in naturally or mechanically conditioned spaces"
        ],
        standards: ["NFPA 92 Smoke Control Systems", "BS 7346-7 Car Park Ventilation", "ASHRAE 55"],
        deliverables: [
          "3D CFD Flow Field Velocity & Temperature Animations",
          "Smoke Visibility & Toxicity Contour Maps",
          "QCDD Authority Submission Technical Validation Dossier",
          "Jet Fan Optimum Layout Coordinates"
        ],
        icon: "Wind"
      },
      {
        id: "mep-shop-drawing",
        title: "MEP Shop Drawing Preparation",
        shortDesc: "Detailed, clash-coordinated 2D fabrication and installation drawings incorporating architectural and structural offsets.",
        fullDesc: "Production of fully coordinated MEP shop drawings ready for site construction and municipal authority approvals. Our draftsmen detail duct and pipe invert levels, structural slab penetration sleeves, hanger spacing, and coordinated ceiling layouts.",
        scope: [
          "Conversion of schematic design drawings into buildable field installation plans",
          "Cross-section drawings through crowded plant rooms, corridors, and service risers",
          "Slab opening, builder's work, and wall penetration coordination plans",
          "Detailed equipment installation hookup diagrams and valve schedule schematics"
        ],
        standards: ["SMACNA Detailing Standards", "AIA CAD Layering Guidelines", "QCS 2014"],
        deliverables: [
          "Full Set of Coordinated MEP Installation Drawings (PDF & DWG)",
          "Builders Work Invert Level Penetration Plans",
          "Equipment Hook-up Schematic Details",
          "Consultant Approval Submittal Pack"
        ],
        icon: "Layers"
      },
      {
        id: "3d-modeling-services",
        title: "3D Modeling Services",
        shortDesc: "Intelligent 3D visual models of equipment rooms, riser shafts, and complex plant layouts for visual verification.",
        fullDesc: "High-fidelity 3D geometric modeling of complex mechanical plant rooms, chiller rooftops, and electrical substation rooms. Provides clear spatial visualization for client approvals, constructability reviews, and maintenance access clearance checks.",
        scope: [
          "3D parametric modeling of chillers, pumps, vessels, and switchgear with true clearances",
          "Walkthrough visualization of service access paths and maintenance extraction envelopes",
          "Visual validation of architectural louvers, structural steelwork, and pipe supports",
          "High-resolution 3D isometric views for site fabrication teams"
        ],
        standards: ["Autodesk Certified Workflows", "ISO 19650 BIM Principles"],
        deliverables: [
          "3D Rendered Isometric Plant Room Views",
          "Interactive 3D Walkthrough Model Files",
          "Equipment Maintenance Clearance Studies",
          "Spatial Coordination Sign-off Sheets"
        ],
        icon: "Box"
      },
      {
        id: "bim-modeling-services",
        title: "BIM Modeling Services",
        shortDesc: "Level of Development (LOD 300 to LOD 500) Building Information Modeling, Revit coordination, and clash detection reports.",
        fullDesc: "Comprehensive Building Information Modeling (BIM) from design development through construction to asset handover (LOD 300, 400, and 500). Using Autodesk Revit and Navisworks, we federate multi-discipline models, perform automated clash detection, and embed COBie asset data.",
        scope: [
          "LOD 300 to LOD 500 MEP modeling in Autodesk Revit with verified family parameters",
          "Navisworks clash detection matrix between MEP, Structural, and Architectural models",
          "Clash resolution meetings and coordinated federation reports",
          "COBie and IFC parameter data embedding for Facility Management (FM) integration"
        ],
        standards: ["ISO 19650 International BIM Standards", "BIM Forum LOD Specifications", "PAS 1192"],
        deliverables: [
          "Federated Revit Model (.RVT) and Navisworks Cache (.NWC/.NWD)",
          "Clash Detection Matrix & Resolution Report",
          "COBie Data Compliant Asset Spreadsheet",
          "BIM Execution Plan (BEP) Compliance Sign-off"
        ],
        icon: "Cpu"
      }
    ]
  },
  {
    id: "retrofit-fabrication",
    slug: "retrofit-fabrication",
    name: "Retrofit Fabrication Works",
    tagline: "Facility Modernization, Energy Upgrades & Bespoke Spool Fabrication",
    shortDesc: "Specialized engineering retrofits, energy efficiency overhauls, in-situ pipe modification, and bespoke metal/plastic fabrication supporting aging facility renewal.",
    fullDesc: "Denali Global specializes in complex engineering retrofit and replacement projects where operational building downtime must be minimized or avoided completely. We replace obsolete chillers, upgrade AHU fan systems to modern EC technology, modify live piping through certified hot-tapping techniques, and provide custom fabrication of ductile iron, galvanized steel, and HDPE/PVC spools in our local workshop facilities in Qatar.",
    image: "/services/service-retrofit.jpg",
    iconName: "RefreshCw",
    subServicesCount: 8,
    keyBenefits: [
      "Zero to minimal building operational downtime through phased execution",
      "Massive energy and maintenance savings through modern EC and inverter retrofits",
      "In-house welding and fabrication workshop for rapid spool delivery in Qatar",
      "Specialized rigging and extraction engineering for tight plant room footprints"
    ],
    subServices: [
      {
        id: "chiller-replacement",
        title: "Chiller Replacement",
        shortDesc: "Turnkey removal of obsolete chillers, rigging logistics, footprint adaptation, and new high-efficiency chiller integration.",
        fullDesc: "Turnkey replacement of aging, energy-inefficient, or end-of-life central chillers. We manage environmental refrigerant recovery, structural crane lifting permits, temporary cooling skids, plinth adaptations, and seamless hydraulic reconnection to active building headers.",
        scope: [
          "EPA/ASHRAE compliant refrigerant evacuation and safe gas disposal",
          "Heavy crane street closure permits and rooftop rigging execution",
          "Plinth modification and custom header adapter spool fabrication",
          "Rapid mechanical hookup and commissioning within strict shutdown windows"
        ],
        standards: ["ASHRAE 15 Safety", "Kahramaa Energy Efficiency Regulations", "QCS 2014"],
        deliverables: [
          "Refrigerant Safe Recovery Certificate",
          "Rigging & Lift Engineering Safety Plan",
          "Performance Testing & COP Verification Log",
          "Commissioning Sign-off & Client Handover"
        ],
        icon: "Snowflake"
      },
      {
        id: "ahu-replacement-retrofit",
        title: "AHU Replacement/ Retrofit",
        shortDesc: "In-situ dismantling, casing refurbishment, EC fan upgrade, and replacement of degraded cooling coils without structural disruption.",
        fullDesc: "On-site revitalization of existing Air Handling Units without requiring disruptive wall demolitions. We replace degraded chilled water cooling coils, replace energy-hungry belt-driven AC fans with high-efficiency direct-drive EC fan arrays, and reseal double-skin acoustic casings.",
        scope: [
          "Sectional unbolting and removal through narrow service doors and freight elevators",
          "Custom dimensional replacement cooling coil manufacture and slide-in installation",
          "Plug-and-play EC fan wall upgrade with integrated Modbus speed controllers",
          "Internal casing decontamination, antimicrobial coating, and airtight gasket replacement"
        ],
        standards: ["Eurovent Energy Guidelines", "ASHRAE 62.1 Indoor Air Quality"],
        deliverables: [
          "Before vs. After Energy Consumption Audit",
          "Coil Hydrostatic Pressure Certificate",
          "EC Fan Airflow Balance Verification",
          "Refurbished Unit Life Extension Sign-off"
        ],
        icon: "Fan"
      },
      {
        id: "fcu-replacement-retrofit",
        title: "FCU Replacement/ Retrofit",
        shortDesc: "Quiet high-efficiency EC motor upgrades, valve package replacements, and aesthetic grille reconditioning.",
        fullDesc: "Targeted modernization of fan coil units in operational hotels, commercial offices, and residential towers. We upgrade noisy, inefficient multi-speed AC motors to ultra-quiet electronically commutated (EC) motors and replace fouled valve trains with modern pressure-independent control valves (PICV).",
        scope: [
          "Drop ceiling access panel work with zero damage to interior finishes",
          "EC motor retrofit delivering up to 60% fan electrical energy savings",
          "Old valve train replacement with dynamic 2-way PICV balancing valves",
          "Drain pan cleanout, antimicrobial biocidal treatment, and insulation repair"
        ],
        standards: ["AHRI 440 Performance", "Kahramaa Electrical Conservation Guidelines"],
        deliverables: [
          "Acoustic Noise Reduction Field Certificate",
          "Energy Savings Verification Sheet",
          "Valve Modulation Accuracy Check",
          "Unit Handover Inspection Log"
        ],
        icon: "Wind"
      },
      {
        id: "ductwork-modification",
        title: "Ductwork and Air Distribution Modification Work",
        shortDesc: "Airway re-routing, static pressure optimization, sound attenuator retrofits, and plenum re-engineering.",
        fullDesc: "Site modification of existing air distribution systems to accommodate office layout changes, partition alterations, or comfort issues. We re-route supply and return ducts, install high-attenuation silencers to combat noise complaints, and re-balance air registers.",
        scope: [
          "On-site dimensional survey and static pressure drop diagnosis",
          "Precision cutting and sheet metal fabrication of transition pieces and offsets",
          "Acoustic splitter silencer and circular sound attenuator retrofitting",
          "Airflow re-balancing and diffuser velocity optimization"
        ],
        standards: ["SMACNA HVAC Duct Construction", "ASHRAE Fundamentals Chapter 21"],
        deliverables: [
          "Airflow Balancing (CFM) Comparison Record",
          "Sound Level (NC/dBA) Reduction Report",
          "Duct Leakage Verification Sign-off",
          "Updated As-Built Layout Plan"
        ],
        icon: "Maximize"
      },
      {
        id: "piping-modification",
        title: "Piping Modification Work",
        shortDesc: "Live hot tapping, valve replacements, bypass circuit installations, and pipe re-routing in active commercial buildings.",
        fullDesc: "Precision modifications to pressurized chilled water and domestic plumbing networks. We perform certified line freezing and under-pressure hot tapping to introduce new branch takeoffs and bypass loops without draining the central riser or disrupting building tenants.",
        scope: [
          "Nitrogen pipe freezing for localized zero-flow isolation without draining risers",
          "Under-pressure hot tapping (up to 16 bar) for branch connections",
          "Corroded section cut-out, pipe replacement, and certified spool welding",
          "Installation of motorized changeover valves and secondary decoupling bypasses"
        ],
        standards: ["ASME B31.9 Building Services", "AWS D1.1 Welding Standard"],
        deliverables: [
          "Hot Tap Welding & Pressure Test Certificate",
          "Pipe Freeze Isolation Log",
          "Radiographic / Dye Penetrant NDT Test Report",
          "Restored Circuit Pressure Hold Log"
        ],
        icon: "GitBranch"
      },
      {
        id: "di-gi-pipe-fabrication",
        title: "DI/ GI Pipe & Fittings Fabrication",
        shortDesc: "Custom welding, flanging, spool fabrication, and anti-corrosive coating for ductile iron and galvanized steel piping.",
        fullDesc: "Workshop and on-site custom fabrication of ductile iron (DI) and galvanized steel (GI) pipe spools, headers, and specialty fittings. We produce prefabricated chiller manifolds, pump suction/discharge headers, and roll-grooved or flanged assemblies with hot-dip galvanized and epoxy coatings.",
        scope: [
          "High-precision pipe cutting, bevelling, roll grooving, and flanging (DN50 to DN600)",
          "Certified TIG and MIG structural pipe welding by ASME-qualified welders",
          "Internal and external anti-corrosive epoxy and bituminous lining application",
          "Custom dimension offset spool piece fabrication for constrained retrofit spaces"
        ],
        standards: ["BS EN 545 / BS EN 598 (DI Pipes)", "ASTM A53 / BS 1387 (GI Pipes)", "ASME IX"],
        deliverables: [
          "Welder Qualification & Procedure Records (WPS/PQR)",
          "Hydrostatic Factory Pressure Test Logs",
          "DFT Paint & Coating Thickness Report",
          "Dimensional Mill Inspection Sign-off"
        ],
        icon: "Layers"
      },
      {
        id: "hdpe-pvc-fabrication",
        title: "HDPE/ PVC Pipe & Fittings Fabrication",
        shortDesc: "Electrofusion and butt-welding fabrication for high-density polyethylene and PVC drainage/water systems.",
        fullDesc: "Specialized fabrication of High-Density Polyethylene (HDPE), uPVC, and Polypropylene (PPR) piping spools, segmented swept bends, and bespoke drainage manifolds. We utilize calibrated butt-fusion and electrofusion welding machines to guarantee leak-free joints.",
        scope: [
          "Butt-fusion and electrofusion jointing of pressure HDPE pipes (SDR 11, SDR 17)",
          "Fabrication of custom angle segmented lobster-back elbows, tees, and reducers",
          "Corrosion-resistant chemical drainage and condensate manifold assembly",
          "Pressure testing and bead verification for quality assurance"
        ],
        standards: ["ISO 4427 Polyethylene Pipes", "DIN 8074/8075", "Kahramaa Water Specifications"],
        deliverables: [
          "Electrofusion Automated Barcode Weld Logs",
          "Butt Fusion Pressure-Time-Temperature Printout",
          "Hydrostatic Pressure Hold Certificate",
          "Material Conformity & Origin Declaration"
        ],
        icon: "Pipette"
      },
      {
        id: "container-refurbishment",
        title: "Refurbishment of Containers",
        shortDesc: "Engineering conversion and thermal insulation refurbishment of shipping containers into mobile MEP plant rooms and site offices.",
        fullDesc: "Structural refurbishment and engineering conversion of 20ft and 40ft ISO shipping containers into turnkey mobile pump houses, chiller skids, electrical generator housings, and air-conditioned site engineering offices for remote industrial sites in Qatar.",
        scope: [
          "Structural rust remediation, marine-grade protective painting, and roof reinforcement",
          "High-density rockwool / PIR thermal insulation and washable hygienic interior cladding",
          "Pre-installed electrical distribution boards, explosion-proof LED lighting, and VRF/split AC",
          "Pre-mounted mechanical equipment plinths, acoustic louvers, and vibration dampeners"
        ],
        standards: ["ISO 668 Container Standards", "Kahramaa Site Electrical Rules", "QCS 2014"],
        deliverables: [
          "Container Structural Integrity Sign-off",
          "Electrical Megger & Load Test Certificate",
          "Thermal Insulation Effectiveness Report",
          "Complete Mobile Unit Commissioning Dossier"
        ],
        icon: "Box"
      }
    ]
  },
  {
    id: "service-maintenance",
    slug: "service-maintenance",
    name: "Service & Maintenance",
    tagline: "24/7 Facility Maintenance, Preventive AMC & Lifecycle Asset Protection",
    shortDesc: "Proactive preventive maintenance programs, 24/7 emergency response, equipment overhauls, and comprehensive AMC contracts safeguarding asset lifecycle and uptime.",
    fullDesc: "Operating under our dedicated division Denali Technical Services, we deliver turnkey mechanical, electrical, and life safety maintenance services for commercial towers, educational campuses, industrial warehouses, and residential complexes across Qatar. Our tailored Annual Maintenance Contracts (AMC) protect expensive equipment warranties, lower energy consumption, eliminate catastrophic breakdown risks, and guarantee 24/7 emergency support.",
    image: "/services/service-amc.jpg",
    iconName: "ShieldCheck",
    subServicesCount: 1,
    keyBenefits: [
      "24/7 round-the-clock emergency breakdown response hotline in Doha",
      "Customized Annual Maintenance Contracts (Comprehensive & Non-Comprehensive)",
      "Predictive thermal imaging and vibration diagnostics before failure occurs",
      "Full computerized maintenance management and digital asset history tracking"
    ],
    subServices: [
      {
        id: "facility-service-maintenance",
        title: "Service & Maintenance",
        shortDesc: "Structured Annual Maintenance Contracts (AMC), predictive thermal imaging, refrigerant management, filter programs, and emergency repair.",
        fullDesc: "Our comprehensive Service & Maintenance program covers proactive preventive servicing, periodic inspections, thermal imaging, and round-the-clock corrective repair. We maintain chillers, package units, ducted split systems, ventilation fans, hydronic balancing valves, plumbing booster pumps, and electrical switchgear to ensure maximum operating uptime, optimum indoor environmental quality, and peak energy efficiency across Qatar.",
        scope: [
          "Structured quarterly and monthly preventive maintenance schedules for all HVAC & MEP assets",
          "24/7 rapid emergency dispatch team with dedicated mobile service vehicles in Doha",
          "Deep condenser and evaporator coil chemical/pressure cleaning with microbial treatment",
          "Infrared thermographic electrical switchboard scans to detect loose lugs and overheating phases",
          "Refrigerant leak detection, system pressure checks, and compressor oil acid testing",
          "Belt tensioning, dynamic bearing lubrication, and motor insulation resistance testing",
          "Filter replacement programs: Primary pre-filters, bag filters, and certified HEPA banks",
          "Detailed digital service logs, asset health indexes, and proactive lifecycle replacement reports"
        ],
        standards: [
          "ASHRAE 180 Standard Practice for Inspection & Maintenance of Commercial Building HVAC",
          "Kahramaa Electrical Safety & Water Quality Regulations",
          "NFPA 25 Inspection & Maintenance of Water-Based Fire Protection Systems",
          "ISO 9001:2015 Quality Management Systems"
        ],
        deliverables: [
          "Dedicated 24/7 Priority Emergency Service SLA",
          "Quarterly Comprehensive Asset Condition Audit",
          "Electrical Thermographic Infrared Inspection Reports",
          "Refrigerant Log & Environmental Compliance Dossier",
          "Annual Maintenance Certificate & Handover Review"
        ],
        icon: "ShieldCheck"
      }
    ]
  }
];

export function getServiceCategoryBySlug(slug: string): ServiceCategory | undefined {
  return servicesCategories.find((cat) => cat.slug === slug);
}
