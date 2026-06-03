import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memory in the Age of AI Agents — Survey Explorer",
  description: "An interactive encyclopedia and visualization of memory systems, taxonomies, benchmarks, and frameworks for LLM-based agent systems.",
  keywords: ["AI Agents", "Large Language Models", "Agent Memory", "RAG", "Lifelong Learning", "State Space Models", "Cognitive Architecture"],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧠</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
