import React from 'react';
import '../css/aboutpage.css'; // Import file CSS untuk styling

const AboutPage = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-title">Selamat Datang di tripsexplore</h1>
                <p className="about-description">
                    Jelajahi destinasi wisata paling menakjubkan di dunia bersama tripsexplore. Temukan pemandangan memukau, keajaiban budaya, dan pengalaman tak terlupakan dari berbagai belahan dunia.
                </p>
            </div>
            <div className="about-section">
                <div className="about-info">
                    <h2 className="about-subtitle">Misi Kami</h2>
                    <p className="about-text">
                        tripsexplore hadir dengan misi menginspirasi dan memberdayakan para pelancong untuk menemukan keindahan tersembunyi dunia. Kami membagikan cerita yang merayakan keberagaman budaya, keajaiban alam, dan warisan budaya yang tak ternilai.
                    </p>
                </div>
                <div className="about-info">
                    <h2 className="about-subtitle">Apa yang Kami Tawarkan</h2>
                    <p className="about-text">
                        Nikmati panduan wisata terkurasi kami, fotografi menakjubkan, dan tips perjalanan dari para ahli. Apapun yang Anda cari—petualangan, relaksasi, atau eksplorasi budaya—kami menyediakan segalanya untuk merencanakan perjalanan Anda dengan percaya diri.
                    </p>
                </div>
                <div className="about-info">
                    <h2 className="about-subtitle">Bergabung dengan Komunitas Kami</h2>
                    <p className="about-text">
                        Bergabunglah dengan komunitas global para penjelajah, fotografer, dan pecinta petualangan. Ikuti perjalanan kami dalam menemukan destinasi terindah di dunia, dan bagikan pengalaman serta tips perjalanan Anda bersama kami.
                    </p>
                </div>
                <div className="about-info">
                    <h2 className="about-subtitle">Kontak dan Info Lebih Lanjut</h2>
                    <p className="about-text">
                        Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut atau kemitraan. Kami siap menjawab pertanyaan Anda dan berbagi inspirasi perjalanan yang tak terlupakan.
                    </p>
                </div>
            </div>
            <div className="about-footer">
                <p className="about-footer-text">
                    Biarkan tripsexplore menjadi panduan Anda untuk pengalaman wisata yang luar biasa. Mulai petualangan Anda hari ini!
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
