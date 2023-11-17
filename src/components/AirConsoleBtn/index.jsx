import "./styles.css";

export function AirConsoleBtn({ href }) {
  return (
    <a
      className="button air-console"
      target="_blank"
      href={href}
      rel="noreferrer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 130 28">
        <path
          fill="#000000"
          d="M32.9 7.54h2.32L40.45 21h-2.1l-1.53-4.09h-5.77L29.54 21h-2L32.9 7.54zm3.42 7.98l-2.28-6.07h-.19l-2.28 6.07h4.75zm6.06-8.19h1.87v1.95h-1.87V7.33zm0 3.63h1.87V21h-1.87V10.96zm5.1 0h1.77v1.64c0-.32.14-.62.41-.9.28-.28.63-.51 1.06-.68.43-.18.85-.27 1.27-.27h.91v1.6h-1.04c-.88 0-1.52.12-1.93.35-.38.22-.58.63-.58 1.23V21H47.5V10.96zm12.65 10.25c-3.77 0-5.66-1.22-5.66-3.65v-6.4c0-2.56 1.89-3.85 5.66-3.85 1.29 0 2.52.13 3.7.4V9.2c-1.34-.33-2.55-.5-3.66-.5-.54 0-1 .04-1.4.1-.41.06-.8.16-1.17.32-.8.34-1.2 1.02-1.2 2.03v6.3c0 1.55 1.28 2.33 3.85 2.33 1.11 0 2.33-.17 3.65-.5v1.53c-1.17.27-2.43.4-3.77.4zm10.59 0c-.89 0-1.55-.04-2-.1a4.4 4.4 0 01-1.32-.4c-.46-.2-.79-.54-1-1-.2-.47-.3-1.1-.3-1.88v-3.49c0-.62.07-1.17.22-1.64s.35-.83.6-1.1c.2-.23.52-.41.93-.53a6.1 6.1 0 011.31-.27 28.02 28.02 0 013.17.02c.38.02.77.1 1.19.2.43.13.76.31 1 .56.23.25.43.61.6 1.08.15.49.22 1.05.22 1.68v3.49c0 1.17-.27 2.03-.8 2.57-.23.22-.55.4-.96.52-.42.12-.84.2-1.29.25-.52.02-1.05.04-1.57.04zm0-1.23c.58 0 1-.01 1.26-.04.27-.03.52-.1.77-.23a.95.95 0 00.52-.54c.1-.26.16-.62.16-1.07v-4.07c0-.62-.07-1.07-.22-1.35a1.1 1.1 0 00-.8-.56c-.35-.1-.92-.14-1.7-.14-.77 0-1.34.05-1.71.14a1.1 1.1 0 00-.77.56c-.15.28-.23.73-.23 1.35v4.07c0 .45.05.81.15 1.07.1.25.29.43.53.54.25.13.5.2.77.23.26.03.69.04 1.27.04zm7.53-9.02h1.87v1.23c.2-.96 1.3-1.44 3.3-1.44 1.28 0 2.18.24 2.7.7.52.47.78 1.2.78 2.19V21h-1.86v-7.26c0-.26-.03-.48-.07-.64a1.4 1.4 0 00-.25-.5c-.27-.35-.89-.52-1.84-.52-.73 0-1.3.06-1.7.17-.39.1-.67.26-.83.5-.15.23-.23.56-.23 1V21h-1.87V10.96zm14.96 10.25c-1.06 0-2.21-.09-3.44-.25v-1.43c1.62.26 2.78.4 3.48.4.89 0 1.53-.1 1.91-.26.39-.18.58-.5.58-.97v-1.02c0-.43-.14-.73-.43-.91a2.79 2.79 0 00-1.41-.27h-1.14a3.83 3.83 0 01-2.39-.64 2.17 2.17 0 01-.8-1.8v-.94c0-1.58 1.49-2.37 4.47-2.37.22 0 1.24.06 3.05.17v1.35a20.7 20.7 0 00-3.13-.3c-.98 0-1.65.1-2.01.3-.36.2-.54.52-.54.97v.85c0 .68.61 1.02 1.84 1.02h1.17c2.11 0 3.17.79 3.17 2.36v.88c0 1.03-.36 1.77-1.08 2.21-.72.43-1.82.65-3.3.65zm11.21 0c-.88 0-1.55-.04-1.99-.1a4.41 4.41 0 01-1.33-.4c-.45-.2-.79-.54-1-1-.2-.47-.3-1.1-.3-1.88v-3.49c0-.62.07-1.17.22-1.64.16-.47.36-.83.6-1.1.21-.23.52-.41.94-.53.43-.14.86-.23 1.3-.27a28.05 28.05 0 013.18.02c.37.02.77.1 1.18.2.43.13.76.31 1 .56.23.25.43.61.6 1.08.15.49.23 1.05.23 1.68v3.49c0 1.17-.27 2.03-.81 2.57-.22.22-.54.4-.96.52-.41.12-.84.2-1.28.25-.53.02-1.05.04-1.58.04zm0-1.23c.58 0 1-.01 1.27-.04.26-.03.52-.1.76-.23a.95.95 0 00.52-.54c.11-.26.17-.62.17-1.07v-4.07c0-.62-.08-1.07-.23-1.35a1.1 1.1 0 00-.79-.56c-.36-.1-.93-.14-1.7-.14-.77 0-1.35.05-1.72.14a1.1 1.1 0 00-.77.56c-.15.28-.23.73-.23 1.35v4.07c0 .45.05.81.15 1.07.11.25.29.43.54.54.25.13.5.2.77.23.26.03.68.04 1.26.04zm7.54-13.5h1.86V21h-1.86V6.48zm9.33 14.73c-3.07 0-4.6-1.03-4.6-3.07v-3.96c0-1.22.34-2.1 1.03-2.62.71-.54 1.84-.8 3.4-.8 1.49 0 2.55.25 3.2.76.66.51 1 1.4 1 2.66v2.22h-6.74v1.51c0 .7.24 1.19.72 1.5.48.3 1.23.45 2.24.45.95 0 2.08-.17 3.38-.5v1.43a17.1 17.1 0 01-3.63.42zm2.16-6.04V13.6c0-.61-.19-1.03-.56-1.25-.36-.23-.98-.35-1.87-.35-.85 0-1.48.12-1.86.35-.4.22-.58.64-.58 1.25v1.57h4.87z"
        />
        <path
          fill="#000000"
          d="M6.2 24.38c-.27-.17-.48-.4-.68-.64-.47-.6-.75-1.3-.95-2.02a11.32 11.32 0 01-.37-3.92c.06-.73.14-1.3.3-2a29.2 29.2 0 013.17-7.9c.5-.86 1.08-1.67 1.78-2.39.34-.35.72-.67 1.13-.93a2.95 2.95 0 012.88-.22c.75.31 1.38.8 1.95 1.36.88.86 1.58 1.85 2.2 2.9 1.23 2.1 2.12 4.4 2.63 6.79.23 1.08.36 2.17.34 3.28 0 .43-.05.92-.14 1.34v-.14c.02-1.81-.28-3.62-.89-5.33-.4-1.14-.92-2.22-1.66-3.18a5.62 5.62 0 00-.89-.93 2.1 2.1 0 00-2.11-.4c-.68.22-1.29.57-1.85 1-.94.73-1.74 1.6-2.48 2.52a25.16 25.16 0 00-3.64 6.33c-.32.81-.58 1.63-.73 2.5a4.67 4.67 0 00.02 1.97v.02z"
        />
        <path
          fill="#000000"
          d="M7.53 24.79a.8.8 0 00.47.13c.13 0 .45-.05.69-.16.41-.2.72-.45 1.05-.77.8-.81 1.62-1.6 2.45-2.38.84-.8 1.65-1.64 2.54-2.39.42-.35.84-.7 1.34-.93.19-.1.38-.16.58-.18.4-.04.72.12.98.4.44.44.79.95 1.03 1.52.19.43.38.85.65 1.23.03.06.08.11.14.16a14.3 14.3 0 00-1.7-8.7 6.01 6.01 0 00-1.2-1.52l-.14-.11-.09.16a34.78 34.78 0 01-2.96 4.83c-.5.68-1.05 1.34-1.7 1.89-.35.28-.71.53-1.15.64-.38.1-.7.01-.97-.3l-.22-.3c-.1-.19-.18-.38-.27-.59l-.22.42a19.39 19.39 0 00-1.54 3.66c-.2.7-.36 1.41-.32 2.15.03.76.48 1.1.56 1.14z"
        />
      </svg>
    </a>
  );
}
