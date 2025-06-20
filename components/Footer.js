// components/Footer.js

export default function Footer() {
  return (
    <footer
      style={{
        alignSelf: 'stretch',
        padding: '80px 64px',
        background: 'var(--Color-White)',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '80px'
      }}
    >
      <div
        style={{
          alignSelf: 'stretch',
          display: 'inline-flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}
      >
        <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '32px' }}>
          <img src="/placeholder.png" alt="Logo" width={117} height={36} />
          <nav style={{ display: 'inline-flex', gap: '32px' }}>
            {['About Us', 'Contact Us', 'Help Center', 'Blog Posts', 'Careers'].map(link => (
              <a
                key={link}
                href="#"
                style={{
                  color: 'var(--Color-Black)',
                  fontSize: '14px',
                  fontWeight: 600,
                  lineHeight: '21px',
                  textDecoration: 'none'
                }}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div style={{ width: '400px', display: 'inline-flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              color: 'var(--Color-Black)',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '24px'
            }}
          >
            Join
          </div>
          <form style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <input
              type="email"
              placeholder="Your email here"
              style={{
                flex: '1 1 0',
                padding: '8px 12px',
                background: 'rgba(0, 0, 0, 0.05)',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                color: 'rgba(0, 0, 0, 0.60)'
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
                cursor: 'pointer'
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
              lineHeight: '18px'
            }}
          >
            By subscribing you agree to our Privacy Policy.
          </p>
        </div>
      </div>

      <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <hr style={{ borderColor: 'rgba(0, 0, 0, 0.15)' }} />
        <div
          style={{
            display: 'inline-flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%'
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
                  textDecoration: 'underline'
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
              lineHeight: '21px'
            }}
          >
            © 2025 Recurio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
