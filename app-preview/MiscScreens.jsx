// InsightsScreen + ProfileScreen.
function InsightsScreen() {
  const { Card, SegmentedControl, Metric, SignalMeter, Badge } = window.DS;
  const Icon = window.Icon;
  const [range, setRange] = React.useState('week');
  const load = [
    { d: 'M', v: 52, tone: 'good' }, { d: 'T', v: 78, tone: 'good' }, { d: 'W', v: 34, tone: 'rest' },
    { d: 'T', v: 88, tone: 'caution' }, { d: 'F', v: 64, tone: 'good' }, { d: 'S', v: 0, tone: 'rest' }, { d: 'S', v: 42, tone: 'good' },
  ];
  const toneColor = { good: 'var(--good-500)', caution: 'var(--caution-500)', fatigue: 'var(--fatigue-500)', rest: 'var(--neutral-200)' };

  return (
    <div style={{ padding: '8px 20px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 27, fontWeight: 600, color: 'var(--text-strong)', letterSpacing: '-.02em' }}>Insights</h1>
        <SegmentedControl size="sm" value={range} onChange={setRange} options={[{ value: 'week', label: 'Week' }, { value: 'month', label: 'Month' }]} />
      </div>

      {/* training load chart */}
      <Card style={{ padding: 20 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div style={{ font: '600 12px/1 var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Training load</div>
          <Metric label="" value="358" unit=" load units" size={18} />
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8, height: 132, marginTop: 18 }}>
          {load.map((b, i) => (
            <div key={i} style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{ flex: 1, width: '100%', maxWidth: 26, margin: '0 auto', display: 'flex', alignItems: 'flex-end' }}>
                <div style={{ width: '100%', height: `${Math.max(b.v, 4)}%`, background: toneColor[b.tone], borderRadius: 7, transition: 'height .4s var(--ease-out)' }} />
              </div>
              <span style={{ fontSize: 11.5, color: 'var(--text-faint)', fontWeight: 600 }}>{b.d}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* trends */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 14 }}>
        <Card style={{ padding: 18 }}>
          <Metric label="L / R balance" value="95" unit="%" tone="good" trend="+2%" trendDirection="up" size={28} />
        </Card>
        <Card style={{ padding: 18 }}>
          <Metric label="Avg recovery" value="79" unit="%" tone="signal" trend="−4%" trendDirection="down" size={28} />
        </Card>
      </div>

      {/* most-fatigued */}
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 600, color: 'var(--text-strong)', margin: '24px 2px 14px' }}>Most-loaded this week</h2>
      <Card style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 15 }}>
        <SignalMeter label="Right calf" value={91} tone="fatigue" />
        <SignalMeter label="Right quad" value={84} tone="caution" />
        <SignalMeter label="Left quad" value={72} tone="good" />
      </Card>
    </div>
  );
}

function ProfileScreen() {
  const { Card, Avatar, Badge, Switch } = window.DS;
  const Icon = window.Icon;
  const [dark, setDark] = React.useState(false);
  const rows = [
    { icon: 'user-round', label: 'Account', detail: 'Mara Okonkwo' },
    { icon: 'target', label: 'Training goals', detail: 'Strength' },
    { icon: 'bell', label: 'Notifications', detail: 'On' },
    { icon: 'shield-check', label: 'Data & privacy' },
    { icon: 'circle-help', label: 'Help & support' },
  ];
  return (
    <div style={{ padding: '8px 20px 24px' }}>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 27, fontWeight: 600, color: 'var(--text-strong)', letterSpacing: '-.02em', marginBottom: 18 }}>Profile</h1>
      <Card style={{ padding: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
        <Avatar name="Mara Okonkwo" size={60} ring status="good" />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-strong)', fontFamily: 'var(--font-display)' }}>Mara Okonkwo</div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 3 }}>Sprinter · 142 sessions</div>
          <div style={{ marginTop: 8 }}><Badge tone="signal">Actus Pro</Badge></div>
        </div>
      </Card>

      <Card flush style={{ marginTop: 16, overflow: 'hidden' }}>
        {rows.map((r, i) => (
          <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '14px 16px', borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: 'var(--surface-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-body)', flex: '0 0 auto' }}>
              <Icon name={r.icon} size={17} />
            </div>
            <span style={{ flex: 1, fontSize: 15, fontWeight: 500, color: 'var(--text-strong)' }}>{r.label}</span>
            {r.detail && <span style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>{r.detail}</span>}
            <Icon name="chevron-right" size={18} color="var(--text-faint)" />
          </div>
        ))}
      </Card>

      <Card style={{ marginTop: 16, padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ color: 'var(--text-body)', display: 'flex' }}><Icon name="moon" size={18} /></div>
          <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-strong)' }}>Dark hardware theme</span>
        </div>
        <Switch checked={dark} onChange={setDark} />
      </Card>
    </div>
  );
}

window.InsightsScreen = InsightsScreen;
window.ProfileScreen = ProfileScreen;
