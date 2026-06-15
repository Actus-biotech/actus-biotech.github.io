// AppShell — Actus mobile: 5-tab bar (Insight · Sensors · Sessions · Exercises · History)
function TabBar({ tab, setTab }) {
  const Icon = window.Icon;
  const items = [
    { id: 'sensors',   label: 'Sensors',   icon: 'radio' },
    { id: 'sessions',  label: 'Sessions',  icon: 'dumbbell' },
    { id: 'insight',   label: 'Insight',   icon: 'sparkles', center: true },
    { id: 'exercises', label: 'Exercises', icon: 'search' },
    { id: 'history',   label: 'History',   icon: 'chart-bar' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 20,
      display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around',
      background: 'var(--surface-glass)',
      WebkitBackdropFilter: 'blur(22px) saturate(180%)',
      backdropFilter: 'blur(22px) saturate(180%)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '10px 4px 26px',
      boxShadow: '0 -8px 30px rgba(20,18,40,0.06)',
    }}>
      {items.map(it => {
        const active = tab === it.id;
        if (it.center) {
          return (
            <button key={it.id} onClick={() => setTab(it.id)} style={{
              border: '3.5px solid var(--surface-card)',
              cursor: 'pointer',
              background: active ? 'var(--signal-500)' : 'var(--signal-600)',
              width: 56, height: 56,
              borderRadius: '50%',
              marginTop: -22,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: 3,
              color: '#fff',
              boxShadow: active ? 'var(--glow-signal-md)' : 'var(--glow-signal-sm)',
              transition: 'all .2s',
              flexShrink: 0,
            }}>
              <Icon name={it.icon} size={22} strokeWidth={2.4} color="#fff" />
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.01em', color: '#fff', lineHeight: 1 }}>{it.label}</span>
            </button>
          );
        }
        return (
          <button key={it.id} onClick={() => setTab(it.id)} style={{
            border: 'none', background: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            color: active ? 'var(--accent-text)' : 'var(--text-faint)',
            width: 58, padding: '4px 0',
          }}>
            <Icon name={it.icon} size={21} strokeWidth={active ? 2.4 : 2} />
            <span style={{ fontSize: 10, fontWeight: active ? 700 : 500, letterSpacing: '.01em' }}>{it.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function AppShell({ tab, setTab, children, overlay }) {
  return (
    <div style={{ height: '100%', position: 'relative', background: 'var(--surface-page)' }}>
      <div style={{ height: '100%', overflowY: 'auto', paddingTop: 54, paddingBottom: 96 }}>
        {children}
      </div>
      <TabBar tab={tab} setTab={setTab} />
      {overlay}
    </div>
  );
}

window.AppShell = AppShell;
window.TabBar = TabBar;
