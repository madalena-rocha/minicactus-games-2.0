export function New({ src, alt, href, details, title }) {
  return (
    <div className="card">
      <img src={src} alt={alt} />

      <a className="new" target="_blank" href={href} rel="noreferrer">
        <p>{details}</p>

        <h3>{title}</h3>
      </a>
    </div>
  );
}
