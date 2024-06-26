import React from 'react'

export default function Honda() {
  return (
    <>
      <nav className="navbar navbar-light bg-primary">
        <a className="navbar-brand" href="#">
          Trips explore
        </a>
        <div>
          <button className="pesanan">
            <b>Kelola Pesanan</b>
          </button>
        </div>
      </nav>
      <div className="logo-bmw">
        <img
          src="/img/logo honda.png"
          alt=""
          style={{
            maxWidth: 200,
            height: "auto",
            marginLeft: 650,
            marginTop: 50,
          }}
        />
      </div>
      <div className="container mt-5">
        <form>
          <div className="card mb-3" style={{ width: 1000 }}>
            <div className="row no-gutters">
              <div className="col-md-3">
                <img
                  src="/img/Honda Civic Type R.png"
                  className="img-fluid"
                  alt="Honda Civic Type R"
                  style={{ marginTop: 100, marginLeft: 20 }}
                />
              </div>
              <div className="col-md-9 ml-auto">
                <div className="card-body">
                  <h2 className="card-title">Honda Civic Type R</h2>
                  <p className="card-text">
                    Mobil Honda Civic Type R adalah pilihan yang sempurna untuk
                    menikmati perjalanan dan adu gengsi di kota. Dengan
                    kapasitas 2 kursi, dan memiliki fitur modern.
                  </p>
                  <p>
                    <strong>Lokasi:</strong> Condong Catur
                  </p>
                  <p>
                    <strong>Jarak dari pusat:</strong> 3,2 km
                  </p>
                  <p>
                    <strong>Harga untuk 1 hari:</strong> Rp100.000.000
                  </p>
                  <button type="submit" className="btn btn-primary">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="container mt-5">
        <form>
          <div className="card mb-3" style={{ width: 1000 }}>
            <div className="row no-gutters">
              <div className="col-md-3">
                <img
                  src="/img/HR-V LX.png"
                  className="img-fluid"
                  alt="HR-V LX"
                  style={{ marginTop: 100, width: 200, marginLeft: 30 }}
                />
              </div>
              <div className="col-md-9 ml-auto">
                <div className="card-body">
                  <h2 className="card-title">HR-V LX</h2>
                  <p className="card-text">
                    Mobil HR-V LX adalah pilihan yang sempurna untuk menikmati
                    perjalanan dan adu gengsi di kota. Dengan kapasitas 4 kursi,
                    dan memiliki fitur modern.
                  </p>
                  <p>
                    <strong>Lokasi:</strong> Condong Catur
                  </p>
                  <p>
                    <strong>Jarak dari pusat:</strong> 3,2 km
                  </p>
                  <p>
                    <strong>Harga untuk 1 hari:</strong> Rp80.000.000
                  </p>
                  <button type="submit" className="btn btn-primary">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="container mt-5">
        <form>
          <div className="card mb-3" style={{ width: 1000 }}>
            <div className="row no-gutters">
              <div className="col-md-3">
                <img
                  src="/img/Honda Brio.png"
                  className="img-fluid"
                  alt="BMW M4"
                  style={{ marginTop: 100, width: 300 }}
                />
              </div>
              <div className="col-md-9 ml-auto">
                <div className="card-body">
                  <h2 className="card-title">Honda Brio</h2>
                  <p className="card-text">
                    Mobil Honda Brio adalah pilihan yang sempurna untuk
                    menikmati perjalanan dan adu gengsi di kota. Dengan
                    kapasitas 2 kursi, dan memiliki fitur modern.
                  </p>
                  <p>
                    <strong>Lokasi:</strong> Condong Catur
                  </p>
                  <p>
                    <strong>Jarak dari pusat:</strong> 3,2 km
                  </p>
                  <p>
                    <strong>Harga untuk 1 hari:</strong> Rp300.000
                  </p>
                  <button type="submit" className="btn btn-primary">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <footer className="bg-primary text-light text-center py-3">
        <p>© 2024 Ezy.com. All rights reserved.</p>
      </footer>
    </>
  );
}
