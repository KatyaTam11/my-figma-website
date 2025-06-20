// components/Navbar.js

export default function Navbar() {
  return (
    <header
      style={{
        width: '100%',                    // во весь экран
        background: 'var(--Color-White)',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '1440px',             // ограничиваем контент
          margin: '0 auto',               // центрируем
          height: '72px',
          padding: '0 64px',
          display: 'flex',                // по горизонтали
          justifyContent: 'space-between',// логотип — кнопки по краям
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        {/* Левая группа: лого + ссылки */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <img
            src="/placeholder.png"
            alt="Logo"
            width={117}
            height={36}
          />
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {['Home Page', 'Features List', 'Pricing Plans', 'Support Center'].map(label => (
              <span
                key={label}
                style={{
                  color: 'var(--Color-Black)',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '24px'
                }}
              >
                {label}
              </span>
            ))}
          </nav>
        </div>

        {/* Правая группа: кнопки */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            style={{
              padding: '8px 20px',
              background: 'var(--Color-Royal-Blue-Lightest)',
              borderRadius: '6px',
              border: 'none',
              fontSize: '16px',
              fontWeight: 500,
              cursor: 'pointer'
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
              cursor: 'pointer'
            }}
          >
            Start
          </button>
        </div>
      </div>
    </header>
  )
}
