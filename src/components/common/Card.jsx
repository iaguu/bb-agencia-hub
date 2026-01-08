import React from "react";

const Card = ({ children, title, description, compact = false }) => {
  return (
    <section className={"card" + (compact ? " card-compact" : "")}>
      {(title || description) && (
        <header className="card-header">
          {title && <h2 className="card-title">{title}</h2>}
          {description && (
            <p className="card-description">{description}</p>
          )}
        </header>
      )}
      <div className="card-body">{children}</div>
    </section>
  );
};

export default Card;
