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
  onClick,
  readOnly = false,
}) {
  return (
    <div className={`${styles.fieldFrame} ${className}`} style={style}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <div 
        className={`${styles.inputFrame} ${error ? styles.inputError : ''}`}
        onClick={onClick}
      >
        <input
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          readOnly={readOnly || rightIconAlt === "Select" || rightIconAlt === "Calendar"}
          style={rightIconAlt === "Select" ? {cursor: 'pointer'} : {}}
        />
        {rightIconSrc && (
          <img
            src={rightIconSrc}
            alt={rightIconAlt}
            className={styles.rightIcon}
            width={20}
            height={20}
            style={rightIconAlt === "Select" || rightIconAlt === "Calendar" ? {pointerEvents: 'none'} : {}}
          />
        )}
      </div>
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
}


