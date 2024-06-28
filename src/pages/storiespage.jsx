import React from 'react';
import '../css/storiespage.css';

const StoriesPage = () => {
    return (
        <div className="stories-container">
            <h1 className="stories-title">Stories of Beautiful Destinations</h1>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="custom-card">
                        <img className="card-img-top" src="/img/gunungkidul.jpg" alt="Gunung Kidul" />
                        <div className="card-body">
                            <h5 className="card-title">Gunung Kidul, Yogyakarta</h5>
                            <p className="card-text">
                                Gunung Kidul adalah destinasi wisata yang terkenal dengan pantainya yang indah dan gua-guanya yang menakjubkan.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="custom-card">
                        <img className="card-img-top" src="/img/bali.jpg" alt="Bali" />
                        <div className="card-body">
                            <h5 className="card-title">Bali</h5>
                            <p className="card-text">
                                Bali adalah pulau surgawi yang dikenal dengan budayanya yang kaya, pantainya yang eksotis, dan pura-puranya yang megah.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="custom-card">
                        <img className="card-img-top" src="/img/pontianak.jpg" alt="Pontianak" />
                        <div className="card-body">
                            <h5 className="card-title">Pontianak, Kalimantan Barat</h5>
                            <p className="card-text">
                                Pontianak adalah kota seribu sungai yang terkenal dengan jembatan khasnya dan keindahan alamnya yang memikat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="custom-card">
                        <img className="card-img-top" src="/img/lombok.jpg" alt="Lombok" />
                        <div className="card-body">
                            <h5 className="card-title">Lombok, Nusa Tenggara Barat</h5>
                            <p className="card-text">
                                Lombok adalah pulau yang memesona dengan pantainya yang tenang, gunung berapi yang menakjubkan, dan kebudayaan Sasak yang unik.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="custom-card">
                        <img className="card-img-top" src="/img/lampung.jpg" alt="Lampung" />
                        <div className="card-body">
                            <h5 className="card-title">Lampung</h5>
                            <p className="card-text">
                                Lampung adalah provinsi di pulau Sumatera yang terkenal dengan pantai-pantai indahnya dan kekayaan budayanya.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="custom-card">
                        <img className="card-img-top" src="/img/bandung.jpg" alt="Bandung" />
                        <div className="card-body">
                            <h5 className="card-title">Bandung, Jawa Barat</h5>
                            <p className="card-text">
                                Bandung adalah kota kreatif dengan arsitektur klasik dan modern yang menarik serta kuliner yang khas dan beragam.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="custom-card">
                        <img className="card-img-top" src="/img/rajaampat.jpg" alt="Raja Ampat" />
                        <div className="card-body">
                            <h5 className="card-title">Raja Ampat, Papua Barat</h5>
                            <p className="card-text">
                                Raja Ampat adalah surga bawah laut yang terkenal dengan keindahan terumbu karangnya dan keanekaragaman hayati lautnya.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="custom-card">
                        <img className="card-img-top" src="/img/yogyakarta.jpg" alt="Yogyakarta" />
                        <div className="card-body">
                            <h5 className="card-title">Yogyakarta</h5>
                            <p className="card-text">
                                Yogyakarta adalah pusat kebudayaan Jawa dengan keratonnya yang megah, candi-candi bersejarah, dan seni pertunjukan yang kaya.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="custom-card">
                        <img className="card-img-top" src="/img/jakarta.jpeg" alt="Jakarta" />
                        <div className="card-body">
                            <h5 className="card-title">Jakarta</h5>
                            <p className="card-text">
                                Jakarta adalah ibu kota Indonesia yang modern dengan gedung pencakar langit, pusat perbelanjaan, dan kehidupan malam yang ramai.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoriesPage;
