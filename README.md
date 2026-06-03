# 🧠 Memory in the Age of AI Agents — Interactive Survey Explorer

An interactive web encyclopedia built from the ACM survey paper:

> **"Memory in the Age of AI Agents"**
> Zhang et al., 2025 · [arXiv:2512.13564](https://arxiv.org/abs/2512.13564)

The site visualizes the paper's complete taxonomy, benchmarks, frameworks, and future frontiers in a clean, explorable interface styled with a Japandi design theme.

---

## 🌐 Live Site

**[shanmukh05.github.io/ai_agents_memory/](https://shanmukh05.github.io/ai_agents_memory/)**

---

## 📄 Paper

| Field | Details |
|---|---|
| Title | Memory in the Age of AI Agents |
| Authors | Zhang et al. |
| Year | 2025 |
| arXiv | [2512.13564](https://arxiv.org/abs/2512.13564) |
| Topics | Agent Memory · RAG · Context Engineering · Lifelong Learning |

---

## 📚 What's Inside

| Page | Description |
|---|---|
| **Home** | Landing page with key highlights, math preliminaries, and survey overview |
| **Memory** | Deep-dive into Memory types (LLM vs Agent vs RAG), RAG paradigms (Modular, Graph, Agentic), and Context Engineering |
| **Taxonomy** | Interactive horizontal SVG tree with three roots — Form (Constructing Memory), Functional (Types of Memory), Dynamic (Operating Memory) — all collapsible with a detail sidebar and full citation links |
| **Frameworks** | Searchable/filterable directory of 25 open-source agent memory engines (Table 9 from survey) |
| **Benchmarks** | Searchable/filterable directory of 35 evaluation benchmarks and datasets (Table 8 from survey) |
| **Future** | 6 emerging research frontiers with architecture descriptions and code sketches |

---

## 🗂 Taxonomy Structure

The Taxonomy Explorer covers the full hierarchy from the survey:

```
Constructing Memory (Form)
├── Token Level Memory
│   ├── Flat (Dialogue · Preference · Profile · Experience · Multimodal)
│   ├── Planar (Tree · Graph · Hybrid)
│   └── Hierarchical (Pyramid · Multi-layer)
├── Parametric Memory
│   ├── Internal (Pre-train · Mid-train · Post-train)
│   └── External (Adapter-based · Auxiliary LM-based)
└── Latent Memory
    ├── Generate (Single Modal · Multimodal)
    ├── Reuse
    └── Transform

Types of Memory (Functional)
├── Factual (User · Environment)
├── Experiential (Individual · Social)
└── Working Memory (Sensory · Short-term · Long-term)

Operating Memory (Dynamic)
├── Formation (Capture · Compress · Connect)
├── Evolution (Update · Consolidate · Forget)
└── Retrieval (Query · Score · Context)
```

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, static export)
- **Styling**: Vanilla CSS Modules — Japandi theme (warm linen, charcoal, sage green, terracotta)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev)
- **Fonts**: [Outfit](https://fonts.google.com/specimen/Outfit) + [Fira Code](https://fonts.google.com/specimen/Fira+Code) (Google Fonts)
- **Deployment**: GitHub Pages via GitHub Actions

---

## 🚀 Running Locally

```bash
# Clone
git clone https://github.com/shanmukh/ai_agents_memory.git
cd ai_agents_memory

# Install
npm install

# Dev server (http://localhost:3001)
npm run dev

# Static build (outputs to /out)
npm run build
```

---

## 📦 Deploying to GitHub Pages

The repository uses GitHub Actions for continuous deployment. Every push to `main` triggers:

1. `npm ci` — install dependencies
2. `npm run build` — Next.js static export → `/out`
3. Upload `/out` → deploy to GitHub Pages

**One-time setup in your GitHub repo:**
- Go to **Settings → Pages → Source** → select **GitHub Actions**
- Push to `main` — the workflow handles the rest

> **Note:** If your repo name differs from `ai_agents_memory`, update `basePath` and `assetPrefix` in [`next.config.ts`](./next.config.ts).

---

## 📖 Citation

If you use this site or the underlying survey in your work, please cite:

```bibtex
@article{zhang2025memory,
  title   = {Memory in the Age of AI Agents},
  author  = {Zhang et al.},
  journal = {arXiv preprint arXiv:2512.13564},
  year    = {2025},
  url     = {https://arxiv.org/abs/2512.13564}
}
```

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).
The survey content belongs to the original paper authors.
