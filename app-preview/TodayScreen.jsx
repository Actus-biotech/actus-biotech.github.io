// TodayScreen — home dashboard: readiness, hub status, recent sessions.
function TodayScreen({ onStart }) {
  const { Card, Button, ActivationRing, StatusDot, Badge, Avatar, Metric } = window.DS;
  const Icon = window.Icon;
  const PX = 20;

  const sessions = [
    { name: 'Lower body · strength', when: 'Yesterday · 48 min', balance: 'L/R 96%', load: 'High', tone: 'caution' },
    { name: 'Sprint intervals', when: 'Tue · 32 min', balance: 'L/R 91%', load: 'Optimal', tone: 'good' },
    { name: 'Recovery flow', when: 'Mon · 26 min', balance: 'L/R 99%', load: 'Light', tone: 'rest' },
  ];

  return (
    <div style={{ padding: `8px ${PX}px 24px` }}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <div style={{ font: '600 13px/1 var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Friday · Jun 6</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 27, fontWeight: 600, color: 'var(--text-strong)', marginTop: 8, letterSpacing: '-.02em' }}>Good morning, Mara</h1>
        </div>
        <Avatar name="Mara Okonkwo" size={46} ring status="good" />
      </div>

      {/* readiness hero card (dark focus) */}
      <div data-theme="dark" style={{
        background: 'var(--ink-900)', borderRadius: 'var(--radius-2xl)', padding: 22,
        display: 'flex', alignItems: 'center', gap: 20, position: 'relative', overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)',
      }}>
        <div style={{ position: 'absolute', right: -40, top: -40, width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,195,252,0.18), transparent 70%)' }} />
        <ActivationRing value={78} tone="signal" glow size={104} thickness={9} label="Ready" />
        <div style={{ position: 'relative' }}>
          <div style={{ font: '600 12px/1 var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--signal-400)' }}>Recovery status</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600, color: '#fff', marginTop: 8, lineHeight: 1.2 }}>Primed to train</div>
          <p style={{ fontSize: 13, color: 'var(--neutral-300)', marginTop: 6, lineHeight: 1.5, maxWidth: 150 }}>Legs fully recovered. Aim for a strength block.</p>
        </div>
      </div>

      {/* hub status + start */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '18px 2px 16px' }}>
        <StatusDot tone="signal" label="Hub · 6 sensors live" pulse />
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          <Icon name="battery-medium" size={16} /> 82%
        </span>
      </div>
      <Button variant="primary" fullWidth size="lg" leadingIcon={<Icon name="play" size={18} />} onClick={onStart}>Start a session</Button>

      {/* recent */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', margin: '28px 2px 12px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, color: 'var(--text-strong)' }}>Recent sessions</h2>
        <span style={{ fontSize: 13, color: 'var(--accent-text)', fontWeight: 600 }}>See all</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {sessions.map((s, i) => (
          <Card key={i} interactive style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--accent-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-text)', flex: '0 0 auto' }}>
              <Icon name="dumbbell" size={20} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{s.name}</div>
              <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 3 }}>{s.when} · {s.balance}</div>
            </div>
            <Badge tone={s.tone} dot>{s.load}</Badge>
          </Card>
        ))}
      </div>
    </div>
  );
}

window.TodayScreen = TodayScreen;
