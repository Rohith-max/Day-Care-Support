import React from "react";
import styles from "../styles/FieldBox.module.css";

export default function FieldBox({
  label,
  required = false,
  placeholder = "",
  value,
  onChange,
  rightIconSrc,
  rightIconAlt = "",
  className = "",
  style,
  error,
}) {
  return (
    <div className={`${styles.fieldFrame} ${className}`} style={style}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <div className={`${styles.inputFrame} ${error ? styles.inputError : ''}`}>
        <input
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
        {rightIconSrc && (
          <img
            src={rightIconSrc}
            alt={rightIconAlt}
            className={styles.rightIcon}
            width={20}
            height={20}
          />
        )}
      </div>
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
}


