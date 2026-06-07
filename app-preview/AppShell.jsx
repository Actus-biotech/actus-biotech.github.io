// AppShell — Actus mobile: status-bar-safe layout + branded bottom tab bar.
const { IconButton } = window.DS;

function TabBar({ tab, setTab }) {
  const Icon = window.Icon;
  const items = [
    { id: 'today', label: 'Today', icon: 'house' },
    { id: 'sensors', label: 'Sensors', icon: 'radio' },
    { id: 'live', label: 'Live', icon: 'activity', center: true },
    { id: 'insights', label: 'Insights', icon: 'chart-spline' },
    { id: 'profile', label: 'Profile', icon: 'user-round' },
  ];
  return (
    <div style={{
      flex: '0 0 auto', position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 20,
      display: 'flex', alignItems: 'flex-start', justifyContent: 'space-around',
      background: 'var(--surface-glass)',
      WebkitBackdropFilter: 'blur(22px) saturate(180%)', backdropFilter: 'blur(22px) saturate(180%)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '10px 8px 26px', boxShadow: '0 -8px 30px rgba(14,18,22,0.06)',
    }}>
      {items.map(it => {
        if (it.center) {
          const active = tab === 'live';
          return (
            <button key={it.id} onClick={() => setTab('live')} style={{
              border: 'none', cursor: 'pointer', background: 'var(--accent)',
              width: 58, height: 58, borderRadius: '50%', marginTop: -28,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-on-accent)', boxShadow: 'var(--glow-signal-md)',
              border: '4px solid var(--surface-card)',
            }}>
              <Icon name={it.icon} size={24} strokeWidth={2.4} />
            </button>
          );
        }
        const active = tab === it.id;
        return (
          <button key={it.id} onClick={() => setTab(it.id)} style={{
            border: 'none', background: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            color: active ? 'var(--accent-text)' : 'var(--text-faint)',
            width: 56, padding: '4px 0',
          }}>
            <Icon name={it.icon} size={22} strokeWidth={active ? 2.4 : 2} />
            <span style={{ fontSize: 10.5, fontWeight: active ? 700 : 500, letterSpacing: '.01em' }}>{it.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function AppShell({ tab, setTab, dark = false, children }) {
  return (
    <div style={{ height: '100%', position: 'relative', background: 'var(--surface-page)' }}
         data-theme={dark ? 'dark' : undefined}>
      <div style={{ height: '100%', overflow: 'auto', paddingTop: 54, paddingBottom: 96 }}>
        {children}
      </div>
      <TabBar tab={tab} setTab={setTab} />
    </div>
  );
}

window.AppShell = AppShell;
window.TabBar = TabBar;
