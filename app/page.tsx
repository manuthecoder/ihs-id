"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Barcode from "react-barcode";

export default function Home() {
  const [code, setCode] = useState("");

  useEffect(() => {
    const d = localStorage.getItem("code");
    if (d) setCode(d);
  }, [setCode]);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <input
          placeholder="Your Student ID"
          onChange={(e) => {
            setCode(e.target.value);
            localStorage.setItem("code", e.target.value);
          }}
        />
      </div>

      <div className={styles.center}>
        <Barcode value={code} format="CODE39" />,
      </div>
    </main>
  );
}
