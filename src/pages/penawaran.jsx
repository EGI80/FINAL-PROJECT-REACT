import React from 'react';
import '../css/penawaran.css'
const Penawaran = () => {
    return (
        <div>
            <Navbar />
            <div className="deals">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Trips Explore</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Cars</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Deals</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
                                </li>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-date-fill" viewBox="0 0 16 16">
                                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2"/>
                                    <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a13 13 0 0 1 1.313-.805h.632z"/>
                                </svg>
                                <p className="m-2"> Dates</p>
                            </div>
                            <div className="d-flex m-2 shadow-sm p-3  bg-white rounded btn btn-outline-dark ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
                                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
                                </svg>
                                <p className="m-2 "> Price </p>
                            </div> 
                            <div className="d-flex  m-2 shadow-sm p-3  bg-white rounded btn btn-outline-dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
                                </svg>
                                <p className="m-2"> Return </p>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="mid">
                    <div className="p-3 mb-3">
                        <div className="card-header">
                            <img className="card-img-top" src="./img/1Tanjunlesun.jpg" alt="Card image cap" />
                        </div>
                        <div className="card-body">
                            <div className="shadow p-3 bg-white rounded">
                                <h2 className="card-title"> Tanjung Lesung </h2>
                                <h2 href="#" className="btn btn-primary">1,988,566</h2>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 mb-3 ">
                        <div className="card-header">
                            <img className="card-img-top" src="./img/1Rajaampat.jpeg" alt="Card image cap" />
                        </div>
                        <div className="card-body">
                            <div className="shadow p-3 bg-white rounded ">
                                <h2 className="card-title">Raja Ampat</h2>
                                <h2 href="#" className="btn btn-primary">4,234,567</h2>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 mb-3">
                        <div className="card-header">
                            <img className="card-img-top" src="./img/1Jogja.jpg" alt="Card image cap" />
                        </div>
                        <div className="card-body">
                            <div className="shadow p-3 bg-white rounded">
                                <h2 className="card-title">Jogja</h2>
                                <h2 href="#" className="btn btn-primary">1,200,567</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="card-group">
                        <div className="card">
                            <img className="card-img-top" src="./img/Jogja.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h2 className="card-title">Jogja</h2>
                                <h2 className="btn btn-primary">1,200,567</h2>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="./img/1Tanjunlesun.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h2 className="card-title">Tanjung Lesung</h2>
                                <h2 className="btn btn-primary">1,988,566</h2>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="./img/1Rajaampat.jpeg" alt="Card image cap" />
                            <div className="card-body">
                                <h2 className="card-title">Raja Ampat</h2>
                                <h2 className="btn btn-primary">4,234,567</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="before-footer">
                    <div className="card text-center">
                        <div className="card-header">
                            Travel destinations are shown on a computer screen
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Explorer Togo</h5>
                            <p className="card-text">Journey with the best deals on your departure of the travel tour</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                        <div className="card-footer text-muted">
                            2 days to see and enjoy
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Penawaran;
