// SensorsScreen — hub status, sensor placement muscle map, paired sensor list
function SensorsScreen({ onSensorDetail }) {
  const { Card, StatusDot, Switch, Badge } = window.DS;
  const Icon = window.Icon;
  const MuscleMapView = window.MuscleMapView;
  const MUSCLE_DEFS = window.MUSCLE_DEFS || [];

  const [haptics, setHaptics] = React.useState(true);
  const [selectedId, setSelectedId] = React.useState(null);

  const sensors = [
    { name: 'L. Quad',       id: 'S-01', battery: 88, signal: 'Strong',  status: 'good',    muscleId: 'lquad' },
    { name: 'R. Quad',       id: 'S-02', battery: 76, signal: 'Strong',  status: 'good',    muscleId: 'rquad' },
    { name: 'L. Hamstring',  id: 'S-03', battery: 64, signal: 'Strong',  status: 'good',    muscleId: 'lham' },
    { name: 'R. Hamstring',  id: 'S-04', battery: 91, signal: 'Strong',  status: 'good',    muscleId: 'rham' },
    { name: 'Core',          id: 'S-05', battery: 52, signal: 'Fair',    status: 'caution', muscleId: 'abs' },
    { name: 'R. Calf',       id: 'S-06', battery: 0,  signal: 'Offline', status: 'offline', muscleId: 'rcalf' },
  ];

  const mapMuscles = MUSCLE_DEFS.map(m => {
    const s = sensors.find(s => s.muscleId === m.id);
    if (!s) return { ...m, value: 0, tone: 'rest' };
    const tone = s.status === 'caution' ? 'caution' : s.status === 'offline' ? 'rest' : 'signal';
    return { ...m, value: s.status !== 'offline' ? 72 : 0, tone };
  });

  const selSensor = sensors.find(s => s.muscleId === selectedId);

  const handleSelect = (muscleId) => {
    const sensor = sensors.find(s => s.muscleId === muscleId);
    setSelectedId(muscleId);
    if (sensor && onSensorDetail) onSensorDetail(sensor);
  };

  return (
    <div style={{ padding: '8px 20px 24px' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--text-strong)', letterSpacing: '-.02em', marginBottom: 16 }}>Sensors</h1>

      {/* Hub dark card */}
      <div data-theme="dark" style={{ background: 'var(--ink-900)', borderRadius: 'var(--radius-xl)', padding: 18, position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ position: 'absolute', right: -30, top: -30, width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle, rgba(136,120,232,0.20), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 13, position: 'relative' }}>
          <div style={{ width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--ink-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--signal-400)', boxShadow: 'var(--glow-signal-sm)' }}>
            <Icon name="router" size={22} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>Actus Hub</div>
            <div style={{ marginTop: 5 }}><StatusDot tone="signal" label="Connected · 5 of 6 live" pulse /></div>
          </div>
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--neutral-300)', fontFamily: 'var(--font-mono)' }}>
            <Icon name="battery-medium" size={14} /> 82%
          </span>
        </div>
      </div>

      {/* Sensor placement map */}
      <div style={{ marginTop: 16, marginBottom: 2 }}>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
          <span>Sensor placement</span>
          {selSensor && <span style={{ color: 'var(--signal-600)', fontWeight: 700, textTransform: 'none', letterSpacing: 0, fontSize: 12 }}>— {selSensor.name} · {selSensor.id}</span>}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MuscleMapView
            gender="female"
            muscles={mapMuscles}
            selected={selectedId}
            onSelect={handleSelect}
            view="both"
            height={210}
          />
        </div>
      </div>

      {/* Haptics */}
      <Card style={{ marginTop: 14, padding: '12px 15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <div style={{ color: 'var(--accent-text)' }}><Icon name="vibrate" size={18} /></div>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>Haptic fatigue alerts</span>
        </div>
        <Switch checked={haptics} onChange={setHaptics} />
      </Card>

      {/* Sensor list */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', margin: '20px 2px 10px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--text-strong)' }}>Paired sensors</h2>
        <span style={{ fontSize: 12.5, color: 'var(--accent-text)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 3, cursor: 'pointer' }}>
          <Icon name="plus" size={14} /> Pair new
        </span>
      </div>
      <Card flush style={{ overflow: 'hidden' }}>
        {sensors.map((s, i) => {
          const isSel = selectedId === s.muscleId;
          return (
            <button key={s.id} onClick={() => handleSelect(s.muscleId)} style={{
              width: '100%', border: 'none',
              background: isSel ? 'var(--signal-100)' : 'transparent',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12,
              padding: '12px 15px', borderTop: i ? '1px solid var(--border-subtle)' : 'none',
              textAlign: 'left', transition: 'background .15s',
            }}>
              <div style={{ width: 34, height: 34, borderRadius: '50%', flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: s.status === 'offline' ? 'var(--surface-sunken)' : isSel ? 'var(--signal-200)' : 'var(--accent-surface)', color: s.status === 'offline' ? 'var(--text-faint)' : isSel ? 'var(--signal-600)' : 'var(--accent-text)' }}>
                <Icon name="circle-dot" size={16} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>{s.name}</div>
                <div style={{ fontSize: 11.5, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>{s.id} · {s.signal}</div>
              </div>
              {s.status === 'offline'
                ? <Badge tone="neutral" size="sm">Offline</Badge>
                : <span style={{ fontSize: 11.5, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Icon name={s.battery > 60 ? 'battery-full' : 'battery-low'} size={13} /> {s.battery}%
                  </span>}
            </button>
          );
        })}
      </Card>
    </div>
  );
}

window.SensorsScreen = SensorsScreen;
