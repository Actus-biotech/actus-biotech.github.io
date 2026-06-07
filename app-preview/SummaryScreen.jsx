// SummaryScreen — post-session report (light), shown after ending a live session.
function SummaryScreen({ onDone }) {
  const { Card, Button, Metric, SignalMeter, Badge, ActivationRing } = window.DS;
  const Icon = window.Icon;

  const breakdown = [
    { name: 'Right quad', value: 92, tone: 'caution' },
    { name: 'Left quad', value: 88, tone: 'good' },
    { name: 'Right calf', value: 96, tone: 'fatigue' },
    { name: 'Left calf', value: 74, tone: 'good' },
    { name: 'Core', value: 66, tone: 'good' },
    { name: 'Glutes', value: 58, tone: 'rest' },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--surface-page)' }}>
      <div style={{ flex: 1, overflow: 'auto', padding: '58px 20px 20px' }}>
        {/* header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <Badge tone="good" dot>Session complete</Badge>
          <button onClick={onDone} style={{ border: 'none', background: 'var(--surface-sunken)', width: 34, height: 34, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <Icon name="x" size={18} />
          </button>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, color: 'var(--text-strong)', letterSpacing: '-.02em', marginTop: 10 }}>Lower body · strength</h1>
        <div style={{ fontSize: 13.5, color: 'var(--text-muted)', marginTop: 6 }}>Today · 9:12 AM — 9:54 AM</div>

        {/* hero metrics */}
        <Card style={{ marginTop: 18, padding: 20, display: 'flex', alignItems: 'center', gap: 18 }}>
          <ActivationRing value={84} tone="good" size={92} thickness={8} label="Engaged" />
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 12px' }}>
            <Metric label="Duration" value="42:10" size={22} />
            <Metric label="Balance" value="96" unit="%" size={22} tone="good" />
            <Metric label="Peak load" value="96" unit="%" size={22} tone="fatigue" />
            <Metric label="Calories" value="418" size={22} />
          </div>
        </Card>

        {/* balance note */}
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '14px 16px', borderRadius: 'var(--radius-lg)', background: 'var(--accent-surface)', marginTop: 14 }}>
          <div style={{ color: 'var(--accent-text)', display: 'flex', marginTop: 1 }}><Icon name="sparkles" size={18} /></div>
          <p style={{ fontSize: 13.5, color: 'var(--text-body)', lineHeight: 1.5 }}>
            Strong, balanced quads today. Your <strong style={{ color: 'var(--text-strong)' }}>right calf</strong> fatigued early — add a mobility set before your next lower-body block.
          </p>
        </div>

        {/* breakdown */}
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: 'var(--text-strong)', margin: '24px 2px 14px' }}>Muscle breakdown</h2>
        <Card style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 15 }}>
          {breakdown.map(m => (
            <SignalMeter key={m.name} label={m.name} value={m.value} tone={m.tone} />
          ))}
        </Card>
      </div>

      <div style={{ flex: '0 0 auto', padding: '12px 20px 30px', background: 'var(--surface-card)', borderTop: '1px solid var(--border-subtle)' }}>
        <Button variant="primary" fullWidth size="lg" onClick={onDone}>Done</Button>
      </div>
    </div>
  );
}

window.SummaryScreen = SummaryScreen;
