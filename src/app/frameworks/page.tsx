"use client";

import { useState } from "react";
import { Search, Code, ExternalLink, Check, X } from "lucide-react";
import { frameworksData } from "@/data/paperData";
import styles from "./frameworks.module.css";

export default function FrameworksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter States
  const [factualFilter, setFactualFilter] = useState<string>("all");
  const [experientialFilter, setExperientialFilter] = useState<string>("all");
  const [multimodalFilter, setMultimodalFilter] = useState<string>("all");

  const handleResetFilters = () => {
    setSearchQuery("");
    setFactualFilter("all");
    setExperientialFilter("all");
    setMultimodalFilter("all");
  };

  // Filter logic for Frameworks
  const filteredFrameworks = frameworksData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.structure.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.evaluation.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFactual =
      factualFilter === "all" ||
      (factualFilter === "yes" && item.factual) ||
      (factualFilter === "no" && !item.factual);

    const matchesExperiential =
      experientialFilter === "all" ||
      (experientialFilter === "yes" && item.experiential) ||
      (experientialFilter === "no" && !item.experiential);

    const matchesMultimodal =
      multimodalFilter === "all" ||
      (multimodalFilter === "yes" && item.multimodal) ||
      (multimodalFilter === "no" && !item.multimodal);

    return matchesSearch && matchesFactual && matchesExperiential && matchesMultimodal;
  });

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className="badge badge-purple" style={{ marginBottom: 12 }}>
          ENGINES & MIDDLEWARE
        </div>
        <h2 className={styles.title}>Open-Source Frameworks</h2>
        <p className={styles.subtitle}>
          A directory of open-source agent engines, cognitive architectures, and memory databases (Table 9). Search and filter by active memory representations and features.
        </p>
      </div>

      {/* Filter Widgets Panel */}
      <div className={`${styles.filterPanel} glass-panel`}>
        <div className={styles.searchBox}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search framework name, structure, or evaluation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Factual Filter */}
        <select
          className={styles.filterSelect}
          value={factualFilter}
          onChange={(e) => setFactualFilter(e.target.value)}
        >
          <option value="all">Factual Memory: All</option>
          <option value="yes">Factual: Yes</option>
          <option value="no">Factual: No</option>
        </select>

        {/* Experiential Filter */}
        <select
          className={styles.filterSelect}
          value={experientialFilter}
          onChange={(e) => setExperientialFilter(e.target.value)}
        >
          <option value="all">Experiential: All</option>
          <option value="yes">Experiential: Yes</option>
          <option value="no">Experiential: No</option>
        </select>

        {/* Multimodal Filter */}
        <select
          className={styles.filterSelect}
          value={multimodalFilter}
          onChange={(e) => setMultimodalFilter(e.target.value)}
        >
          <option value="all">Multimodal: All</option>
          <option value="yes">Multimodal: Yes</option>
          <option value="no">Multimodal: No</option>
        </select>

        <button className="btn btn-secondary" onClick={handleResetFilters}>
          Clear Filters
        </button>
      </div>

      {/* Directory Table */}
      <div className={styles.tableWrapper}>
        {filteredFrameworks.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>Fac.</th>
                <th className={styles.th}>Exp.</th>
                <th className={styles.th}>M.M.</th>
                <th className={styles.th}>Core Abstraction Structure</th>
                <th className={styles.th}>Reported Evaluations</th>
                <th className={styles.th}>Link</th>
              </tr>
            </thead>
            <tbody>
              {filteredFrameworks.map((item) => (
                <tr key={item.name} className={styles.tr}>
                  <td className={`${styles.td} ${styles.tdName}`}>{item.name}</td>
                  <td className={styles.td}>
                    <span className={`${styles.yesNoBadge} ${item.factual ? styles.yesBadge : styles.noBadge}`}>
                      {item.factual ? <Check size={12} /> : <X size={12} />}
                    </span>
                  </td>
                  <td className={styles.td}>
                    <span className={`${styles.yesNoBadge} ${item.experiential ? styles.yesBadge : styles.noBadge}`}>
                      {item.experiential ? <Check size={12} /> : <X size={12} />}
                    </span>
                  </td>
                  <td className={styles.td}>
                    <span className={`${styles.yesNoBadge} ${item.multimodal ? styles.yesBadge : styles.noBadge}`}>
                      {item.multimodal ? <Check size={12} /> : <X size={12} />}
                    </span>
                  </td>
                  <td className={styles.td} style={{ color: "var(--accent-purple)", fontWeight: 600 }}>
                    {item.structure}
                  </td>
                  <td className={styles.td}>{item.evaluation}</td>
                  <td className={styles.td}>
                    <a
                      href={item.link.startsWith("http") ? item.link : `https://github.com/search?q=${encodeURIComponent(item.name + " agent memory")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkBtn}
                    >
                      <ExternalLink size={12} />
                      <span>Code</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className={styles.emptyState}>
            <Code size={48} className={styles.emptyIcon} />
            <h3>No Frameworks Found</h3>
            <p>Try modifying your search or filter values to find matching engine frameworks.</p>
          </div>
        )}
      </div>
    </div>
  );
}
