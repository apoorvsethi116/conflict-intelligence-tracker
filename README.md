# 🌐 CONFLICT INTEL — Predictive Geopolitical Intelligence & Spatio-Temporal Analysis

[cite_start]**Conflict Intel** is an advanced research-oriented platform developed by **Apoorv Sethi**[cite: 1]. [cite_start]It leverages **Spatio-Temporal Graph Neural Networks (ST-GNNs)** and **3D Visualization** to predict and analyze global conflict escalations[cite: 32, 33]. [cite_start]While standard trackers focus on historical reporting, this project implements a predictive inference engine to identify high-risk zones before escalation.

---

## 🔬 Research & Predictive Methodology

The core of this platform is a transition from static data to **Dynamic Relationship Mapping**.

### 1. Graph-Based Representation
Unlike traditional datasets, geopolitical events are treated as a **Dynamic Graph** $G = (V, E)$.
* **Nodes ($V$):** Sovereign nations or regional entities, enriched with socio-economic features.
* **Edges ($E$):** Geopolitical dependencies, border proximity, and trade-alliance vectors.

### 2. Predictive Inference Engine
The system utilizes a **Gated Recurrent Graph Convolutional Network (GR-GCN)** to analyze:
* **Spatial Dependencies:** How instability in one node (e.g., a neighboring country) propagates through the network.
* [cite_start]**Temporal Trends:** Learning from chronological event sequences to forecast severity shifts in active conflict zones[cite: 36].

---

## ✨ Features

- **Interactive 3D Globe** — Three.js powered globe with draggable rotation, zoom, and conflict markers
- **Conflict Type Color Coding** — Civil Wars (orange), Proxy Wars (purple), Interstate Wars (red)
- **Severity Index** — Visual severity scoring (1–10) with animated indicator rings on the globe
- **Hover Tooltips** — Real-time casualty counts, displacement figures, conflict type on hover
- **Full Intel Report** — Dedicated detail page per conflict with 4 tabs:
  - Overview (summary, casualties, parties, territory)
  - Military Intel (side-by-side force comparison with bar charts)
  - Power Rankings (Global Fire Power Index top 10 table)
  - Timeline (chronological key events)
- **Filtering & Search** — Filter by conflict type, search by country
- **Dark Tactical UI** — Military-aesthetic design with Orbitron + Rajdhani + Share Tech Mono fonts
- **API-Ready Architecture** — Backend Express API ready to swap static JSON for live data

---

## 🗂 Project Structure

```
conflict-tracker/
├── server/                  # Express.js backend
│   ├── data/
│   │   ├── conflicts.json   # ← ADD YOUR CONFLICTS HERE
│   │   └── powerRankings.json
│   ├── routes/
│   │   ├── conflicts.js
│   │   └── rankings.js
│   ├── index.js
│   └── package.json
│
├── client/                  # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Globe.js           # Three.js 3D globe
│   │   │   ├── Navbar.js
│   │   │   ├── ConflictCard.js    # Sidebar conflict cards
│   │   │   ├── StatsBar.js        # Top statistics bar
│   │   │   ├── MilitaryComparison.js
│   │   │   └── PowerRankings.js
│   │   ├── pages/
│   │   │   ├── HomePage.js        # Globe + sidebar layout
│   │   │   └── ConflictDetailPage.js
│   │   ├── data/
│   │   │   └── conflictsData.js   # Frontend data (mirrors server JSON)
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
│
├── package.json             # Root (monorepo runner)
└── README.md
```

---

## 🚀 Setup & Running

### Prerequisites
- Node.js v18+
- npm v9+

### 1. Install dependencies

```bash
# From the root conflict-tracker/ directory
npm install
npm run install:all
```

Or manually:
```bash
cd server && npm install
cd ../client && npm install
```

### 2. Run development servers

```bash
# From root — runs both simultaneously
npm run dev
```

Or separately:
```bash
# Terminal 1 — Backend API on http://localhost:5000
npm run dev:server

# Terminal 2 — React frontend on http://localhost:3000
npm run dev:client
```

### 3. Open the app

Visit **http://localhost:3000**

---


```

### Method 2: Connect a Live API (future)

In `client/src/pages/HomePage.js`, replace the static import with an axios call:

```javascript
// Replace this:
import { conflictsData } from '../data/conflictsData';

// With this (when backend is live):
const [conflicts, setConflicts] = useState([]);
useEffect(() => {
  axios.get('/api/conflicts').then(res => setConflicts(res.data.data));
}, []);
```

---

## 🎮 Globe Controls

| Action | Control |
|--------|---------|
| Rotate | Click + Drag |
| Zoom | Scroll wheel |
| Inspect conflict | Click on marker |
| Auto-rotate | Resumes 3s after drag |

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/conflicts` | All conflicts |
| GET | `/api/conflicts?type=civil+war` | Filter by type |
| GET | `/api/conflicts?severity=8` | Filter by min severity |
| GET | `/api/conflicts/:id` | Single conflict |
| GET | `/api/conflicts/country/:code` | By country code |
| GET | `/api/rankings` | All power rankings |
| GET | `/api/rankings/:code` | Single country ranking |

---

## 🔮 Future Roadmap

- [ ] MongoDB integration (replace JSON files with Mongoose models)
- [ ] Live API data (ACLED, GDELT, ReliefWeb, UNOCHA)
- [ ] Country boundary GeoJSON rendering on globe
- [ ] News feed integration per conflict
- [ ] Conflict heat-map layer toggle
- [ ] Admin dashboard for adding/editing conflicts
- [ ] WebSocket live updates
- [ ] Export reports as PDF

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Machine Learning** | [cite_start]**PyTorch Geometric (GNNs)**, **Sentence-BERT (NLP)** [cite: 26, 43] |
| **Data Orchestration** | [cite_start]**Python (FastAPI)**, **Node.js (Express)** [cite: 32] |
| **3D Visualization** | [cite_start]**Three.js**, **React.js (v18)** [cite: 32, 33] |
| **State Management** | [cite_start]**MERN Stack** (MongoDB, Express, React, Node) [cite: 19, 32] |
| **Analytics/Charts** | **Recharts**, **Framer Motion** |

---

## 🗂 System Architecture

The platform operates as a **3-tier microservice architecture**:

1.  **Ingestion Layer:** Scrapes and parses real-time geopolitical data using Python.
2.  [cite_start]**Inference Layer:** A Python-based FastAPI microservice that runs the ST-GNN model to generate prediction scores.
3.  [cite_start]**Visualization Layer:** A React-based frontend that renders the predictive data onto a 3D Three.js environment[cite: 32, 33].

---

## 📊 Data Schema 
``json
// {
//   "node_id": "UKR-01",
//   "coordinates": { "lat": 48.37, "lng": 31.16 },
//   "features": {
//     "economic_stability": 0.42,
//     "border_tension_index": 0.89,
//     "alliance_weight": 0.75
//   },
//   "predictions": {
//     "escalation_probability": 0.72,
//     "forecasted_severity": 8.4,
//     "time_horizon": "14-Days"
//   }
// }