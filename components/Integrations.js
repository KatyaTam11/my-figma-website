// components/Integrations.js

export default function Integrations() {
  return (
    <section
      style={{
        alignSelf: 'stretch',
        padding: '112px 64px',
        background: 'var(--Color-Neutral-Darker)',
        display: 'flex',
        flexDirection: 'column',
        gap: '80px'
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '80px',
          width: '100%'
        }}
      >
        {/* Заголовок */}
        <div
          style={{
            flex: '1 1 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <span
            style={{
              color: 'rgba(255, 255, 255, 0.50)',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '24px'
            }}
          >
            Integrations
          </span>
          <h2
            style={{
              margin: 0,
              color: 'var(--Color-White)',
              fontSize: '48px',
              fontWeight: 600,
              lineHeight: '57.6px'
            }}
          >
            Seamless Payment Processing with Leading Platforms
          </h2>
        </div>

        {/* Блок с иконками и текстом */}
        <div
          style={{
            flex: '1 1 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '24px',
              padding: '8px 0'
            }}
          >
            {/* Stripe */}
            <div
              style={{
                flex: '1 1 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <img
                src="/stripe-icon.png"
                alt="Stripe"
                style={{
                  width: '72px',
                  height: '72px',
                  background: '#313131',
                  borderRadius: '8px',
                  objectFit: 'contain'
                }}
              />
              <h3
                style={{
                  margin: 0,
                  color: 'var(--Color-White)',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '30px'
                }}
              >
                Stripe Integration
              </h3>
              <p
                style={{
                  margin: 0,
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                Easily accept payments and manage subscriptions with Stripe's robust features.
              </p>
            </div>

            {/* PayPal */}
            <div
              style={{
                flex: '1 1 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <img
                src="/paypal-icon.png"
                alt="PayPal"
                style={{
                  width: '72px',
                  height: '72px',
                  background: '#313131',
                  borderRadius: '8px',
                  objectFit: 'contain'
                }}
              />
              <h3
                style={{
                  margin: 0,
                  color: 'var(--Color-White)',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '30px'
                }}
              >
                PayPal Integration
              </h3>
              <p
                style={{
                  margin: 0,
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                Simplify transactions and enhance customer trust with PayPal's secure payment solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Иллюстрация */}
      <img
        src="/integration-hero.png"
        alt="Integration illustration"
        style={{
          alignSelf: 'stretch',
          height: '738px',
          borderRadius: '8px',
          objectFit: 'cover'
        }}
      />
    </section>
  );
}
