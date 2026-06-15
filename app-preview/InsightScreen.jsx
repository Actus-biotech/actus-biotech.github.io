// InsightScreen — home: readiness ring, AI insights, body map, AI coach chat
const MUSCLE_LABEL_TO_ID = {
  'R. Calf': 'rcalf', 'L. Calf': 'lcalf',
  'R. Quad': 'rquad', 'L. Quad': 'lquad',
  'R. Ham':  'rham',  'L. Ham':  'lham',
};

function InsightScreen({ tweaks = {} }) {
  const { Card, ActivationRing, Badge, Avatar, Metric, SignalMeter } = window.DS;
  const Icon = window.Icon;
  const MuscleMapView = window.MuscleMapView;
  const MUSCLE_DEFS = window.MUSCLE_DEFS || [];

  const [subTab, setSubTab] = React.useState('overview');
  const gender = 'female';

  const cautionId  = MUSCLE_LABEL_TO_ID[tweaks.cautionMuscle] || 'rcalf';
  const fatigueId  = MUSCLE_LABEL_TO_ID[tweaks.fatigueMuscle] || 'rquad';
  const readiness  = tweaks.readiness !== undefined ? tweaks.readiness : 78;

  const baseValues = {
    lquad: 88, rquad: 92, lham: 72, rham: 68,
    lglute: 55, rglute: 60, lcalf: 70, rcalf: 91,
    abs: 44, chest: 28, lshoulder: 22, rshoulder: 24,
    traps: 30, llat: 32, rlat: 34,
  };
  const weeklyMuscles = MUSCLE_DEFS.map(m => {
    const value = baseValues[m.id] || 10;
    const tone  = m.id === fatigueId ? 'fatigue'
      : m.id === cautionId ? 'caution'
      : value > 50 ? 'good'
      : 'rest';
    return { ...m, value, tone };
  });

  const readinessLabel = readiness >= 80 ? 'Primed to train'
    : readiness >= 60 ? 'Ready to train'
    : 'Take it easy today';
  const readinessNote  = readiness >= 80 ? 'Legs fully recovered. Strength block ahead.'
    : readiness >= 60 ? 'Mostly recovered. Moderate session advised.'
    : 'High accumulated load. Prioritise recovery.';

  const insights = [
    { tone: 'fatigue', icon: 'triangle-alert', title: 'Right side dominance', body: 'Right quad & calf are ~8% more active than left. Add unilateral work to correct imbalance.' },
    { tone: 'caution', icon: 'activity', title: 'Calf recovery lag', body: 'Right calf has been elevated for 3 consecutive sessions. Consider 48 h rest before next leg day.' },
    { tone: 'good', icon: 'sparkles', title: 'Quad symmetry improving', body: 'L/R quad balance improved 88 % → 96 % over 2 weeks. Your corrective work is paying off.' },
  ];

  const bgMap = { good: 'var(--good-100)', caution: 'var(--caution-100)', fatigue: 'var(--fatigue-100)' };
  const colMap = { good: 'var(--good-600)', caution: 'var(--caution-600)', fatigue: 'var(--fatigue-600)' };

  const subTabs = [['overview', 'Overview'], ['body', 'Body Map'], ['coach', 'Coach']];

  return (
    <div style={{ padding: '8px 20px 24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div>
          <div style={{ font: '600 11px/1 var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Sat · Jun 14</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600, color: 'var(--text-strong)', marginTop: 5, letterSpacing: '-.02em' }}>Good morning, Mara</h1>
        </div>
        <Avatar name="Mara Okonkwo" size={42} ring status="good" />
      </div>

      {/* Readiness dark card */}
      <div data-theme="dark" style={{ background: 'var(--ink-900)', borderRadius: 'var(--radius-xl)', padding: 18, display: 'flex', alignItems: 'center', gap: 18, position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', marginBottom: 16 }}>
        <div style={{ position: 'absolute', right: -40, top: -40, width: 150, height: 150, borderRadius: '50%', background: 'radial-gradient(circle, rgba(136,120,232,0.22), transparent 70%)', pointerEvents: 'none' }} />
        <ActivationRing value={readiness} tone="signal" glow size={88} thickness={8} label="Ready" />
        <div style={{ position: 'relative' }}>
          <div style={{ font: '600 10px/1 var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--signal-400)' }}>Today's readiness</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 600, color: '#fff', marginTop: 6 }}>{readinessLabel}</div>
          <p style={{ fontSize: 12, color: 'var(--neutral-300)', marginTop: 4, lineHeight: 1.5, maxWidth: 148 }}>{readinessNote}</p>
        </div>
      </div>

      {/* Sub-tabs */}
      <div style={{ display: 'flex', background: 'var(--surface-sunken)', borderRadius: 'var(--radius-md)', padding: 3, marginBottom: 16 }}>
        {subTabs.map(([id, label]) => (
          <button key={id} onClick={() => setSubTab(id)} style={{
            flex: 1, border: 'none', cursor: 'pointer', padding: '7px 0',
            borderRadius: 'calc(var(--radius-md) - 2px)',
            background: subTab === id ? 'var(--surface-card)' : 'transparent',
            color: subTab === id ? 'var(--text-strong)' : 'var(--text-muted)',
            fontWeight: subTab === id ? 700 : 500, fontSize: 12.5,
            boxShadow: subTab === id ? 'var(--shadow-sm)' : 'none', transition: 'all .2s',
          }}>{label}</button>
        ))}
      </div>

      {/* OVERVIEW */}
      {subTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {insights.map((ins, i) => (
            <div key={i} style={{ padding: '12px 14px', borderRadius: 'var(--radius-lg)', background: bgMap[ins.tone], display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <div style={{ color: colMap[ins.tone], marginTop: 1, flexShrink: 0 }}><Icon name={ins.icon} size={16} /></div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink-800)', marginBottom: 3 }}>{ins.title}</div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-700)', lineHeight: 1.5 }}>{ins.body}</div>
              </div>
            </div>
          ))}
          <Card style={{ padding: 14, marginTop: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 11 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-strong)' }}>Profile</span>
              <Badge tone="signal">Pro</Badge>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
              <Metric label="Height" value="171" unit="cm" size={20} />
              <Metric label="Weight" value="63" unit="kg" size={20} />
              <Metric label="Goal" value="Power" size={13} />
            </div>
          </Card>
        </div>
      )}

      {/* BODY MAP */}
      {subTab === 'body' && (
        <div>
          <div style={{ marginBottom: 11 }}>
            <span style={{ fontSize: 11.5, color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase' }}>Weekly training load</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
            <MuscleMapView gender={gender} muscles={weeklyMuscles} view="both" height={270} />
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[['good-500', 'Optimal'], ['caution-500', 'Elevated'], ['fatigue-500', 'Overloaded'], ['neutral-300', 'Under-trained']].map(([c, l]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: `var(--${c})` }} />
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI COACH */}
      {subTab === 'coach' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
            <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--signal-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--signal-600)', flexShrink: 0 }}><Icon name="sparkles" size={14} /></div>
            <div style={{ background: 'var(--surface-card)', borderRadius: '0 var(--radius-lg) var(--radius-lg) var(--radius-lg)', padding: '11px 13px', flex: 1, boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ fontSize: 12.5, color: 'var(--text-body)', lineHeight: 1.55 }}>Good morning Mara! Based on your EMG data this week, I recommend prioritizing <strong style={{ color: 'var(--text-strong)' }}>unilateral leg work</strong> today — right calf fatigue suggests left-side compensation. A Bulgarian split squat session would help.</div>
              <div style={{ fontSize: 10.5, color: 'var(--text-muted)', marginTop: 7 }}>Actus Coach · 7:42 AM</div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ background: 'var(--signal-500)', borderRadius: 'var(--radius-lg) 0 var(--radius-lg) var(--radius-lg)', padding: '11px 13px', maxWidth: '78%' }}>
              <div style={{ fontSize: 12.5, color: '#fff', lineHeight: 1.5 }}>What weight should I use for the split squat?</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
            <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--signal-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--signal-600)', flexShrink: 0 }}><Icon name="sparkles" size={14} /></div>
            <div style={{ background: 'var(--surface-card)', borderRadius: '0 var(--radius-lg) var(--radius-lg) var(--radius-lg)', padding: '11px 13px', flex: 1, boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ fontSize: 12.5, color: 'var(--text-body)', lineHeight: 1.55 }}>Start at ~50 kg (50% squat max), 3×10 each side. If L/R EMG imbalance stays under 5%, progress +5 kg next session.</div>
              <div style={{ fontSize: 10.5, color: 'var(--text-muted)', marginTop: 7 }}>Actus Coach · 7:44 AM</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 9, alignItems: 'center', background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: '9px 13px', border: '1px solid var(--border-subtle)', marginTop: 2 }}>
            <input type="text" placeholder="Ask your coach…" style={{ flex: 1, border: 'none', background: 'transparent', fontSize: 13.5, color: 'var(--text-strong)', outline: 'none' }} />
            <button style={{ width: 28, height: 28, borderRadius: 'var(--radius-sm)', background: 'var(--signal-500)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="arrow-up" size={14} color="#fff" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

window.InsightScreen = InsightScreen;
