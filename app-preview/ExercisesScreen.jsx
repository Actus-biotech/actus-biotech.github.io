// ExercisesScreen — searchable exercise database with muscle map filter
function ExercisesScreen() {
  const Icon = window.Icon;
  const MuscleMapView = window.MuscleMapView;
  const MUSCLE_DEFS = window.MUSCLE_DEFS || [];

  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('All');
  const [muscleFilter, setMuscleFilter] = React.useState(null);

  const allExercises = [
    { id: 1,  name: 'Back Squat',            muscles: ['lquad', 'rquad', 'lham', 'rham', 'lglute', 'rglute'], category: 'Compound',  equipment: 'Barbell' },
    { id: 2,  name: 'Romanian Deadlift',      muscles: ['lham', 'rham', 'lglute', 'rglute', 'lower-back'],     category: 'Compound',  equipment: 'Barbell' },
    { id: 3,  name: 'Bench Press',            muscles: ['chest', 'lshoulder', 'rshoulder'],                    category: 'Compound',  equipment: 'Barbell' },
    { id: 4,  name: 'Pull-Up',                muscles: ['llat', 'rlat', 'traps', 'lbicep', 'rbicep'],          category: 'Compound',  equipment: 'Bodyweight' },
    { id: 5,  name: 'Leg Press',              muscles: ['lquad', 'rquad', 'lglute', 'rglute'],                 category: 'Compound',  equipment: 'Machine' },
    { id: 6,  name: 'Standing Calf Raise',    muscles: ['lcalf', 'rcalf'],                                     category: 'Isolation', equipment: 'Machine' },
    { id: 7,  name: 'Plank',                  muscles: ['abs', 'lower-back'],                                  category: 'Core',      equipment: 'Bodyweight' },
    { id: 8,  name: 'Lateral Raise',          muscles: ['lshoulder', 'rshoulder', 'traps'],                    category: 'Isolation', equipment: 'Dumbbells' },
    { id: 9,  name: 'Bicep Curl',             muscles: ['lbicep', 'rbicep'],                                   category: 'Isolation', equipment: 'Dumbbells' },
    { id: 10, name: 'Hip Thrust',             muscles: ['lglute', 'rglute', 'lham', 'rham'],                   category: 'Compound',  equipment: 'Barbell' },
    { id: 11, name: 'Bulgarian Split Squat',  muscles: ['lquad', 'rquad', 'lglute', 'rglute'],                 category: 'Compound',  equipment: 'Dumbbells' },
    { id: 12, name: 'Overhead Press',         muscles: ['lshoulder', 'rshoulder', 'traps'],                    category: 'Compound',  equipment: 'Barbell' },
    { id: 13, name: 'Cable Row',              muscles: ['llat', 'rlat', 'traps', 'lbicep', 'rbicep'],          category: 'Compound',  equipment: 'Cable' },
    { id: 14, name: 'Deadlift',               muscles: ['lham', 'rham', 'lglute', 'rglute', 'lower-back', 'traps'], category: 'Compound', equipment: 'Barbell' },
  ];

  const filtered = allExercises.filter(e => {
    const mS = e.name.toLowerCase().includes(search.toLowerCase());
    const mC = category === 'All' || e.category === category;
    const mM = !muscleFilter || e.muscles.includes(muscleFilter);
    return mS && mC && mM;
  });

  const mapMuscles = MUSCLE_DEFS.map(m => ({
    ...m,
    value: filtered.some(e => e.muscles.includes(m.id)) ? 65 : 0,
    tone: muscleFilter === m.id ? 'signal' : 'good',
  }));

  return (
    <div style={{ padding: '8px 20px 24px' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--text-strong)', letterSpacing: '-.02em', marginBottom: 13 }}>Exercises</h1>

      {/* Search */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'var(--surface-card)', borderRadius: 'var(--radius-md)', padding: '9px 13px', marginBottom: 14, border: '1px solid var(--border-subtle)' }}>
        <Icon name="search" size={16} color="var(--text-muted)" />
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search exercises…" style={{ flex: 1, border: 'none', background: 'transparent', fontSize: 14, color: 'var(--text-strong)', outline: 'none' }} />
        {search && <button onClick={() => setSearch('')} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 0 }}><Icon name="x" size={14} /></button>}
      </div>

      {/* Muscle map filter */}
      <div style={{ marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
          <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase' }}>Filter by muscle</span>
          {muscleFilter && (
            <button onClick={() => setMuscleFilter(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--signal-600)', fontSize: 11.5, fontWeight: 700 }}>Clear</button>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MuscleMapView
            gender="female"
            muscles={mapMuscles}
            selected={muscleFilter}
            onSelect={id => setMuscleFilter(id === muscleFilter ? null : id)}
            view="both"
            height={158}
          />
        </div>
      </div>

      {/* Category chips */}
      <div style={{ display: 'flex', gap: 7, marginBottom: 13, flexWrap: 'wrap' }}>
        {['All', 'Compound', 'Isolation', 'Core'].map(c => (
          <button key={c} onClick={() => setCategory(c)} style={{
            border: '1px solid', cursor: 'pointer', padding: '4px 11px',
            borderRadius: 'var(--radius-pill)', fontSize: 12, fontWeight: 600,
            borderColor: category === c ? 'var(--signal-400)' : 'var(--border-default)',
            background: category === c ? 'var(--signal-100)' : 'transparent',
            color: category === c ? 'var(--signal-700)' : 'var(--text-muted)',
          }}>{c}</button>
        ))}
      </div>

      <div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginBottom: 8 }}>{filtered.length} exercise{filtered.length !== 1 ? 's' : ''}</div>

      {/* List */}
      <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
        {filtered.map((ex, i) => (
          <div key={ex.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: 'var(--surface-card)', borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
            <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-sm)', background: 'var(--surface-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-text)', flexShrink: 0 }}><Icon name="dumbbell" size={16} /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>{ex.name}</div>
              <div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>{ex.equipment} · {ex.muscles.length} muscle groups</div>
            </div>
            <Icon name="chevron-right" size={16} color="var(--text-faint)" />
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ padding: '28px 20px', textAlign: 'center', background: 'var(--surface-card)', color: 'var(--text-muted)', fontSize: 13.5 }}>No exercises match your search.</div>
        )}
      </div>
    </div>
  );
}

window.ExercisesScreen = ExercisesScreen;
