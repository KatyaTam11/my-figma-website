// components/Navbar.js

export default function Navbar() {
  return (
    <header
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        background: 'var(--Color-White)',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          width: '100%',
          padding: '0 16px',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '72px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <img src="/placeholder.png" alt="Logo" width={117} height={36} />
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {['Home Page', 'Features List', 'Pricing Plans', 'Support Center'].map(label => (
              <span
                key={label}
                style={{
                  color: 'var(--Color-Black)',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px',
                }}
              >
                {label}
              </span>
            ))}
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            style={{
              padding: '8px 20px',
              background: 'var(--Color-Royal-Blue-Lightest)',
              borderRadius: '6px',
              border: 'none',
              fontSize: '16px',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Join
          </button>
          <button
            style={{
              padding: '8px 20px',
              background: 'var(--Color-Royal-Blue)',
              borderRadius: '6px',
              border: 'none',
              color: 'var(--Color-White)',
              fontSize: '16px',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Start
          </button>
        </div>
      </div>
    </header>
  );
}
