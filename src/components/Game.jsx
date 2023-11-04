import React from "react";

export function Game({ src, alt, title, description, links }) {
  return (
    <div className="card">
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <p>
        {description.map((item) => (
          <React.Fragment key={item.id}>{item.text}</React.Fragment>
        ))}
      </p>

      <div className="button-container">
        {links.map((link) => (
          <React.Fragment key={link.props.id}>{link}</React.Fragment>
        ))}
      </div>
    </div>
  );
}
