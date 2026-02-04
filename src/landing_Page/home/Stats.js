import React from 'react';

function Stats() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

       
        <div className="col-md-6">
          <h2 className="mb-4">Trust with confidence</h2>

          <h5>Customer-first always</h5>
          <p>
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+
            lakh crores worth of equity investments.
          </p>

          <h5>No spam or gimmicks</h5>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h5>The Zerodha universe</h5>
          <p>
            Not just an app, but a whole ecosystem. Our investments in
            30+ fintech startups offer you tailored services specific to your needs.
          </p>

          <h5>Do better with money</h5>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just facilitate
            transactions, but actively help you do better with your money.
          </p>

          <div className="mt-3">
            <a href="/" className="me-4 text-primary">
              Explore our products →
            </a>
            <a href="/" className="text-primary">
              Try Kite
            </a>
          </div>
        </div>

        
        <div className="col-md-6 text-center">
          <img
  src="media/images/ecosystem.png"
  style={{ width: "75%" }}
  alt="ecosystem"
/>


        </div>

      </div>
    </div>
  );
}

export default Stats;
