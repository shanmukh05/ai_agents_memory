"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Memory", href: "/memory" },
    { name: "Taxonomy", href: "/explorer" },
    { name: "Frameworks", href: "/frameworks" },
    { name: "Benchmarks", href: "/benchmarks" },
    { name: "Future", href: "/future" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>AgentMemory</span>
        </Link>
        <nav>
          <ul className={styles.navLinks}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${isActive ? styles.activeNavLink : ""}`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href="https://arxiv.org/abs/2512.13564"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.navLink} ${styles.paperLink}`}
              >
                Paper
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
