// components/Footer.js

export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        background: 'var(--Color-White)',
        padding: '80px 16px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '80px',
      }}
    >
      {/* Верхняя часть */}
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {/* Логотип + ссылки */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <img src="/placeholder.png" alt="Logo" width={117} height={36} />
          <nav style={{ display: 'flex', gap: '32px' }}>
            {['About Us', 'Contact Us', 'Help Center', 'Blog Posts', 'Careers'].map(link => (
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

      {/* Нижняя часть */}
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        <hr style={{ border: 'none', borderTop: '1px solid rgba(0, 0, 0, 0.15)' }} />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy'].map(link => (
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
      </div>
    </footer>
  );
}
