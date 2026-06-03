import Link from "next/link";
import { Compass, Database } from "lucide-react";
import NeuralBackground from "@/components/NeuralBackground";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Background Interactive Network */}
      <div className={styles.canvasBg}>
        <NeuralBackground />
      </div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="badge badge-cyan" style={{ marginBottom: 16 }}>
          ACM Survey - Memory for AI Agents
        </div>
        <h1 className={styles.title}>
          Memory in the Age of <span className="gradient-text">AI Agents</span>
        </h1>
        <p className={styles.subtitle}>
          An interactive, visual encyclopedia synthesizing the forms, functions, and dynamics of agentic memory systems. Drawing from hundreds of benchmark evaluations and open-source frameworks.
        </p>
        <div className={styles.btnGroup}>
          <Link href="/explorer" className="btn btn-primary">
            <Compass size={18} />
            <span>Explore Taxonomy</span>
          </Link>
          <Link href="/benchmarks" className="btn btn-secondary">
            <Database size={18} />
            <span>View Benchmarks</span>
          </Link>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100+</div>
            <div className={styles.statLabel}>Citations & Works</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>3</div>
            <div className={styles.statLabel}>Memory Forms</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>3</div>
            <div className={styles.statLabel}>Core Functions</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>3</div>
            <div className={styles.statLabel}>Dynamics Stages</div>
          </div>
        </div>
      </section>

      {/* Interactive Navigation Cards */}
      <section className={styles.cardSection}>
        <h2 className={styles.sectionTitle}>Main Modules</h2>
        <div className={styles.cardGrid}>
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>
              <Compass size={24} />
            </div>
            <h3 className={styles.cardTitle}>Taxonomy Explorer</h3>
            <p className={styles.cardDesc}>
              Navigate the multi-level hierarchy of memory. Explore token-level, parametric, and latent forms, as well as factual, experiential, and working memory roles. Complete with definitions, detail descriptions, and paper links.
            </p>
            <Link href="/explorer" className={styles.cardFooter}>
              <span>Launch Explorer</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className={`${styles.card} glass-panel`}>
            <div className={`${styles.cardIcon} ${styles.cardIconPink}`}>
              <Database size={24} />
            </div>
            <h3 className={styles.cardTitle}>Benchmarks & Engines</h3>
            <p className={styles.cardDesc}>
              Search, filter, and compare 30+ benchmarks and 25+ open-source frameworks. Compare factual vs experiential, multimodal, and evaluation environments in a responsive, clean dashboard.
            </p>
            <Link href="/benchmarks" className={`${styles.cardFooter} ${styles.cardFooterPink}`}>
              <span>View Database</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* The Core Cognitive Triangle */}
      <section className={styles.cardSection}>
        <div className={`${styles.triangleSection} glass-panel`}>
          <div className={styles.triangleVisual}>
            {/* Visual Custom SVG representation of the triangle */}
            <svg width="300" height="300" viewBox="0 0 300 300">
              <defs>
                <linearGradient id="sage-slate" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-cyan)" />
                  <stop offset="100%" stopColor="var(--accent-blue)" />
                </linearGradient>
                <linearGradient id="terracotta-ochre" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-purple)" />
                  <stop offset="100%" stopColor="var(--accent-pink)" />
                </linearGradient>
                <linearGradient id="gold-sand" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-pink)" />
                  <stop offset="100%" stopColor="var(--bg-surface-elevated)" />
                </linearGradient>
              </defs>
              
              {/* Outer triangle connection lines */}
              <polygon points="150,40 40,230 260,230" fill="none" stroke="rgba(45, 50, 47, 0.08)" strokeWidth="4" />
              <polygon points="150,40 40,230 260,230" fill="none" stroke="url(#sage-slate)" strokeWidth="2" strokeDasharray="5,5" />
              
              {/* Vertices as clean nodes */}
              <circle cx="150" cy="40" r="16" fill="url(#sage-slate)" />
              <text x="150" y="44" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle">FORM</text>
              
              <circle cx="40" cy="230" r="16" fill="url(#terracotta-ochre)" />
              <text x="40" y="234" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle">FUNC</text>
              
              <circle cx="260" cy="230" r="16" fill="url(#gold-sand)" />
              <text x="260" y="234" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle">DYN</text>

              {/* Central text */}
              <circle cx="150" cy="145" r="45" fill="var(--bg-surface)" stroke="var(--border-color)" strokeWidth="2" />
              <text x="150" y="142" fill="var(--text-primary)" fontSize="13" fontWeight="800" textAnchor="middle">AGENT</text>
              <text x="150" y="157" fill="var(--accent-cyan)" fontSize="11" fontWeight="700" textAnchor="middle">MEMORY</text>

              {/* Connecting vectors from center */}
              <line x1="150" y1="100" x2="150" y2="56" stroke="var(--accent-cyan)" strokeWidth="2" />
              <line x1="105" y1="171" x2="56" y2="218" stroke="var(--accent-purple)" strokeWidth="2" />
              <line x1="195" y1="171" x2="244" y2="218" stroke="var(--accent-pink)" strokeWidth="2" />
            </svg>
          </div>
          <div className={styles.triangleContent}>
            <h3 className={styles.triangleTitle}>The Forms–Functions–Dynamics Triangle</h3>
            <p className={styles.triangleDesc}>
              The paper proposes that a comprehensive understanding of agent memory requires looking through a multidimensional lens, breaking down the topic into three interconnected dimensions:
            </p>
            <ul className={styles.trianglePoints}>
              <li className={styles.trianglePoint}>
                <span className={styles.pointDot} />
                <span className={styles.pointText}>
                  <strong>Forms (What Carries Memory?)</strong>: How memory resides within the agentic architecture. Includes <strong>Token-level</strong> (discrete in context), <strong>Parametric</strong> (in parameters), and <strong>Latent</strong> (continuous hidden states).
                </span>
              </li>
              <li className={styles.trianglePoint}>
                <span className={`${styles.pointDot} ${styles.pointDotPurple}`} />
                <span className={styles.pointText}>
                  <strong>Functions (Why Agents Need Memory?)</strong>: The cognitive role the memory store plays. Classified into <strong>Factual</strong> (recording user/environment state), <strong>Experiential</strong> (accumulating skills/strategies), and <strong>Working Memory</strong> (scratchpad reasoning).
                </span>
              </li>
              <li className={styles.trianglePoint}>
                <span className={`${styles.pointDot} ${styles.pointDotPink}`} />
                <span className={styles.pointText}>
                  <strong>Dynamics (How Memory Operates?)</strong>: The operators that govern lifecycle transitions. Composed of <strong>Memory Formation</strong> (read/write), <strong>Memory Evolution</strong> (consolidation/forgetting), and <strong>Memory Retrieval</strong>.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
