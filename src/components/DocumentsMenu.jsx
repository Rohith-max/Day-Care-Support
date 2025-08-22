import React, { useState } from "react";
import styles from "../styles/DocumentsMenu.module.css";

export default function DocumentsMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.frame} onClick={() => setOpen(!open)} role="button" aria-expanded={open}>
      <img 
        src={new URL("../assets/svg/documents.svg", import.meta.url).href} 
        width={16} 
        height={20} 
        alt="Documents icon" 
        className={styles.documentIcon}
      />
      <div className={styles.labelFrame}>
        <span className={styles.label}>Documents</span>
        <img 
          src={new URL("../assets/svg/chevron-down.svg", import.meta.url).href} 
          width={12} 
          height={12} 
          alt="Toggle" 
          className={open ? styles.chevronOpen : styles.chevron} 
        />
      </div>
    </div>
  );
}


