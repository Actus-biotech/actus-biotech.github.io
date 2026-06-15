// SensorDetailSheet — slide-up bottom sheet with live animated EMG waveform
// Renders via AppShell overlay slot, covers full screen including tab bar.

function SensorDetailSheet({ sensor, onClose }) {
  const Icon = window.Icon;

  const WAVE_COLOR = {
    good:    '#5CB68A',
    caution: '#E2B05C',
    fatigue: '#E5787E',
    offline: '#3B3A4C',
    signal:  '#8878E8',
  };

  const isOffline  = sensor.status === 'offline';
  const baseLevel  = isOffline ? 0 : sensor.status === 'caution' ? 20 : 32;
  const waveColor  = isOffline ? WAVE_COLOR.offline
                   : sensor.status === 'caution' ? WAVE_COLOR.caution
                   : WAVE_COLOR.signal;

  const POINTS = 120;
  const [wave, setWave] = React.useState(() => Array(POINTS).fill(0));

  React.useEffect(() => {
    if (isOffline) return;
    const t = setInterval(() => {
      setWave(prev => {
        const next = [...prev.slice(1)];
        const burst = Math.random() > 0.72 ? Math.random() * baseLevel * 3.2 : 0;
        const noise = (Math.random() - 0.5) * 14;
        next.push(Math.max(0, Math.min(100, baseLevel + burst + noise)));
        return next;
      });
    }, 30);
    return () => clearInterval(t);
  }, [isOffline, baseLevel]);

  const current = Math.round(wave[wave.length - 1] || 0);
  const avg     = Math.round(wave.reduce((a, b) => a + b, 0) / POINTS);

  const W = 300, H = 88;
  const pathD = wave.map((v, i) => {
    const x = (i / (POINTS - 1)) * W;
    const y = H - (v / 100) * H;
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  // Gradient area fill under waveform
  const areaD = pathD + ` L${W},${H} L0,${H} Z`;

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 30, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      {/* Backdrop */}
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,14,0.52)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }} />

      {/* Sheet */}
      <div data-theme="dark" style={{
        position: 'relative', zIndex: 1,
        background: 'var(--ink-900)',
        borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
        padding: '14px 20px 42px',
        border: '1px solid var(--border-default)', borderBottom: 'none',
        boxShadow: '0 -24px 64px rgba(8,8,14,0.55)',
      }}>
        {/* Handle */}
        <div style={{ width: 32, height: 4, borderRadius: 2, background: 'var(--ink-600)', margin: '0 auto 15px' }} />

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-display)', letterSpacing: '-.01em' }}>
              {sensor.name}
            </div>
            <div style={{ fontSize: 11, color: 'var(--neutral-500)', fontFamily: 'var(--font-mono)', marginTop: 3 }}>
              {sensor.id} · {sensor.signal}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {!isOffline && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: waveColor, fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '.1em' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: waveColor, boxShadow: `0 0 6px ${waveColor}`, animation: 'actus-pulse 1s ease-in-out infinite' }} />
                LIVE
              </span>
            )}
            <button onClick={onClose} style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--ink-700)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--neutral-500)' }}>
              <Icon name="x" size={15} />
            </button>
          </div>
        </div>

        {/* Waveform area */}
        {isOffline ? (
          <div style={{ background: 'var(--ink-850)', borderRadius: 'var(--radius-md)', padding: '28px 20px', textAlign: 'center', marginBottom: 14 }}>
            <div style={{ color: 'var(--neutral-600)', marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
              <Icon name="wifi-off" size={26} />
            </div>
            <div style={{ fontSize: 13, color: 'var(--neutral-600)' }}>Sensor offline — no signal</div>
          </div>
        ) : (
          <div style={{ background: 'var(--ink-950)', borderRadius: 'var(--radius-md)', padding: '10px 10px 6px', marginBottom: 14, border: '1px solid rgba(136,120,232,0.14)' }}>
            <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block', overflow: 'visible' }}>
              <defs>
                <linearGradient id="emg-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={waveColor} stopOpacity="0.22" />
                  <stop offset="100%" stopColor={waveColor} stopOpacity="0" />
                </linearGradient>
              </defs>
              {[25, 50, 75].map(pct => (
                <line key={pct} x1="0" y1={H * (1 - pct / 100)} x2={W} y2={H * (1 - pct / 100)}
                  stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              ))}
              <path d={areaD} fill="url(#emg-fill)" />
              <path d={pathD} fill="none" stroke={waveColor} strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          </div>
        )}

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 9 }}>
          {[
            { label: 'Now',      value: isOffline ? '—' : `${current}%`, color: waveColor },
            { label: 'Avg',      value: isOffline ? '—' : `${avg}%`,     color: '#fff' },
            { label: 'Battery',  value: sensor.battery > 0 ? `${sensor.battery}%` : '—', color: 'var(--neutral-400)' },
          ].map(s => (
            <div key={s.label} style={{ background: 'var(--ink-800)', borderRadius: 'var(--radius-md)', padding: '10px 0', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 20, fontWeight: 700, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 10, color: 'var(--neutral-600)', marginTop: 3 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.SensorDetailSheet = SensorDetailSheet;
