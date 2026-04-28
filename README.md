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

* [cite_start]**3D Global Inference Map** — An interactive Three.js powered globe with draggable rotation and zoom[cite: 32, 33].
* [cite_start]**Predictive Severity Scoring** — Implements a weighted scoring algorithm to forecast conflict intensity on a scale of 1–10 using dynamic markers and severity-based visualization[cite: 34].
* [cite_start]**Military Comparison & Analytics** — Side-by-side force distribution charts and Global Fire Power (GFP) data integration[cite: 36].
* [cite_start]**NLP Intelligence Pipeline** — Uses **Sentence-BERT** embeddings to process unstructured reports and categorize conflict types with high semantic accuracy[cite: 26, 43].
* **Tactical UI/UX** — A high-fidelity "Dark Tactical" interface designed for intelligence analysts using **Orbitron** and **Share Tech Mono** typography.

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

## 📊 Data Schema (Predictive Model)

```json
{
  "node_id": "UKR-01",
  "coordinates": { "lat": 48.37, "lng": 31.16 },
  "features": {
    "economic_stability": 0.42,
    "border_tension_index": 0.89,
    "alliance_weight": 0.75
  },
  "predictions": {
    "escalation_probability": 0.72,
    "forecasted_severity": 8.4,
    "time_horizon": "14-Days"
  }
}