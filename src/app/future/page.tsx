"use client";

import { Sparkles, Brain, Cpu, Globe, Users, Code, Terminal, ArrowRight } from "lucide-react";
import styles from "./future.module.css";

const FRONTIERS = [
  {
    id: "memory-gen",
    title: "1. Autonomous Memory Generation",
    icon: <Brain size={22} />,
    badge: "Abstraction Engine",
    desc: "Transitioning from simple logging of observations to autonomous abstraction. The agent dynamically detects key episodes, synthesizes insights, and constructs conceptual memory nodes without human prompt instructions.",
    code: `{
  "agent": "CognitiveAgentV3",
  "memory_pipeline": {
    "encoder": "ObservationEmbedder",
    "analyzer": "SalienceScorer",
    "compaction": "RecursiveAbstractor",
    "trigger_threshold": 0.85
  },
  "action": "AUTO_CONSOLIDATE_EPISODE"
}`
  },
  {
    id: "rl-management",
    title: "2. RL-driven Memory Management",
    icon: <Cpu size={22} />,
    badge: "Policy Control",
    desc: "Optimizing the policy for memory operations (read, write, update, forget) via Reinforcement Learning. Using reward signals from task success to tune which facts are retained or evicted over long horizons.",
    code: `def reward_function(task_success, window_utilization, retrieval_precision):
    # Balance task success with context window efficiency
    efficiency_penalty = max(0, window_utilization - 0.7) * 0.2
    precision_reward = retrieval_precision * 0.5
    return task_success + precision_reward - efficiency_penalty`
  },
  {
    id: "multimodal-memory",
    title: "3. Multimodal Memory Fusion",
    icon: <Globe size={22} />,
    badge: "Unified Representation",
    desc: "Representing physical, auditory, and visual experiences in a unified memory substrate. Fusing heterogeneous observations into high-level spatial-temporal concept nodes.",
    code: `class MultimodalMemoryNode:
    def __init__(self, node_id):
        self.node_id = node_id
        self.text_embeddings = []
        self.vision_tokens = []
        self.temporal_anchor = None
        self.spatial_coordinates = None`
  },
  {
    id: "cognitive-connections",
    title: "4. Human-Cognitive Connections",
    icon: <Sparkles size={22} />,
    badge: "Cognitive Mimicry",
    desc: "Aligning artificial agent memory with human neuropsychology. Emulating sensory registers, short-term working memory buffers, and long-term consolidation loops with biologically plausible forgetting curves.",
    code: `def retention_probability(elapsed_time, strength):
    # Ebbinghaus Forgetting Curve Model
    decay_constant = 0.06
    return math.exp(-decay_constant * elapsed_time / strength)`
  },
  {
    id: "world-models",
    title: "5. Memory-driven World Models",
    icon: <Terminal size={22} />,
    badge: "Predictive State",
    desc: "Using episodic and factual memory stores to predict environment transitions. The agent simulates alternate paths and plans counterfactual scenarios within its internal memory theater.",
    code: `class WorldModelTransition:
    def __init__(self, state, action):
        self.state = state
        self.action = action
        
    def predict_next_state(self, memory_substrate):
        similar_episodes = memory_substrate.retrieve(self.state)
        return transition_neural_network(self.state, self.action, similar_episodes)`
  },
  {
    id: "shared-mas",
    title: "6. Shared Multi-Agent Memory",
    icon: <Users size={22} />,
    badge: "Collective Swarm",
    desc: "Coordinating decentralized memory pools across collaborative agent swarms. Addressing write conflicts, synchronizing shared knowledge graphs, and routing local memory signals across agents.",
    code: `{
  "swarm_id": "CollabSwarm-09",
  "sharing_policy": "selective_broadcast",
  "sync_interval_sec": 5,
  "conflict_resolution": "majority_vote_consensus"
}`
  }
];

export default function FutureFrontiersPage() {
  return (
    <div className={styles.container}>
      {/* Page Header */}
      <div className={styles.header}>
        <div className="badge badge-pink" style={{ marginBottom: 12 }}>
          RESEARCH HORIZON
        </div>
        <h2 className={styles.title}>Future Frontiers</h2>
        <p className={styles.subtitle}>
          Emerging research directions in agent memory systems, charting the path from static retrieval databases to adaptive, lifelong cognitive agents.
        </p>
      </div>

      {/* Grid of Frontiers */}
      <div className={styles.grid}>
        {FRONTIERS.map((frontier) => (
          <div key={frontier.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                {frontier.icon}
              </div>
              <div className={styles.cardMeta}>
                <h3 className={styles.cardTitle}>{frontier.title}</h3>
                <span className="badge badge-pink">{frontier.badge}</span>
              </div>
            </div>
            
            <p className={styles.cardDesc}>{frontier.desc}</p>
            
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <Code size={12} />
                <span>Architecture Definition</span>
              </div>
              <pre className={styles.pre}><code>{frontier.code}</code></pre>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info Box */}
      <div className={styles.infoBox}>
        <h4>Cognitive Architecture Vision</h4>
        <p>
          As language agents execute complex long-horizon tasks, static retrieval systems create bottlenecks in reasoning and memory degradation. Future frameworks will increasingly treat memory not as a static table, but as a continuous, differentiable neural network parameter or latent layer.
        </p>
        <div className={styles.arrowContainer}>
          <span className={styles.readMore}>Explore the full survey details in the Taxonomy Tree</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}
