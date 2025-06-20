// components/Header.js

export default function Header() {
  return (
    <div
      style={{
        alignSelf: 'stretch',
        padding: '112px 64px',
        display: 'inline-flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '60px',
        backgroundImage: 'url(/header-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div
        style={{
          flex: '1 1 0',
          display: 'inline-flex',
          flexDirection: 'column',
          gap: '32px'
        }}
      >
        <h1
          style={{
            margin: 0,
            color: 'var(--Color-Black)',
            fontSize: '56px',
            fontWeight: 600,
            lineHeight: '67.2px'
          }}
        >
          Smarter subscription management starts with Recurio
        </h1>
        <p
          style={{
            margin: 0,
            color: 'rgba(0, 0, 0, 0.90)',
            fontSize: '18px',
            lineHeight: '27px'
          }}
        >
          Recurio helps startups and small businesses manage subscriptions and billing with AI-powered insights and seamless integrations.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            style={{
              padding: '10px 24px',
              background: 'var(--Color-Royal-Blue)',
              borderRadius: '6px',
              border: 'none',
              color: 'var(--Color-White)',
              fontSize: '16px',
              fontWeight: 500,
              cursor: 'pointer'
            }}
          >
            Get Started
          </button>
          <button
            style={{
              padding: '10px 24px',
              background: 'var(--Color-Royal-Blue-Lightest)',
              borderRadius: '6px',
              border: 'none',
              color: 'var(--Color-Black)',
              fontSize: '16px',
              fontWeight: 500,
              cursor: 'pointer'
            }}
          >
            Learn More
          </button>
        </div>
      </div>
      <img
        src="/header-illustration.png"
        alt="Illustration"
        width={688}
        height={664}
        style={{ borderRadius: '8px', objectFit: 'cover' }}
      />
    </div>
  )
}
