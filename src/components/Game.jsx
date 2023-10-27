/* eslint-disable */

export function Game({ src, alt, title, description, children }) {
  return (
    <div className="card">
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="button-container">{children}</div>
    </div>
  );
}
