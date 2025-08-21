import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Tooltip.module.css";

const Tooltip = ({ children, content, position = "right" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({});
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      
      let top, left;
      
      switch (position) {
        case "right":
          top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
          left = triggerRect.right + 8;
          break;
        case "left":
          top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
          left = triggerRect.left - tooltipRect.width - 8;
          break;
        case "top":
          top = triggerRect.top - tooltipRect.height - 8;
          left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
          break;
        case "bottom":
          top = triggerRect.bottom + 8;
          left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
          break;
        default:
          top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
          left = triggerRect.right + 8;
      }
      
      setTooltipPosition({ top, left });
    }
  }, [isVisible, position]);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div 
      className={styles.tooltipContainer}
      ref={triggerRef}
    >
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        {children}
      </div>
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`${styles.tooltip} ${styles[`tooltip-${position}`]}`}
          style={{
            top: tooltipPosition.top,
            left: tooltipPosition.left,
          }}
        >
          {/* Beak (arrow) */}
          <div className={styles.beak}>
            <div className={styles.beakFill}></div>
            <div className={styles.beakStroke}></div>
          </div>
          
          {/* Tooltip content */}
          <div className={styles.tooltipContent}>
            <div className={styles.tooltipTitle}>Note:</div>
            <div className={styles.tooltipText}>
              Please submit the below mentioned documents:<br />
              • An Employee undertaking (for every bill submission)<br />
              • Digital system generated invoice with Seal & signature of authorities only (Hand written bills will not be processed)<br />
              • Proof of payment receipt – Credit/Debit card payment receipt, bank statement only (Cash/UPI payments will not get processed)<br />
              • Employee are requested to submit bills of current quarter and avoid submitting back dated bills<br />
              • Employees should also submit hardcopies of the above documents in the HR Drop Box available on 3 Floor (near entrance printer)
            </div>
          </div>
          
          {/* Close button using cross.svg */}
          <button 
            className={styles.closeButton}
            onClick={() => setIsVisible(false)}
          >
            <img 
              src={new URL("../assets/svg/cross.svg", import.meta.url).href}
              alt="Close"
              width={16}
              height={16}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
