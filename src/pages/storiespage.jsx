import React from 'react'
import '../css/storiespage.css'

export default function Storiespage() {
  return (
    <>
      <nav className="navbar position-absolute">
        <div className="container">
          <a href="#" className="logo">
            Tips explore.com
          </a>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="burger">
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        </div>
      </nav>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/sunset.jpg" className="d-block w-100" alt={100} />
          </div>
          <div className="carousel-item">
            <img src="/img/gunung.jpg" className="d-block w-100" alt={100} />
          </div>
          <div className="carousel-item">
            <img src="/img/everest.jpg" className="d-block w-100" alt={100} />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </button>
      </div>
      <div className="jumbotron text-center" id='jum'>
        <h1>Cerita Perjalanan</h1>
        <p>
          Di sinilah Anda akan menemukan berita tentang trips explore itu
          sendiri. Ini semua yang berhubungan dengan EHE.com, perusahaan kami,
          produk kami, teknologi kami, dan mitra kami.
        </p>
        <p>
          Dengan trip explore.com dan Kode trips kami yang kuat, kami meretas
          sistem, Anda terbang dengan harga lebih murah. Tapi bagaimana itu bisa
          terjadi? Bagaimana kami, produk unik kami, dan jaringan mitra dan
          afiliasi kami, bekerja sama untuk membuat perjalanan menjadi lebih
          baik?
        </p>
        <p>
          Temukan cara kerja trips explore.com dan cara kerjanya untuk Anda
          dengan membaca tentang fitur dan pembaruan baru. Pelajari cara mencari
          dan menghemat uang dengan mendapatkan hasil maksimal dari teknologi
          kami yang unik dan canggih.
        </p>
        <p>
          Dapatkan berita terbaru tentang kemitraan dan afiliasi baru yang dapat
          menguntungkan Anda dan cara Anda bepergian. Lihat wawasan tentang
          budaya perusahaan kami, bagaimana kami mendorong batas-batas apa yang
          dapat dilakukan perjalanan, dan temui karyawan kami yang bekerja keras
          dan suka bersenang-senang. Kami selalu bersemangat untuk memberi tahu
          Anda tentang berita EHE.com!
        </p>
      </div>
      <div className="container"id='con'>
        <div className="row">
          <div className="card-w mr-4" style={{ width: "18rem" }}>
            <img
              src="/img/gunungkidul.jpg"
              className="card-img-top"
              alt={80}
            />
            <div className="card-body">
              <h5 className="card-title">Gunung Kidul</h5>
              <p className="card-text">
                Kabupaten Gunungkiduladalah salah satu kabupaten di Daerah
                Istimewa Yogyakarta, Indonesia. Pusat pemerintahan berada di
                Kecamatan Wonosari. Dengan luas sekitar satu per tiga dari luas
                daerah induknya, kabupaten ini relatif rendah kepadatan
                penduduknya daripada kabupaten-kabupaten lainnya. Kabupaten ini
                berbatasan dengan Kabupaten Klaten dan Kabupaten Sukoharjo di
                utara, Kabupaten Wonogiri di timur, Samudra Hindia di selatan,
                serta Kabupaten Bantul dan Kabupaten Sleman di barat. Kabupaten
                Gunungkidul memiliki 18 kecamatan. Sebagian besar wilayah
                kabupaten ini berupa perbukitan dan pegunungan kapur, yakni
                bagian dari Pegunungan Sewu. Gunungkidul dikenal sebagai daerah
                tandus dan sering mengalami kekeringan di musim kemarau, namun
                menyimpan kekhasan sejarah yang unik, selain potensi pariwisata,
                budaya, maupun kuliner.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More...
              </a>
            </div>
          </div>
          <div className="card mr-4" style={{ width: "18rem" }}>
            <img src="/img/bali.jpg" className="card-img-top" alt={100} />
            <div className="card-body">
              <h5 className="card-title">Bali</h5>
              <p className="card-text">
                Meskipun sejarah Bali telah ditelusuri hingga Zaman Batu ,
                sebagian besar kekayaan warisan Bali mulai berkembang pada masa
                Kerajaan Majapahit (1293 hingga 1520 M) . Itu adalah era yang
                puncaknya dipimpin oleh Hayam Wuruk yang menguasai kerajaan lain
                seperti Semenanjung Malaya bagian selatan, Kalimantan, Sumatra,
                Kalimantan dan Indonesia bagian timur, serta Filipina.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More...
              </a>
            </div>
          </div>
          <div className="card mr-4" style={{ width: "18rem" }}>
            <img src="/img/pontianak.jpg" className="card-img-top" alt={50} />
            <div className="card-body">
              <h5 className="card-title">Pontianak</h5>
              <p className="card-text">
                Kota Pontianak adalah ibu kota Provinsi Kalimantan Barat. Bagian
                dari sejarah kota ini, oleh etnis Tionghoa, kota tersebut
                dikenal dengan nama Pinyin (Kundian).Kota Pontianak dilalui
                Sungai Kapuas sungai terpanjang di Indonesia dan Sungai Landak
                yang membelah kota yang dikenal dengan nama Kota Khatulistiwa.
                Kota Pontianak sendiri didirikan oleh Syarif Abdurrahman pada 23
                Oktober 1771. Pendirian ini ditandai dengan pembukaan hutan di
                pertigaan Sungai Landak, Sungai Kapuas Kecil, dan Sungai Kapuas
                Besar. Secara geografis, kota ini dilalui oleh dua sungai
                terbesar di Pulau Kalimantan, yakni Sungai Kapuas dan Sungai
                Landak. Kedua sungai ini pun diabadikan sebagai lambang Kota
                Pontianak.Tahun 1192 Hijriah, Syarif Abdurrahman Alkadrie
                dinobatkan sebagai Sultan Pontianak Pertama. Letak pusat
                pemerintahan ditandai dengan berdirinya Mesjid Raya Sultan
                Abdurrahman Alkadrie dan Istana Kadriyah, yang sekarang terletak
                di Kelurahan Dalam Bugis Kecamatan Pontianak Timur.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More...
              </a>
            </div>
          </div>
          <div className="card mr-4" style={{ width: "18rem" }}>
            <img src="/img/lombok.jpg" className="card-img-top" alt={80} />
            <div className="card-body">
              <h5 className="card-title">Lombok</h5>
              <p className="card-text">
                Lombok (penduduk pada tahun 1990: 2.403.025) adalah sebuah pulau
                di kepulauan Sunda Kecil atau Nusa Tenggara yang terpisahkan
                oleh Selat Lombok dari Bali di sebelah barat dan Selat Alas di
                sebelah timur dari Sumbawa. Pulau ini kurang lebih bulat
                bentuknya dengan semacam “ekor” di sisi barat daya yang
                panjangnya kurang lebih 70 km. Pulau ini luasnya adalah 4.725
                km² (sedikit lebih kecil daripada Bali). Kota utama di pulau ini
                adalah Kota Mataram.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More...
              </a>
            </div>
          </div>
          <div className="card mr-4" style={{ width: "18rem" }}>
            <img src="/img/lampung.jpg" className="card-img-top" alt={100} />
            <div className="card-body">
              <h5 className="card-title">Lampung</h5>
              <p className="card-text">
                Provinsi Lampung lahir pada tanggal 18 Maret 1964 dengan
                ditetapkannya Peraturan Pemerintah Nomor 31964 yang kemudian
                menjadi Undang-undang Nomor 14 tahun 1964. Sebelum itu Provinsi
                Lampung merupakan Karesidenan yang tergabung dengan Provinsi
                Sumatera Selatan. Kendatipun Provinsi Lampung sebelum tanggal 18
                maret 1964 tersebut secara administratif masih merupakan bagian
                dari Provinsi Sumatera Selatan, namun daerah ini jauh sebelum
                Indonesia merdeka memang telah menunjukkan potensi yang sangat
                besar serta corak warna kebudayaan tersendiri yang dapat
                menambah khasanah adat budaya di Nusantara yang tercinta ini.
                Oleh karena itu pada zaman VOC daerah Lampung tidak terlepas
                dari incaran penjajahan Belanda. Tatkala Banten dibawah pimpinan
                Sultan Agung Tirtayasa (1651-1683) Banten berhasil menjadi pusat
                perdagangan yang dapat menyaingi VOC di perairan Jawa, Sumatra
                dan Maluku.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More...
              </a>
            </div>
          </div>
          <div className="card mr-4" style={{ width: "18rem" }}>
            <img src="/img/bandung.jpg" className="card-img-top" alt={50} />
            <div className="card-body">
              <h5 className="card-title">Bandung</h5>
              <p className="card-text">
                Kota Bandung tidak berdiri bersamaan dengan pembentukan
                Kabupaten Bandung. Kota itu dibangun dengan tenggang waktu
                sangat jauh setelah Kabupaten Bandung berdiri. Kabupaten Bandung
                dibentuk pada sekitar pertengahan abad ke-17 masehi, dengan
                Bupati pertama yang bernama Tumenggung Wirangunangun. Ia
                memerintah Kabupaten Bandung beribukota di Krapyak (saat ini
                dikenal Dayeuhkolot), kira-kira 11 kilometer ke arah selatan
                dari pusat kota Bandung sekarang. Ketika Kabupaten Bandung
                dipimpin oleh Bupati ke-6 yaitu R.A. Wiranatakusumah II (periode
                1794-1829) yang dijuluki "dalem kaum", kekuasaan di nusantara
                beralih dari kompeni kepada pemerintah Hindia Belanda, dengan
                Gubernur Jenderal pertama yang bernama Herman Willem Daendels.
              </p>
              <a href="#" className="btn btn-primary">
                Learn More...
              </a>
            </div>
          </div>
          <div className="container mt">
            <h2>Learn More</h2>
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item disabled">
                  <a
                    className="page-link"
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="container mt-5">
            <h2>Ringkasan dan Ketentuan</h2>
            <div className="row">
              <div className="col-md-6">
                <ul className="list-group mt-4">
                  <li className="list-group-item">
                    <a href="#syarat">Syarat &amp; Ketentuan</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#persyaratan">Persyaratan Penggunaan</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#jaminan">Jaminan EHE.com</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-group mt-4">
                  <li className="list-group-item">
                    <a href="#privasi">Kebijakan Privasi</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#perangkat">Perangkat Pers</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#keamanan">Keamanan</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <h2>Platform</h2>
            <div className="row">
              <div className="col-md-6">
                <ul className="list-group mt-4">
                  <li className="list-group-item">
                    <a href="#syarat">About</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#persyaratan">Product</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#jaminan">People</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-group mt-4">
                  <li className="list-group-item">
                    <a href="#privasi">Partnership</a>
                  </li>
                  <li className="list-group-item">
                    <a href="#perangkat">Jobs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <h2>Features</h2>
            <ul className="list-group mt-4">
              <li className="list-group-item">
                <a href="#syarat">Top Routes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
