// components/Footer.js

export default function Footer() {
  const topLinks = ['About Us', 'Contact Us', 'Help Center', 'Blog Posts', 'Careers'];
  const bottomLinks = ['Privacy Policy', 'Terms of Use', 'Cookie Policy'];

  return (
    <footer
      style={{
        width: '100%',
        padding: '80px 16px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '80px',
        background: 'var(--Color-White)',
      }}
    >
      {/* Верхний ряд: логотип + навигация + форма */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        {/* Логотип и ссылки */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <img src="/placeholder.png" alt="Logo" width={117} height={36} />

          <nav style={{ display: 'flex', gap: '32px' }}>
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
                }}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Форма подписки */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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

          <form style={{ display: 'flex', gap: '16px' }}>
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
              }}
            >
              Join
            </button>
          </form>

          <p
            style={{
              margin: 0,
              color: 'rgba(0, 0, 0, 0.90)',
              fontSize: '12px',
              lineHeight: '18px',
            }}
          >
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </div>

      {/* Разделитель */}
      <hr
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          border: 'none',
          borderTop: '1px solid rgba(0,0,0,0.15)',
        }}
      />

      {/* Нижний ряд: ссылки политики + копирайт */}
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Ссылки политики */}
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
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Копирайт */}
        <div
          style={{
            color: 'var(--Color-Black)',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '21px',
          }}
        >
          © 2025 Recurio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
