import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        
        {/* LEFT CONTENT */}
        <div className="col-md-6">
          <h2 className="fw-normal mb-3">Unbeatable pricing</h2>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            See pricing →
          </a>
        </div>

        {/* RIGHT CARDS */}
        <div className="col-md-6">
          <div className="row text-center">

            <div className="col-6 border-start">
              <h1 className="fw-normal">₹0</h1>
              <p className="text-muted">
                Free equity delivery and<br />
                direct mutual funds
              </p>
            </div>

            <div className="col-6 border-start">
              <h1 className="fw-normal">₹20</h1>
              <p className="text-muted">
                Intraday and<br />
                F&amp;O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
