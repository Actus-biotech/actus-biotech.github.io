// LiveSessionScreen — full-screen dark focus: exercise list + real-time EMG + muscle map toggle
function LiveSessionScreen({ session, onEnd, tweaks = {} }) {
  const { SignalMeter, Metric, Badge, IconButton, Button } = window.DS;
  const Icon = window.Icon;
  const MuscleMapView = window.MuscleMapView;
  const MUSCLE_DEFS = window.MUSCLE_DEFS || [];

  const [mapMode, setMapMode] = React.useState(false);
  const [selectedMuscle, setSelectedMuscle] = React.useState('rcalf');
  const [elapsed, setElapsed] = React.useState(0);

  const LABEL_TO_ID = {
    'R. Calf': 'rcalf', 'L. Calf': 'lcalf',
    'R. Quad': 'rquad', 'L. Quad': 'lquad',
    'R. Ham':  'rham',  'L. Ham':  'lham',
  };
  const fatigueId = LABEL_TO_ID[tweaks.fatigueMuscle] || 'rquad';
  const cautionId = LABEL_TO_ID[tweaks.cautionMuscle] || 'rcalf';
  const fatigueDef = MUSCLE_DEFS.find(m => m.id === fatigueId);
  const fatigueName = fatigueDef?.name || 'R. Quad';

  React.useEffect(() => {
    const t = setInterval(() => setElapsed(s => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const fmt = s => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const exercises = session?.exercises || [
    { name: 'Back Squat',         sets: 4, reps: '5',  currentSet: 2, status: 'active' },
    { name: 'Romanian Deadlift',  sets: 3, reps: '8',  currentSet: 0, status: 'pending' },
    { name: 'Leg Press',          sets: 3, reps: '12', currentSet: 0, status: 'pending' },
    { name: 'Calf Raise',         sets: 3, reps: '15', currentSet: 0, status: 'pending' },
  ];

  const liveData = { lquad: 72, rquad: 88, lham: 54, rham: 48, lglute: 40, rglute: 44, lcalf: 66, rcalf: 94 };
  const liveMuscles = MUSCLE_DEFS.map(m => {
    const value = liveData[m.id] || 10;
    const tone  = m.id === fatigueId ? 'fatigue'
      : m.id === cautionId ? 'caution'
      : value > 40 ? 'good'
      : 'rest';
    return { ...m, value, tone };
  });

  const activeMuscles = liveMuscles
    .filter(m => (m.value || 0) > 40)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  const sel = liveMuscles.find(m => m.id === selectedMuscle);

  return (
    <div data-theme="dark" style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--ink-950)', color: '#fff' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: '60px 20px 16px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Badge tone="signal" live>LIVE</Badge>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 24, fontWeight: 600, color: '#fff', letterSpacing: '-.02em' }}>{fmt(elapsed)}</span>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button onClick={() => setMapMode(m => !m)} style={{
              border: 'none', cursor: 'pointer', padding: '5px 11px', borderRadius: 'var(--radius-sm)',
              background: mapMode ? 'var(--signal-600)' : 'var(--ink-700)',
              color: '#fff', fontSize: 12, fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 5,
            }}>
              <Icon name={mapMode ? 'list' : 'scan'} size={14} color="#fff" />
              {mapMode ? 'Exercises' : 'Map'}
            </button>
            <IconButton label="Pause" variant="outline"><Icon name="pause" size={18} /></IconButton>
          </div>
        </div>

        <div style={{ font: '600 10px/1 var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--signal-400)', marginBottom: 14 }}>
          {session?.name || 'Lower Body · Strength'}
        </div>

        {/* MAP MODE */}
        {mapMode && (
          <div style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12, background: 'var(--ink-850)', borderRadius: 'var(--radius-lg)', padding: 12 }}>
              <MuscleMapView
                gender="female"
                muscles={liveMuscles}
                selected={selectedMuscle}
                onSelect={setSelectedMuscle}
                view="both"
                height={230}
                style={{ background: '#F8F7FF' }}
              />
            </div>
            {sel && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '0 4px' }}>
                <Metric label={sel.name} value={sel.value} unit="%" tone={sel.tone === 'fatigue' ? 'fatigue' : 'signal'} size={34} />
                <Metric label="Composite" value="74" unit="%" size={34} />
              </div>
            )}
          </div>
        )}

        {/* EXERCISE LIST MODE */}
        {!mapMode && (
          <div style={{ marginBottom: 14 }}>
            <div style={{ font: '600 10px/1 var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--neutral-500)', marginBottom: 8 }}>Exercises</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {exercises.map((ex, i) => {
                const active = ex.status === 'active';
                return (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 11, padding: '12px 13px',
                    borderRadius: 'var(--radius-md)',
                    background: active ? 'var(--ink-700)' : 'var(--ink-850)',
                    border: `1px solid ${active ? 'var(--signal-600)' : 'transparent'}`,
                    transition: 'all .2s',
                  }}>
                    <div style={{ width: 26, height: 26, borderRadius: 'var(--radius-xs)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: active ? 'var(--signal-500)' : 'var(--ink-600)', fontSize: 11, fontWeight: 700, color: active ? '#fff' : 'var(--neutral-500)' }}>{i + 1}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: active ? 700 : 500, color: active ? '#fff' : 'var(--neutral-500)' }}>{ex.name}</div>
                      {active && <div style={{ fontSize: 11, color: 'var(--signal-400)', marginTop: 2, fontFamily: 'var(--font-mono)' }}>Set {ex.currentSet} of {ex.sets} · {ex.reps} reps</div>}
                    </div>
                    {!active && <span style={{ fontSize: 11.5, color: 'var(--neutral-600)', fontFamily: 'var(--font-mono)' }}>{ex.sets}×{ex.reps}</span>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Fatigue alert */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '11px 13px', borderRadius: 'var(--radius-md)', background: 'rgba(229,120,126,0.13)', border: '1px solid rgba(229,120,126,0.35)', marginBottom: 14 }}>
          <div style={{ color: 'var(--fatigue-400)', marginTop: 1, flexShrink: 0 }}><Icon name="triangle-alert" size={17} /></div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{fatigueName} approaching fatigue</div>
            <div style={{ fontSize: 11.5, color: 'var(--neutral-400)', marginTop: 2 }}>Ease off or switch to left side.</div>
          </div>
        </div>

        {/* Active sensor meters */}
        <div style={{ font: '600 10px/1 var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--neutral-500)', marginBottom: 9 }}>Active sensors</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {activeMuscles.map(m => (
            <SignalMeter key={m.id} label={m.name} value={m.value} tone={m.tone} live={m.tone === 'fatigue'} />
          ))}
        </div>
      </div>

      {/* End bar */}
      <div style={{ flexShrink: 0, padding: '11px 20px 28px', background: 'var(--ink-900)', borderTop: '1px solid var(--border-default)' }}>
        <Button variant="danger" fullWidth size="lg" leadingIcon={<Icon name="square" size={15} />} onClick={onEnd}>End session</Button>
      </div>
    </div>
  );
}

window.LiveSessionScreen = LiveSessionScreen;
