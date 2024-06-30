// src/pages/Penawaran.jsx
import React from 'react';
import '../css/penawaran.css';

const Penawaran = () => {
    const penawaran = [
        {
            id: 1,
            title: 'Penawaran Spesial Bali',
            description: 'Nikmati liburan di Bali dengan diskon 20%',
            image: 'img/bali.jpg',
        },
        {
            id: 2,
            title: 'Promo Gunung Kidul',
            description: 'Diskon 15% untuk liburan ke Gunung Kidul',
            image: 'img/gunungkidul.jpg',
        },
        {
            id: 3,
            title: 'Eksplorasi Yogyakarta',
            description: 'Diskon 10% untuk perjalanan ke Yogyakarta',
            image: 'img/yogyakarta.jpg',
        },
        {
            id: 4,
            title: 'Liburan Mewah di Lombok',
            description: 'Nikmati Lombok dengan diskon 25%',
            image: 'img/lombok.jpg',
        },
        {
            id: 5,
            title: 'Petualangan di Raja Ampat',
            description: 'Diskon 30% untuk petualangan di Raja Ampat',
            image: 'img/raajaampat.jpg',
        },
        {
            id: 6,
            title: 'Pesona Tanjung Lesung',
            description: 'Diskon 20% untuk perjalanan ke Tanjung Lesung',
            image: 'img/1Tanjunlesun.jpg',
        },
        {
            id: 7,
            title: 'Bandar Lampung',
            description: 'Diskon 15% untuk liburan di Bandar Lampung',
            image: 'img/1lampung.jpg',
        },
        {
            id: 8,
            title: 'Danau Biru Paring Tali',
            description: 'Diskon 25% untuk wisata di Danau Biru Paring Tali',
            image: 'img/1Kalteng.jpeg',
        },
    ];

    return (
        <div className="penawaran-container">
            <h1>Penawaran Spesial</h1>
            <div className="penawaran-grid">
                {penawaran.map((item) => (
                    <div key={item.id} className="penawaran-card">
                        <img src={item.image} alt={item.title} className="penawaran-image"/>
                        <div className="penawaran-content">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <button className="penawaran-button">Lihat Detail</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Penawaran;
