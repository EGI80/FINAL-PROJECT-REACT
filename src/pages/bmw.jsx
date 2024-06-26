import React from 'react'

function Bmw() {
  return (
    <>
      <nav className="navbar navbar-light bg-primary">
        <a className="navbar-brand" href="#">
          trips explore.com
        </a>
        <div>
          <button className="pesanan">
            <b>Kelola Pesanan</b>
          </button>
        </div>
      </nav>
      <div className="logo-bmw">
        <img
          src="/img/logo lamborghini.png"
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
                  src="/img/Lamborghini-Aventador-PNG.png"
                  className="img-fluid"
                  alt="Lamborghini-Aventador"
                  style={{ marginTop: 100, marginLeft: 20 }}
                />
              </div>
              <div className="col-md-9 ml-auto">
                <div className="card-body">
                  <h2 className="card-title">Lamborghini-Aventador</h2>
                  <p className="card-text">
                    Mobil Lamborghini-Aventador adalah pilihan yang sempurna
                    untuk menikmati perjalanan dan adu gengsi di kota. Dengan
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
                  src="/img/lamborghini gallardo.png"
                  className="img-fluid"
                  alt="lamborghini gallardo"
                  style={{ marginTop: 100, width: 200, marginLeft: 30 }}
                />
              </div>
              <div className="col-md-9 ml-auto">
                <div className="card-body">
                  <h2 className="card-title">lamborghini gallardo</h2>
                  <p className="card-text">
                    Mobil lamborghini gallardo adalah pilihan yang sempurna
                    untuk menikmati perjalanan dan adu gengsi di kota. Dengan
                    kapasitas 4 kursi, dan memiliki fitur modern.
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
                  src="/img/Lamborghini Veneno Roadster.png"
                  className="img-fluid"
                  alt="BMW M4"
                  style={{ marginTop: 100, width: 300 }}
                />
              </div>
              <div className="col-md-9 ml-auto">
                <div className="card-body">
                  <h2 className="card-title">Lamborghini Veneno Roadster</h2>
                  <p className="card-text">
                    Mobil Lamborghini Veneno Roadster adalah pilihan yang
                    sempurna untuk menikmati perjalanan dan adu gengsi di kota.
                    Dengan kapasitas 2 kursi, dan memiliki fitur modern.
                  </p>
                  <p>
                    <strong>Lokasi:</strong> Condong Catur
                  </p>
                  <p>
                    <strong>Jarak dari pusat:</strong> 3,2 km
                  </p>
                  <p>
                    <strong>Harga untuk 1 hari:</strong> Rp200.000.000
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

export default Bmw