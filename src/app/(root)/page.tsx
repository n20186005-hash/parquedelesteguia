"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Basic language detection for root visits
    const lang = navigator.language.toLowerCase();
    if (lang.startsWith("zh")) {
      router.replace("/zh");
    } else if (lang.startsWith("es")) {
      router.replace("/es");
    } else {
      router.replace("/en"); // default fallback for other languages
    }
  }, [router]);

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh",
      fontFamily: "var(--font-body), sans-serif"
    }}>
      <h1>Welcome to East Park</h1>
      <p>Please select your language:</p>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <a href="/en" style={{ padding: "0.5rem 1rem", border: "1px solid #ccc", borderRadius: "4px", textDecoration: "none", color: "inherit" }}>English</a>
        <a href="/es" style={{ padding: "0.5rem 1rem", border: "1px solid #ccc", borderRadius: "4px", textDecoration: "none", color: "inherit" }}>Español</a>
        <a href="/zh" style={{ padding: "0.5rem 1rem", border: "1px solid #ccc", borderRadius: "4px", textDecoration: "none", color: "inherit" }}>中文</a>
      </div>
    </div>
  );
}
