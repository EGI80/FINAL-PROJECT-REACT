import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted mt-5 pt-4">
      <section>
        <div className="container text-center text-md-start">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="bi bi-gem me-3"></i>
                Trips Explore
              </h6>
              <p>
                Discover new adventures and create unforgettable memories with
                our travel services. Explore the world with comfort and the
                best prices.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <span className="text-reset">HTML5</span>
              </p>
              <p>
                <span className="text-reset">CSS</span>
              </p>
              <p>
                <span className="text-reset">REACT</span>
              </p>
              <p>
                <span className="text-reset">MYSQL</span>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <span className="text-reset">Pricing</span>
              </p>
              <p>
                <span className="text-reset">Settings</span>
              </p>
              <p>
                <span className="text-reset">Orders</span>
              </p>
              <p>
                <span className="text-reset">Help</span>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="bi bi-house me-3"></i>
                Daerah Istimewa Yogyakarta 55584
              </p>
              <p>
                <i className="bi bi-phone me-3"></i> +62 1234 1234
              </p>
              <p>
                <i className="bi bi-printer me-3"></i> +62 1234 1234
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Hak Cipta Dilindungi{" "}
        <span className="fw-bold">https://tripsexplore.com/</span>
      </div>
    </footer>
  );
};

export default Footer;
