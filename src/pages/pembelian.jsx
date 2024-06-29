import React, { useState } from 'react';
import axios from 'axios';
import '../css/pembelian.css';

const Pembelian = () => {
  const [formData, setFormData] = useState({
    nama: '',
    alamat: '',
    noKtp: '',
    noHp: '',
    maskapai: '',
    rute: '',
    kelas: '',
    harga: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/pembelian', formData);
      console.log(response.data);
      alert('Data berhasil disimpan ke database');
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal menyimpan data ke database');
    }
  };

  return (
    <div className="pembelian-container">
      <div className="form-wrapper">
        <h3 className="text-primary mb-4 text-center">Form Pembelian Tiket Pesawat</h3>
        <div className="card">
          <h5 className="text-center mb-3">Isi Data Pembelian</h5>
          <form className="form-card" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Nama<span className="text-danger"> *</span></label>
                <input type="text" name="nama" value={formData.nama} placeholder="Masukkan Nama" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Alamat<span className="text-danger"> *</span></label>
                <input type="text" name="alamat" value={formData.alamat} placeholder="Masukkan Alamat" onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>No KTP<span className="text-danger"> *</span></label>
                <input type="text" name="noKtp" value={formData.noKtp} placeholder="Masukkan No KTP" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>No HP<span className="text-danger"> *</span></label>
                <input type="text" name="noHp" value={formData.noHp} placeholder="Masukkan No HP" onChange={handleChange} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Maskapai<span className="text-danger"> *</span></label>
                <select name="maskapai" value={formData.maskapai} onChange={handleChange}>
                  <option value="">Pilih Maskapai</option>
                  <option value="Garuda Indonesia">Garuda Indonesia</option>
                  <option value="Lion Air">Lion Air</option>
                  <option value="AirAsia">AirAsia</option>
                </select>
              </div>
              <div className="form-group">
                <label>Rute<span className="text-danger"> *</span></label>
                <select name="rute" value={formData.rute} onChange={handleChange}>
                  <option value="">Pilih Rute</option>
                  <option value="Jakarta - Bali">Jakarta - Bali</option>
                  <option value="Jakarta - Surabaya">Jakarta - Surabaya</option>
                  <option value="Jakarta - Medan">Jakarta - Medan</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Kelas<span className="text-danger"> *</span></label>
                <select name="kelas" value={formData.kelas} onChange={handleChange}>
                  <option value="">Pilih Kelas</option>
                  <option value="Ekonomi">Ekonomi</option>
                  <option value="Bisnis">Bisnis</option>
                  <option value="First Class">First Class</option>
                </select>
              </div>
              <div className="form-group">
                <label>Harga<span className="text-danger"> *</span></label>
                <select name="harga" value={formData.harga} onChange={handleChange}>
                  <option value="">Pilih Harga</option>
                  <option value="1000000">1,000,000</option>
                  <option value="2000000">2,000,000</option>
                  <option value="3000000">3,000,000</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group btn-wrapper">
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pembelian;
