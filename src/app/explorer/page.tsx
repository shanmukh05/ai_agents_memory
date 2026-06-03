"use client";

import { useState, useMemo } from "react";
import { Brain, FileText, Search, ListCollapse, Maximize2, X, Compass, ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { taxonomyData, TaxonomyNode } from "@/data/paperData";
import styles from "./explorer.module.css";

const rootColors: Record<string, { accent: string; glow: string; bg: string }> = {
  constructing_memory: { accent: "var(--accent-purple)", glow: "rgba(176, 92, 67, 0.4)", bg: "rgba(176, 92, 67, 0.08)" },
  types_of_memory: { accent: "var(--accent-pink)", glow: "rgba(204, 161, 110, 0.4)", bg: "rgba(204, 161, 110, 0.08)" },
  operating_memory: { accent: "var(--accent-cyan)", glow: "rgba(89, 111, 96, 0.4)", bg: "rgba(89, 111, 96, 0.08)" },
};

// Find root category of a node
const getRootAncestorId = (nodeId: string): string => {
  let curr = nodeId;
  let safety = 0;
  while (curr && safety < 10) {
    const parentId = taxonomyData[curr]?.parentId;
    if (!parentId) return curr;
    curr = parentId;
    safety++;
  }
  return curr || "constructing_memory";
};

export default function Explorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>("constructing_memory");
  
  // Set containing manually expanded node IDs
  const [expandedNodeIds, setExpandedNodeIds] = useState<Set<string>>(
    new Set([
      "constructing_memory", "types_of_memory", "operating_memory",
      "token_level_memory", "parametric_memory", "latent_memory",
      "factual_memory", "experimental_memory", "working_memory",
      "dynamics_formation", "dynamics_evolution", "dynamics_retrieval"
    ])
  );

  const activeNode: TaxonomyNode | undefined = selectedNodeId
    ? taxonomyData[selectedNodeId]
    : undefined;

  // The 3 primary roots for taxonomy tree
  const activeRoots = useMemo((): string[] => {
    return ["constructing_memory", "types_of_memory", "operating_memory"];
  }, []);

  // Compute search match results and ancestor chains that must be expanded
  const { matchingIds, ancestorIds } = useMemo(() => {
    if (!searchQuery.trim()) {
      return { matchingIds: new Set<string>(), ancestorIds: new Set<string>() };
    }
    const q = searchQuery.toLowerCase();
    const matching = new Set<string>();
    const ancestors = new Set<string>();

    Object.keys(taxonomyData).forEach((id) => {
      // Exclude benchmarks, frameworks, future, memory (which have their own pages)
      const root = getRootAncestorId(id);
      if (root === "benchmarks" || root === "frameworks" || root === "future" || root === "memory") return;

      const node = taxonomyData[id];
      const matchLabel = node.label.toLowerCase().includes(q);
      const matchParagraphs = node.paragraphs.some(p => p.toLowerCase().includes(q));
      const matchRefs = node.references.some(r => r.toLowerCase().includes(q));

      if (matchLabel || matchParagraphs || matchRefs) {
        matching.add(id);
        let curr = node.parentId;
        let safety = 0;
        while (curr && safety < 10) {
          ancestors.add(curr);
          curr = taxonomyData[curr]?.parentId || null;
          safety++;
        }
      }
    });

    return { matchingIds: matching, ancestorIds: ancestors };
  }, [searchQuery]);

  // Search input change handler
  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    if (!val.trim()) return;

    const q = val.toLowerCase();
    const matches: string[] = [];
    Object.keys(taxonomyData).forEach((id) => {
      const root = getRootAncestorId(id);
      if (root === "benchmarks" || root === "frameworks" || root === "future" || root === "memory") return;

      const node = taxonomyData[id];
      if (!node) return;
      const matchLabel = node.label.toLowerCase().includes(q);
      const matchParagraphs = node.paragraphs.some(p => p.toLowerCase().includes(q));
      const matchRefs = node.references.some(r => r.toLowerCase().includes(q));

      if (matchLabel || matchParagraphs || matchRefs) {
        matches.push(id);
      }
    });

    if (matches.length > 0) {
      setSelectedNodeId(matches[0]);
    }
  };

  // Toggle node expansion
  const toggleNode = (nodeId: string, event?: React.MouseEvent) => {
    if (event) event.stopPropagation();
    setExpandedNodeIds((prev) => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  };

  // Expand all branches in the active section tree
  const expandAll = () => {
    const allSectionNodes = Object.keys(taxonomyData).filter((id) => {
      const root = getRootAncestorId(id);
      return root === "constructing_memory" || root === "types_of_memory" || root === "operating_memory";
    });
    setExpandedNodeIds((prev) => {
      const next = new Set(prev);
      allSectionNodes.forEach(id => next.add(id));
      return next;
    });
  };

  // Collapse all branches in the active section tree
  const collapseAll = () => {
    const allSectionNodes = Object.keys(taxonomyData).filter((id) => {
      const root = getRootAncestorId(id);
      return (root === "constructing_memory" || root === "types_of_memory" || root === "operating_memory") && 
             id !== "constructing_memory" && id !== "types_of_memory" && id !== "operating_memory";
    });
    setExpandedNodeIds((prev) => {
      const next = new Set(prev);
      allSectionNodes.forEach(id => next.delete(id));
      return next;
    });
  };

  // Calculate layout coordinates for horizontal tree flow dynamically
  const layout = useMemo(() => {
    const coords: Record<string, { x: number; y: number }> = {};
    const visibleIds = new Set<string>();
    
    const depthWidth = 190; // Horizontal gap between levels
    const rowHeight = 54;  // Vertical row height for leaf spacing
    const paddingLeft = 45;
    const paddingTop = 40;
    
    let leafCount = 0;

    const traverse = (nodeId: string, depth: number): { x: number; y: number } => {
      const x = depth * depthWidth + paddingLeft;
      visibleIds.add(nodeId);

      const childrenIds = Object.keys(taxonomyData).filter(
        (id) => taxonomyData[id].parentId === nodeId
      );
      
      const isExpanded = expandedNodeIds.has(nodeId) || ancestorIds.has(nodeId);
      const hasVisibleChildren = childrenIds.length > 0 && isExpanded;

      if (!hasVisibleChildren) {
        const y = leafCount * rowHeight + paddingTop;
        leafCount++;
        coords[nodeId] = { x, y };
        return { x, y };
      } else {
        const childCoords = childrenIds.map((childId) => traverse(childId, depth + 1));
        const y_first = childCoords[0].y;
        const y_last = childCoords[childCoords.length - 1].y;
        const y = (y_first + y_last) / 2;
        coords[nodeId] = { x, y };
        return { x, y };
      }
    };

    activeRoots.forEach((rootId) => {
      if (taxonomyData[rootId]) {
        traverse(rootId, 0);
      }
    });

    return {
      coords,
      visibleIds,
      height: Math.max(650, leafCount * rowHeight + paddingTop * 2),
      width: Math.max(850, 4 * depthWidth + paddingLeft * 2 + 100),
    };
  }, [activeRoots, expandedNodeIds, ancestorIds]);

  // Compute bezier curves connecting nodes
  const graphConnections = useMemo(() => {
    const paths: Array<{ d: string; color: string; isHighlighted: boolean }> = [];

    // Estimate rendered pixel width of a label at 11.5px Outfit font
    // ~6.5px per character + 16px total horizontal padding (2 × 8px)
    const estimateLabelWidth = (label: string) =>
      Math.min(label.length * 6.5 + 16, 158);

    layout.visibleIds.forEach((nodeId) => {
      const node = taxonomyData[nodeId];
      if (!node || node.parentId === null) return;
      if (!layout.coords[nodeId] || !layout.coords[node.parentId]) return;

      const parentNode = taxonomyData[node.parentId];
      const pCoord = layout.coords[node.parentId];
      const cCoord = layout.coords[nodeId];

      const rootId = getRootAncestorId(nodeId);
      const theme = rootColors[rootId] || rootColors.constructing_memory;

      // Start: right edge of parent label box  (circle_cx + gap-to-label + label_width)
      const parentLabelWidth = estimateLabelWidth(parentNode?.label ?? "");
      const startX = pCoord.x + 14 + parentLabelWidth + 4; // 4px breathing room
      const startY = pCoord.y;

      // End: left edge of child circle (circle_cx - circle_radius)
      const endX = cCoord.x - 10;
      const endY = cCoord.y;

      // Horizontal cubic bezier – control points share the midpoint X
      const midX = (startX + endX) / 2;
      const d = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
      const isHighlighted = selectedNodeId === nodeId || selectedNodeId === node.parentId;

      paths.push({ d, color: theme.accent, isHighlighted });
    });

    return paths;
  }, [layout, selectedNodeId]);

  const activeRootId = activeNode ? getRootAncestorId(activeNode.id) : "constructing_memory";
  const activeTheme = rootColors[activeRootId] || rootColors.constructing_memory;

  // Selected node children list for sidebar quick links
  const activeNodeChildren = useMemo(() => {
    if (!selectedNodeId) return [];
    return Object.values(taxonomyData).filter(
      (node) => node.parentId === selectedNodeId
    );
  }, [selectedNodeId]);

  return (
    <div className={styles.explorerContainer}>
      {/* Interactive Visualization Pane */}
      <div className={styles.visualPane}>
        <div className={styles.paneHeader}>
          <div className="badge badge-cyan" style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
            <Compass size={12} />
            <span>Taxonomy Map</span>
          </div>
          <h2 className={styles.paneTitle}>Interactive Cognitive Architecture</h2>
          <p className={styles.paneSubtitle}>
            Explore the unified Taxonomy Tree containing Form, Functional, and Dynamic dimensions. Click nodes to expand sub-branches, and read references in the sidebar.
          </p>

          {/* Action Toolbar */}
          <div className={styles.toolbar}>
            {/* Search Input */}
            <div className={styles.searchWrapper}>
              <Search className={styles.searchIcon} size={16} />
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search concepts, papers, descriptions..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
              {searchQuery && (
                <button
                  className={styles.clearSearch}
                  onClick={() => handleSearchChange("")}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Tree Controls */}
            <div className={styles.controls}>
              <button className={styles.controlBtn} onClick={expandAll} title="Expand tree">
                <Maximize2 size={14} />
                <span>Expand All</span>
              </button>
              <button className={styles.controlBtn} onClick={collapseAll} title="Collapse tree">
                <ListCollapse size={14} />
                <span>Collapse All</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Node-Link Graph Area */}
        <div className={styles.flowWrapper}>
          <svg className={styles.svgCanvas} style={{ height: `${layout.height}px`, width: `${layout.width}px` }}>
            {/* Render connecting lines */}
            {graphConnections.map((p, index) => (
              <path
                key={index}
                d={p.d}
                fill="none"
                stroke={p.color}
                strokeWidth={p.isHighlighted ? "2.5" : "1.5"}
                opacity={p.isHighlighted ? 0.7 : 0.2}
                style={{ pointerEvents: "none", transition: "stroke-width var(--transition-fast)" }}
              />
            ))}

            {/* Render nodes */}
            {Array.from(layout.visibleIds).map((nodeId) => {
              const node = taxonomyData[nodeId];
              if (!node || !layout.coords[nodeId]) return null;

              const { x, y } = layout.coords[nodeId];
              const isSelected = selectedNodeId === nodeId;
              const isMatchingSearch = searchQuery.trim() !== "" && matchingIds.has(nodeId);
              
              const childrenIds = Object.keys(taxonomyData).filter(n => taxonomyData[n].parentId === nodeId);
              const hasChildren = childrenIds.length > 0;
              const isExpanded = expandedNodeIds.has(nodeId) || ancestorIds.has(nodeId);
              const nodeRoot = getRootAncestorId(nodeId);
              const nodeTheme = rootColors[nodeRoot] || rootColors.constructing_memory;

              return (
                <g key={nodeId} className={styles.nodeGroup}>
                  {/* Outer selection ring on active */}
                  {isSelected && (
                    <circle
                      cx={x}
                      cy={y}
                      r="13"
                      fill="none"
                      stroke={nodeTheme.accent}
                      strokeWidth="1.5"
                      strokeDasharray="2,2"
                      style={{ opacity: 0.8 }}
                    />
                  )}

                  {/* Node Circle element */}
                  {hasChildren ? (
                    <g
                      onClick={(e) => toggleNode(nodeId, e)}
                      className={styles.toggleNode}
                    >
                      <title>{isExpanded ? "Collapse branch" : "Expand branch"}</title>
                      {/* Interactive backing */}
                      <circle cx={x} cy={y} r="14" fill="transparent" />
                      <circle
                        cx={x}
                        cy={y}
                        r="9"
                        fill="var(--bg-surface)"
                        stroke={isSelected ? nodeTheme.accent : "var(--text-secondary)"}
                        strokeWidth="2"
                        className={styles.parentCircle}
                      />
                      {/* Plus/Minus icon inside */}
                      <line
                        x1={x - 4}
                        y1={y}
                        x2={x + 4}
                        y2={y}
                        stroke="var(--text-primary)"
                        strokeWidth="1.5"
                      />
                      {!isExpanded && (
                        <line
                          x1={x}
                          y1={y - 4}
                          x2={x}
                          y2={y + 4}
                          stroke="var(--text-primary)"
                          strokeWidth="1.5"
                        />
                      )}
                    </g>
                  ) : (
                    // Leaf Node Circle
                    <circle
                      cx={x}
                      cy={y}
                      r="5"
                      fill={isSelected ? nodeTheme.accent : "var(--text-muted)"}
                      className={styles.leafCircle}
                      onClick={() => setSelectedNodeId(nodeId)}
                      style={{ cursor: "pointer" }}
                    />
                  )}

                  {/* HTML overlay text with exact positioning */}
                  <foreignObject x={x + 14} y={y - 16} width="165" height="32">
                    <div
                      className={`${styles.htmlLabel} ${isSelected ? styles.htmlLabelActive : ""} ${isMatchingSearch ? styles.htmlLabelMatch : ""}`}
                      onClick={() => setSelectedNodeId(nodeId)}
                      style={{
                        "--row-theme-accent": nodeTheme.accent,
                        "--row-theme-bg": nodeTheme.bg,
                      } as React.CSSProperties}
                    >
                      {node.label}
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Slide-over Detail Sidebar Pane */}
      <div className={styles.detailPane}>
        <AnimatePresence mode="wait">
          {activeNode ? (
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              style={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <div className={styles.detailHeader} style={{ borderColor: activeTheme.accent }}>
                <div className={styles.detailCategory}>
                  <span
                    className="badge"
                    style={{
                      backgroundColor: activeTheme.bg,
                      color: activeTheme.accent,
                      borderColor: activeTheme.accent,
                    }}
                  >
                    {taxonomyData[activeRootId]?.label || "Memory System"}
                  </span>
                </div>
                <h3 className={styles.detailTitle}>{activeNode.label}</h3>
                <span className={styles.nodeKey}>Key: <code>{activeNode.id}</code></span>
              </div>

              <div className={styles.detailContent}>
                {/* Details Section */}
                <div className={styles.textSection}>
                  <h4>Details & Mechanics</h4>
                  {activeNode.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Sub-branches Index */}
                {activeNodeChildren.length > 0 && (
                  <div className={styles.textSection}>
                    <h4>Sub-categories</h4>
                    <div className={styles.subnodesGrid}>
                      {activeNodeChildren.map((child) => (
                        <button
                          key={child.id}
                          className={styles.subnodeCard}
                          onClick={() => {
                            setSelectedNodeId(child.id);
                            // Auto expand parent
                            setExpandedNodeIds(prev => new Set([...prev, activeNode.id]));
                          }}
                          style={{
                            "--row-theme-accent": activeTheme.accent,
                            "--row-theme-bg": activeTheme.bg,
                          } as React.CSSProperties}
                        >
                          <span className={styles.subnodeLabel}>{child.label}</span>
                          <span className={styles.subnodeArrow}>&rarr;</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* References Section */}
                {activeNode.references && activeNode.references.length > 0 && (
                  <div className={styles.textSection}>
                    <h4>Representative Papers & Works</h4>
                    <ul className={styles.referenceList}>
                      {activeNode.references.map((ref, idx) => (
                        <li key={idx}>
                          <a
                            href={`https://scholar.google.com/scholar?q=${encodeURIComponent(ref)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.referenceTag}
                          >
                            <FileText size={12} style={{ flexShrink: 0 }} />
                            <span className={styles.refText}>{ref}</span>
                            <ExternalLink size={10} className={styles.referenceLinkIcon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <div className={styles.emptyState}>
              <Brain className={styles.emptyStateIcon} size={48} strokeWidth={1.5} />
              <p className={styles.emptyStateText}>
                Click any node on the interactive diagram to explore its details, definitions, and papers.
              </p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
