// Shared helpers for the Actus mobile UI kit.
// Loaded before the screen scripts. Exposes window.DS and window.Icon.

window.DS = window.ActusBiotechDesignSystem_e79e78;

// Lucide icon helper — renders an <svg> via the global lucide UMD build.
function Icon({ name, size = 22, color = 'currentColor', strokeWidth = 2, style = {} }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    ref.current.appendChild(i);
    window.lucide.createIcons();
    const svg = ref.current.querySelector('svg');
    if (svg) {
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.style.stroke = color;
      svg.style.strokeWidth = strokeWidth;
    }
  }, [name, size, color, strokeWidth]);
  return <span ref={ref} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, ...style }} />;
}

window.Icon = Icon;
