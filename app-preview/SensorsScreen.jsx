// SensorsScreen — hub + paired EMG sensors management.
function SensorsScreen() {
  const { Card, Button, Badge, StatusDot, Switch, IconButton } = window.DS;
  const Icon = window.Icon;
  const [haptics, setHaptics] = React.useState(true);

  const sensors = [
    { name: 'Left quad', id: 'S-01', battery: 88, signal: 'Strong', status: 'good' },
    { name: 'Right quad', id: 'S-02', battery: 76, signal: 'Strong', status: 'good' },
    { name: 'Left hamstring', id: 'S-03', battery: 64, signal: 'Strong', status: 'good' },
    { name: 'Right hamstring', id: 'S-04', battery: 91, signal: 'Strong', status: 'good' },
    { name: 'Core', id: 'S-05', battery: 52, signal: 'Fair', status: 'caution' },
    { name: 'Right calf', id: 'S-06', battery: 0, signal: 'Offline', status: 'offline' },
  ];

  return (
    <div style={{ padding: `8px 20px 24px` }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 27, fontWeight: 600, color: 'var(--text-strong)', letterSpacing: '-.02em', marginBottom: 16 }}>Sensors</h1>

      {/* hub card (dark) */}
      <div data-theme="dark" style={{ background: 'var(--ink-900)', borderRadius: 'var(--radius-2xl)', padding: 20, position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ position: 'absolute', right: -30, top: -30, width: 130, height: 130, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,195,252,0.16), transparent 70%)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'relative' }}>
          <div style={{ width: 52, height: 52, borderRadius: 16, background: 'var(--ink-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--signal-400)', boxShadow: 'var(--glow-signal-sm)' }}>
            <Icon name="router" size={26} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>Actus Hub</div>
            <div style={{ marginTop: 5 }}><StatusDot tone="signal" label="Connected · 5 of 6 live" pulse /></div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'var(--neutral-300)', fontFamily: 'var(--font-mono)' }}>
            <Icon name="battery-medium" size={16} /> 82%
          </span>
        </div>
      </div>

      {/* haptics toggle */}
      <Card style={{ marginTop: 14, padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ color: 'var(--accent-text)', display: 'flex' }}><Icon name="vibrate" size={20} /></div>
          <span style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text-strong)' }}>Haptic fatigue alerts</span>
        </div>
        <Switch checked={haptics} onChange={setHaptics} />
      </Card>

      {/* sensor list */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', margin: '24px 2px 12px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: 'var(--text-strong)' }}>Paired sensors</h2>
        <span style={{ fontSize: 13, color: 'var(--accent-text)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="plus" size={15} /> Pair</span>
      </div>
      <Card flush style={{ overflow: 'hidden' }}>
        {sensors.map((s, i) => (
          <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '13px 16px', borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: s.status === 'offline' ? 'var(--surface-sunken)' : 'var(--accent-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.status === 'offline' ? 'var(--text-faint)' : 'var(--accent-text)', flex: '0 0 auto' }}>
              <Icon name="circle-dot" size={18} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text-strong)' }}>{s.name}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>{s.id} · {s.signal}</div>
            </div>
            {s.status === 'offline'
              ? <Badge tone="neutral" size="sm">Offline</Badge>
              : <span style={{ fontSize: 12.5, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  <Icon name={s.battery > 60 ? 'battery-full' : 'battery-low'} size={15} /> {s.battery}%
                </span>}
          </div>
        ))}
      </Card>
    </div>
  );
}

window.SensorsScreen = SensorsScreen;
