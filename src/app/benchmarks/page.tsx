"use client";

import { useState } from "react";
import { Search, Database, ExternalLink, Check, X } from "lucide-react";
import { benchmarksData } from "@/data/paperData";
import styles from "./benchmarks.module.css";

export default function BenchmarksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter States
  const [factualFilter, setFactualFilter] = useState<string>("all");
  const [experientialFilter, setExperientialFilter] = useState<string>("all");
  const [multimodalFilter, setMultimodalFilter] = useState<string>("all");
  const [envFilter, setEnvFilter] = useState<string>("all");

  const handleResetFilters = () => {
    setSearchQuery("");
    setFactualFilter("all");
    setExperientialFilter("all");
    setMultimodalFilter("all");
    setEnvFilter("all");
  };

  // Filter logic for Benchmarks
  const filteredBenchmarks = benchmarksData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.feature.toLowerCase().includes(searchQuery.toLowerCase());
    
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

    const matchesEnv =
      envFilter === "all" ||
      item.env.toLowerCase() === envFilter.toLowerCase();

    return matchesSearch && matchesFactual && matchesExperiential && matchesMultimodal && matchesEnv;
  });

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className="badge badge-purple" style={{ marginBottom: 12 }}>
          EVALUATION DIRECTORY
        </div>
        <h2 className={styles.title}>Benchmarks & Datasets</h2>
        <p className={styles.subtitle}>
          A consolidated repository of evaluations and environments referenced in the survey (Table 8). Filter by memory capabilities or environmental structures.
        </p>
      </div>

      {/* Filter Widgets Panel */}
      <div className={`${styles.filterPanel} glass-panel`}>
        <div className={styles.searchBox}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search benchmark name or capability..."
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

        {/* Environment Filter */}
        <select
          className={styles.filterSelect}
          value={envFilter}
          onChange={(e) => setEnvFilter(e.target.value)}
        >
          <option value="all">Environment: All</option>
          <option value="simulated">Simulated</option>
          <option value="real">Real</option>
          <option value="mixed">Mixed</option>
        </select>

        <button className="btn btn-secondary" onClick={handleResetFilters}>
          Clear Filters
        </button>
      </div>

      {/* Directory Table */}
      <div className={styles.tableWrapper}>
        {filteredBenchmarks.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>Fac.</th>
                <th className={styles.th}>Exp.</th>
                <th className={styles.th}>M.M.</th>
                <th className={styles.th}>Environment</th>
                <th className={styles.th}>Scale / Size</th>
                <th className={styles.th}>Primary Features</th>
                <th className={styles.th}>Link</th>
              </tr>
            </thead>
            <tbody>
              {filteredBenchmarks.map((item) => (
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
                  <td className={styles.td} style={{ textTransform: "capitalize" }}>
                    {item.env}
                  </td>
                  <td className={styles.td}>{item.scale}</td>
                  <td className={styles.td}>{item.feature}</td>
                  <td className={styles.td}>
                    <a
                      href={`https://scholar.google.com/scholar?q=${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkBtn}
                    >
                      <ExternalLink size={12} />
                      <span>Search</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className={styles.emptyState}>
            <Database size={48} className={styles.emptyIcon} />
            <h3>No Benchmarks Found</h3>
            <p>Try modifying your search or filter values to find matching evaluations.</p>
          </div>
        )}
      </div>
    </div>
  );
}
