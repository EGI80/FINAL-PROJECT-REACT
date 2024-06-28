import React from "react";
import "../css/mobilpage.css";

export default function Mobilepage() {
  function isiLokasiPenjemputan(destinasi) {
    var now = new Date();
    var tahun = now.getFullYear();
    var bulan = ("0" + (now.getMonth() + 1)).slice(-2);
    var tanggal = ("0" + now.getDate()).slice(-2);
    var jam = ("0" + now.getHours()).slice(-2);
    var menit = ("0" + now.getMinutes()).slice(-2);

    var waktuSekarang =
      tahun + "-" + bulan + "-" + tanggal + "T" + jam + ":" + menit;

    document.getElementById("lokasiPenjemputan").value = destinasi;
    document.getElementById("tanggalPenjemputan").value = waktuSekarang;
    document.getElementById("tanggalPengambilan").value = waktuSekarang;
  }
  function toggleFAQAnswer(answerId) {
    var answer = document.getElementById(answerId);
    if (answer.style.display === "none") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  }

  function toggleInfoAnswer(informasiId) {
    var informasi = document.getElementById(informasiId);
    if (informasi.style.display === "none") {
      informasi.style.display = "block";
    } else {
      informasi.style.display = "none";
    }
  }

  function redirectToCarPage() {
    var selectedCar = document.getElementById("mobilPilihan").value.toLowerCase();
    switch (selectedCar) {
      case "bmw":
        window.location.href = "/mobil/bmw";
        break;
      case "bugatti":
        window.location.href = "/mobil/bugatti";
        break;
      case "ferrari":
        window.location.href = "/mobil/ferrari";
        break;
      case "lamborghini":
        window.location.href = "/mobil/lamborghini";
        break;
      case "porsche":
        window.location.href = "/mobil/porsche";
        break;
      case "honda":
        window.location.href = "/mobil/honda";
        break;
      case "ford":
        window.location.href = "/mobil/ford";
        break;
      default:
        break;
    }
  }
  function submit(event) {
    event.preventDefault();
    redirectToCarPage();
  }

  return (
    <>
      
      <div className="logo-container">
        <img
          src="/img/logomobil.png"
          className="navbar-logo"
          alt="logomobil"
        />
      </div>
      <div className="jumbotronmobil bg-primary">
        <h1 className="display-4 font-weight-bold">
          <em>Rental Mobil - Cari &amp; Simpan</em>
        </h1>
        <lead className="font-weight-bold">
          ✔ Pembatalan gratis pada sebagian besar pemesanan ✔ 60.000+ lokasi
          <form
            // method="GET"
            // className="form"
            onSubmit={(event) => submit(event)}
          >
            <div className="row">
              <input
                type="search"
                className="custom-select col-md-3 styled-input"
                style={{
                  border: "2px solid black",
                  marginTop: 50,
                  borderRadius: "0.3rem",
                }}
                id="lokasiPenjemputan"
                required=""
                list="lokasiList"
              />
              <datalist id="lokasiList">
                <option value="Condong Catur"></option>
                <option value="Bantul"></option>
                <option value="Kulon Progo"></option>
                <option value="Kota Yogyakarta"></option>
                <option value="Gunung Kidul"></option>
                <option value="Kaliurang"></option>
                <option value="Wates"></option>
              </datalist>
              <div className="col-md-2">
                <input
                  type="search"
                  className="custom-select col-md-12 styled-input"
                  style={{
                    border: "2px solid black",
                    marginTop: 50,
                    borderRadius: "0.3rem",
                  }}
                  id="mobilPilihan"
                  required=""
                  list="mobilList"
                />
                <datalist id="mobilList">
                  <option value="BMW" />
                  <option value="Bugatti" />
                  <option value="Ferrari" />
                  <option value="Lamborghini" />
                  <option value="Porsche" />
                  <option value="Honda" />
                  <option value="Ford" />
                </datalist>
                <div className="mobil-pilihan">
                  <h7>
                    <em>Pilih Mobil :</em>
                  </h7>
                </div>
              </div>
              <div
                className="col-md-2 styled-input"
                style={{ marginLeft: "-15px" }}
              >
                <input
                  type="datetime-local"
                  className="form-control"
                  style={{ border: "2px solid black" }}
                  id="tanggalPenjemputan"
                  required=""
                />
              </div>
              <div
                className="col-md-2 styled-input"
                style={{ marginLeft: "-15px" }}
              >
                <input
                  type="datetime-local"
                  className="form-control"
                  style={{ border: "2px solid black" }}
                  id="tanggalPengambilan"
                  required=""
                />
              </div>
              <div className="col-md-2 styled-input" style={{ marginTop: 48 }}>
                <button
                  onSubmit={() => submit()}
                  className="btn btn-light"
                  style={{ border: "2px solid black" }}
                >
                  Cari
                </button>
              </div>
            </div>
          </form>
          <div className="lokasi-penjemputan">
            <h7>
              <em>Pilih Lokasi Penjemputan :</em>
            </h7>
          </div>
          <div className="waktu-penjemputan">
            <h7>
              <em>Waktu Penjemputan :</em>
            </h7>
          </div>
          <div className="waktu-pengambilan">
            <h7>
              <em>Waktu Pengambilan :</em>
            </h7>
          </div>
        </lead>
      </div>
      <div className="container ">
        <h1 className="text-left style=font-size: 16px;">
          Menggunakan Mobil Kualitas Tinggi Dengan Merek Terkenal Dan Mewah
        </h1>
      </div>
      <div className="logo-mobil container">
        <img src="/img/logo lamborghini.png" alt="logo Lamborghini" />
        <img src="/img/logo-bmw-.png" alt="logo Bmw" />
        <img src="/img/logo porsche.png" alt="logo Porsche" />
        <img src="/img/logo ford.png" alt="logo Ford" />
        <img src="/img/logo ferari.png" alt="logo Ferrari" />
        <img src="/img/logo honda.png" alt="logo Honda" />
        <img src="/img/logo-bugatti.png" alt="logo Bugatti" />
      </div>
      <div className="d-flex">
        <img src="/img/logo menulis.png" alt="" className="image" />
      </div>
      <div className="text-menulis">
        <h7>Penyewaan Mantap</h7>
        <p>
          Batalkan atau ubah sebagian besar <br />
          pemesanan secara gratis hingga 48 jam <br />
          sebelum pengambilan
        </p>
      </div>
      <div className="logo-pencarian">
        <img
          src="/img/logo pencarian.png"
          alt=""
          className="pencarian-image"
        />
      </div>
      <div className="text-pencarian">
        <h7>
          Tidak Ada Biaya <br />
          Tersembunyi
        </h7>
        <p>Ketahui Persis Apa Yang Anda Bayar</p>
      </div>
      <div className="logo-jaminan">
        <img src="/img/logo jaminan.png" alt="" className="jaminan-image" />
      </div>
      <div className="text-jaminan">
        <h7>Jaminan Kesesuaian Harga</h7>
        <p>
          Menemukan kesepakatan yang sama dengan harga lebih murah? Kami akan
          mencocokkan harganya
        </p>
      </div>
      <div className="row">
        <div className="destinasi">
          <h7>Destinasi Teratas di Indonesia</h7>
          <ul id="daftarDestinasi">
            <li>
              <a href="#" onClick={() => isiLokasiPenjemputan("Yogyakarta")}>
                Yogyakarta
              </a>
            </li>
            <li>
              <a href="#" onClick={() => isiLokasiPenjemputan("Jakarta")}>
                Jakarta
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => isiLokasiPenjemputan("Bali")}
              >
                Bali
              </a>
            </li>
          </ul>
        </div>
        <div className="bandara">
          <h7>Bandara Teratas di Indonesia</h7>
          <ul id="daftarBandara">
            <li>
              <a href="#" onClick={() => isiLokasiPenjemputan("Bandara Yogyakarta")}>
                Bandara Yogyakarta
              </a>
            </li>
            <li>
              <a href="#" onClick={() => isiLokasiPenjemputan("Bandara Jakarta")}>
                Bandara Jakarta
              </a>
            </li>
            <li>
              <a href="#" onClick={() => isiLokasiPenjemputan("Bandara Bali")}>
                Bandara Bali
              </a>
            </li>
          </ul>
        </div>
        <form id="faqForm">
          <div className="faq-form">
            <h6>Pertanyaan yang Sering Diajukan:</h6>
            <div className="form-group">
              <label htmlFor="question1">
                Apa yang saya perlukan jika ingin menyewa mobil?
              </label>
              <button
                type="button"
                className="btn btn-link"
                onClick={() => toggleFAQAnswer("answer1")}
              >
                ▼
              </button>
            </div>
            <p id="answer1" style={{ display: "none" }}>
              Apa yang saya perlukan untuk menyewa mobil?
              <br />
              Untuk memesan mobil, yang Anda perlukan hanyalah kartu kredit atau
              debit. <br /> &gt;Saat Anda mengambil mobil, Anda memerlukan:
              <br />
              &gt;Voucher / eVoucher Anda, untuk menunjukkan bahwa Anda telah
              membayar mobil tersebut.
              <br />
              &gt;Kartu kredit/debit pengemudi utama, dengan dana yang tersedia
              cukup untuk deposit mobil.
              <br />
              &gt;Surat Izin Mengemudi lengkap dan sah milik masing-masing
              pengemudi, yang telah mereka miliki setidaknya selama 12 bulan
              (seringkali 24 bulan).
            </p>
            <div className="form-group">
              <label htmlFor="question2">
                Bagaimana cara menemukan kesepakatan sewa mobil termurah?
              </label>
              <button
                type="button"
                className="btn btn-link"
                onClick={() => toggleFAQAnswer("answer2")}
              >
                ▼
              </button>
            </div>
            <p id="answer2" style={{ display: "none" }}>
              Kami bekerja sama dengan semua merek persewaan mobil Terkenal
              <br /> untuk memberikan Anda banyak pilihan mobil dengan harga
              terbaik.
              <br /> Begitulah cara kami menemukan penawaran sewa mobil murah
              untuk Anda di lebih dari 10.000 lokasi di seluruh Indonesia.
              <br /> Untuk membandingkan harga dan menemukan mobil ideal Anda
              dengan harga yang tidak ada duanya, cukup gunakan formulir
              pencarian kami.
            </p>
            <div className="form-group">
              <label htmlFor="question3">
                Apa yang harus saya perhatikan saat memilih mobil?
              </label>
              <button
                type="button"
                className="btn btn-link"
                onClick={() => toggleFAQAnswer("answer3")}
              >
                ▼
              </button>
            </div>
            <p id="answer3" style={{ display: "none" }}>
              &gt;Ruang: Anda akan lebih menikmati sewa jika memilih mobil
              dengan banyak ruang untuk penumpang dan bagasi.
              <br />
              &gt;Kebijakan bahan bakar: Tidak berencana untuk banyak mengemudi?
              Kebijakan Suka untuk bahan bakar serupa dapat menghemat banyak
              uang.
              <br />
              &gt;Lokasi: Anda tidak bisa mengalahkan penjemputan 'di bandara'
              dalam hal kenyamanan, namun penjemputan 'di luar bandara' dengan
              bus antar-jemput bisa jauh lebih murah.
            </p>
            <div className="form-group">
              <label htmlFor="question4">
                Apakah semua biaya sudah termasuk dalam harga sewa?
              </label>
              <button
                type="button"
                className="btn btn-link"
                onClick={() => toggleFAQAnswer("answer4")}
              >
                ▼
              </button>
            </div>
            <p id="answer4" style={{ display: "none" }}>
              Sebagian besar sewa kami mencakup Perlindungan Pencurian,
              Pengabaian Kerusakan Akibat Tabrakan (CDW), pajak daerah, biaya
              tambahan bandara, dan biaya jalan lainnya. Anda akan membayar
              'ekstra' apa pun saat mengambil mobil, beserta pengemudi di bawah
              umur, pengemudi tambahan, atau biaya sekali jalan – namun kami
              akan menjelaskan biaya tambahan apa pun sebelum Anda memesan mobil
              (dan mengambil kursi anak Anda sendiri atau GPS dapat menjadi cara
              mudah untuk mengurangi biaya Anda). Untuk detail lebih lanjut
              tentang apa yang disertakan, cukup periksa Syarat &amp; Ketentuan
              mobil mana pun yang Anda lihat.
            </p>
          </div>
        </form>
      </div>
      <form id="faqinformasi">
        <div className="faq-informasi">
          <h6>Informasi Tambahan:</h6>
          <div className="form-group">
            <label htmlFor="informasi1">Pengalaman Berkendara</label>
            <button
              type="button"
              className="btn btn-link"
              onClick={() => toggleInfoAnswer("informasi1")}
            >
              ▼
            </button>
          </div>
          <p id="informasi1" style={{ display: "none" }}>
            Pengalaman Berkendara
            <br />
            Menyewa mobil mewah bisa memberikan pengalaman berkendara yang lebih
            nyaman dan mewah.
            <br /> Dengan performa mesin yang superior dan desain interior yang
            elegan, pengguna dapat menikmati perjalanan dengan gaya dan
            kemewahan.
            <br />
          </p>
          <div className="form-group">
            <label htmlFor="informasi2">Penyedia Layanan</label>
            <button
              type="button"
              className="btn btn-link"
              onClick={() => toggleInfoAnswer("informasi2")}
            >
              ▼
            </button>
          </div>
          <p id="informasi2" style={{ display: "none" }}>
            Banyak agen rental mobil mewah yang menyediakan layanan di berbagai
            kota besar
            <br />
            dan destinasi wisata di seluruh dunia. Beberapa agen memiliki cabang
            di bandara atau hotel-hotel mewah
            <br />
            untuk memudahkan pelanggan dalam mengakses layanan penyewaan.
          </p>
          <div className="form-group">
            <label htmlFor="informasi3">Fitur Khusus</label>
            <button
              type="button"
              className="btn btn-link"
              onClick={() => toggleInfoAnswer("informasi3")}
            >
              ▼
            </button>
          </div>
          <p id="informasi3" style={{ display: "none" }}>
            {" "}
            Mobil mewah sering dilengkapi dengan fitur-fitur khusus seperti
            interior kulit berkualitas tinggi,
            <br /> sistem hiburan mutakhir, sistem navigasi GPS, teknologi
            keamanan canggih,
            <br /> dan fitur-fitur lain yang meningkatkan kenyamanan dan
            kemewahan pengguna.{" "}
          </p>
          <div className="form-group">
            <label htmlFor="informasi4">Asuransi</label>
            <button
              type="button"
              className="btn btn-link"
              onClick={() => toggleInfoAnswer("informasi4")}
            >
              ▼
            </button>
          </div>
          <p id="informasi4" style={{ display: "none" }}>
            Rental mobil mewah juga biasanya menawarkan opsi asuransi tambahan
            untuk melindungi penyewa dari kerusakan, kehilangan, atau kecelakaan
            saat menggunakan mobil.
          </p>
        </div>
      </form>
      <div id="detailKota" />
    </>
  );
}
