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
          Based on the survey paper <a href="https://arxiv.org/abs/2512.13564" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}><mark style={{ backgroundColor: 'rgba(0, 255, 255, 0.2)', padding: '2px 4px', borderRadius: '3px' }}>Memory in the Age of AI Agents</mark></a>
        </div>
        <h1 className={styles.title}>
          Memory in the Age of <span className="gradient-text">AI Agents</span>
        </h1>
        <p className={styles.subtitle}>
          An interactive, visual encyclopedia synthesizing the forms, functions, and dynamics of agentic memory systems. Drawing from hundreds of benchmark evaluations and open-source frameworks.
        </p>
      </section>

      {/* Navigation Guide */}
      <section className={styles.cardSection}>
        <div className={styles.cardGrid}>
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>
              <Compass size={24} />
            </div>
            <h3 className={styles.cardTitle}>Memory</h3>
            <p className={styles.cardDesc}>
              Deep dive into agent memory systems, covering the core cognitive triangle of Forms, Functions, and Dynamics. Explore detailed explanations, visualizations, and the theoretical foundations from the survey paper.
            </p>
            <Link href="/memory" className={styles.cardFooter}>
              <span>Explore Memory Concepts</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className={`${styles.card} glass-panel`}>
            <div className={`${styles.cardIcon} ${styles.cardIconPink}`}>
              <Database size={24} />
            </div>
            <h3 className={styles.cardTitle}>Taxonomy</h3>
            <p className={styles.cardDesc}>
              Interactive exploration of the memory taxonomy tree. Navigate the hierarchical structure of memory forms, functions, and dynamics with detailed descriptions, paper references, and visual connections between concepts.
            </p>
            <Link href="/explorer" className={`${styles.cardFooter} ${styles.cardFooterPink}`}>
              <span>Explore Taxonomy Tree</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>
              <Compass size={24} />
            </div>
            <h3 className={styles.cardTitle}>Frameworks</h3>
            <p className={styles.cardDesc}>
              Comprehensive directory of 25+ open-source agent memory frameworks and libraries. Compare implementations, features, and capabilities across different approaches to agentic memory systems.
            </p>
            <Link href="/frameworks" className={styles.cardFooter}>
              <span>Browse Frameworks</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>
              <Database size={24} />
            </div>
            <h3 className={styles.cardTitle}>Benchmarks</h3>
            <p className={styles.cardDesc}>
              Detailed comparison of 30+ memory benchmarks and evaluation suites. Filter and analyze benchmarks by factual/experiential focus, multimodal capabilities, and evaluation environments.
            </p>
            <Link href="/benchmarks" className={`${styles.cardFooter} ${styles.cardFooterPink}`}>
              <span>Compare Benchmarks</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>
              <Compass size={24} />
            </div>
            <h3 className={styles.cardTitle}>Future</h3>
            <p className={styles.cardDesc}>
              Exploration of emerging trends and future directions in agent memory research. Discover cutting-edge approaches, open problems, and potential breakthroughs in the field.
            </p>
            <Link href="/future" className={styles.cardFooter}>
              <span>Explore Future Directions</span>
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
                <circle cx="150" cy="40" r="32" fill="url(#sage-slate)" />
                <text x="150" y="45" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle">FORMS</text>
                
                <circle cx="40" cy="230" r="32" fill="url(#terracotta-ochre)" />
                <text x="40" y="235" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle">FUNCTIONS</text>
                
                <circle cx="260" cy="230" r="32" fill="url(#gold-sand)" />
                <text x="260" y="235" fill="#ffffff" fontSize="10" fontWeight="800" textAnchor="middle">DYNAMICS</text>

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
