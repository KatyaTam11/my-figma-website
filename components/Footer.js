// components/Footer.js

export default function Footer() {
  const topLinks = ['About Us', 'Contact Us', 'Help Center', 'Blog Posts', 'Careers'];
  const bottomLinks = ['Privacy Policy', 'Terms of Use', 'Cookie Policy'];

  return (
    <footer
      style={{
        width: '100%',
        padding: '80px 64px',             // отступы сверху/снизу и слева/справа
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '80px',
        background: 'var(--Color-White)',
      }}
    >
      {/* Верхний ряд */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {/* Логотип + ссылки */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <img src="/placeholder.png" alt="Logo" width={117} height={36} />

          <nav style={{ display: 'flex', gap: '32px', width: '493px' }}>
            {topLinks.map(link => (
              <a
                key={link}
                href="#"
                style={{
                  color: 'var(--Color-Black)',
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '21px',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Форма подписки */}
        <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              color: 'var(--Color-Black)',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '24px',
            }}
          >
            Join
          </div>

          <div style={{ display: 'flex', gap: '16px', height: '48px' }}>
            <input
              type="email"
              placeholder="Your email here"
              style={{
                flex: 1,
                padding: '8px 12px',
                background: 'rgba(0, 0, 0, 0.05)',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                color: 'rgba(0, 0, 0, 0.60)',
                boxSizing: 'border-box',
                height: '100%',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '8px 20px',
                background: 'var(--Color-Royal-Blue-Lightest)',
                borderRadius: '6px',
                border: 'none',
                fontSize: '16px',
                fontWeight: 500,
                cursor: 'pointer',
                height: '100%',
              }}
            >
              Join
            </button>
          </div>

          <div style={{ color: 'rgba(0, 0, 0, 0.90)', fontSize: '12px', lineHeight: '18px' }}>
            By subscribing you agree to our Privacy Policy.
          </div>
        </div>
      </div>

      {/* Разделитель */}
      <div
        style={{
          width: '100%',
          height: 0,
          borderTop: '1px solid rgba(0, 0, 0, 0.15)',
        }}
      />

      {/* Нижний ряд */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {/* Политики */}
        <div style={{ display: 'flex', gap: '24px' }}>
          {bottomLinks.map(link => (
            <a
              key={link}
              href="#"
              style={{
                color: 'var(--Color-Black)',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '21px',
                textDecoration: 'underline',
                whiteSpace: 'nowrap'
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Копирайт */}
        <div style={{ color: 'var(--Color-Black)', fontSize: '14px', fontWeight: 400, lineHeight: '21px' }}>
          © 2025 Recurio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
