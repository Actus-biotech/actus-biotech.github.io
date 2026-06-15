// HistoryScreen — workout history with training load chart, EMG breakdown + muscle map
function HistoryScreen() {
  const { Card, Metric, SignalMeter, SegmentedControl } = window.DS;
  const Icon = window.Icon;
  const MuscleMapView = window.MuscleMapView;
  const MUSCLE_DEFS = window.MUSCLE_DEFS || [];

  const [range, setRange] = React.useState('week');
  const [expanded, setExpanded] = React.useState(0);

  const sessions = [
    {
      id: 0, name: 'Lower Body · Strength', date: 'Today · 9:54 AM', duration: '42:10', balance: 96, peakLoad: 96,
      muscles: [
        { id: 'lquad', value: 88, tone: 'caution' }, { id: 'rquad', value: 92, tone: 'fatigue' },
        { id: 'lham',  value: 74, tone: 'good' },    { id: 'rham',  value: 68, tone: 'good' },
        { id: 'lcalf', value: 70, tone: 'good' },    { id: 'rcalf', value: 96, tone: 'fatigue' },
        { id: 'lglute', value: 55, tone: 'good' },   { id: 'rglute', value: 60, tone: 'good' },
      ],
    },
    {
      id: 1, name: 'Sprint intervals', date: 'Yesterday · 7:45 AM', duration: '31:20', balance: 91, peakLoad: 88,
      muscles: [
        { id: 'lquad', value: 80, tone: 'caution' }, { id: 'rquad', value: 88, tone: 'caution' },
        { id: 'lcalf', value: 76, tone: 'good' },    { id: 'rcalf', value: 84, tone: 'caution' },
        { id: 'lglute', value: 60, tone: 'good' },   { id: 'rglute', value: 64, tone: 'good' },
      ],
    },
    {
      id: 2, name: 'Recovery flow', date: 'Mon · 7:00 AM', duration: '26:00', balance: 99, peakLoad: 42,
      muscles: [
        { id: 'abs',        value: 35, tone: 'good' },
        { id: 'lower-back', value: 28, tone: 'rest' },
        { id: 'lshoulder',  value: 22, tone: 'rest' },
        { id: 'rshoulder',  value: 24, tone: 'rest' },
      ],
    },
  ];

  const loadData = [
    { d: 'M', v: 26, tone: 'rest' },   { d: 'T', v: 0,  tone: 'rest' },
    { d: 'W', v: 88, tone: 'caution' }, { d: 'T', v: 91, tone: 'fatigue' },
    { d: 'F', v: 0,  tone: 'rest' },   { d: 'S', v: 0,  tone: 'rest' },
    { d: 'S', v: 0,  tone: 'rest' },
  ];
  const toneColor = { good: 'var(--good-500)', caution: 'var(--caution-500)', fatigue: 'var(--fatigue-500)', rest: 'var(--neutral-150)' };

  return (
    <div style={{ padding: '8px 20px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, color: 'var(--text-strong)', letterSpacing: '-.02em' }}>History</h1>
        <SegmentedControl size="sm" value={range} onChange={setRange} options={[{ value: 'week', label: 'Week' }, { value: 'month', label: 'Month' }]} />
      </div>

      {/* Load chart */}
      <Card style={{ padding: 17, marginBottom: 15 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 13 }}>
          <div style={{ font: '600 10px/1 var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Training load</div>
          <Metric label="" value="358" unit="lu" size={17} />
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 5, height: 90 }}>
          {loadData.map((b, i) => (
            <div key={i} style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
              <div style={{ flex: 1, width: '100%', maxWidth: 22, margin: '0 auto', display: 'flex', alignItems: 'flex-end' }}>
                <div style={{ width: '100%', height: `${Math.max(b.v, 4)}%`, background: toneColor[b.tone], borderRadius: 4 }} />
              </div>
              <span style={{ fontSize: 10, color: 'var(--text-faint)', fontWeight: 600 }}>{b.d}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Session list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {sessions.map(s => {
          const isExp = expanded === s.id;
          const fullMuscles = MUSCLE_DEFS.map(md => ({
            ...md, ...(s.muscles.find(m => m.id === md.id) || { value: 0, tone: 'rest' }),
          }));
          return (
            <Card key={s.id} style={{ padding: 0, overflow: 'hidden' }}>
              <button onClick={() => setExpanded(isExp ? null : s.id)} style={{ width: '100%', border: 'none', background: 'none', cursor: 'pointer', padding: '13px 15px', display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left' }}>
                <div style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', background: 'var(--accent-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-text)', flexShrink: 0 }}>
                  <Icon name="dumbbell" size={17} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.name}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>{s.date} · {s.duration}</div>
                </div>
                <Icon name={isExp ? 'chevron-up' : 'chevron-down'} size={16} color="var(--text-faint)" />
              </button>

              {isExp && (
                <div style={{ borderTop: '1px solid var(--border-subtle)', padding: 14 }}>
                  <div style={{ display: 'flex', gap: 14, marginBottom: 14 }}>
                    <Metric label="Balance"   value={s.balance}   unit="%" tone={s.balance   >= 95 ? 'good' : 'caution'} size={20} />
                    <Metric label="Peak load" value={s.peakLoad}  unit="%" tone={s.peakLoad  >= 90 ? 'fatigue' : 'caution'} size={20} />
                    <Metric label="Duration"  value={s.duration}  size={20} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                    <MuscleMapView gender="female" muscles={fullMuscles} view="both" height={185} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {s.muscles.sort((a, b) => b.value - a.value).map(m => (
                      <SignalMeter
                        key={m.id}
                        label={MUSCLE_DEFS.find(md => md.id === m.id)?.name || m.id}
                        value={m.value}
                        tone={m.tone}
                      />
                    ))}
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

window.HistoryScreen = HistoryScreen;
