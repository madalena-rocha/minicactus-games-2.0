export function NewsStory({ src, alt, href, details, title }) {
  return (
    <a className="card" target="_blank" href={href} rel="noreferrer">
      <img src={src} alt={alt} />

      <div className="newsStory">
        <p>{details}</p>

        <h3>{title}</h3>
      </div>
    </a>
  );
}
