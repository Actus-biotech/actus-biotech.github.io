// MuscleMapView — anatomy images with colored muscle overlays (mix-blend-mode: color)
// Each activated muscle is colored by an elliptical overlay that tints the anatomical region.

const MALE_IMG   = 'assets/muscle-map-male.jpg';
const FEMALE_IMG = 'assets/muscle-map-female.jpg';

const MAP_TONE_COLOR = {
  good:    'var(--good-500)',
  caution: 'var(--caution-500)',
  fatigue: 'var(--fatigue-500)',
  rest:    'var(--rest-400)',
  signal:  'var(--signal-500)',
};

// x, y = center % of full square image; w, h = size % of full image
// Front figure: x ≈ 0–50   Back figure: x ≈ 50–100
const MUSCLE_DEFS = [
  { id: 'chest',      name: 'Chest',         mapView: 'front', x: 25, y: 30, w: 16, h: 10 },
  { id: 'lshoulder',  name: 'L. Shoulder',   mapView: 'front', x: 17, y: 24, w:  9, h:  8 },
  { id: 'rshoulder',  name: 'R. Shoulder',   mapView: 'front', x: 33, y: 24, w:  9, h:  8 },
  { id: 'lbicep',     name: 'L. Bicep',      mapView: 'front', x: 13, y: 41, w:  5, h: 12 },
  { id: 'rbicep',     name: 'R. Bicep',      mapView: 'front', x: 37, y: 41, w:  5, h: 12 },
  { id: 'abs',        name: 'Abs',           mapView: 'front', x: 25, y: 50, w: 10, h: 14 },
  { id: 'lquad',      name: 'L. Quad',       mapView: 'front', x: 20, y: 65, w:  8, h: 20 },
  { id: 'rquad',      name: 'R. Quad',       mapView: 'front', x: 30, y: 65, w:  8, h: 20 },
  { id: 'lcalf',      name: 'L. Calf',       mapView: 'front', x: 20, y: 83, w:  5, h: 12 },
  { id: 'rcalf',      name: 'R. Calf',       mapView: 'front', x: 30, y: 83, w:  5, h: 12 },
  { id: 'traps',      name: 'Traps',         mapView: 'back',  x: 75, y: 22, w: 16, h:  6 },
  { id: 'llat',       name: 'L. Lat',        mapView: 'back',  x: 68, y: 35, w:  8, h: 16 },
  { id: 'rlat',       name: 'R. Lat',        mapView: 'back',  x: 82, y: 35, w:  8, h: 16 },
  { id: 'lower-back', name: 'Lower Back',    mapView: 'back',  x: 75, y: 44, w: 12, h:  8 },
  { id: 'lglute',     name: 'L. Glute',      mapView: 'back',  x: 69, y: 54, w: 10, h: 12 },
  { id: 'rglute',     name: 'R. Glute',      mapView: 'back',  x: 81, y: 54, w: 10, h: 12 },
  { id: 'lham',       name: 'L. Hamstring',  mapView: 'back',  x: 70, y: 65, w:  7, h: 18 },
  { id: 'rham',       name: 'R. Hamstring',  mapView: 'back',  x: 80, y: 65, w:  7, h: 18 },
];

function MuscleMapView({ gender = 'male', muscles = [], selected, onSelect, view = 'both', height = 220, style = {} }) {
  const img = gender === 'female' ? FEMALE_IMG : MALE_IMG;
  const containerW = view === 'both' ? height : height * 0.5;
  // Blur scales with container size so thumbnails stay crisp
  const blur = Math.max(2, Math.round(height * 0.024));

  const imgStyle = view === 'back'
    ? { position: 'absolute', right: 0, top: 0, width: '200%', height: '100%', objectFit: 'fill' }
    : view === 'front'
    ? { position: 'absolute', left: 0, top: 0, width: '200%', height: '100%', objectFit: 'fill' }
    : { position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', objectFit: 'fill' };

  // Convert full-image % → container %
  const toX = (mx) => view === 'both' ? mx : view === 'front' ? mx * 2 : (mx - 50) * 2;
  const toW = (mw) => view === 'both' ? mw : mw * 2;

  const visible = view === 'both' ? muscles : muscles.filter(m => m.mapView === view);

  return (
    <div style={{
      position: 'relative', width: containerW, height,
      overflow: 'hidden', borderRadius: 'var(--radius-lg)',
      background: '#FAFAFE', flexShrink: 0,
      isolation: 'isolate',
      ...style,
    }}>
      {/* Base anatomy image */}
      <img src={img} alt="Muscle anatomy" draggable={false} style={imgStyle} />

      {/* Muscle color overlays — mix-blend-mode: color tints the muscle regions */}
      {visible.map(m => {
        const val   = m.value || 0;
        const active = val > 15;
        const isSel  = selected === m.id;
        const col    = MAP_TONE_COLOR[m.tone] || 'var(--signal-400)';
        const cx     = toX(m.x);
        const sw     = toW(m.w || 8);
        const sh     = m.h || 10;
        // Opacity reflects activation intensity; selected = always full
        const opacity = isSel
          ? (active ? 0.97 : 0.55)
          : active ? (0.52 + 0.43 * (val / 100)) : 0;

        return (
          <React.Fragment key={m.id}>
            {/* Blended color fill over muscle region */}
            <div style={{
              position: 'absolute',
              left: `${cx}%`, top: `${m.y}%`,
              transform: 'translate(-50%,-50%)',
              width: `${sw}%`, height: `${sh}%`,
              borderRadius: '50%',
              background: (active || isSel) ? col : 'transparent',
              opacity,
              filter: `blur(${blur}px)`,
              mixBlendMode: 'color',
              pointerEvents: 'none',
              transition: 'opacity .35s ease, background .35s ease',
            }} />

            {/* Selection outline ring */}
            {isSel && (
              <div style={{
                position: 'absolute',
                left: `${cx}%`, top: `${m.y}%`,
                transform: 'translate(-50%,-50%)',
                width: `${sw + 2}%`, height: `${sh + 2}%`,
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.92)',
                boxShadow: '0 0 0 1px rgba(0,0,0,0.18)',
                pointerEvents: 'none',
                zIndex: 6,
              }} />
            )}

            {/* Invisible hit target */}
            <button title={m.name} onClick={() => onSelect && onSelect(m.id)} style={{
              position: 'absolute',
              left: `${cx}%`, top: `${m.y}%`,
              transform: 'translate(-50%,-50%)',
              width: `${Math.max(sw, 9)}%`, height: `${Math.max(sh, 9)}%`,
              borderRadius: '50%',
              background: 'transparent', border: 'none',
              cursor: onSelect ? 'pointer' : 'default',
              padding: 0, outline: 'none', zIndex: 5,
            }} />
          </React.Fragment>
        );
      })}
    </div>
  );
}

window.MuscleMapView  = MuscleMapView;
window.MUSCLE_DEFS    = MUSCLE_DEFS;
window.MAP_TONE_COLOR = MAP_TONE_COLOR;
