const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "products");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const svgs = {
  "rheem-dx.svg": {
    title: "DX Commercial Air Conditioner",
    icon: `<rect x="60" y="80" width="280" height="240" rx="8" fill="#102D46" stroke="#087E8B" stroke-width="4"/>
           <rect x="80" y="100" width="110" height="90" rx="4" fill="#0B2035" stroke="#36B8B0" stroke-width="2"/>
           <circle cx="135" cy="145" r="35" fill="none" stroke="#F2A541" stroke-width="3" stroke-dasharray="6,4"/>
           <path d="M135 115 L135 175 M105 145 L165 145" stroke="#F2A541" stroke-width="3"/>
           <rect x="210" y="100" width="110" height="90" rx="4" fill="#0B2035" stroke="#36B8B0" stroke-width="2"/>
           <circle cx="265" cy="145" r="35" fill="none" stroke="#F2A541" stroke-width="3" stroke-dasharray="6,4"/>
           <path d="M265 115 L265 175 M235 145 L295 145" stroke="#F2A541" stroke-width="3"/>
           <line x1="80" y1="220" x2="320" y2="220" stroke="#36B8B0" stroke-width="2"/>
           <line x1="80" y1="240" x2="320" y2="240" stroke="#36B8B0" stroke-width="2"/>
           <line x1="80" y1="260" x2="320" y2="260" stroke="#36B8B0" stroke-width="2"/>
           <line x1="80" y1="280" x2="320" y2="280" stroke="#36B8B0" stroke-width="2"/>
           <rect x="50" y="320" width="300" height="15" rx="3" fill="#1F4965"/>`
  },
  "rheem-vrf.svg": {
    title: "Commercial VRF Outdoor System",
    icon: `<rect x="90" y="60" width="220" height="270" rx="6" fill="#102D46" stroke="#087E8B" stroke-width="4"/>
           <circle cx="200" cy="130" r="50" fill="#0B2035" stroke="#36B8B0" stroke-width="3"/>
           <circle cx="200" cy="130" r="15" fill="#F2A541"/>
           <path d="M200 85 L200 175 M155 130 L245 130" stroke="#36B8B0" stroke-width="3"/>
           <rect x="110" y="210" width="180" height="90" rx="4" fill="#0B2035" stroke="#64748B" stroke-width="2"/>
           <line x1="120" y1="230" x2="280" y2="230" stroke="#36B8B0" stroke-width="2"/>
           <line x1="120" y1="250" x2="280" y2="250" stroke="#36B8B0" stroke-width="2"/>
           <line x1="120" y1="270" x2="280" y2="270" stroke="#36B8B0" stroke-width="2"/>
           <rect x="80" y="330" width="240" height="15" rx="3" fill="#1F4965"/>`
  },
  "clima-uno-ahu.svg": {
    title: "Eurovent Air Handling Unit",
    icon: `<rect x="50" y="90" width="300" height="210" rx="4" fill="#102D46" stroke="#087E8B" stroke-width="4"/>
           <line x1="150" y1="90" x2="150" y2="300" stroke="#087E8B" stroke-width="3"/>
           <line x1="250" y1="90" x2="250" y2="300" stroke="#087E8B" stroke-width="3"/>
           <circle cx="100" cy="195" r="35" fill="#0B2035" stroke="#F2A541" stroke-width="3"/>
           <path d="M100 165 L100 225 M70 195 L130 195" stroke="#F2A541" stroke-width="3"/>
           <rect x="165" y="110" width="70" height="170" fill="#0B2035" stroke="#36B8B0" stroke-width="2"/>
           <line x1="175" y1="130" x2="225" y2="130" stroke="#36B8B0" stroke-width="2"/>
           <line x1="175" y1="160" x2="225" y2="160" stroke="#36B8B0" stroke-width="2"/>
           <line x1="175" y1="190" x2="225" y2="190" stroke="#36B8B0" stroke-width="2"/>
           <line x1="175" y1="220" x2="225" y2="220" stroke="#36B8B0" stroke-width="2"/>
           <line x1="175" y1="250" x2="225" y2="250" stroke="#36B8B0" stroke-width="2"/>
           <circle cx="270" cy="130" r="10" fill="#F2A541"/>
           <circle cx="270" cy="260" r="10" fill="#087E8B"/>
           <rect x="40" y="300" width="320" height="15" rx="3" fill="#1F4965"/>`
  },
  "clima-uno-fcu.svg": {
    title: "Chilled Water Fan Coil Unit",
    icon: `<rect x="60" y="110" width="280" height="170" rx="6" fill="#102D46" stroke="#087E8B" stroke-width="4"/>
           <rect x="80" y="130" width="100" height="130" rx="4" fill="#0B2035" stroke="#36B8B0" stroke-width="2"/>
           <circle cx="130" cy="195" r="30" fill="none" stroke="#F2A541" stroke-width="3"/>
           <path d="M130 170 L130 220 M105 195 L155 195" stroke="#F2A541" stroke-width="3"/>
           <rect x="200" y="130" width="120" height="130" rx="4" fill="#0B2035" stroke="#36B8B0" stroke-width="2"/>
           <line x1="210" y1="150" x2="310" y2="150" stroke="#36B8B0" stroke-width="2"/>
           <line x1="210" y1="175" x2="310" y2="175" stroke="#36B8B0" stroke-width="2"/>
           <line x1="210" y1="200" x2="310" y2="200" stroke="#36B8B0" stroke-width="2"/>
           <line x1="210" y1="225" x2="310" y2="225" stroke="#36B8B0" stroke-width="2"/>
           <circle cx="330" cy="140" r="8" fill="#F2A541"/>
           <circle cx="330" cy="240" r="8" fill="#087E8B"/>`
  },
  "clima-uno-ecology.svg": {
    title: "Kitchen Exhaust Ecology Unit",
    icon: `<rect x="50" y="100" width="300" height="190" rx="6" fill="#102D46" stroke="#087E8B" stroke-width="4"/>
           <rect x="70" y="120" width="60" height="150" fill="#0B2035" stroke="#F2A541" stroke-width="2"/>
           <path d="M85 140 L115 160 L85 180 L115 200 L85 220 L115 240" stroke="#F2A541" stroke-width="2" fill="none"/>
           <rect x="145" y="120" width="90" height="150" fill="#0B2035" stroke="#36B8B0" stroke-width="2"/>
           <line x1="160" y1="130" x2="160" y2="260" stroke="#36B8B0" stroke-width="3"/>
           <line x1="180" y1="130" x2="180" y2="260" stroke="#36B8B0" stroke-width="3"/>
           <line x1="200" y1="130" x2="200" y2="260" stroke="#36B8B0" stroke-width="3"/>
           <line x1="220" y1="130" x2="220" y2="260" stroke="#36B8B0" stroke-width="3"/>
           <rect x="250" y="120" width="80" height="150" fill="#0B2035" stroke="#64748B" stroke-width="2"/>
           <circle cx="290" cy="195" r="25" fill="none" stroke="#F2A541" stroke-width="2"/>`
  },
  "clima-uno-erv.svg": {
    title: "Energy Recovery Ventilator",
    icon: `<rect x="60" y="90" width="280" height="210" rx="8" fill="#102D46" stroke="#087E8B" stroke-width="4"/>
           <polygon points="120,130 280,130 280,260 120,260" fill="#0B2035" stroke="#36B8B0" stroke-width="2"/>
           <line x1="120" y1="130" x2="280" y2="260" stroke="#F2A541" stroke-width="3"/>
           <line x1="120" y1="260" x2="280" y2="130" stroke="#087E8B" stroke-width="3"/>
           <path d="M70 150 L110 150 M100 140 L110 150 L100 160" stroke="#36B8B0" stroke-width="3"/>
           <path d="M290 150 L330 150 M320 140 L330 150 L320 160" stroke="#F2A541" stroke-width="3"/>
           <path d="M330 240 L290 240 M300 230 L290 240 L300 250" stroke="#36B8B0" stroke-width="3"/>
           <path d="M110 240 L70 240 M80 230 L70 240 L80 250" stroke="#F2A541" stroke-width="3"/>`
  },
  "dogu-ahu.svg": {
    title: "DOGU Modular Air Handling Unit",
    icon: `<rect x="50" y="80" width="300" height="230" rx="6" fill="#102D46" stroke="#087E8B" stroke-width="4"/>
           <rect x="70" y="100" width="115" height="190" fill="#0B2035" stroke="#36B8B0" stroke-width="2"/>
           <circle cx="127" cy="195" r="40" fill="none" stroke="#F2A541" stroke-width="3"/>
           <rect x="200" y="100" width="130" height="190" fill="#0B2035" stroke="#36B8B0" stroke-width="2"/>
           <line x1="215" y1="130" x2="315" y2="130" stroke="#087E8B" stroke-width="3"/>
           <line x1="215" y1="160" x2="315" y2="160" stroke="#087E8B" stroke-width="3"/>
           <line x1="215" y1="190" x2="315" y2="190" stroke="#087E8B" stroke-width="3"/>
           <line x1="215" y1="220" x2="315" y2="220" stroke="#087E8B" stroke-width="3"/>
           <line x1="215" y1="250" x2="315" y2="250" stroke="#087E8B" stroke-width="3"/>`
  },
  "dogu-dehumidifier.svg": {
    title: "Industrial Desiccant Dehumidifier",
    icon: `<rect x="70" y="80" width="260" height="230" rx="8" fill="#102D46" stroke="#087E8B" stroke-width="4"/>
           <circle cx="200" cy="180" r="65" fill="#0B2035" stroke="#F2A541" stroke-width="4" stroke-dasharray="10,6"/>
           <circle cx="200" cy="180" r="25" fill="#087E8B"/>
           <path d="M200 130 L200 230 M150 180 L250 180" stroke="#36B8B0" stroke-width="3"/>
           <rect x="90" y="270" width="220" height="25" rx="3" fill="#0B2035" stroke="#64748B" stroke-width="2"/>`
  },
  "tecnair-ccu.svg": {
    title: "Close Control Precision Unit",
    icon: `<rect x="90" y="50" width="220" height="290" rx="6" fill="#102D46" stroke="#087E8B" stroke-width="4"/>
           <rect x="110" y="70" width="180" height="70" rx="4" fill="#0B2035" stroke="#36B8B0" stroke-width="2"/>
           <circle cx="160" cy="105" r="20" fill="none" stroke="#F2A541" stroke-width="2"/>
           <circle cx="240" cy="105" r="20" fill="none" stroke="#F2A541" stroke-width="2"/>
           <rect x="110" y="160" width="180" height="90" rx="4" fill="#0B2035" stroke="#36B8B0" stroke-width="2"/>
           <line x1="120" y1="180" x2="280" y2="180" stroke="#36B8B0" stroke-width="2"/>
           <line x1="120" y1="205" x2="280" y2="205" stroke="#36B8B0" stroke-width="2"/>
           <line x1="120" y1="230" x2="280" y2="230" stroke="#36B8B0" stroke-width="2"/>
           <rect x="120" y="270" width="160" height="50" rx="3" fill="#087E8B"/>
           <text x="200" y="300" text-anchor="middle" fill="#FFFFFF" font-size="12" font-family="sans-serif" font-weight="bold">MICROPROCESSOR</text>`
  },
  "emerson-compressor.svg": {
    title: "Copeland Scroll Compressor",
    icon: `<ellipse cx="200" cy="100" rx="75" ry="30" fill="#1F4965" stroke="#087E8B" stroke-width="3"/>
           <rect x="125" y="100" width="150" height="170" fill="#102D46" stroke="#087E8B" stroke-width="3"/>
           <ellipse cx="200" cy="270" rx="75" ry="30" fill="#102D46" stroke="#087E8B" stroke-width="3"/>
           <path d="M125 100 A75 30 0 0 0 275 100" fill="none" stroke="#087E8B" stroke-width="3"/>
           <circle cx="200" cy="170" r="30" fill="#0B2035" stroke="#F2A541" stroke-width="3"/>
           <path d="M185 170 Q200 150 215 170 T200 190" stroke="#F2A541" stroke-width="3" fill="none"/>
           <rect x="250" y="130" width="30" height="40" rx="4" fill="#087E8B"/>
           <rect x="100" y="280" width="200" height="15" rx="3" fill="#1F4965"/>`
  },
  "barcol-air-vav.svg": {
    title: "Variable Air Volume Terminal",
    icon: `<rect x="60" y="110" width="280" height="170" rx="6" fill="#102D46" stroke="#087E8B" stroke-width="4"/>
           <circle cx="100" cy="195" r="40" fill="#0B2035" stroke="#36B8B0" stroke-width="3"/>
           <line x1="100" y1="155" x2="100" y2="235" stroke="#F2A541" stroke-width="4"/>
           <rect x="160" y="140" width="90" height="110" rx="4" fill="#0B2035" stroke="#36B8B0" stroke-width="2"/>
           <rect x="260" y="125" width="60" height="140" fill="#087E8B" rx="3"/>
           <line x1="270" y1="145" x2="310" y2="145" stroke="#FFFFFF" stroke-width="2"/>
           <line x1="270" y1="175" x2="310" y2="175" stroke="#FFFFFF" stroke-width="2"/>
           <line x1="270" y1="205" x2="310" y2="205" stroke="#FFFFFF" stroke-width="2"/>
           <line x1="270" y1="235" x2="310" y2="235" stroke="#FFFFFF" stroke-width="2"/>`
  },
  "sp-ventilation.svg": {
    title: "Industrial Centrifugal Duct Fan",
    icon: `<circle cx="200" cy="190" r="100" fill="#102D46" stroke="#087E8B" stroke-width="5"/>
           <circle cx="200" cy="190" r="70" fill="#0B2035" stroke="#36B8B0" stroke-width="3"/>
           <circle cx="200" cy="190" r="25" fill="#F2A541"/>
           <path d="M200 120 Q225 155 200 190 Q175 225 200 260" stroke="#36B8B0" stroke-width="4" fill="none"/>
           <path d="M130 190 Q165 215 200 190 Q235 165 270 190" stroke="#36B8B0" stroke-width="4" fill="none"/>
           <rect x="60" y="160" width="40" height="60" rx="4" fill="#1F4965"/>
           <rect x="300" y="160" width="40" height="60" rx="4" fill="#1F4965"/>`
  },
  "sp-jet-fans.svg": {
    title: "Car Park Jet Induction Fan",
    icon: `<rect x="60" y="130" width="280" height="130" rx="65" fill="#102D46" stroke="#087E8B" stroke-width="4"/>
           <rect x="130" y="145" width="140" height="100" fill="#0B2035" stroke="#36B8B0" stroke-width="2"/>
           <circle cx="200" cy="195" r="35" fill="none" stroke="#F2A541" stroke-width="3"/>
           <path d="M200 160 L200 230 M165 195 L235 195" stroke="#F2A541" stroke-width="3"/>
           <rect x="160" y="90" width="80" height="40" rx="4" fill="#1F4965" stroke="#087E8B" stroke-width="2"/>
           <line x1="85" y1="155" x2="85" y2="235" stroke="#36B8B0" stroke-width="3"/>
           <line x1="315" y1="155" x2="315" y2="235" stroke="#F2A541" stroke-width="3"/>`
  },
  "weicco-expansion.svg": {
    title: "Bellows Expansion Joint",
    icon: `<rect x="50" y="120" width="30" height="150" rx="4" fill="#1F4965" stroke="#087E8B" stroke-width="3"/>
           <rect x="320" y="120" width="30" height="150" rx="4" fill="#1F4965" stroke="#087E8B" stroke-width="3"/>
           <rect x="80" y="140" width="240" height="110" fill="#102D46"/>
           <path d="M90 130 C105 100 120 100 135 195 C150 290 165 290 180 195 C195 100 210 100 225 195 C240 290 255 290 270 195 C285 100 300 100 310 130" stroke="#F2A541" stroke-width="5" fill="none"/>
           <line x1="50" y1="110" x2="350" y2="110" stroke="#36B8B0" stroke-width="4"/>
           <line x1="50" y1="280" x2="350" y2="280" stroke="#36B8B0" stroke-width="4"/>`
  },
  "weicco-vibration.svg": {
    title: "Seismic Spring Vibration Isolator",
    icon: `<rect x="100" y="70" width="200" height="30" rx="4" fill="#1F4965" stroke="#087E8B" stroke-width="3"/>
           <rect x="80" y="280" width="240" height="30" rx="4" fill="#1F4965" stroke="#087E8B" stroke-width="3"/>
           <path d="M160 100 C140 125 240 145 160 170 C140 195 240 215 160 240 C140 265 240 275 200 280" stroke="#F2A541" stroke-width="8" fill="none" stroke-linecap="round"/>
           <rect x="110" y="100" width="20" height="180" fill="#087E8B"/>
           <rect x="270" y="100" width="20" height="180" fill="#087E8B"/>`
  },
  "hattersley-valves.svg": {
    title: "Balancing & Commissioning Valve",
    icon: `<path d="M80 230 L150 190 L150 140 L80 140 Z" fill="#1F4965" stroke="#087E8B" stroke-width="3"/>
           <path d="M320 230 L250 190 L250 140 L320 140 Z" fill="#1F4965" stroke="#087E8B" stroke-width="3"/>
           <circle cx="200" cy="190" r="50" fill="#102D46" stroke="#087E8B" stroke-width="3"/>
           <rect x="190" y="80" width="20" height="70" fill="#36B8B0"/>
           <ellipse cx="200" cy="80" rx="45" ry="15" fill="#F2A541" stroke="#0B2035" stroke-width="3"/>
           <circle cx="160" cy="220" r="8" fill="#F2A541"/>
           <circle cx="240" cy="220" r="8" fill="#F2A541"/>`
  },
  "frese-picv.svg": {
    title: "Dynamic PICV Balancing Valve",
    icon: `<rect x="70" y="180" width="260" height="60" rx="4" fill="#102D46" stroke="#087E8B" stroke-width="3"/>
           <circle cx="200" cy="210" r="40" fill="#1F4965" stroke="#36B8B0" stroke-width="3"/>
           <rect x="160" y="70" width="80" height="90" rx="6" fill="#0B2035" stroke="#F2A541" stroke-width="3"/>
           <rect x="180" y="85" width="40" height="25" rx="3" fill="#087E8B"/>
           <text x="200" y="102" text-anchor="middle" fill="#FFFFFF" font-size="10" font-family="sans-serif">MOD</text>
           <circle cx="200" cy="135" r="10" fill="#F2A541"/>
           <line x1="200" y1="160" x2="200" y2="180" stroke="#F2A541" stroke-width="4"/>`
  },
  "alfa-laval-phex.svg": {
    title: "Gasketed Plate Heat Exchanger",
    icon: `<rect x="90" y="70" width="30" height="250" rx="4" fill="#1F4965" stroke="#087E8B" stroke-width="3"/>
           <rect x="280" y="70" width="30" height="250" rx="4" fill="#1F4965" stroke="#087E8B" stroke-width="3"/>
           <rect x="120" y="90" width="160" height="210" fill="#102D46"/>
           <line x1="135" y1="90" x2="135" y2="300" stroke="#36B8B0" stroke-width="2"/>
           <line x1="150" y1="90" x2="150" y2="300" stroke="#F2A541" stroke-width="2"/>
           <line x1="165" y1="90" x2="165" y2="300" stroke="#36B8B0" stroke-width="2"/>
           <line x1="180" y1="90" x2="180" y2="300" stroke="#F2A541" stroke-width="2"/>
           <line x1="195" y1="90" x2="195" y2="300" stroke="#36B8B0" stroke-width="2"/>
           <line x1="210" y1="90" x2="210" y2="300" stroke="#F2A541" stroke-width="2"/>
           <line x1="225" y1="90" x2="225" y2="300" stroke="#36B8B0" stroke-width="2"/>
           <line x1="240" y1="90" x2="240" y2="300" stroke="#F2A541" stroke-width="2"/>
           <line x1="255" y1="90" x2="255" y2="300" stroke="#36B8B0" stroke-width="2"/>
           <circle cx="70" cy="115" r="18" fill="#F2A541"/>
           <circle cx="70" cy="275" r="18" fill="#087E8B"/>
           <circle cx="330" cy="115" r="18" fill="#087E8B"/>
           <circle cx="330" cy="275" r="18" fill="#F2A541"/>`
  },
  "mueller-copper.svg": {
    title: "ACR Copper Coils & Fittings",
    icon: `<circle cx="200" cy="190" r="90" fill="none" stroke="#F2A541" stroke-width="12"/>
           <circle cx="200" cy="190" r="70" fill="none" stroke="#e59632" stroke-width="10"/>
           <circle cx="200" cy="190" r="50" fill="none" stroke="#F2A541" stroke-width="8"/>
           <rect x="185" y="100" width="30" height="180" rx="4" fill="#0B2035" opacity="0.6"/>`
  },
  "wednesbury-pipes.svg": {
    title: "BS EN 1057 Medical Copper Tubes",
    icon: `<rect x="60" y="110" width="280" height="25" rx="4" fill="#F2A541" stroke="#e59632" stroke-width="2"/>
           <rect x="60" y="155" width="280" height="25" rx="4" fill="#F2A541" stroke="#e59632" stroke-width="2"/>
           <rect x="60" y="200" width="280" height="25" rx="4" fill="#F2A541" stroke="#e59632" stroke-width="2"/>
           <rect x="60" y="245" width="280" height="25" rx="4" fill="#F2A541" stroke="#e59632" stroke-width="2"/>
           <rect x="110" y="95" width="20" height="190" rx="3" fill="#087E8B" opacity="0.7"/>
           <rect x="270" y="95" width="20" height="190" rx="3" fill="#087E8B" opacity="0.7"/>`
  },
  "flowflex-fittings.svg": {
    title: "Brass Compression Fittings",
    icon: `<circle cx="200" cy="190" r="45" fill="#F2A541" stroke="#102D46" stroke-width="3"/>
           <rect x="80" y="170" width="80" height="40" rx="4" fill="#F2A541" stroke="#102D46" stroke-width="3"/>
           <rect x="240" y="170" width="80" height="40" rx="4" fill="#F2A541" stroke="#102D46" stroke-width="3"/>
           <rect x="180" y="70" width="40" height="80" rx="4" fill="#F2A541" stroke="#102D46" stroke-width="3"/>
           <circle cx="200" cy="190" r="20" fill="#0B2035"/>`
  },
  "csa-prv.svg": {
    title: "Direct Acting Pressure Reducing Valve",
    icon: `<rect x="70" y="190" width="260" height="50" rx="4" fill="#1F4965" stroke="#087E8B" stroke-width="3"/>
           <circle cx="200" cy="150" r="55" fill="#102D46" stroke="#36B8B0" stroke-width="3"/>
           <line x1="200" y1="95" x2="200" y2="60" stroke="#F2A541" stroke-width="6"/>
           <circle cx="200" cy="55" r="15" fill="#F2A541"/>
           <circle cx="130" cy="170" r="10" fill="#36B8B0"/>
           <circle cx="270" cy="170" r="10" fill="#F2A541"/>`
  },
  "rbm-prv.svg": {
    title: "RBM Pressure Reducing Valve",
    icon: `<rect x="80" y="180" width="240" height="55" rx="6" fill="#102D46" stroke="#087E8B" stroke-width="3"/>
           <path d="M160 180 L160 110 L240 110 L240 180 Z" fill="#1F4965" stroke="#36B8B0" stroke-width="3"/>
           <circle cx="200" cy="85" r="25" fill="#0B2035" stroke="#F2A541" stroke-width="3"/>
           <line x1="200" y1="85" x2="215" y2="75" stroke="#F2A541" stroke-width="2"/>`
  },
  "mueller-hydrant.svg": {
    title: "AWWA Fire Hydrant & Gate Valve",
    icon: `<rect x="160" y="80" width="80" height="200" rx="10" fill="#D94B4B" stroke="#0B2035" stroke-width="4"/>
           <rect x="140" y="280" width="120" height="30" rx="4" fill="#1F4965" stroke="#0B2035" stroke-width="3"/>
           <ellipse cx="200" cy="80" rx="40" ry="15" fill="#D94B4B" stroke="#0B2035" stroke-width="3"/>
           <circle cx="125" cy="150" r="22" fill="#F2A541" stroke="#0B2035" stroke-width="3"/>
           <circle cx="275" cy="150" r="22" fill="#F2A541" stroke="#0B2035" stroke-width="3"/>
           <circle cx="200" cy="170" r="30" fill="#F2A541" stroke="#0B2035" stroke-width="3"/>`
  },
  "strut-framing.svg": {
    title: "Modular Metal Framing & Channels",
    icon: `<rect x="70" y="100" width="260" height="40" rx="3" fill="#64748B" stroke="#102D46" stroke-width="3"/>
           <rect x="70" y="170" width="260" height="40" rx="3" fill="#64748B" stroke="#102D46" stroke-width="3"/>
           <rect x="70" y="240" width="260" height="40" rx="3" fill="#64748B" stroke="#102D46" stroke-width="3"/>
           <circle cx="110" cy="120" r="8" fill="#0B2035"/>
           <circle cx="160" cy="120" r="8" fill="#0B2035"/>
           <circle cx="210" cy="120" r="8" fill="#0B2035"/>
           <circle cx="260" cy="120" r="8" fill="#0B2035"/>
           <circle cx="110" cy="190" r="8" fill="#0B2035"/>
           <circle cx="160" cy="190" r="8" fill="#0B2035"/>
           <circle cx="210" cy="190" r="8" fill="#0B2035"/>
           <circle cx="260" cy="190" r="8" fill="#0B2035"/>
           <circle cx="110" cy="260" r="8" fill="#0B2035"/>
           <circle cx="160" cy="260" r="8" fill="#0B2035"/>
           <circle cx="210" cy="260" r="8" fill="#0B2035"/>
           <circle cx="260" cy="260" r="8" fill="#0B2035"/>`
  },
  "alpak-solar.svg": {
    title: "Thermosiphonic Solar Water System",
    icon: `<rect x="90" y="70" width="220" height="60" rx="20" fill="#1F4965" stroke="#087E8B" stroke-width="3"/>
           <rect x="70" y="150" width="260" height="150" rx="4" fill="#0B2035" stroke="#087E8B" stroke-width="3" transform="skewX(-10)"/>
           <line x1="110" y1="160" x2="110" y2="290" stroke="#36B8B0" stroke-width="2"/>
           <line x1="150" y1="160" x2="150" y2="290" stroke="#36B8B0" stroke-width="2"/>
           <line x1="190" y1="160" x2="190" y2="290" stroke="#36B8B0" stroke-width="2"/>
           <line x1="230" y1="160" x2="230" y2="290" stroke="#36B8B0" stroke-width="2"/>
           <line x1="270" y1="160" x2="270" y2="290" stroke="#36B8B0" stroke-width="2"/>
           <circle cx="200" cy="100" r="10" fill="#F2A541"/>`
  },
  "general-pumps.svg": {
    title: "End-Suction Centrifugal Water Pump",
    icon: `<circle cx="160" cy="210" r="60" fill="#102D46" stroke="#087E8B" stroke-width="4"/>
           <circle cx="160" cy="210" r="25" fill="#0B2035" stroke="#F2A541" stroke-width="3"/>
           <rect x="145" y="80" width="30" height="70" fill="#1F4965" stroke="#087E8B" stroke-width="3"/>
           <rect x="220" y="160" width="120" height="90" rx="4" fill="#1F4965" stroke="#36B8B0" stroke-width="3"/>
           <line x1="240" y1="170" x2="240" y2="240" stroke="#087E8B" stroke-width="3"/>
           <line x1="260" y1="170" x2="260" y2="240" stroke="#087E8B" stroke-width="3"/>
           <line x1="280" y1="170" x2="280" y2="240" stroke="#087E8B" stroke-width="3"/>
           <line x1="300" y1="170" x2="300" y2="240" stroke="#087E8B" stroke-width="3"/>
           <rect x="110" y="270" width="230" height="15" rx="3" fill="#0B2035"/>`
  },
  "winters-gauge.svg": {
    title: "Stainless Steel Dial Pressure Gauge",
    icon: `<circle cx="200" cy="160" r="85" fill="#FFFFFF" stroke="#102D46" stroke-width="6"/>
           <circle cx="200" cy="160" r="75" fill="none" stroke="#64748B" stroke-width="2"/>
           <circle cx="200" cy="160" r="10" fill="#0B2035"/>
           <line x1="200" y1="160" x2="245" y2="120" stroke="#D94B4B" stroke-width="4" stroke-linecap="round"/>
           <text x="200" y="205" text-anchor="middle" fill="#0B2035" font-size="12" font-family="sans-serif" font-weight="bold">bar / psi</text>
           <rect x="190" y="245" width="20" height="60" fill="#F2A541" stroke="#0B2035" stroke-width="2"/>`
  },
  "landis-btu.svg": {
    title: "Ultrasonic Thermal BTU Energy Meter",
    icon: `<rect x="70" y="190" width="260" height="50" rx="4" fill="#F2A541" stroke="#102D46" stroke-width="3"/>
           <circle cx="130" cy="215" r="12" fill="#087E8B"/>
           <circle cx="270" cy="215" r="12" fill="#087E8B"/>
           <rect x="140" y="80" width="120" height="90" rx="6" fill="#102D46" stroke="#087E8B" stroke-width="3"/>
           <rect x="155" y="95" width="90" height="40" rx="3" fill="#0B2035" stroke="#36B8B0" stroke-width="1.5"/>
           <text x="200" y="122" text-anchor="middle" fill="#36B8B0" font-size="14" font-family="monospace">12458 kWh</text>
           <line x1="200" y1="170" x2="200" y2="190" stroke="#087E8B" stroke-width="4"/>`
  },
  "axio-sensors.svg": {
    title: "CO Sensor & Multi-Gas Detection Panel",
    icon: `<rect x="110" y="70" width="180" height="240" rx="10" fill="#102D46" stroke="#087E8B" stroke-width="4"/>
           <circle cx="200" cy="140" r="40" fill="#0B2035" stroke="#36B8B0" stroke-width="3"/>
           <circle cx="200" cy="140" r="25" fill="#1F4965"/>
           <circle cx="200" cy="140" r="5" fill="#F2A541"/>
           <rect x="140" y="210" width="120" height="35" rx="4" fill="#0B2035" stroke="#36B8B0" stroke-width="1.5"/>
           <text x="200" y="233" text-anchor="middle" fill="#F2A541" font-size="12" font-family="monospace">024 PPM</text>
           <circle cx="150" cy="270" r="6" fill="#16865C"/>
           <circle cx="180" cy="270" r="6" fill="#F2A541"/>
           <circle cx="210" cy="270" r="6" fill="#D94B4B"/>`
  },
  "patterson-pump.svg": {
    title: "UL/FM Split-Case Fire Pump Skid",
    icon: `<rect x="60" y="260" width="280" height="30" rx="4" fill="#1F4965" stroke="#0B2035" stroke-width="3"/>
           <circle cx="140" cy="200" r="55" fill="#D94B4B" stroke="#0B2035" stroke-width="4"/>
           <circle cx="140" cy="200" r="20" fill="#F2A541"/>
           <rect x="125" y="90" width="30" height="60" fill="#D94B4B" stroke="#0B2035" stroke-width="3"/>
           <rect x="210" y="150" width="110" height="100" rx="4" fill="#D94B4B" stroke="#0B2035" stroke-width="3"/>
           <line x1="230" y1="160" x2="230" y2="240" stroke="#0B2035" stroke-width="3"/>
           <line x1="250" y1="160" x2="250" y2="240" stroke="#0B2035" stroke-width="3"/>
           <line x1="270" y1="160" x2="270" y2="240" stroke="#0B2035" stroke-width="3"/>
           <line x1="290" y1="160" x2="290" y2="240" stroke="#0B2035" stroke-width="3"/>`
  },
  "reliable-sprinkler.svg": {
    title: "Quick Response Fire Sprinkler Head",
    icon: `<path d="M170 120 L230 120 L220 180 L180 180 Z" fill="#F2A541" stroke="#0B2035" stroke-width="3"/>
           <rect x="190" y="70" width="20" height="50" fill="#F2A541" stroke="#0B2035" stroke-width="2"/>
           <path d="M160 180 C160 250 200 270 200 270 C200 270 240 250 240 180" fill="none" stroke="#F2A541" stroke-width="5"/>
           <rect x="195" y="180" width="10" height="70" rx="4" fill="#D94B4B"/>
           <ellipse cx="200" cy="275" rx="35" ry="8" fill="#F2A541" stroke="#0B2035" stroke-width="2"/>`
  },
  "eurofeu-extinguisher.svg": {
    title: "Certified Fire Extinguisher",
    icon: `<rect x="150" y="110" width="100" height="190" rx="25" fill="#D94B4B" stroke="#0B2035" stroke-width="4"/>
           <path d="M180 110 L180 80 L220 80 L220 110" fill="#1F4965"/>
           <rect x="170" y="60" width="40" height="20" rx="3" fill="#1F4965"/>
           <path d="M190 70 L245 45" stroke="#1F4965" stroke-width="4"/>
           <circle cx="210" cy="90" r="10" fill="#F2A541" stroke="#0B2035" stroke-width="2"/>
           <path d="M220 85 C260 85 270 180 260 210" fill="none" stroke="#0B2035" stroke-width="5"/>
           <rect x="165" y="160" width="70" height="70" rx="3" fill="#FFFFFF"/>
           <text x="200" y="195" text-anchor="middle" fill="#D94B4B" font-size="18" font-family="sans-serif" font-weight="bold">ABC</text>`
  },
  "newage-hose.svg": {
    title: "Synthetic Fire Delivery Hose & Nozzle",
    icon: `<circle cx="180" cy="190" r="80" fill="none" stroke="#D94B4B" stroke-width="18"/>
           <circle cx="180" cy="190" r="55" fill="none" stroke="#D94B4B" stroke-width="14"/>
           <polygon points="260,150 330,120 330,180" fill="#F2A541" stroke="#0B2035" stroke-width="3"/>
           <rect x="230" y="140" width="40" height="30" rx="3" fill="#1F4965"/>`
  },
  "ayvaz-drops.svg": {
    title: "Flexible Stainless Sprinkler Drop",
    icon: `<rect x="60" y="110" width="30" height="50" rx="3" fill="#1F4965"/>
           <rect x="310" y="210" width="30" height="50" rx="3" fill="#F2A541"/>
           <path d="M90 135 C150 135 150 235 310 235" fill="none" stroke="#64748B" stroke-width="12"/>
           <line x1="50" y1="90" x2="350" y2="90" stroke="#087E8B" stroke-width="4"/>`
  },
  "flotek-cabinet.svg": {
    title: "Stainless Steel Fire Hose Cabinet",
    icon: `<rect x="90" y="70" width="220" height="260" rx="6" fill="#D94B4B" stroke="#0B2035" stroke-width="4"/>
           <rect x="110" y="90" width="180" height="220" rx="4" fill="#0B2035" stroke="#FFFFFF" stroke-width="3"/>
           <circle cx="200" cy="200" r="60" fill="none" stroke="#D94B4B" stroke-width="10"/>
           <circle cx="200" cy="200" r="25" fill="#F2A541"/>`
  },
  "siex-suppression.svg": {
    title: "Clean Agent Fire Suppression System",
    icon: `<rect x="90" y="110" width="60" height="190" rx="15" fill="#D94B4B" stroke="#0B2035" stroke-width="3"/>
           <rect x="170" y="110" width="60" height="190" rx="15" fill="#D94B4B" stroke="#0B2035" stroke-width="3"/>
           <rect x="250" y="110" width="60" height="190" rx="15" fill="#D94B4B" stroke="#0B2035" stroke-width="3"/>
           <line x1="80" y1="80" x2="320" y2="80" stroke="#087E8B" stroke-width="5"/>
           <line x1="120" y1="80" x2="120" y2="110" stroke="#087E8B" stroke-width="3"/>
           <line x1="200" y1="80" x2="200" y2="110" stroke="#087E8B" stroke-width="3"/>
           <line x1="280" y1="80" x2="280" y2="110" stroke="#087E8B" stroke-width="3"/>`
  },
  "wilson-fdc.svg": {
    title: "Siamese Fire Department Connection",
    icon: `<path d="M150 250 L150 190 L110 130 L110 90 L160 90 L180 150 L220 150 L240 90 L290 90 L290 130 L250 190 L250 250 Z" fill="#F2A541" stroke="#0B2035" stroke-width="4"/>
           <ellipse cx="135" cy="90" rx="25" ry="10" fill="#1F4965"/>
           <ellipse cx="265" cy="90" rx="25" ry="10" fill="#1F4965"/>
           <rect x="130" y="250" width="140" height="20" rx="3" fill="#102D46"/>`
  },
  "lingjack-valves.svg": {
    title: "Flanged Oblique Fire Landing Valve",
    icon: `<rect x="110" y="240" width="90" height="30" rx="4" fill="#F2A541" stroke="#0B2035" stroke-width="3"/>
           <path d="M155 240 L155 180 L230 130" stroke="#F2A541" stroke-width="25" stroke-linecap="round"/>
           <ellipse cx="230" cy="130" rx="25" ry="15" fill="#1F4965" stroke="#0B2035" stroke-width="3"/>
           <ellipse cx="155" cy="100" rx="35" ry="12" fill="#D94B4B" stroke="#0B2035" stroke-width="3"/>
           <line x1="155" y1="100" x2="155" y2="170" stroke="#0B2035" stroke-width="5"/>`
  },
  "ceasefire-auto.svg": {
    title: "Automatic Modular Ceiling Extinguisher",
    icon: `<ellipse cx="200" cy="170" rx="90" ry="70" fill="#D94B4B" stroke="#0B2035" stroke-width="4"/>
           <circle cx="200" cy="90" r="15" fill="#1F4965" stroke="#0B2035" stroke-width="3"/>
           <rect x="192" y="240" width="16" height="35" fill="#F2A541" stroke="#0B2035" stroke-width="2"/>
           <ellipse cx="200" cy="275" rx="20" ry="6" fill="#F2A541"/>`
  },
  "dewalt-tools.svg": {
    title: "Heavy-Duty SDS Industrial Rotary Hammer",
    icon: `<rect x="80" y="140" width="180" height="70" rx="6" fill="#F2A541" stroke="#0B2035" stroke-width="4"/>
           <rect x="260" y="155" width="80" height="35" rx="4" fill="#102D46" stroke="#0B2035" stroke-width="3"/>
           <rect x="100" y="210" width="40" height="70" rx="4" fill="#0B2035"/>
           <rect x="90" y="270" width="60" height="25" rx="3" fill="#F2A541" stroke="#0B2035" stroke-width="2"/>
           <line x1="340" y1="172" x2="380" y2="172" stroke="#64748B" stroke-width="8" stroke-linecap="round"/>`
  }
};

for (const [filename, item] of Object.entries(svgs)) {
  const content = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 360" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EDF2F7"/>
    </linearGradient>
  </defs>
  <rect width="400" height="360" fill="url(#bgGrad)" rx="8"/>
  <circle cx="200" cy="180" r="130" fill="#FFFFFF" opacity="0.8"/>
  ${item.icon}
  <rect x="20" y="325" width="360" height="25" rx="4" fill="#0B2035" opacity="0.05"/>
</svg>`;
  fs.writeFileSync(path.join(dir, filename), content);
}
console.log("Successfully generated", Object.keys(svgs).length, "SVG product graphics!");
