// Static database generated from survey paper "Memory in the Age of AI Agents"
export interface TaxonomyNode {
  id: string;
  label: string;
  parentId: string | null;
  paragraphs: string[];
  references: string[];
}

export interface BenchmarkItem {
  name: string;
  link: string;
  factual: boolean;
  experiential: boolean;
  multimodal: boolean;
  env: string;
  feature: string;
  scale: string;
}

export interface FrameworkItem {
  name: string;
  link: string;
  factual: boolean;
  experiential: boolean;
  multimodal: boolean;
  structure: string;
  evaluation: string;
}

export interface PreliminarySection {
  title: string;
  equation?: string;
  equationDescription?: string;
  paragraphs: string[];
}

export const mathPreliminaries: Record<string, PreliminarySection> = {
  agents: {
    title: "LLM-based Agent Systems",
    equation: "s_{t+1} \\sim \\Psi(s_{t+1} | s_t, a_t) \\quad \\text{and} \\quad o^i_t = \\mathcal{O}^i(s_t, h^i_t, Q)",
    equationDescription: "The environment transitions according to a stochastic transition model \\Psi based on state s_t and action a_t. Each agent receives observation o^i_t mapped from state, history, and task description Q.",
    paragraphs: [
      "Agents operate over natural language generation, tool invocation, planning, environment control, and communication actions. Formally, each agent i follows a policy a_t \\sim \\pi^i(o^i_t, m^i_t, Q), where m^i_t is the memory-derived signal."
    ]
  },
  memory: {
    title: "Agent Memory Lifecycle",
    equation: "M_{t+1}^{\\text{form}} = \\mathcal{F}(M_t, \\phi_t) \\quad \\rightarrow \\quad M_{t+1} = \\mathcal{E}(M_{t+1}^{\\text{form}}) \\quad \\rightarrow \\quad m^i_t = \\mathcal{R}(M_t, o^i_t, Q)",
    equationDescription: "Memory Formation transforms artifacts into candidates; Memory Evolution consolidates and updates the persistent memory; Memory Retrieval returns a context-dependent signal to guide the agent policy.",
    paragraphs: [
      "Rather than discrete hardware modules, memory effects (short-term, inside-trial vs. long-term, cross-trial) emerge from the temporal patterns with which formation (F), evolution (E), and retrieval (R) are engaged during agent execution."
    ]
  }
};

export const taxonomyData: Record<string, TaxonomyNode> = {
  "memory": {
    id: "memory",
    label: "Memory",
    parentId: null,
    paragraphs: ["Agent memory functions as an evolving internal substrate that enables AI agents to track state, accumulate experiences, and maintain a coherent identity over time.", "By decoupling context windows from static knowledge, agent memory transforms models from simple text generators into autonomous agents capable of learning and adaptation."],
    references: ["Atkinson, R. C., & Shiffrin, R. M. (1968). Human memory: A proposed system and its control processes.", "Tulving, E. (1972). Episodic and semantic memory.", "Zhang et al. (2025). Memory in the Age of AI Agents: A Survey."]
  },
  "agent_memory": {
    id: "agent_memory",
    label: "Agent Memory",
    parentId: "memory",
    paragraphs: ["Agent memory is uniquely defined by a persistent, self-evolving state linked to the agent's decision-making loop. Unlike static retrievers, agent memory dynamically incorporates observations and action outcomes to update its state Mt.", "It coordinates long-term cross-trial experiences and short-term inside-trial context, allowing agents to maintain goal consistency and adapt to environment transitions."],
    references: ["Packer et al. (2023). MemGPT: Towards LLMs as Operating Systems.", "Wang et al. (2023). Voyager: An Open-Ended Embodied Agent with Open-Ended Memory.", "Zhao et al. (2024). Learning from Learning: Experiential Learning for Language Agents."]
  },
  "llm_memory": {
    id: "llm_memory",
    label: "LLM Memory",
    parentId: "memory",
    paragraphs: ["LLM memory refers to model-internal capabilities, primarily the Transformer's key-value (KV) cache, long-context window extensions, and recurrence properties in architectural alternatives like Mamba.", "Unlike agent memory, LLM memory operates on raw sequences during a single inference step and does not typically support cross-task persistence or autonomous state evolution."],
    references: ["Gu, A., & Dao, T. (2023). Mamba: Linear-Time Sequence Modeling with Selective State Spaces.", "Peng et al. (2023). RWKV: Ruibo Wind Kite Valley RNN with Transformer-level Performance.", "Yoon et al. (2024). SnapKV: LLM KV Cache Compression with Adaptive Grid Attention."]
  },
  "rag": {
    id: "rag",
    label: "RAG",
    parentId: "memory",
    paragraphs: ["Retrieval-Augmented Generation (RAG) acts as an auxiliary channel for injecting external knowledge into the LLM context, helping ground responses and mitigate hallucinations.", "The boundary between RAG and agent memory is dynamic: RAG focuses on querying static databases, while agent memory actively modifies and evolves its index through agent actions."],
    references: ["Lewis et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks.", "Gao et al. (2023). Retrieval-Augmented Generation for Large Language Models: A Survey.", "Gutierrez et al. (2024). HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models."]
  },
  "modular_rag": {
    id: "modular_rag",
    label: "Modular RAG",
    parentId: "rag",
    paragraphs: ["Modular RAG decomposes the retrieval pipeline into dedicated, sequential modules: indexing, candidate retrieval, re-ranking, filtering, and prompt generation.", "It represents a static, structured approach to extending prompt context but lacks autonomous agent control over retrieval timing or database updates."],
    references: ["Singh et al. (2024). FlashRAG: A Modular and Efficient Pipelines for Retrieval-Augmented Generation.", "Nguyen et al. (2024). ComposeRAG: Designing Multi-document RAG Pipelines."]
  },
  "graph_rag": {
    id: "graph_rag",
    label: "Graph RAG",
    parentId: "rag",
    paragraphs: ["Graph RAG systems structure the knowledge base as a graph, ranging from knowledge graphs to concept graphs or document-entity relations, and leverage graph traversal or graph-based ranking algorithms to retrieve context.", "In the context of agent memory, graph-structured memory arises naturally when agents accumulate relational insights over time, such as linking concepts, tracking dependencies among subtasks, or recording causal relations inferred through interaction."],
    references: ["Edge et al. (2024). From Local to Global: LightRAG Systems.", "Gutierrez et al. (2024). HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models.", "AriGraph (Anokhin et al., 2024). AriGraph: Learning Relational Concept Graphs from Conversations."]
  },
  "agentic_rag": {
    id: "agentic_rag",
    label: "Agentic RAG",
    parentId: "rag",
    paragraphs: ["Agentic RAG integrates retrieval into an autonomous decision-making loop, where an LLM agent actively controls when, how, and what to retrieve.", "These systems often employ iterative querying, multi-step planning, or self-directed search procedures, enabling the agent to refine its information needs through deliberate reasoning."],
    references: ["Lee et al. (2024). PlanRAG: Iterative Planning and Retrieval-Augmented Generation.", "Asai et al. (2023). Self-RAG: Learning to Retrieve, Generate, and Critique via Self-Reflection.", "Agentic RAG Survey (Singh et al., 2025)"]
  },
  "context_engineering": {
    id: "context_engineering",
    label: "Context Engineering",
    parentId: "memory",
    paragraphs: ["Context engineering is a systematic design methodology that treats the context window as a constrained computational resource.", "It rigorously optimizes the information payload, including instructions, knowledge, state, and memory, to mitigate the asymmetry between massive input capacity and the model's generation capability."],
    references: ["Mei et al. (2025)", "Context Compression (Yoon et al., 2024)", "Prompt Folding (Sun et al., 2025b)"]
  },
  "constructing_memory": {
    id: "constructing_memory",
    label: "Constructing Memory",
    parentId: null,
    paragraphs: ["Constructing Memory addresses the structural forms that carry the agent's experiences. We partition these carriers into Token-level (discrete in-context tokens), Parametric (embedded in weights), and Latent (continuous state activations)."],
    references: ["Survey Section 3", "Forms Taxonomy"]
  },
  "token_level_memory": {
    id: "token_level_memory",
    label: "Token Level Memory",
    parentId: "constructing_memory",
    paragraphs: ["Token-level memory stores information as persistent, discrete units that are externally accessible and inspectable. The token here is a broad representational notion: beyond text tokens, it includes visual tokens, audio frames\u2014any discrete element that can be written, retrieved, reorganized, and revised outside model parameters.", "Because these units are explicit, token-level memory is typically transparent, easy to edit, and straightforward to interpret, making it a natural layer for retrieval, routing, conflict handling, and coordination with parametric and latent memory."],
    references: ["Shinn et al. (2023). Reflexion: Language Agents with Verbal Reinforcement Learning.", "Chhikara et al. (2024). Mem0: The Memory Layer for Personalized AI Agents.", "Xu et al. (2024). A-Mem: Adaptive Memory Routing for Multi-Agent Systems."]
  },
  "flat_memory": {
    id: "flat_memory",
    label: "Flat",
    parentId: "token_level_memory",
    paragraphs: ["Flat Memory stores information as accumulations of discrete units, without explicitly modeling semantic or relational dependencies among them.", "These units may include text chunks, user profiles, experience trajectories, their corresponding vector representations, or multimodal entries. Relationships among these units are not encoded directly in the memory."],
    references: ["Zhong et al. (2023). MemoryBank: Enhancing LLMs with Long-Term Memory.", "Wang et al. (2024). SCM: Structured Contextual Memory for Language Agents."]
  },
  "flat_dialogue": {
    id: "flat_dialogue",
    label: "Dialogue",
    parentId: "flat_memory",
    paragraphs: ["Some flat memory work focuses on storing and managing dialogue content. Early approaches primarily focused on preventing forgetting by storing raw dialogue history or generating recursive summaries to extend context windows.", "MemGPT introduces an operating-system metaphor with hierarchical management, inspiring subsequent works to decouple active context from external storage for infinite context management."],
    references: ["Lu et al. (2023). MemoChat: Tuning LLMs for Long-term Memory in Conversations.", "Wang et al. (2024). Recursive Summarization for Context Window Extension.", "Packer et al. (2023). MemGPT: Towards LLMs as Operating Systems."]
  },
  "flat_preference": {
    id: "flat_preference",
    label: "Preference",
    parentId: "flat_memory",
    paragraphs: ["Some memory systems focus on modeling a user\u2019s evolving tastes, interests, and decision patterns, especially in recommendation scenarios where preference understanding is central.", "Unlike dialogue-centric memory, which focuses on maintaining conversational coherence, preference memory centers on identifying a user\u2019s tastes and tendencies."],
    references: ["RecMind (Wang et al., 2024). RecMind: Large Language Model Agent for Recommendation.", "Huang et al. (2024). InteRecAgent: Interactive Recommendation Agent with Memory.", "Huang et al. (2024). MR.Rec: Multi-Role Recommendation Agent."]
  },
  "flat_profile": {
    id: "flat_profile",
    label: "Profile",
    parentId: "flat_memory",
    paragraphs: ["A subset of flat memory systems focuses on storing and maintaining stable user profiles, character attributes, or long-term identity information so that agents can behave consistently across turns and tasks.", "MemoryBank organizes dialogue history and event summaries by timestamp, gradually building a user profile that supports accurate retrieval of identity-relevant information."],
    references: ["Wang et al. (2023). AI Persona: Consistent Personality for Dialogue Agents.", "ChatHaruhi (Li et al., 2023). ChatHaruhi: Reviving Anime Characters with Role-playing Agents.", "Wang et al. (2023). RoleLLM: Benchmarking, Eliciting, and Enhancing Role-Playing in LLMs."]
  },
  "flat_experience": {
    id: "flat_experience",
    label: "Experience",
    parentId: "flat_memory",
    paragraphs: ["Distinct from the static, general knowledge, experience memory stems from the agent\u2019s dynamic accumulation during actual interaction tasks, encompassing specific observations, chains of thought, action trajectories, and environmental feedback.", "The most fundamental form of experience memory involves the direct archival of historical behavioral trajectories. This paradigm enables agents to inform current decision-making by retrieving and reusing past instances, encompassing both successful and failed cases."],
    references: ["Shinn et al. (2023). Reflexion: Language Agents with Verbal Reinforcement Learning.", "Zhao et al. (2024). Learning from Learning: Experiential Learning for Language Agents.", "Yang et al. (2024). Buffer of Thoughts: Thought-Augmented Reasoning with Memory.", "Zhou et al. (2024). Memento: Overcoming Forgetfulness in Language Agents."]
  },
  "flat_multimodal": {
    id: "flat_multimodal",
    label: "Multimodal",
    parentId: "flat_memory",
    paragraphs: ["Multimodal memory systems store information in the form of discrete token-level units extracted from raw multimodal data, such as images, video frames, audio segments, and text, enabling agents to capture, compress, and retrieve knowledge across channels and over long spans of experience."],
    references: ["Shen et al. (2024). Ego-LLaVA: A Multimodal Agent for Ego-centric Long-horizon Tasks.", "Song et al. (2023). MovieChat: From Single-Frame to Long-Video Multimodal Understanding.", "Wang et al. (2024). KARMA: Knowledge and Action Relational Memory for Agents.", "Zulfikar et al. (2024). Memoro: Dynamic Multimodal Memory Layer for Robotics."]
  },
  "planar_memory": {
    id: "planar_memory",
    label: "Planar",
    parentId: "token_level_memory",
    paragraphs: ["Planar Memory introduces an explicit organizational topology among memory units, but only within a single structural layer. The topology may be a graph, tree, table, implicit connection structure and so on, where relationships such as adjacency, parent\u2013child ordering, or semantic grouping are encoded within one plane, without hierarchical levels or cross-layer references."],
    references: ["SALI (Pan et al., 2024). SALI: Structural Anchoring and Latent Integration for Agent Memory.", "Kim et al. (2023). COMET: Commonsense Transformers for Knowledge Graphs."]
  },
  "planar_tree": {
    id: "planar_tree",
    label: "Tree",
    parentId: "planar_memory",
    paragraphs: ["Tree structures organize information hierarchically and can handle different levels of abstraction.", "HAT builds a Hierarchical Aggregate Tree by segmenting long interactions and then aggregating them step by step. This structure supports coarse-to-fine retrieval and performs better than flat vector indices in long-context question answering."],
    references: ["HAT (A et al., 2024). HAT: Hierarchical Aggregate Tree for Long-Context Question Answering.", "Rezazadeh et al. (2024). MemTree: Tree-structured Memory for Long-Horizon Planning."]
  },
  "planar_graph": {
    id: "planar_graph",
    label: "Graph",
    parentId: "planar_memory",
    paragraphs: ["Graph structures dominate the landscape of 2D memory due to their ability to capture complex associations, causality, and temporal dynamics.", "Foundational works like Ret-LLM abstract external storage into addressable triple-based units, enabling the LLM to interact with a relation-centric table that functions like a lightweight knowledge graph."],
    references: ["Modarressi et al. (2023). Ret-LLM: Towards a Relation-Centric Memory for LLMs.", "Sun et al. (2024). KGT: Knowledge Graph Transformers for Relational Memory.", "M3-Agent (Long et al., 2024). M3-Agent: Multi-modal Memory-augmented Agent.", "Wang et al. (2023). HuaTuo: Tuning LLaMA for Medical Question Answering."]
  },
  "planar_hybrid": {
    id: "planar_hybrid",
    label: "Hybrid",
    parentId: "planar_memory",
    paragraphs: ["Complex tasks often require hybrid architectures that segregate distinct cognitive functions while sharing a common memory substrate.", "Optimus-1 explicitly separates static knowledge into a hierarchical directed knowledge graph for planning, and dynamic interactions into an abstract multimodal experience Pool for reflection and self-improvement."],
    references: ["Optimus-1 (Li et al., 2024). Optimus-1: Hybrid Memory and Reflection for Minecraft Agents.", "D-SMART (Lei et al., 2024). D-SMART: Dynamic Shared Memory for Agent Teams."]
  },
  "hierarchical_memory": {
    id: "hierarchical_memory",
    label: "Hierarchical",
    parentId: "token_level_memory",
    paragraphs: ["Hierarchical memory organizes information across layers, using inter-level connections to shape the memories into a volumetric structured space.", "Such hierarchies support representations at different degrees of abstraction\u2014from raw observations, to compact event summaries, to higher-level thematic patterns. Cross-layer connections further yield a volumetric memory space through which the system can navigate not only laterally among units but also vertically across abstraction levels."],
    references: ["Edge et al. (2024). From Local to Global: GraphRAG Systems.", "Sun & Zeng (2024). H-Mem: Hierarchical Memory Routing for Language Agents."]
  },
  "hierarchical_pyramid": {
    id: "hierarchical_pyramid",
    label: "Pyramid",
    parentId: "hierarchical_memory",
    paragraphs: ["This category constructs memory as multi-level pyramids, where information is progressively organized into higher layers of abstraction and queried in a coarse-to-fine manner.", "HiAgent manages long-horizon tasks through a subgoal-centered hierarchical working memory, keeping detailed trajectories for the currently active subgoal while compressing completed subgoals into higher-level summaries."],
    references: ["HiAgent (Hu et al., 2024). HiAgent: Hierarchical Subgoal-Centered Working Memory.", "Rasmussen et al. (2024). Zep: Fast, Scalable Long-Term Memory for Conversational Agents.", "G-Memory (Zhang et al., 2024). G-Memory: Group-based Shared Memory for Multi-Agent Systems.", "Edge et al. (2024). From Local to Global: GraphRAG Systems."]
  },
  "hierarchical_multi_layer": {
    id: "hierarchical_multi_layer",
    label: "Multi-layer",
    parentId: "hierarchical_memory",
    paragraphs: ["These forms instead emphasize layered specialization, organizing memory into distinct modules or levels that focus on particular information types or functions.", "Biologically inspired architectures such as HippoRAG factor memory into an associative indexing component, implemented as an open knowledge graph, and an underlying passage store, using the graph layer to orchestrate multi-hop retrieval over stored content."],
    references: ["Gutierrez et al. (2024). HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models.", "AriGraph (Anokhin et al., 2024). AriGraph: Learning Relational Concept Graphs from Conversations.", "SGMem (Wu et al., 2025h)", "Guti\u00e9rrez et al. (2025). HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models."]
  },
  "parametric_memory": {
    id: "parametric_memory",
    label: "Parametric Memory",
    parentId: "constructing_memory",
    paragraphs: ["Parametric Memory refers to memory stored within the model parameters, where information is encoded through the statistical patterns of the parameter space and accessed implicitly during forward computation."],
    references: ["Retroformer (Tan et al., 2024). Retroformer: Retrospective Policy Gradient for Language Agents.", "Memory3 (Yang et al., 2024). Memory3: Parametric Memory Consolidation for Transformers."]
  },
  "parametric_internal": {
    id: "parametric_internal",
    label: "Internal",
    parentId: "parametric_memory",
    paragraphs: ["Internal parametric memory stores knowledge directly inside the main neural network weights of the agent backbone.", "This can be realized across pre-training, instruction tuning, or direct test-time gradient updates."],
    references: ["Zhang et al. (2023). LLaMA-Adapter: Efficient Fine-Tuning of Language Models.", "Hu et al. (2021). LoRA: Low-Rank Adaptation of Large Language Models."]
  },
  "parametric_internal_pre": {
    id: "parametric_internal_pre",
    label: "Pre-train",
    parentId: "parametric_internal",
    paragraphs: ["Encodes massive textual knowledge patterns into the basic transformer weights during initial training on unstructured web corpora."],
    references: ["Luo et al. (2024). LLM Pretraining: A Comprehensive Survey."]
  },
  "parametric_internal_mid": {
    id: "parametric_internal_mid",
    label: "Mid-train",
    parentId: "parametric_internal",
    paragraphs: ["Bakes knowledge or domain facts continually in the middle of training runs or during intermediate continual learning cycles."],
    references: ["Zheng et al. (2024). Continual Learning in Large Language Models."]
  },
  "parametric_internal_post": {
    id: "parametric_internal_post",
    label: "Post-train",
    parentId: "parametric_internal",
    paragraphs: ["Uses SFT, RLHF, or reinforcement learning loops post-training to align reasoning and behavioral capabilities within weights."],
    references: ["SFT Alignment: Supervised Fine-Tuning for Agent Policy Alignment.", "Ouyang et al. (2022). Training language models to follow instructions with human feedback."]
  },
  "parametric_external": {
    id: "parametric_external",
    label: "External",
    parentId: "parametric_memory",
    paragraphs: ["Integrates separate, externalized parametric layers or auxiliary model components to act as dynamic memory stores."],
    references: ["MemOS (Li et al., 2024). MemOS: An Operating System Metaphor for Agent Memory Management.", "MemScheduler: Dynamic Resource Allocation for Agent Memory Schedules."]
  },
  "parametric_external_adapter": {
    id: "parametric_external_adapter",
    label: "Adapter-based Modules",
    parentId: "parametric_external",
    paragraphs: ["Deploys dynamic parameter adapters (like LoRA weights) that are loaded on demand to switch agent persona or context rules."],
    references: ["MemOS Adapters"]
  },
  "parametric_external_auxiliary": {
    id: "parametric_external_auxiliary",
    label: "Auxiliary LM-based Modules",
    parentId: "parametric_external",
    paragraphs: ["Trains lightweight auxiliary language models to act as dedicated query builders, re-writers, or database routers."],
    references: ["Rewrite-Retrieve-Read (Ma et al., 2023). Query Rewriting for Retrieval-Augmented Large Language Models.", "MemGuide (Du et al., 2024). MemGuide: Dynamic Memory Guidance for Language Agents."]
  },
  "latent_memory": {
    id: "latent_memory",
    label: "Latent Memory",
    parentId: "constructing_memory",
    paragraphs: ["Latent Memory represents memory in the model\u2019s internal hidden states, continuous representations, or evolving latent structures. It can persist and update during inference or across interaction cycles, capturing context-dependent internal states."],
    references: ["MemGen (Zhang et al., 2024). MemGen: Generative Latent Memory for Language Agents.", "VisMem (Yu et al., 2024). VisMem: Visual Latent Memory for Robot Manipulation.", "MemoryLLM"]
  },
  "latent_generate": {
    id: "latent_generate",
    label: "Generate",
    parentId: "latent_memory",
    paragraphs: ["Rather than querying a database, the agent policy dynamically synthesizes continuous latent tokens to represent historical context internally."],
    references: ["MemoryLLM", "MemGen"]
  },
  "latent_generate_single": {
    id: "latent_generate_single",
    label: "Single Modal",
    parentId: "latent_generate",
    paragraphs: ["Generates continuous latent vectors based purely on text token histories."],
    references: ["Textual Latents"]
  },
  "latent_generate_multi": {
    id: "latent_generate_multi",
    label: "Multimodal",
    parentId: "latent_generate",
    paragraphs: ["Fuses image and text cues to construct unified latent continuous vector representations."],
    references: ["VisMem (Yu et al., 2024). VisMem: Visual Latent Memory for Robot Manipulation."]
  },
  "latent_reuse": {
    id: "latent_reuse",
    label: "Reuse",
    parentId: "latent_memory",
    paragraphs: ["Preserves the transformer's KV cache tables or hidden state activation matrices across turns to avoid re-computation."],
    references: ["Chevalier et al. (2023). AutoCompressor: Minimalist KV Cache Condensation.", "SnapKV", "Mixture-of-Memory"]
  },
  "latent_transform": {
    id: "latent_transform",
    label: "Transform",
    parentId: "latent_memory",
    paragraphs: ["Applies continuous projection layers to map old latent vectors into modified representations suited for new task environments."],
    references: ["Latent Projection Networks"]
  },
  "types_of_memory": {
    id: "types_of_memory",
    label: "Types of Memory",
    parentId: null,
    paragraphs: ["Types of Memory classifies memory stores by their cognitive role in the agent's execution loop: Factual (what is true), Experiential (what has been done), and Working (active workspace reasoning)."],
    references: ["Survey Section 4", "Functions Dimension"]
  },
  "factual_memory": {
    id: "factual_memory",
    label: "Factual",
    parentId: "types_of_memory",
    paragraphs: ["Factual memory maintains declarative knowledge about user traits, dialogue facts, environment states, and spatial surroundings, grounding the agent in stable truths."],
    references: ["Zhong et al. (2023). MemoryBank: Enhancing LLMs with Long-Term Memory.", "Wang et al. (2024). KARMA: Knowledge and Action Relational Memory for Agents."]
  },
  "factual_user": {
    id: "factual_user",
    label: "User",
    parentId: "factual_memory",
    paragraphs: ["Stores user profile attributes, preference histories, and conversational constraints, ensuring personalization."],
    references: ["Jiang et al. (2024). PersonaMem: Long-Term Persona and Preference Management.", "PerLTQA (Du et al., 2024). PerLTQA: Personalized Long-Term Question Answering."]
  },
  "factual_user_dialogue": {
    id: "factual_user_dialogue",
    label: "Dialogue Coherence",
    parentId: "factual_user",
    paragraphs: ["Ensures the agent references past turns and user claims correctly, preventing self-contradiction."],
    references: ["Lu et al. (2023). MemoChat: Tuning LLMs for Long-term Memory in Conversations.", "DialSim (Zheng et al., 2024). DialSim: Evaluating Dialogue Coherence in AI Agents."]
  },
  "factual_user_goal": {
    id: "factual_user_goal",
    label: "Goal Consistency",
    parentId: "factual_user",
    paragraphs: ["Maintains the user's primary objective and constraints across turns, avoiding deviations."],
    references: ["HiAgent (Hu et al., 2024). HiAgent: Hierarchical Subgoal-Centered Working Memory."]
  },
  "factual_env": {
    id: "factual_env",
    label: "Environment",
    parentId: "factual_memory",
    paragraphs: ["Tracks surrounding configurations, object positions, static rules, maps, and system files."],
    references: ["Wang et al. (2024). KARMA: Knowledge and Action Relational Memory for Agents.", "Mem2Ego (Zhang et al., 2024). Mem2Ego: Ego-centric Environmental Memory."]
  },
  "factual_env_knowledge": {
    id: "factual_env_knowledge",
    label: "Knowledge Persistence",
    parentId: "factual_env",
    paragraphs: ["Ensures the agent does not lose map coordinates or physical layout data when an object leaves its immediate view."],
    references: ["UniWM (Dong et al., 2024). UniWM: Unified World Memory Simulator."]
  },
  "factual_env_shared": {
    id: "factual_env_shared",
    label: "Shared Access",
    parentId: "factual_env",
    paragraphs: ["Supports multi-agent teams reading and writing to a central environmental blackboard or document database."],
    references: ["Global Vector Stores (Hong et al., 2024). MetaGPT: Multi-Agent Framework with Shared Knowledge."]
  },
  "experimental_memory": {
    id: "experimental_memory",
    label: "Experimental",
    parentId: "types_of_memory",
    paragraphs: ["Experiential (Experimental) memory records the actions, trajectories, reflection lessons, and tool skills compiled by the agent during exploration."],
    references: ["Wang et al. (2023). Voyager: An Open-Ended Embodied Agent with Open-Ended Memory.", "Shinn et al. (2023). Reflexion: Language Agents with Verbal Reinforcement Learning.", "Strategy Memory (Ouyang et al., 2025)"]
  },
  "exp_case": {
    id: "exp_case",
    label: "Case-based",
    parentId: "experimental_memory",
    paragraphs: ["Archives successful and failed task trajectories to retrieve as raw exemplars for few-shot planning."],
    references: ["Zhou et al. (2024). Memento: Overcoming Forgetfulness in Language Agents.", "JARVIS-1 (Wang et al., 2023). JARVIS-1: Open-World Multi-Task Agents with Memory."]
  },
  "exp_case_traj": {
    id: "exp_case_traj",
    label: "Trajectories",
    parentId: "exp_case",
    paragraphs: ["Caches exact sequence paths (actions and observations) to reuse on matching problems."],
    references: ["LEGOMem (Han et al., 2024). LEGOMem: Modular Trajectory Memory for Language Agents."]
  },
  "exp_case_sol": {
    id: "exp_case_sol",
    label: "Solutions",
    parentId: "exp_case",
    paragraphs: ["Caches final correct code, text answers, or execution scripts generated for prior tasks."],
    references: ["SWE-Bench Verified (Jimenez et al., 2024). SWE-bench: Resolving Real-World GitHub Issues in LLMs."]
  },
  "exp_strategy": {
    id: "exp_strategy",
    label: "Strategy-based",
    parentId: "experimental_memory",
    paragraphs: ["Abstracts specific trajectories into generalized workflow templates, guidelines, or checklists."],
    references: ["Shinn et al. (2023). Reflexion: Language Agents with Verbal Reinforcement Learning.", "Yang et al. (2024). Buffer of Thoughts: Thought-Augmented Reasoning with Memory."]
  },
  "exp_strategy_insights": {
    id: "exp_strategy_insights",
    label: "Insights",
    parentId: "exp_strategy",
    paragraphs: ["Stores self-reflection feedback explaining why a past attempt failed and how to correct it."],
    references: ["Zhao et al. (2024). Learning from Learning: Experiential Learning for Language Agents.", "Liang et al. (2024). SAGE: Dual-Store Memory System for Life-Long Learning."]
  },
  "exp_strategy_workflows": {
    id: "exp_strategy_workflows",
    label: "Workflows",
    parentId: "exp_strategy",
    paragraphs: ["Extracts structured step lists for complex tasks, e.g., web-browsing procedures."],
    references: ["AWM (Wang et al., 2024). AWM: Autonomous Web-Browsing Workflows with Memory."]
  },
  "exp_strategy_patterns": {
    id: "exp_strategy_patterns",
    label: "Patterns",
    parentId: "exp_strategy",
    paragraphs: ["Bakes recurrent planning schemas or problem-solving templates into memory indexes."],
    references: ["ReasoningBank (Ouyang et al., 2024). ReasoningBank: Caching and Indexing Reasoning Patterns."]
  },
  "exp_skill": {
    id: "exp_skill",
    label: "Skill-based",
    parentId: "experimental_memory",
    paragraphs: ["Consolidates raw experience into reusable, executable action programs or custom tools."],
    references: ["Wang et al. (2023). Voyager: An Open-Ended Embodied Agent with Open-Ended Memory.", "Memp (Fang et al., 2024). Memp: Executable Skill Libraries for Language Agents."]
  },
  "exp_skill_code": {
    id: "exp_skill_code",
    label: "Code snippets",
    parentId: "exp_skill",
    paragraphs: ["Caches executable code scripts representing learned Minecraft commands or shell execution sequences."],
    references: ["Voyager skill library"]
  },
  "exp_skill_funcs": {
    id: "exp_skill_funcs",
    label: "Functions & Scripts",
    parentId: "exp_skill",
    paragraphs: ["Caches parametric helper scripts representing learned procedural actions."],
    references: ["DGM (Zhang et al., 2025i)"]
  },
  "exp_skill_apis": {
    id: "exp_skill_apis",
    label: "APIs",
    parentId: "exp_skill",
    paragraphs: ["Maintains indexes of external API descriptors and tool schemas that the agent can choose to call."],
    references: ["ToolMem (Xiao et al., 2024). ToolMem: Indexing and Retrieving External APIs for Agents.", "ToolBench (Qin et al., 2023). ToolLLM: Facilitating LLMs to Master 16000+ Real-world APIs."]
  },
  "exp_skill_mcps": {
    id: "exp_skill_mcps",
    label: "MCPs",
    parentId: "exp_skill",
    paragraphs: ["Supports dynamic Model Context Protocol (MCP) integrations, serving as standard wrappers for tool resources."],
    references: ["MCP Protocol (Qiu et al., 2024). Model Context Protocol (MCP) for Open Tool Resource Integration."]
  },
  "exp_hybrid": {
    id: "exp_hybrid",
    label: "Hybrid",
    parentId: "experimental_memory",
    paragraphs: ["Fuses case exemplars, workflows, and skills into a coordinated experiential substrate."],
    references: ["Optimus-1 (Li et al., 2024). Optimus-1: Hybrid Memory and Reflection for Minecraft Agents."]
  },
  "working_memory": {
    id: "working_memory",
    label: "Working",
    parentId: "types_of_memory",
    paragraphs: ["Working memory manages active information inside the context window during a single task run, coordinating intermediate thoughts and plans."],
    references: ["HiAgent (Hu et al., 2024). HiAgent: Hierarchical Subgoal-Centered Working Memory.", "Context Folding (Sun et al., 2025b)"]
  },
  "working_single": {
    id: "working_single",
    label: "Single-turn",
    parentId: "working_memory",
    paragraphs: ["Manages step-by-step scratchpad calculations or thought logs within a single execution trial."],
    references: ["ReAct (Yao et al., 2022). ReAct: Synergizing Reasoning and Acting in Language Models."]
  },
  "working_single_condense": {
    id: "working_single_condense",
    label: "Input Condensation",
    parentId: "working_single",
    paragraphs: ["Prunes irrelevant tokens from the prompt input during a single forward pass to optimize generation."],
    references: ["Context Folding"]
  },
  "working_single_abstract": {
    id: "working_single_abstract",
    label: "Observation Abstraction",
    parentId: "working_single",
    paragraphs: ["Transforms raw observation streams into compact textual summaries prior to generating actions."],
    references: ["Reflexion feedback"]
  },
  "working_multi": {
    id: "working_multi",
    label: "Multi-turn",
    parentId: "working_memory",
    paragraphs: ["Maintains context continuity across turn boundaries inside a task, preventing context window overflow."],
    references: ["Memory-as-Action (Zhang et al., 2024). Memory-as-Action: Evolving Contexts via Structured Operators.", "Context Folding"]
  },
  "working_multi_state": {
    id: "working_multi_state",
    label: "State Consolidation",
    parentId: "working_multi",
    paragraphs: ["Updates key variables or state JSON summaries as turns advance, discarding chat history."],
    references: ["MemGPT OS-like states"]
  },
  "working_multi_fold": {
    id: "working_multi_fold",
    label: "Hierarchical Folding",
    parentId: "working_multi",
    paragraphs: ["Folds old logs into higher-level summaries, keeping details for the active task branch only."],
    references: ["Context Folding (Sun et al., 2025b)", "HiAgent"]
  },
  "working_multi_plan": {
    id: "working_multi_plan",
    label: "Cognitive Planning",
    parentId: "working_multi",
    paragraphs: ["Manages subgoal stacks and plan states, tracking progress toward the global target."],
    references: ["Planner Agent in PRIME"]
  },
  "operating_memory": {
    id: "operating_memory",
    label: "Operating Memory",
    parentId: null,
    paragraphs: ["Operating Memory surveys the lifecycle operators that manage states: Formation (writing), Evolution (updating/forgetting), and Retrieval (accessing)."],
    references: ["Survey Section 5", "Dynamics Dimension"]
  },
  "dynamics_formation": {
    id: "dynamics_formation",
    label: "Formation",
    parentId: "operating_memory",
    paragraphs: ["Formation operators extract and write experiences from observations into memory candidates, saving key details rather than raw data."],
    references: ["Memochat", "Zep", "HippoRAG"]
  },
  "formation_summarization": {
    id: "formation_summarization",
    label: "Semantic Summarization",
    parentId: "dynamics_formation",
    paragraphs: ["Condenses dialogue histories or trajectories into concise textual descriptions using LLM prompts."],
    references: ["Lu et al. (2023). MemoChat: Tuning LLMs for Long-term Memory in Conversations.", "Wang et al. (2024). Recursive Summarization for Context Window Extension."]
  },
  "formation_summarization_inc": {
    id: "formation_summarization_inc",
    label: "Incremental",
    parentId: "formation_summarization",
    paragraphs: ["Appends updates to the current running summary at each turn, keeping compute costs constant."],
    references: ["Westh\u00e4u\u00dfer et al. (2024). Incremental Summarization in Long Dialogue Agents."]
  },
  "formation_summarization_part": {
    id: "formation_summarization_part",
    label: "Partitioned",
    parentId: "formation_summarization",
    paragraphs: ["Decomposes logs into distinct topics or character tracks, summarizing each track independently."],
    references: ["ComoRAG (Wang et al., 2024). ComoRAG: Collaborative Multi-agent Retrieval-Augmented Generation."]
  },
  "formation_distillation": {
    id: "formation_distillation",
    label: "Knowledge Distillation",
    parentId: "dynamics_formation",
    paragraphs: ["Extracts generalizable rules, parameters, or strategies from long sequence rollouts."],
    references: ["Reflexion", "ExpeL"]
  },
  "formation_distillation_fact": {
    id: "formation_distillation_fact",
    label: "Factual Memory",
    parentId: "formation_distillation",
    paragraphs: ["Distills user preferences and stable facts from a series of dialogue logs."],
    references: ["Zhong et al. (2023). MemoryBank: Enhancing LLMs with Long-Term Memory."]
  },
  "formation_distillation_exp": {
    id: "formation_distillation_exp",
    label: "Experimental Memory",
    parentId: "formation_distillation",
    paragraphs: ["Distills successful action tactics or correction steps from error logs."],
    references: ["Liang et al. (2024). SAGE: Dual-Store Memory System for Life-Long Learning."]
  },
  "formation_structured": {
    id: "formation_structured",
    label: "Structured Construction",
    parentId: "dynamics_formation",
    paragraphs: ["Builds symbolic structures like entity graphs, relation lists, or database tables from unstructured text."],
    references: ["Rasmussen et al. (2024). Zep: Fast, Scalable Long-Term Memory for Conversational Agents.", "SGMem (Wu et al., 2025h)"]
  },
  "formation_structured_entity": {
    id: "formation_structured_entity",
    label: "Entity-level",
    parentId: "formation_structured",
    paragraphs: ["Extracts entity-relation pairs to append to a structured knowledge graph index."],
    references: ["Gutierrez et al. (2024). HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models.", "Chhikara et al. (2024). Mem0: The Memory Layer for Personalized AI Agents."]
  },
  "formation_structured_chunk": {
    id: "formation_structured_chunk",
    label: "Chunk-level",
    parentId: "formation_structured",
    paragraphs: ["Binds text chunks together using temporal or causal edges, maintaining document structure."],
    references: ["TeaFarm (Ong et al., 2024). TeaFarm: Causal and Temporal Structured Memory Indexes."]
  },
  "formation_latent": {
    id: "formation_latent",
    label: "Latent Representation",
    parentId: "dynamics_formation",
    paragraphs: ["Encodes observations into continuous dense vectors representing memory embeddings."],
    references: ["MemGen (Zhang et al., 2024). MemGen: Generative Latent Memory for Language Agents.", "VisMem"]
  },
  "formation_latent_text": {
    id: "formation_latent_text",
    label: "Textual",
    parentId: "formation_latent",
    paragraphs: ["Encodes text passages into semantic embedding vectors."],
    references: ["Sentence-BERT (Reimers & Gurevych, 2019). Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks."]
  },
  "formation_latent_multi": {
    id: "formation_latent_multi",
    label: "Multimodal",
    parentId: "formation_latent",
    paragraphs: ["Maps visual features and text descriptions to a shared latent embedding space."],
    references: ["CLIP (Radford et al., 2021). Learning Transferable Visual Models From Natural Language Supervision."]
  },
  "formation_parametric": {
    id: "formation_parametric",
    label: "Parametric initialization",
    parentId: "dynamics_formation",
    paragraphs: ["Bakes experiences into weight distributions via SFT or RL gradients."],
    references: ["Model Editing: Direct Intervention in Transformer Parameter Fields.", "Test-time adaptation"]
  },
  "formation_parametric_know": {
    id: "formation_parametric_know",
    label: "Knowledge Internalization",
    parentId: "formation_parametric",
    paragraphs: ["Bakes facts and static information directly into transformer parameters."],
    references: ["Memory3 (Yang et al., 2024). Memory3: Parametric Memory Consolidation for Transformers."]
  },
  "formation_parametric_cap": {
    id: "formation_parametric_cap",
    label: "Capability Internalization",
    parentId: "formation_parametric",
    paragraphs: ["Bakes reasoning skills or tool-calling habits into parameters using reinforcement learning."],
    references: ["Reasoning RL (Wang et al., 2025o)"]
  },
  "dynamics_evolution": {
    id: "dynamics_evolution",
    label: "Evolution",
    parentId: "operating_memory",
    paragraphs: ["Evolution operators modify stored memory, consolidating redundant nodes, resolving contradictions, and forgetting low-utility entries."],
    references: ["Rasmussen et al., 2025", "Liang et al. (2024). SAGE: Dual-Store Memory System for Life-Long Learning.", "Livia"]
  },
  "evolution_consolidation": {
    id: "evolution_consolidation",
    label: "Consolidation",
    parentId: "dynamics_evolution",
    paragraphs: ["Consolidates scattered experiences into higher-level abstract nodes, resolving duplications."],
    references: ["CAM (Li et al., 2024). CAM: Consolidation and Abstraction in Agent Memory.", "Lin et al. (2024). Synaptic Consolidation analog in AI Agents."]
  },
  "evolution_consolidation_local": {
    id: "evolution_consolidation_local",
    label: "Local consolidation",
    parentId: "evolution_consolidation",
    paragraphs: ["Merges adjacent dialogue segments or task steps into sub-summaries."],
    references: ["Westh\u00e4u\u00dfer et al. (2024). Incremental Summarization in Long Dialogue Agents."]
  },
  "evolution_consolidation_cluster": {
    id: "evolution_consolidation_cluster",
    label: "Cluster-level Fusion",
    parentId: "evolution_consolidation",
    paragraphs: ["Groups nodes with semantic similarities, merging redundant facts."],
    references: ["CAM (Li et al., 2024). CAM: Consolidation and Abstraction in Agent Memory."]
  },
  "evolution_consolidation_global": {
    id: "evolution_consolidation_global",
    label: "Global Integration",
    parentId: "evolution_consolidation",
    paragraphs: ["Fuses all local sub-graphs into a unified conceptual world schema."],
    references: ["GraphRAG indices"]
  },
  "evolution_updating": {
    id: "evolution_updating",
    label: "Updating",
    parentId: "dynamics_evolution",
    paragraphs: ["Modifies old information to correct errors or match environment state changes."],
    references: ["MemoryBank updates", "Model Editing: Direct Intervention in Transformer Parameter Fields."]
  },
  "evolution_updating_ext": {
    id: "evolution_updating_ext",
    label: "External Memory Update",
    parentId: "evolution_updating",
    paragraphs: ["Rewrites plaintext profiles or updates graph weights directly in the database."],
    references: ["Zep temporal updates"]
  },
  "evolution_updating_edit": {
    id: "evolution_updating_edit",
    label: "Model Editing: Direct Intervention in Transformer Parameter Fields.",
    parentId: "evolution_updating",
    paragraphs: ["Alters specific model parameters to fix outdated factual knowledge."],
    references: ["Meng et al. (2022). Locating and Editing Factual Associations in GPT (ROME)."]
  },
  "evolution_forgetting": {
    id: "evolution_forgetting",
    label: "Forgetting",
    parentId: "dynamics_evolution",
    paragraphs: ["Prunes nodes from memory to manage storage budgets and filter out noise."],
    references: ["Livia (Xi & Wang, 2024). Livia: Time-decay Forgetting Curves for Language Agents.", "SAGE"]
  },
  "evolution_forgetting_time": {
    id: "evolution_forgetting_time",
    label: "Time-based",
    parentId: "evolution_forgetting",
    paragraphs: ["Applies mathematical decay curves mimicking biological forgetting curves over elapsed ticks."],
    references: ["Ebbinghaus, H. (1885). Memory: A contribution to experimental psychology.", "Livia"]
  },
  "evolution_forgetting_freq": {
    id: "evolution_forgetting_freq",
    label: "Frequency-based",
    parentId: "evolution_forgetting",
    paragraphs: ["Keeps items that are referenced frequently, decaying items that are rarely retrieved."],
    references: ["SAGE dual-store"]
  },
  "evolution_forgetting_imp": {
    id: "evolution_forgetting_imp",
    label: "Importance-driven",
    parentId: "evolution_forgetting",
    paragraphs: ["Uses an LLM evaluator to score node importance, pruning elements below a set threshold."],
    references: ["Generative Agents (Park et al., 2023). Generative Agents: Interactive Simulacra of Human Behavior.", "Wang et al., 2025r"]
  },
  "dynamics_retrieval": {
    id: "dynamics_retrieval",
    label: "Retrieval",
    parentId: "operating_memory",
    paragraphs: ["Retrieval operators extract relevant facts or experiences from memory bases to inject into the active context."],
    references: ["Survey Section 5.3", "RMM (Tan et al., 2025c)", "HippoRAG"]
  },
  "retrieval_timing": {
    id: "retrieval_timing",
    label: "Retrieval time, Intent",
    parentId: "dynamics_retrieval",
    paragraphs: ["Governs when to trigger retrieval and which databases (LTM, skill base, profiles) to query."],
    references: ["Zhao et al., 2024", "MemOS Scheduler"]
  },
  "retrieval_timing_auto": {
    id: "retrieval_timing_auto",
    label: "Automated Timing",
    parentId: "retrieval_timing",
    paragraphs: ["The agent policy determines when to invoke retrieval commands dynamically during reasoning."],
    references: ["MemGPT function calls", "ComoRAG fast-slow evaluation"]
  },
  "retrieval_intent_auto": {
    id: "retrieval_intent_auto",
    label: "Automated Intent",
    parentId: "retrieval_timing",
    paragraphs: ["The model routes queries to specific memory partitions based on context."],
    references: ["H-MEM hierarchical routing (Sun & Zeng, 2025)"]
  },
  "retrieval_query": {
    id: "retrieval_query",
    label: "Query construction",
    parentId: "dynamics_retrieval",
    paragraphs: ["Translates raw user observations into optimized search signals aligned with the memory index."],
    references: ["HyDE (Gao et al., 2022). Precise Zero-Shot Dense Retrieval without Relevance Labels (HyDE).", "Visconde (Pereira et al., 2023). Visconde: Multi-document QA using Query Decomposition."]
  },
  "retrieval_query_decompose": {
    id: "retrieval_query_decompose",
    label: "Decomposition",
    parentId: "retrieval_query",
    paragraphs: ["Breaks down complex tasks into fine-grained sub-queries to query modular databases."],
    references: ["ChemAgent (Tang et al., 2024). ChemAgent: Chemical Query Decomposition with Tool Memory.", "PRIME Planner"]
  },
  "retrieval_query_rewrite": {
    id: "retrieval_query_rewrite",
    label: "Rewriting",
    parentId: "retrieval_query",
    paragraphs: ["Rewrites queries or generates hypothetical answer drafts (HyDE) to bridge semantic gaps."],
    references: ["HyDE", "MemoRAG (Qian et al., 2024). MemoRAG: Dual-System Retrieval-Augmented Generation.", "ToC (Kim et al., 2023). Thread of Thought (ToC): Analogous Reasoning in LLMs."]
  },
  "retrieval_strategies": {
    id: "retrieval_strategies",
    label: "Retrieval strategies",
    parentId: "dynamics_retrieval",
    paragraphs: ["Matches queries using sparse lexical, dense semantic, topological graph, or generative paths."],
    references: ["Lexical, Semantic, Graph, Generative, Hybrid paradigms"]
  },
  "retrieval_strategies_lexical": {
    id: "retrieval_strategies_lexical",
    label: "Lexical",
    parentId: "retrieval_strategies",
    paragraphs: ["Uses sparse keyword matching (TF-IDF, BM25) for precision-oriented term searches."],
    references: ["BM25 (Robertson & Zaragoza, 2009). The Probabilistic Relevance Framework: BM25 and Beyond."]
  },
  "retrieval_strategies_semantic": {
    id: "retrieval_strategies_semantic",
    label: "Semantic",
    parentId: "retrieval_strategies",
    paragraphs: ["Matches query and memory embeddings based on cosine similarity, supporting generalization."],
    references: ["Sentence-BERT", "Voyager skill search", "MemoRAG"]
  },
  "retrieval_strategies_graph": {
    id: "retrieval_strategies_graph",
    label: "Graph",
    parentId: "retrieval_strategies",
    paragraphs: ["Explores graph edges to retrieve related neighbor nodes and resolve multi-hop details."],
    references: ["HippoRAG PageRank", "CAM (Li et al., 2024). CAM: Consolidation and Abstraction in Agent Memory."]
  },
  "retrieval_strategies_generative": {
    id: "retrieval_strategies_generative",
    label: "Generative",
    parentId: "retrieval_strategies",
    paragraphs: ["Generates document IDs directly using conditional decoding, bypassing separate indices."],
    references: ["Generative Retrieval (Tay et al., 2022)"]
  },
  "retrieval_strategies_hybrid": {
    id: "retrieval_strategies_hybrid",
    label: "Hybrid",
    parentId: "retrieval_strategies",
    paragraphs: ["Fuses lexical, semantic, and graph retrieval signals to balance recall and precision."],
    references: ["Agent KB (Tang et al., 2024). Agent KB: Hybrid Lexical-Semantic Memory Stores.", "MIRIX", "Semantic Anchoring"]
  },
  "retrieval_post": {
    id: "retrieval_post",
    label: "Post-Retrieval processing",
    parentId: "dynamics_retrieval",
    paragraphs: ["Refines raw search outputs to filter noise, compress length, and resolve contradictions before prompt injection."],
    references: ["RCR-Router (Liu et al., 2024). RCR-Router: Post-Retrieval Routing and Filtering.", "Memory-R1 (Yan et al., 2025). Memory-R1: Reinforcement Learning for Long-Horizon Memory Management."]
  },
  "retrieval_post_rerank": {
    id: "retrieval_post_rerank",
    label: "Re-ranking & Filtering",
    parentId: "retrieval_post",
    paragraphs: ["Scores retrieved nodes using learnable rerankers, temporal validity windows, or auxiliary validators."],
    references: ["Memento reinforcement scoring", "MemGuide reranking"]
  },
  "retrieval_post_aggregate": {
    id: "retrieval_post_aggregate",
    label: "Aggregation & Compression",
    parentId: "retrieval_post",
    paragraphs: ["Merges disjoint snippets, removes duplicate facts, and compresses text length."],
    references: ["ComoRAG Integration Agent", "MA-RAG Content Extractor"]
  },
  "benchmarks": {
    id: "benchmarks",
    label: "Benchmarks",
    parentId: null,
    paragraphs: ["Evaluations probe agent memory retention, lifelong task adaptation, and self-evolution over long horizons.", "Benchmarks are split into explicit memory tests (dialogue consistency, profile tracking) and general agent planning tests (interactive environments, web navigation)."],
    references: ["MemBench (Tan et al., 2024). MemBench: Benchmarking Long-term Memory in Language Agents.", "LoCoMo (Maharana et al., 2024). LoCoMo: Long-Context Memory Benchmark.", "LifelongAgentBench (Zheng et al., 2024). LifelongAgentBench: Evaluating Lifelong Learning in Agents."]
  },
  "frameworks": {
    id: "frameworks",
    label: "Frameworks",
    parentId: null,
    paragraphs: ["Open-source frameworks provide modular infrastructure (databases, indices, re-writers) to coordinate agent memories.", "Engines span from general-purpose vector bases (Chroma, Weaviate) to hierarchical, agent-centric operating systems (MemGPT, Mem0, Zep)."],
    references: ["MemGPT (Packer et al., 2023b)", "Chhikara et al. (2024). Mem0: The Memory Layer for Personalized AI Agents.", "Rasmussen et al. (2024). Zep: Fast, Scalable Long-Term Memory for Conversational Agents."]
  },
  "future": {
    id: "future",
    label: "Future",
    parentId: null,
    paragraphs: ["The survey outlines several key position shifts and emerging frontiers that define the next generation of agentic memory architectures."],
    references: ["Frontiers & Positions Section 7"]
  },
  "future_generation": {
    id: "future_generation",
    label: "Memory Generation",
    parentId: "future",
    paragraphs: ["Shifting from retrieval-centric access to context-adaptive generation, where the agent actively synthesizes and compresses continuous representations on the fly."],
    references: ["ComoRAG (Wang et al., 2024). ComoRAG: Collaborative Multi-agent Retrieval-Augmented Generation.", "MemGen (Zhang et al., 2024). MemGen: Generative Latent Memory for Language Agents."]
  },
  "future_rl": {
    id: "future_rl",
    label: "RL driven memory management",
    parentId: "future",
    paragraphs: ["Replacing hand-crafted rules and hippocampal analogies with fully RL-trained policies that handle writing, evolving, and routing memory autonomously based on long-horizon rewards."],
    references: ["Memory-R1 (Yan et al., 2025). Memory-R1: Reinforcement Learning for Long-Horizon Memory Management.", "MemSearcher (Yuan et al., 2025a)"]
  },
  "future_multimodal": {
    id: "future_multimodal",
    label: "Multimodal memory",
    parentId: "future",
    paragraphs: ["Designing aligned representations that integrate visual frames, audio streams, first-person sensors, and action parameters into a single temporal memory map."],
    references: ["Song et al. (2023). MovieChat: From Single-Frame to Long-Video Multimodal Understanding.", "VideoAgent (Wang et al., 2024). VideoAgent: Long-Video Multimodal Memory Agents."]
  },
  "future_cognitive": {
    id: "future_cognitive",
    label: "Human-Cognitive connections",
    parentId: "future",
    paragraphs: ["Incorporating offline consolidation intervals (sleep phases) inspired by biological CLS theory, allowing agents to distill schemas and prune noise outside active trials."],
    references: ["CLS Theory (Kumaran et al., 2016). What Learning and Memory Systems in the Brain Tell Us About Artificial Systems.", "Lin et al., 2025b"]
  },
  "future_world_models": {
    id: "future_world_models",
    label: "Memory for world models",
    parentId: "future",
    paragraphs: ["Using state-space architectures (SSMs) and explicit pose-conditioned frame banks to maintain long-term physical, temporal, and spatial consistency in interactive simulators."],
    references: ["UniWM (Dong et al., 2024). UniWM: Unified World Memory Simulator.", "Ctrl-World (Guo et al., 2024). Ctrl-World: Pose-conditioned World Models."]
  },
  "future_shared_mas": {
    id: "future_shared_mas",
    label: "Shared Memory for Multi-Agent systems",
    parentId: "future",
    paragraphs: ["Developing role-aware permission controls, write contention coordinators, and learning-based synchronization systems to establish shared cognitive substrates."],
    references: ["G-Memory (Zhang et al., 2024). G-Memory: Group-based Shared Memory for Multi-Agent Systems.", "Blackboard Systems (Hong et al., 2024)"]
  },
};

export const benchmarksData: BenchmarkItem[] = [
  {
    "name": "MemBench",
    "link": "https://github.com/nuster1128/MemBench",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "env": "simulated",
    "feature": "interactive scenarios",
    "scale": "53,000 samples"
  },
  {
    "name": "MemoryAgentBench",
    "link": "https://github.com/zlwangustc/MemoryAgentBench",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "env": "simulated",
    "feature": "multi-turn interactions",
    "scale": "4 tasks"
  },
  {
    "name": "LoCoMo",
    "link": "https://github.com/snap-research/locomo",
    "factual": true,
    "experiential": false,
    "multimodal": true,
    "env": "real",
    "feature": "conversational memory",
    "scale": "300 samples"
  },
  {
    "name": "WebChoreArena",
    "link": "https://web-chore-arena.github.io",
    "factual": true,
    "experiential": true,
    "multimodal": true,
    "env": "real",
    "feature": "tedious web browsing",
    "scale": "4 tasks / 532 samples"
  },
  {
    "name": "MT-Mind2Web",
    "link": "https://github.com/OSU-NLP-Group/Mind2Web",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "env": "real",
    "feature": "conversational web navigation",
    "scale": "720 samples"
  },
  {
    "name": "PersonaMem",
    "link": "https://github.com/Zyphra/PersonaMem",
    "factual": true,
    "experiential": false,
    "multimodal": false,
    "env": "simulated",
    "feature": "dynamic user profiling",
    "scale": "15 tasks / 180 samples"
  },
  {
    "name": "LongMemEval",
    "link": "https://github.com/xiaowu0162/LongMemEval",
    "factual": true,
    "experiential": false,
    "multimodal": false,
    "env": "simulated",
    "feature": "interactive memory",
    "scale": "5 tasks / 500 samples"
  },
  {
    "name": "PerLTQA",
    "link": "https://github.com/Ellenzzn/PerLTQA",
    "factual": true,
    "experiential": false,
    "multimodal": false,
    "env": "simulated",
    "feature": "social personalized interactions",
    "scale": "8,593 samples"
  },
  {
    "name": "MemoryBank",
    "link": "https://github.com/zhongwanjun/MemoryBank-SiliconFriend",
    "factual": true,
    "experiential": false,
    "multimodal": false,
    "env": "simulated",
    "feature": "user memory updating",
    "scale": "194 samples"
  },
  {
    "name": "MPR",
    "link": "https://arxiv.org/abs/2402.03453",
    "factual": true,
    "experiential": false,
    "multimodal": false,
    "env": "simulated",
    "feature": "user personalization",
    "scale": "108,000 samples"
  },
  {
    "name": "PrefEval",
    "link": "https://github.com/amazon-science/PrefEval",
    "factual": true,
    "experiential": false,
    "multimodal": false,
    "env": "simulated",
    "feature": "personal preferences",
    "scale": "3,000 samples"
  },
  {
    "name": "LOCCO",
    "link": "https://arxiv.org/abs/2406.09263",
    "factual": true,
    "experiential": false,
    "multimodal": false,
    "env": "simulated",
    "feature": "chronological conversations",
    "scale": "3,080 samples"
  },
  {
    "name": "StoryBench",
    "link": "https://github.com/google-research/storybench",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "env": "mixed",
    "feature": "interactive fiction games",
    "scale": "3 tasks"
  },
  {
    "name": "MemoryBench",
    "link": "https://arxiv.org/abs/2312.04861",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "env": "simulated",
    "feature": "continual learning",
    "scale": "4 tasks / ~20,000 samples"
  },
  {
    "name": "Madial-Bench",
    "link": "https://arxiv.org/abs/2406.09614",
    "factual": true,
    "experiential": false,
    "multimodal": false,
    "env": "simulated",
    "feature": "memory recalling",
    "scale": "331 samples"
  },
  {
    "name": "Evo-Memory",
    "link": "https://arxiv.org/abs/2502.12110",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "env": "simulated",
    "feature": "test-time learning",
    "scale": "10 tasks / ~3,700 samples"
  },
  {
    "name": "LifelongAgentBench",
    "link": "https://arxiv.org/abs/2412.04048",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "env": "simulated",
    "feature": "lifelong learning",
    "scale": "1,396 samples"
  },
  {
    "name": "StreamBench",
    "link": "https://github.com/stream-bench/stream-bench",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "env": "simulated",
    "feature": "continuous online learning",
    "scale": "9,702 samples"
  },
  {
    "name": "DialSim",
    "link": "https://github.com/jiho283/DialSim",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "env": "real",
    "feature": "multi-dialogue understanding",
    "scale": "~1,300 samples"
  },
  {
    "name": "LongBench",
    "link": "https://github.com/THUDM/LongBench",
    "factual": true,
    "experiential": false,
    "multimodal": false,
    "env": "mixed",
    "feature": "long-context understanding",
    "scale": "21 tasks / 4,750 samples"
  },
  {
    "name": "LongBench v2",
    "link": "https://github.com/THUDM/LongBench",
    "factual": true,
    "experiential": false,
    "multimodal": false,
    "env": "mixed",
    "feature": "long-context multitasks",
    "scale": "20 tasks / 503 samples"
  },
  {
    "name": "RULER",
    "link": "https://github.com/hsiehjackson/RULER",
    "factual": true,
    "experiential": false,
    "multimodal": false,
    "env": "simulated",
    "feature": "long-context retrieval",
    "scale": "13 tasks"
  },
  {
    "name": "BABILong",
    "link": "https://github.com/booydar/babilong",
    "factual": true,
    "experiential": false,
    "multimodal": false,
    "env": "simulated",
    "feature": "long-context reasoning",
    "scale": "20 tasks"
  },
  {
    "name": "MM-Needle",
    "link": "https://github.com/MediaBrain-SJTU/MM-Needle",
    "factual": true,
    "experiential": false,
    "multimodal": true,
    "env": "simulated",
    "feature": "multimodal long-context retrieval",
    "scale": "~280,000 samples"
  },
  {
    "name": "HaluMem",
    "link": "https://arxiv.org/abs/2404.09562",
    "factual": true,
    "experiential": false,
    "multimodal": false,
    "env": "simulated",
    "feature": "memory hallucinations",
    "scale": "3,467 samples"
  },
  {
    "name": "HotpotQA",
    "link": "https://hotpotqa.github.io",
    "factual": true,
    "experiential": false,
    "multimodal": false,
    "env": "simulated",
    "feature": "long-context QA",
    "scale": "113k samples"
  },
  {
    "name": "ALFWorld",
    "link": "https://github.com/alfworld/alfworld",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "env": "simulated",
    "feature": "text-based embodied environment",
    "scale": "3,353 tasks"
  },
  {
    "name": "ScienceWorld",
    "link": "https://github.com/allenai/ScienceWorld",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "env": "simulated",
    "feature": "interactive embodied environment",
    "scale": "10 t. / 30 t."
  },
  {
    "name": "AgentGym",
    "link": "https://github.com/WooooDyy/AgentGym",
    "factual": false,
    "experiential": true,
    "multimodal": false,
    "env": "mixed",
    "feature": "multiple environments",
    "scale": "89 tasks / 20,509 samples"
  },
  {
    "name": "AgentBoard",
    "link": "https://github.com/hkust-nlp/AgentBoard",
    "factual": false,
    "experiential": true,
    "multimodal": false,
    "env": "mixed",
    "feature": "multi-round interaction",
    "scale": "9 tasks / 1013 samples"
  },
  {
    "name": "WebShop",
    "link": "https://github.com/princeton-nlp/WebShop",
    "factual": false,
    "experiential": true,
    "multimodal": true,
    "env": "simulated",
    "feature": "e-commerce web interaction",
    "scale": "12,087 samples"
  },
  {
    "name": "WebArena",
    "link": "https://github.com/web-arena-x/webarena",
    "factual": false,
    "experiential": true,
    "multimodal": true,
    "env": "real",
    "feature": "web interaction",
    "scale": "812 samples"
  },
  {
    "name": "MMInA",
    "link": "https://github.com/shuishida/MMInA",
    "factual": true,
    "experiential": true,
    "multimodal": true,
    "env": "real",
    "feature": "multihop web interaction",
    "scale": "1,050 samples"
  },
  {
    "name": "SWE-Bench Verified",
    "link": "https://github.com/princeton-nlp/SWE-bench",
    "factual": false,
    "experiential": true,
    "multimodal": false,
    "env": "real",
    "feature": "code repair",
    "scale": "500 samples"
  },
  {
    "name": "GAIA",
    "link": "https://huggingface.co/datasets/gaia-benchmark/GAIA",
    "factual": false,
    "experiential": true,
    "multimodal": true,
    "env": "real",
    "feature": "human-level deep research",
    "scale": "466 samples"
  },
  {
    "name": "xBench-DS",
    "link": "https://arxiv.org/abs/2503.10071",
    "factual": false,
    "experiential": true,
    "multimodal": true,
    "env": "real",
    "feature": "deep-search evaluation",
    "scale": "100 samples"
  },
  {
    "name": "ToolBench",
    "link": "https://github.com/OpenBMB/ToolBench",
    "factual": false,
    "experiential": true,
    "multimodal": false,
    "env": "real",
    "feature": "API tool use",
    "scale": "126,486 samples"
  },
  {
    "name": "GenAI-Bench",
    "link": "https://github.com/tifa365/GenAI-Bench",
    "factual": false,
    "experiential": true,
    "multimodal": true,
    "env": "real",
    "feature": "visual generation evaluation",
    "scale": "~40,000 samples"
  }
];

export const frameworksData: FrameworkItem[] = [
  {
    "name": "MemGPT",
    "link": "https://github.com/cpacker/MemGPT",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "structure": "hierarchical (S/LTM)",
    "evaluation": "LoCoMo"
  },
  {
    "name": "Mem0",
    "link": "https://github.com/mem0ai/mem0",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "structure": "graph + vector",
    "evaluation": "LoCoMo"
  },
  {
    "name": "Memobase",
    "link": "https://github.com/memodb-io/memobase",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "structure": "structured profiles",
    "evaluation": "LoCoMo"
  },
  {
    "name": "MIRIX",
    "link": "https://github.com/Mirix-AI/MIRIX",
    "factual": true,
    "experiential": true,
    "multimodal": true,
    "structure": "structured memory",
    "evaluation": "LoCoMo, MemoryAgentBench"
  },
  {
    "name": "MemoryOS",
    "link": "https://github.com/BAI-LAB/MemoryOS",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "structure": "hierarchical (S/M/LTM)",
    "evaluation": "LoCoMo, MemoryBank"
  },
  {
    "name": "MemOS",
    "link": "https://github.com/MemTensor/MemOS",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "structure": "tree memory + memcube",
    "evaluation": "LoCoMo, PreFEval, LongMemEval, PersonaMem"
  },
  {
    "name": "Zep",
    "link": "https://github.com/getzep/zep",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "structure": "temporal knowledge graph",
    "evaluation": "LongMemEval"
  },
  {
    "name": "LangMem",
    "link": "https://github.com/langchain-ai/langmem",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "structure": "core API + manager",
    "evaluation": "-"
  },
  {
    "name": "SuperMemory",
    "link": "https://github.com/supermemoryai/supermemory",
    "factual": true,
    "experiential": true,
    "multimodal": true,
    "structure": "vector + semantic",
    "evaluation": "-"
  },
  {
    "name": "Cognee",
    "link": "https://github.com/topoteretes/cognee",
    "factual": true,
    "experiential": true,
    "multimodal": true,
    "structure": "knowledge graph",
    "evaluation": "-"
  },
  {
    "name": "Memary",
    "link": "https://github.com/kingjulio8238/Memary",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "structure": "stream + entity store",
    "evaluation": "-"
  },
  {
    "name": "Pinecone",
    "link": "https://github.com/pinecone-io/pinecone-python-client",
    "factual": true,
    "experiential": false,
    "multimodal": false,
    "structure": "vector database",
    "evaluation": "-"
  },
  {
    "name": "Chroma",
    "link": "https://github.com/chroma-core/chroma",
    "factual": true,
    "experiential": false,
    "multimodal": true,
    "structure": "vector database",
    "evaluation": "-"
  },
  {
    "name": "Weaviate",
    "link": "https://github.com/weaviate/weaviate",
    "factual": true,
    "experiential": false,
    "multimodal": true,
    "structure": "vector + graph",
    "evaluation": "-"
  },
  {
    "name": "Second Me",
    "link": "https://github.com/mindverse/Second-Me",
    "factual": true,
    "experiential": false,
    "multimodal": false,
    "structure": "agent ego",
    "evaluation": "-"
  },
  {
    "name": "MemU",
    "link": "https://github.com/Qingyuan-Jiang/MemU",
    "factual": true,
    "experiential": true,
    "multimodal": true,
    "structure": "hierarchical layers",
    "evaluation": "-"
  },
  {
    "name": "MemEngine",
    "link": "https://github.com/nuster1128/MemEngine",
    "factual": true,
    "experiential": true,
    "multimodal": true,
    "structure": "modular space",
    "evaluation": "-"
  },
  {
    "name": "Memori",
    "link": "https://github.com/memori-ai/memori-api-client",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "structure": "memory database",
    "evaluation": "-"
  },
  {
    "name": "ReMe",
    "link": "https://github.com/leobeeson/ReMe",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "structure": "memory management",
    "evaluation": "-"
  },
  {
    "name": "AgentMemory",
    "link": "https://github.com/agentic-system/agent-memory",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "structure": "memory management",
    "evaluation": "-"
  },
  {
    "name": "MineContext",
    "link": "https://github.com/kolbytn/mindcraft",
    "factual": true,
    "experiential": true,
    "multimodal": true,
    "structure": "context engineering",
    "evaluation": "-"
  },
  {
    "name": "Acontext",
    "link": "https://arxiv.org/abs/2502.01328",
    "factual": true,
    "experiential": true,
    "multimodal": true,
    "structure": "context engineering + skill learning",
    "evaluation": "-"
  },
  {
    "name": "PowerMem",
    "link": "https://arxiv.org/abs/2503.16950",
    "factual": true,
    "experiential": false,
    "multimodal": true,
    "structure": "oceanbase",
    "evaluation": "-"
  },
  {
    "name": "ReMe (AgentScope)",
    "link": "https://github.com/modelscope/agentscope",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "structure": "agentscope",
    "evaluation": "BFCL, AppWorld"
  },
  {
    "name": "HindSight",
    "link": "https://github.com/HindSight-AI/HindSight",
    "factual": true,
    "experiential": true,
    "multimodal": false,
    "structure": "parallel retrieval + reflection",
    "evaluation": "-"
  }
];
