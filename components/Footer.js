// components/Footer.js

export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        padding: '80px 64px',    // отступы по бокам
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '80px',
        background: 'var(--Color-White)',
      }}
    >
      {/* верхний ряд */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {/* Лого + ссылки */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <img src="/placeholder.png" alt="Logo" width={117} height={36} />
          <nav style={{ display: 'flex', gap: '32px' }}>
            {/* ... */}
          </nav>
        </div>

        {/* Форма подписки */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* ... */}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.15)' }} />

      {/* нижний ряд */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* ссылки */}
        <div style={{ display: 'flex', gap: '24px' }}>{/* ... */}</div>
        <div>© 2025 Recurio. All rights reserved.</div>
      </div>
    </footer>
  );
}
