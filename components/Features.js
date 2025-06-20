// components/Features.js

export default function Features() {
  const features = [
    {
      image: '/feature1.png',
      title: 'Stay Ahead with Alerts Before Your Subscription Renewals',
      description:
        'Never miss a payment again with timely reminders for upcoming renewals.',
      linkText: 'Learn More'
    },
    {
      image: '/feature2.png',
      title: 'Forecast Your Expenses with Advanced AI Technology',
      description:
        'Utilize AI-driven insights to plan your financial future with confidence.',
      linkText: 'Discover'
    },
    {
      image: '/feature3.png',
      title: 'Integrate Seamlessly with Stripe and PayPal',
      description:
        'Connect your favorite payment platforms and streamline your billing process.',
      linkText: 'Integrate'
    }
  ];

  return (
    <section
      style={{
        alignSelf: 'stretch',
        padding: '112px 64px',
        background: 'var(--Color-White)',
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '80px'
      }}
    >
      <h2
        style={{
          maxWidth: '768px',
          margin: 0,
          color: 'var(--Color-Black)',
          fontSize: '48px',
          fontWeight: 600,
          lineHeight: '57.6px'
        }}
      >
        Effortlessly Track and Organize Your Recurring Payments in One Dashboard
      </h2>

      <div style={{ display: 'flex', gap: '48px', width: '100%' }}>
        {features.map(({ image, title, description, linkText }) => (
          <div
            key={title}
            style={{
              flex: '1 1 0',
              display: 'inline-flex',
              flexDirection: 'column',
              gap: '32px'
            }}
          >
            <img
              src={image}
              alt={title}
              style={{
                width: '100%',
                height: '240px',
                borderRadius: '8px',
                objectFit: 'cover'
              }}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '32px'
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: 'var(--Color-Black)',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '33.6px',
                  width: '100%'
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: 'rgba(0, 0, 0, 0.90)',
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                {description}
              </p>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 500
                }}
              >
                <span>{linkText}</span>
                <span style={{ fontSize: '24px', lineHeight: 1 }}>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
