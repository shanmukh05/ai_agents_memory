"use client";

import { Brain, Database, Layers, ExternalLink, FileText } from "lucide-react";
import styles from "./memory.module.css";

const COMPARATIVE_DATA = [
  {
    feature: "Architecture Residency",
    llm: "Model Hidden Activations & KV Cache (Transient)",
    agent: "External State Database/Index Layer (Persistent)",
    rag: "External Static Document Index / Vector Store"
  },
  {
    feature: "Persistence Span",
    llm: "Transient (Lost at context turn or session end)",
    agent: "Lifelong / Session-transcending (Cross-trial persistence)",
    rag: "Static / Read-only (Rarely modified by agent actions)"
  },
  {
    feature: "State Evolution",
    llm: "Fixed weights, dynamic KV activations during forward pass",
    agent: "Evolving state: writes, consolidates, forgets dynamically",
    rag: "Static index updates (requires batch indexing pipelines)"
  },
  {
    feature: "Computational Overhead",
    llm: "Very high (quadratic context window scaling)",
    agent: "Low (selective vector queries, abstracts history)",
    rag: "Medium (dense vector search & re-ranking)"
  },
  {
    feature: "Primary Cognitive Role",
    llm: "Local context tracking & sequence completion",
    agent: "Identity consistency, skill caching, long-term experience",
    rag: "Factual retrieval and hallucination grounding"
  }
];

const MEMORY_TYPES = [
  {
    title: "Short-Term Memory",
    badge: "Inside-Trial",
    desc: "Governs the immediate execution trace of the agent during a single interaction task. Typically implemented directly inside the LLM context window using scratchpads, reflection logs, or in-context planning stacks.",
    mechanics: "Information is compressed, abstracted, or folded at each turn to prevent window overflow."
  },
  {
    title: "Long-Term Memory",
    badge: "Cross-Trial",
    desc: "Transcends individual execution tasks to persist experiences across different environments, sessions, or tasks. Implemented via external databases (vectors, graphs, or relational databases) to coordinate lifelong learning.",
    mechanics: "Requires active consolidation (sleep cycles), updates, conflict resolution, and forgetting decay."
  }
];

const RAG_CATEGORIES = [
  {
    name: "Modular RAG",
    desc: "Decomposes the traditional retrieval pipeline into dedicated, independent functional modules: document parsing, indexing, retrieval, re-ranking, and context filtering. This allows developers to plug-and-play specialized algorithms at each stage of the context path.",
    refs: [
      "Singh et al. (2024). FlashRAG: A Modular and Efficient Pipelines for Retrieval-Augmented Generation.",
      "Nguyen et al. (2024). ComposeRAG: Designing Multi-document RAG Pipelines."
    ]
  },
  {
    name: "Graph RAG",
    desc: "Structures external knowledge as entity-relation graphs rather than isolated text chunks. By running graph traversals, concept clustering, or PageRank-based walks, it retrieves context-aware relational sub-graphs, enabling multi-hop question answering.",
    refs: [
      "Edge et al. (2024). From Local to Global: GraphRAG Systems.",
      "Gutiérrez et al. (2024). HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models."
    ]
  },
  {
    name: "Agentic RAG",
    desc: "Fuses retrieval into an active planning loop where the agent policy decides when to retrieve, what queries to issue, and how to verify retrieved content. It replaces static lookup with iterative querying, self-correction, and tool routing.",
    refs: [
      "Lee et al. (2024). PlanRAG: Iterative Planning and Retrieval-Augmented Generation.",
      "Asai et al. (2023). Self-RAG: Learning to Retrieve, Generate, and Critique via Self-Reflection."
    ]
  }
];

const CONTEXT_ENG_PAPERS = [
  "Yoon et al. (2024). SnapKV: LLM KV Cache Compression with Adaptive Grid Attention.",
  "Sun et al. (2025). Prompt Folding for Long-Context Context Engineering."
];

export default function MemoryPage() {
  return (
    <div className={styles.container}>
      {/* Page Header */}
      <div className={styles.header}>
        <div className="badge badge-cyan" style={{ marginBottom: 12 }}>
          Core Paradigm
        </div>
        <h2 className={styles.title}>Memory & RAG Foundations</h2>
        <p className={styles.subtitle}>
          Understand how memory is represented, structured, and utilized to bridge the gap between static model parameters and dynamic, lifelong agent experiences.
        </p>
      </div>

      {/* Memory Types Grid */}
      <div className={styles.typesGrid}>
        {MEMORY_TYPES.map((type) => (
          <div key={type.title} className={`${styles.card} glass-panel`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{type.title}</h3>
              <span className="badge badge-cyan">{type.badge}</span>
            </div>
            <p className={styles.cardDesc}>{type.desc}</p>
            <div className={styles.mechanicsBox}>
              <strong>Mechanics:</strong> {type.mechanics}
            </div>
          </div>
        ))}
      </div>

      {/* Comparative Matrix Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Brain size={20} className={styles.sectionIcon} />
          <h3>Architectural Comparison: LLM Memory vs. Agent Memory vs. RAG</h3>
        </div>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Dimension / Feature</th>
                <th className={styles.th}>LLM Internal Memory</th>
                <th className={styles.th}>Agent Persistent Memory</th>
                <th className={styles.th}>Retrieval-Augmented Gen (RAG)</th>
              </tr>
            </thead>
            <tbody>
              {COMPARATIVE_DATA.map((row) => (
                <tr key={row.feature} className={styles.tr}>
                  <td className={`${styles.td} ${styles.tdLabel}`}>{row.feature}</td>
                  <td className={styles.td}>{row.llm}</td>
                  <td className={styles.td}>{row.agent}</td>
                  <td className={styles.td}>{row.rag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* RAG Evolutions */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Database size={20} className={styles.sectionIcon} />
          <h3>Retrieval-Augmented Generation (RAG) paradigms</h3>
        </div>
        <div className={styles.ragGrid}>
          {RAG_CATEGORIES.map((rag) => (
            <div key={rag.name} className={`${styles.ragCard} glass-panel`}>
              <h4 className={styles.ragTitle}>{rag.name}</h4>
              <p className={styles.ragDesc}>{rag.desc}</p>
              <div className={styles.ragRefs}>
                <h5>Key Representative Literature:</h5>
                <ul className={styles.refList}>
                  {rag.refs.map((ref, idx) => (
                    <li key={idx}>
                      <a
                        href={`https://scholar.google.com/scholar?q=${encodeURIComponent(ref)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.refLink}
                      >
                        <FileText size={12} />
                        <span className={styles.refText}>{ref}</span>
                        <ExternalLink size={10} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Context Engineering */}
      <section className={styles.section}>
        <div className={`${styles.contextPanel} glass-panel`}>
          <div className={styles.contextHeader}>
            <Layers size={22} className={styles.contextIcon} />
            <h4>Context Engineering & Pruning</h4>
          </div>
          <p className={styles.contextDesc}>
            Context engineering treats the model&apos;s finite token window as a highly constrained computational resource. It designs layout templates, prompt hierarchies, and dynamic KV cache adapters to maximize information utilization while minimizing retrieval latency.
          </p>
          <div className={styles.contextRefs}>
            <span className={styles.contextRefsLabel}>Pioneering Works:</span>
            <div className={styles.contextRefsTags}>
              {CONTEXT_ENG_PAPERS.map((ref, idx) => (
                <a
                  key={idx}
                  href={`https://scholar.google.com/scholar?q=${encodeURIComponent(ref)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.refTag}
                >
                  <span>{ref}</span>
                  <ExternalLink size={10} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
