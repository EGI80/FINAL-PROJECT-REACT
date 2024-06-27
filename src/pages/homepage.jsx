import React from "react";
import "../css/homepage.css";
import { Link } from "react-router-dom";

export default function Homepage() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  window.onscroll = function () {
    toggleScrollToTopButton();
  };

  function toggleScrollToTopButton() {
    var scrollToTopButton = document.querySelector(".scroll-to-top-btn");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  }

  const slider = document.querySelector(".card-slider");
  const cards = document.querySelectorAll(".card");
  let currentCard = 0;

  function nextCard() {
    slider.dataset.active = currentCard;
    currentCard = (currentCard + 1) % cards.length;
    cards.forEach((card) => {
      card.classList.remove("active");
    });
    cards[currentCard].classList.add("active");
  }

  setInterval(nextCard, 5000);
  return (
    <div>
      <>
        <div className="jumbotron jumbotron-lg" id="jumbo8">
          <p className="display-4 font-weight-bold text-white">Pesan tiket penerbangan</p>
          <h3 className="display-5">situs lain sederhadan tidak dapat menemukan.</h3>
          <a href="/pembelian" class="btn btn-primary">Pesan sekarang</a>

        </div>
       
        <section>
          <div className="container mb-4">
            <a href="">trips explore.com</a>
            <a href="">Penerbangan Murah </a>
          </div>
          <section>
            <div className="card-container">
              <div className="card-deck ">
                <div className="card border-0">
                  <img
                    src="/img/plane.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Satu pencarian, semua penerbangan
                    </h5>
                    <p className="card-text">
                      trips explore menemukan penerbangan murah yang tidak dapat
                      dilihat oleh situs lain
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
                <div className="card border-0">
                  <img
                    src="/img/credit.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Pemesanan yang aman dan mudah
                    </h5>
                    <p className="card-text">
                      Kami menerima sebagian besar metode pembayaran dan
                      menjamin tingkat keamanan tertinggi
                    </p>
                    <p className="card-text">
                      <small className="text-muted" />
                    </p>
                  </div>
                </div>
                <div className="card border-0">
                  <img
                    src="/img/teamwork.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Dipercaya oleh jutaan orang
                    </h5>
                    <p className="card-text">
                      Bergabunglah dengan lebih dari 10 juta penumpang setiap
                      tahun yang memesan dengan mudah
                    </p>
                    <p className="card-text">
                      <small className="text-muted" />
                    </p>
                  </div>
                </div>
                <div className="card border-0">
                  <img
                    src="/img/plane-ticket.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      harga terjangkau{" "}
                    </h5>
                    <p className="card-text">
                      kami menyediakan maskapai termurah dengan fasilitas
                      terbaik
                    </p>
                    <p className="card-text">
                      <small className="text-muted" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <h4 className="font-weight-bold mb-3">
                penerbangan nasional terpopuler
              </h4>
              <div className="jumbotron bg-white">
                <div className="grub">
                  <div className="div">
                    <div className="card-group mb-3 border-0">
                      <div className="card border-0 rounded-circle" id="gambar">
                        <a href="URL_tujuan">
                          <img
                            src="/img/garuda.jpg"
                            className="card-img-top border-0 rounded-circle"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="card border-0 rounded-circle" id="gambar">
                        <a href="URL_tujuan">
                          <img
                            src="/img/transnusa.jpg"
                            className="card-img-top boder rounded-circle"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="card border-0 rounded-circle" id="gambar">
                        <a href="URL_tujuan">
                          <img
                            src="/img/indonesia.jpg"
                            className="card-img-top boder rounded-circle"
                            alt="..."
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="card-group">
                      <div className="card border-0 rounded-circle" id="gambar">
                        <a href="URL_tujuan">
                          <img
                            src="/img/mandala.jpg"
                            className="card-img-top boder rounded-circle"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="card border-0 rounded-circle" id="gambar">
                        <a href="https://www.lionair.co.id/hubungi-kami">
                          <img
                            src="/img/lion.jpg"
                            className="card-img-top boder rounded-circle"
                            alt="..."
                          />
                        </a>
                      </div>
                      <div className="card border-0 rounded-circle" id="gambar">
                        <a href="URL_tujuan">
                          <img
                            src="/img/xpress.png"
                            className="card-img-top boder rounded-circle"
                            alt="..."
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tutor">
              <ul className="list-group mt-3">
                <li className="list-group-item">
                  <h4 className="font-weight-bold" id="cara-memesan">
                    Cara memesan penerbangan murah
                  </h4>
                  <p>
                    trips explore.com adalah cara terbaik untuk mencari,
                    menemukan, dan memesan penerbangan murah. Kami membuat
                    diskon, penawaran penerbangan, dan tarif udara murah mudah
                    ditemukan.
                  </p>
                  <p>
                    Untuk menemukan penerbangan murah secara online, Kiwi.com
                    adalah cara terbaik dan termudah untuk mendapatkan diskon
                    pada rute satu arah, pulang pergi, internasional, dan
                    multi-kota. Panduan ini menjelaskan bagaimana trips
                    explore.com bekerja, dan bagaimana kami dapat membantu Anda
                    mencari dan memesan penerbangan termurah yang tersedia.
                  </p>
                  <h4 className="font-weight-bold" id="tips">
                    Tips untuk memesan penerbangan murah di trips explore.com
                  </h4>
                  <h5 className="font-weight-bold" id="waktu">
                    Waktu dan hari terbaik untuk memesan penerbangan
                  </h5>
                  <p>
                    Mudah untuk menemukan waktu dan hari terbaik untuk terbang
                    menggunakan mesin pencari yang fleksibel dari trips
                    explore.com Anda dapat memasukkan tanggal yang tepat yang
                    Anda inginkan untuk bepergian, atau Anda dapat memilih
                    rentang tanggal untuk menemukan opsi termurah
                  </p>
                  <p>
                    Ketika Anda mencari, Anda akan melihat harga terendah yang
                    tersedia pada setiap tanggal, sehingga Anda dapat memilih
                    yang paling cocok untuk Anda, atau filter untuk menemukan
                    opsi tercepat atau terbaik. Anda juga dapat memfilter
                    penerbangan berdasarkan harga maksimum, atau memilih rentang
                    harga.
                  </p>
                  <h4 className="font-weight-bold">
                    Temukan penerbangan murah tanpa tujuan
                  </h4>
                  <p>
                    Jika Anda ingin menemukan penerbangan termurah ke mana saja,
                    Anda juga dapat melakukannya di Kiwi.com. Jika Anda tidak
                    memiliki tujuan tertentu, cukup pilih lokasi keberangkatan
                    Anda dan pilih ’Ke mana saja’ sebagai tujuan Anda. Ini akan
                    menunjukkan rute termurah dari lokasi Anda.
                  </p>
                  <p>
                    Anda juga dapat menggunakan pencarian peta kami untuk
                    menemukan tujuan murah: perbesar atau pindahkan peta, dan
                    tujuan dan harga akan muncul. Anda dapat melihat penawaran
                    terbaik yang dihighlight dengan warna hijau, jadi Anda tahu
                    Anda mendapatkan harga yang bagus.
                  </p>
                </li>
              </ul>
            </div>
          </section>
         
          <button
            className="scroll-to-top-btn btn-primary rounded-pill"
            onClick={() => scrollToTop()}
          >
            <i className="fas fa-arrow-up" />
          </button>
        </section>
      </>
    </div>
  );
}