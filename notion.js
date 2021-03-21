const customStyle = `
  .notion-topbar {
    background: #000 !important;
    border-bottom: 2px solid #474c50;
  }
  
`;

window.addEventListener("DOMContentLoaded", () => {
  const styleEl = document.createElement("style");
  styleEl.id = "custom-style"
  styleEl.innerHTML = customStyle;
  document.head.append(styleEl);
});
