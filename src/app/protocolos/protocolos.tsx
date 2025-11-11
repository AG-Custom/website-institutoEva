import React from "react";

interface ProgramProps {
    title: string;
    text: string;
    imageSrc: string;
    alt?: string;
    className?: string;
    onClick?: () => void;
}

export default function ProgramCard({
    title,
    text,
    imageSrc,
    alt = "",
    className = "",
    onClick,
}: ProgramProps) {
    // Estilo "direto" (sem card branco), conforme layout da referência
    const styles: { [k: string]: React.CSSProperties } = {
        container: {
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "stretch",
            padding: 0,
            background: "transparent",
            boxShadow: "none",
            cursor: onClick ? "pointer" : "default",
        },
        title: {
            margin: 0,
            fontSize: 20, // maior
            fontWeight: 700,
            letterSpacing: "0.03em",
            textTransform: "uppercase",
            lineHeight: 1.2,
        },
        image: {
            width: "100%",
            height: "auto",
            borderRadius: 4,
            objectFit: "cover",
        },
        text: {
            margin: 0,
            fontSize: 16, // maior
            lineHeight: 1.5,
            // cor herdada do container pai (verde → branco, claro → cinza-escuro)
        },
    };

    return (
        <article
            className={`program-card ${className}`}
            style={styles.container}
            onClick={onClick}
            role={onClick ? "button" : undefined}
        >
            <h3 style={styles.title}>{title}</h3>
            <img src={imageSrc} alt={alt || title} style={styles.image} />
            <p style={styles.text}>{text}</p>
        </article>
    );
}