import React from "react";
import styles from "./styles.module.css";

export default function AirsCard({
  title,
  children,
  link,
  linkLabel,
  colorMode,
  className,
  style,
}) {
  const isDark = colorMode === "dark";
  const bg = isDark ? "#22252a" : "#fff";
  const border = isDark ? "1px solid #333a48" : "1px solid #e0e7ef";
  const shadow = isDark
    ? "0 2px 12px 0 rgba(0,0,0,0.24)"
    : "0 2px 12px 0 rgba(0,0,0,0.04)";
  const text = isDark ? "#fff" : "#222";
  const desc = isDark ? "#c9ccd1" : "#444";
  const linkColor = isDark ? "#66bfff" : "#005fa3";
  const [hover, setHover] = React.useState(false);

  return (
    <div
      className={`${styles.card} ${className || ""}`}
      style={{
        background: bg,
        border,
        boxShadow: hover
          ? isDark
            ? "0 4px 24px 0 rgba(255,97,51,0.10)"
            : "0 4px 24px 0 rgba(255,97,51,0.06)"
          : shadow,
        color: text,
        ...style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3 className={styles.title} style={{ color: text }}>
        {title}
      </h3>
      <div style={{ marginBottom: 12, color: desc }}>{children}</div>
      {link && (
        <a
          href={link}
          target={link.startsWith("/prisma-airs") ? "_self" : "_blank"}
          rel="noopener noreferrer"
          className={styles.link}
          style={{ color: linkColor }}
        >
          {linkLabel || "Learn more"} ↗
        </a>
      )}
    </div>
  );
}
