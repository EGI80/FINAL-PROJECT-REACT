import React from 'react'
import '../css/penawaran.css'

export default function Penawaranpages() {
  return (
    <>
      <div className="deals">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Trips Explore
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              </ul>
            </div>
          </div>
        </nav>
        <div className="top ">
          <div className="w-2 title ">
            <h1>Flight deals from jakarta, indonesia</h1>
          </div>
          <div className="shadow-sm p-3 mb-5 bg-white rounded form card border-dark">
            <h3>Explore cheap travel deals !</h3>
            <p>We'll show you deals from your preferred departure city.</p>
            <div className="d-flex ">
              <div className="d-flex m-2  shadow-sm p-3  bg-white rounded btn btn-outline-dark ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-calendar-date-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2" />
                  <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a13 13 0 0 1 1.313-.805h.632z" />
                </svg>
                <p className="m-2"> Dates</p>
              </div>
              <div className="d-flex m-2 shadow-sm p-3  bg-white rounded btn btn-outline-dark ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-currency-dollar"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                </svg>
                <p className="m-2 "> Price </p>
              </div>
              <div className="d-flex  m-2 shadow-sm p-3  bg-white rounded btn btn-outline-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-arrow-left-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                  />
                </svg>
                <p className="m-2"> Return </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="mid">
        <div className="p-3 mb-3">
          <div className="card-header">
            <img
              className="card-img-top"
              src="/img/1Tanjunlesun.jpg"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <div className="shadow p-3 bg-white rounded">
              <h2 className="card-title"> Tanjung Lesung </h2>
              <h2 href="#" className="btn btn-primary">
                1,988,566
              </h2>
            </div>
          </div>
        </div>
        <div className="p-3 mb-3 ">
          <div className="card-header">
            <img
              className="card-img-top"
              src="/img/1Rajaampat.jpeg"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <div className="shadow p-3 bg-white rounded ">
              <h2 className="card-title">Raja Ampat</h2>
              <h2 href="#" className="btn btn-primary">
                4,234,567
              </h2>
            </div>
          </div>
        </div>
        <div className="p-3 mb-3">
          <div className="card-header">
            <img
              className="card-img-top"
              src="/img/1Jogja.jpg"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <div className="shadow p-3 bg-white rounded">
              <h2 className="card-title">Yogyakarta</h2>
              <h2 href="#" className="btn btn-primary">
                1,234,567
              </h2>
            </div>
          </div>
        </div>
        <div className="p-3 mb-3">
          <div className="card-header">
            <img
              className="card-img-top"
              src="/img/1Lampung.jpg"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <div className="shadow p-3 bg-white rounded">
              <h2 className="card-title">Bandar Lampung</h2>
              <h2 href="#" className="btn btn-primary">
                2,234,567
              </h2>
            </div>
          </div>
        </div>
        <div className="p-3 mb-3">
          <div className="card-header">
            <img
              className="card-img-top"
              src="/img/1Ntb.jpeg"
              alt="Card image cap"
            />
          </div>
          <div className="card-body ">
            <div className="shadow p-3 bg-white rounded ">
              <h2 className="card-title">Nusa Tenggara B</h2>
              <h2 href="#" className="btn btn-primary">
                3,625,890
              </h2>
            </div>
          </div>
        </div>
        <div className="p-3 mb-3">
          <div className="card-header">
            <img
              className="card-img-top"
              src="/img/1Padang.jpg"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <div className="shadow p-3 bg-white rounded">
              <h2 className="card-title">Kota Padang</h2>
              <h2 href="#" className="btn btn-primary">
                3,234,567
              </h2>
            </div>
          </div>
        </div>
        <div className="p-3 mb-3">
          <div className="card-header">
            <img
              className="card-img-top"
              src="/img/1Pontiank.jpg"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <div className="shadow p-3 bg-white rounded">
              <h2 className="card-title">Kota Pontianak</h2>
              <h2 href="#" className="btn btn-primary">
                4,234,567
              </h2>
            </div>
          </div>
        </div>
        <div className="p-3 mb-3">
          <div className="card-header">
            <img
              className="card-img-top"
              src="/img/1Kalteng.jpeg"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <div className="shadow p-3 bg-white rounded">
              <h2 className="card-title">Danau Biru Paring Tali</h2>
              <h2 href="#" className="btn btn-primary">
                4,234,567
              </h2>
            </div>
          </div>
        </div>
        <div className="p-3 mb-3">
          <div className="card-header">
            <img
              className="card-img-top"
              src="/img/1Bandung.jpg"
              alt="Card image cap"
            />
          </div>
          <div className="card-body">
            <div className="shadow p-3 bg-white rounded">
              <h2 className="card-title">Kota bandung</h2>
              <h2 href="#" className="btn btn-primary">
                1,234,567
              </h2>
            </div>
          </div>
        </div>
        <div className="p-3 mb-3">
          <div className="card-header">
            <img src="/img/1Kl.jpg" alt="" />
          </div>
          <div className="card-body">
            <div className="shadow p-3 bg-white rounded">
              <h2 className="card-title">kuala Lumpur</h2>
              <h2 href="#" className="btn btn-primary">
                1,234,567
              </h2>
            </div>
          </div>
        </div>
        <div className="p-3 mb-3">
          <div className="card-header">
            <img src="/img/1Chong.jpg" alt="" />
          </div>
          <div className="card-body">
            <div className="shadow p-3 bg-white rounded">
              <h2 className="card-title">Chongqing</h2>
              <h2 href="#" className="btn btn-primary">
                7,234,567
              </h2>
            </div>
          </div>
        </div>
        <div className="p-3 mb-3">
          <div className="card-header">
            <img src="/img/1Shang.jpg" alt="" />
          </div>
          <div className="card-body">
            <div className="shadow p-3 bg-white rounded">
              <h2 className="card-title">Shanghai</h2>
              <h2 href="#" className="btn btn-primary">
                7,234,567
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom mx-5 ">
        <div className="w-2 title">
          <h1>Looking for a specific place to visit?</h1>
        </div>
        <div className="shadow p-3 mb-5 bg-body rounded card border-dark">
          <div className="kata d-flex">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle btn btn-dark "
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Return
              </button>
              <ul
                className="dropdown-menu "
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    one-way
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Multi-City
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Nomad
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle btn btn-dark"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Economy
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Premium Economy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Business
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    First Class
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom d-flex">
            <input type="text" placeholder="FROM" />
            <input type="text" placeholder="TO" />
            <input type="text" placeholder="Derparature" />
            <input type="text" placeholder="Return" />
          </div>
        </div>
      </div>
      <div className="before-footer mx-5">
        <div className="w-2 title">
          <h2>Popular flights from Jakarta, Indonesia</h2>
        </div>
        <div className="duo">
          <div className="d-flex shadow p-3 mb-5 bg-body rounded gap-2 align-items-center btn btn-light border-dark">
            <div className="card-header">
              <img src="/img/1Tanjunlesun.jpg" alt="" />
            </div>
            <div className=" kata">
              <span> Jakarta</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-left-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                />
              </svg>
              <span> Tanjung Lesung</span>
            </div>
          </div>
          <div className="d-flex shadow p-3 mb-5 bg-body rounded gap-2 align-items-center btn btn-light border-dark">
            <div className="card-header">
              <img src="/img/2Rajaampat.jpg" alt="" />
            </div>
            <div className=" kata">
              <span> Jakarta</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-left-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                />
              </svg>
              <span> Raja Ampat </span>
            </div>
          </div>
          <div className="d-flex shadow p-3 mb-5 bg-body rounded gap-2 align-items-center btn btn-light border-dark">
            <div className="card-header">
              <img src="/img/1Jogja.jpg" alt="" />
            </div>
            <div className=" kata">
              <span> Jakarta</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-left-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                />
              </svg>
              <span> Yogyakarta </span>
            </div>
          </div>
          <div className="d-flex shadow p-3 mb-5 bg-body rounded gap-2 align-items-center btn btn-light border-dark">
            <div className="card-header">
              <img src="/img/1lampung.jpg" alt="" />
            </div>
            <div className=" kata">
              <span> Jakarta</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-left-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                />
              </svg>
              <span> Bandar Lampung</span>
            </div>
          </div>
          <div className="d-flex shadow p-3 mb-5 bg-body rounded gap-2 align-items-center btn btn-light border-dark">
            <div className="card-header">
              <img src="/img/1ntb.jpeg" alt="" />
            </div>
            <div className=" kata">
              <span> Jakarta</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-left-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                />
              </svg>
              <span> Tenggara Barat</span>
            </div>
          </div>
          <div className="d-flex shadow p-3 mb-5 bg-body rounded gap-2 align-items-center btn btn-light border-dark">
            <div className="card-header">
              <img src="/img/1Padang.jpg" alt="" />
            </div>
            <div className=" kata">
              <span> Jakarta</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-left-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                />
              </svg>
              <span>Padang</span>
            </div>
          </div>
          <div className="d-flex shadow p-3 mb-5 bg-body rounded gap-2 align-items-center btn btn-light border-dark">
            <div className="card-header">
              <img src="/img/1Pontiank.jpg" alt="" />
            </div>
            <div className=" kata">
              <span> Jakarta</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-left-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                />
              </svg>
              <span> Pontianak</span>
            </div>
          </div>
          <div className="d-flex shadow p-3 mb-5 bg-body rounded gap-2 align-items-center btn btn-light border-dark">
            <div className="card-header">
              <img src="/img/1Kalteng.jpeg" alt="" />
            </div>
            <div className=" kata">
              <span> Jakarta</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-left-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                />
              </svg>
              <span> Paring Tali </span>
            </div>
          </div>
          <div className="d-flex shadow p-3 mb-5 bg-body rounded gap-2 align-items-center btn btn-light border-dark">
            <div className="card-header">
              <img src="/img/1Bandung.jpg" alt="" />
            </div>
            <div className=" kata">
              <span> Jakarta</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-left-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
                />
              </svg>
              <span> Bandung</span>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>
              Follow us on social networks for the latest info and promotions:
            </span>
          </div>
          <div>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-facebook" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-google" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-github" />
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="bi bi-gem me-3" />
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
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="bi bi-house me-3" />
                  Daerah Istimewa Yogyakarta 55584
                </p>
                <p>
                  <i className="bi bi-envelope me-3" />
                  hamkananda@students.amikom.ac.id
                </p>
                <p>
                  <i className="bi bi-phone me-3" /> +62 1234 1234
                </p>
                <p>
                  <i className="bi bi-printer me-3" /> +62 1234 1234
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Hak Cipta Dilindungi
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            https://tripsexplore.com/
          </a>
        </div>
      </footer>
    </>
  );
}
