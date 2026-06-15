// SessionsScreen — Actus plan templates + custom templates + session detail view
function SessionDetail({ session, onBack, onStart }) {
  const { Button, Badge } = window.DS;
  const Icon = window.Icon;
  const MuscleMapView = window.MuscleMapView;
  const MUSCLE_DEFS = window.MUSCLE_DEFS || [];

  const muscles = MUSCLE_DEFS.map(m => ({
    ...m,
    value: session.muscles.includes(m.id) ? 72 : 0,
    tone: session.muscles.includes(m.id) ? 'signal' : 'rest',
  }));

  return (
    <div style={{ padding: '8px 20px 24px' }}>
      <button onClick={onBack} style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, color: 'var(--accent-text)', fontWeight: 600, fontSize: 14, padding: '0 0 14px' }}>
        <Icon name="chevron-left" size={18} /> All sessions
      </button>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 5 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 600, color: 'var(--text-strong)', letterSpacing: '-.02em', flex: 1, paddingRight: 10 }}>{session.name}</h1>
        {session.author !== 'Actus' && <Badge tone="signal">{session.author}</Badge>}
      </div>
      <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginBottom: 16, display: 'flex', gap: 14 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="clock" size={13} />{session.duration}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Icon name="layers" size={13} />{session.exercises.length} exercises</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
        <MuscleMapView gender="female" muscles={muscles} view="both" height={210} />
      </div>

      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: 'var(--text-strong)', marginBottom: 10 }}>Exercises</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-subtle)', marginBottom: 20 }}>
        {session.exercises.map((ex, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: 'var(--surface-card)', borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
            <div style={{ width: 26, height: 26, borderRadius: 'var(--radius-xs)', background: 'var(--surface-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', flexShrink: 0 }}>{i + 1}</div>
            <span style={{ flex: 1, fontSize: 14, fontWeight: 500, color: 'var(--text-strong)' }}>{ex.name}</span>
            <span style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{ex.sets}×{ex.reps}</span>
          </div>
        ))}
      </div>
      <Button variant="primary" fullWidth size="lg" leadingIcon={<Icon name="play" size={16} />} onClick={() => onStart(session)}>
        Start session
      </Button>
    </div>
  );
}

function SessionsScreen({ onStart }) {
  const { Card } = window.DS;
  const Icon = window.Icon;
  const MuscleMapView = window.MuscleMapView;
  const MUSCLE_DEFS = window.MUSCLE_DEFS || [];

  const [subTab, setSubTab] = React.useState('actus');
  const [selected, setSelected] = React.useState(null);

  const actusTemplates = [
    { id: 1, name: 'Lower Body · Strength', author: 'Actus', duration: '45–55 min',
      muscles: ['lquad', 'rquad', 'lham', 'rham', 'lglute', 'rglute', 'lcalf', 'rcalf'],
      exercises: [{ name: 'Back Squat', sets: 4, reps: '5' }, { name: 'Romanian Deadlift', sets: 3, reps: '8' }, { name: 'Leg Press', sets: 3, reps: '12' }, { name: 'Calf Raise', sets: 3, reps: '15' }] },
    { id: 2, name: 'Push Day', author: 'Actus', duration: '40–50 min',
      muscles: ['chest', 'lshoulder', 'rshoulder', 'lbicep', 'rbicep'],
      exercises: [{ name: 'Bench Press', sets: 4, reps: '6' }, { name: 'Overhead Press', sets: 3, reps: '8' }, { name: 'Lateral Raise', sets: 3, reps: '12' }, { name: 'Tricep Pushdown', sets: 3, reps: '12' }] },
    { id: 3, name: 'Pull Day', author: 'Actus', duration: '40–50 min',
      muscles: ['llat', 'rlat', 'traps', 'lbicep', 'rbicep'],
      exercises: [{ name: 'Pull-Up', sets: 4, reps: '6' }, { name: 'Cable Row', sets: 3, reps: '10' }, { name: 'Face Pull', sets: 3, reps: '15' }, { name: 'Bicep Curl', sets: 3, reps: '12' }] },
    { id: 4, name: 'Full Body · Power', author: 'Actus', duration: '55–65 min',
      muscles: ['lham', 'rham', 'lglute', 'rglute', 'chest', 'llat', 'rlat', 'abs'],
      exercises: [{ name: 'Deadlift', sets: 4, reps: '4' }, { name: 'Bench Press', sets: 3, reps: '6' }, { name: 'Pull-Up', sets: 3, reps: '6' }, { name: 'Box Jump', sets: 3, reps: '5' }, { name: 'Plank', sets: 3, reps: '60 s' }] },
  ];
  const myTemplates = [
    { id: 5, name: 'Sprint & Power', author: 'Mara', duration: '30–40 min',
      muscles: ['lquad', 'rquad', 'lglute', 'rglute', 'abs', 'lcalf', 'rcalf'],
      exercises: [{ name: 'Box Jump', sets: 4, reps: '5' }, { name: 'Sprint 40 m', sets: 6, reps: '×1' }, { name: 'Hip Thrust', sets: 3, reps: '10' }, { name: 'Plank', sets: 3, reps: '45 s' }] },
  ];

  const templates = subTab === 'actus' ? actusTemplates : myTemplates;
  if (selected) return <SessionDetail session={selected} onBack={() => setSelected(null)} onStart={onStart} />;

  return (
    <div style={{ padding: '8px 20px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--text-strong)', letterSpacing: '-.02em' }}>Sessions</h1>
        <button style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', background: 'var(--signal-100)', border: '1px solid var(--signal-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--signal-600)', cursor: 'pointer' }}>
          <Icon name="plus" size={19} />
        </button>
      </div>

      <div style={{ display: 'flex', background: 'var(--surface-sunken)', borderRadius: 'var(--radius-md)', padding: 3, marginBottom: 18 }}>
        {[['actus', 'Actus Plans'], ['mine', 'My Templates']].map(([id, label]) => (
          <button key={id} onClick={() => setSubTab(id)} style={{
            flex: 1, border: 'none', cursor: 'pointer', padding: '7px 0',
            borderRadius: 'calc(var(--radius-md) - 2px)',
            background: subTab === id ? 'var(--surface-card)' : 'transparent',
            color: subTab === id ? 'var(--text-strong)' : 'var(--text-muted)',
            fontWeight: subTab === id ? 700 : 500, fontSize: 13,
            boxShadow: subTab === id ? 'var(--shadow-sm)' : 'none', transition: 'all .2s',
          }}>{label}</button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
        {templates.map(t => {
          const muscles = MUSCLE_DEFS.map(m => ({ ...m, value: t.muscles.includes(m.id) ? 72 : 0, tone: t.muscles.includes(m.id) ? 'signal' : 'rest' }));
          return (
            <Card key={t.id} interactive style={{ padding: 0, overflow: 'hidden' }} onClick={() => setSelected(t)}>
              <div style={{ padding: 13, display: 'flex', alignItems: 'center', gap: 12 }}>
                <MuscleMapView gender="female" muscles={muscles} view="both" height={70} style={{ borderRadius: 'var(--radius-sm)' }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-strong)', marginBottom: 3 }}>{t.name}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginBottom: 5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {t.exercises.slice(0, 3).map(e => e.name).join(' · ')}{t.exercises.length > 3 ? ` +${t.exercises.length - 3}` : ''}
                  </div>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Icon name="clock" size={11} /> {t.duration}
                  </span>
                </div>
                <Icon name="chevron-right" size={16} color="var(--text-faint)" />
              </div>
            </Card>
          );
        })}
        {templates.length === 0 && (
          <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
            <div style={{ marginBottom: 10 }}><Icon name="plus-circle" size={34} /></div>
            <div style={{ fontSize: 14 }}>Tap + to create your first template</div>
          </div>
        )}
      </div>
    </div>
  );
}

window.SessionDetail = SessionDetail;
window.SessionsScreen = SessionsScreen;
