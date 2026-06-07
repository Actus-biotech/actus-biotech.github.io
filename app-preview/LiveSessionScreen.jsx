// LiveSessionScreen — full-screen dark "focus" mode with the live muscle map.
function MuscleMap({ muscles, selected, onSelect }) {
  const toneColor = {
    good: 'var(--good-500)', caution: 'var(--caution-500)',
    fatigue: 'var(--fatigue-500)', rest: 'var(--rest-500)', signal: 'var(--signal-500)',
  };
  return (
    <div style={{ position: 'relative', width: 220, height: 332, margin: '0 auto' }}>
      {/* head (no sensor) */}
      <div style={{ position: 'absolute', top: 0, left: 93, width: 34, height: 34, borderRadius: '50%', background: 'var(--ink-700)' }} />
      {muscles.map(m => {
        const active = m.value > 40;
        const col = toneColor[m.tone];
        const isSel = selected === m.id;
        return (
          <button key={m.id} onClick={() => onSelect(m.id)} title={m.name} style={{
            position: 'absolute', top: m.t, left: m.l, width: m.w, height: m.h,
            borderRadius: m.r || 14, border: 'none', cursor: 'pointer', padding: 0,
            background: active ? col : 'var(--ink-700)',
            opacity: active ? (0.35 + 0.65 * (m.value / 100)) : 0.5,
            boxShadow: isSel ? `0 0 0 2.5px #fff` : (m.tone === 'fatigue' && active ? `0 0 14px ${col}` : 'none'),
            transition: 'all .3s var(--ease-standard)',
            animation: (m.tone === 'fatigue' && active) ? 'actus-pulse 1.2s var(--ease-in-out) infinite' : 'none',
          }} />
        );
      })}
    </div>
  );
}

function LiveSessionScreen({ onEnd }) {
  const { SignalMeter, Metric, Badge, IconButton, Button } = window.DS;
  const Icon = window.Icon;

  const muscles = [
    { id: 'ldelt', name: 'Left delt', t: 44, l: 40, w: 40, h: 26, value: 28, tone: 'rest' },
    { id: 'rdelt', name: 'Right delt', t: 44, l: 140, w: 40, h: 26, value: 30, tone: 'rest' },
    { id: 'chest', name: 'Chest', t: 52, l: 68, w: 84, h: 40, r: 18, value: 24, tone: 'rest' },
    { id: 'lbi', name: 'Left arm', t: 80, l: 28, w: 22, h: 58, value: 20, tone: 'rest' },
    { id: 'rbi', name: 'Right arm', t: 80, l: 170, w: 22, h: 58, value: 22, tone: 'rest' },
    { id: 'core', name: 'Core', t: 98, l: 78, w: 64, h: 54, r: 16, value: 66, tone: 'good' },
    { id: 'lquad', name: 'Left quad', t: 160, l: 70, w: 34, h: 78, value: 88, tone: 'good' },
    { id: 'rquad', name: 'Right quad', t: 160, l: 116, w: 34, h: 78, value: 92, tone: 'caution' },
    { id: 'lcalf', name: 'Left calf', t: 246, l: 73, w: 28, h: 62, value: 74, tone: 'good' },
    { id: 'rcalf', name: 'Right calf', t: 246, l: 119, w: 28, h: 62, value: 96, tone: 'fatigue' },
  ];
  const [selected, setSelected] = React.useState('rcalf');
  const sel = muscles.find(m => m.id === selected);
  const top = [...muscles].filter(m => m.value > 40).sort((a, b) => b.value - a.value).slice(0, 4);

  return (
    <div data-theme="dark" style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--ink-950)', color: 'var(--text-body)' }}>
      <div style={{ flex: 1, overflow: 'auto', padding: '60px 20px 20px' }}>
        {/* header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Badge tone="signal" live>LIVE</Badge>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 26, fontWeight: 600, color: '#fff', fontVariantNumeric: 'tabular-nums', letterSpacing: '-.02em' }}>12:48</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <IconButton label="Pause" variant="outline"><Icon name="pause" size={20} /></IconButton>
          </div>
        </div>
        <div style={{ font: '600 12px/1 var(--font-sans)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--signal-400)', marginBottom: 2 }}>Lower body · strength</div>

        {/* muscle map */}
        <div style={{ margin: '10px 0 6px' }}>
          <MuscleMap muscles={muscles} selected={selected} onSelect={setSelected} />
        </div>

        {/* selected readout */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 4px', marginBottom: 14 }}>
          <Metric label={sel.name} value={sel.value} unit="%" tone={sel.tone === 'fatigue' ? 'fatigue' : sel.tone === 'caution' ? 'default' : 'signal'} size={40} />
          <Metric label="Composite" value="71" unit="%" size={40} />
        </div>

        {/* fatigue alert */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 'var(--radius-lg)',
          background: 'var(--state-fatigue-surface)', border: '1px solid rgba(232,92,74,0.4)', marginBottom: 16,
        }}>
          <div style={{ color: 'var(--fatigue-400)', display: 'flex' }}><Icon name="triangle-alert" size={20} /></div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>Right calf nearing fatigue</div>
            <div style={{ fontSize: 12.5, color: 'var(--neutral-300)', marginTop: 2 }}>Ease off or switch sides to recover.</div>
          </div>
        </div>

        {/* live meters */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
          {top.map(m => (
            <SignalMeter key={m.id} label={m.name} value={m.value} tone={m.tone} live={m.tone === 'fatigue'} />
          ))}
        </div>
      </div>

      {/* end bar */}
      <div style={{ flex: '0 0 auto', padding: '12px 20px 30px', background: 'var(--ink-900)', borderTop: '1px solid var(--border-default)' }}>
        <Button variant="danger" fullWidth size="lg" leadingIcon={<Icon name="square" size={16} />} onClick={onEnd}>End session</Button>
      </div>
    </div>
  );
}

window.LiveSessionScreen = LiveSessionScreen;
