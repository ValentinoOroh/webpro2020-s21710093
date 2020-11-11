import React from 'react';
import {cekTahun, cekHari} from '../Utils/waktu'

const Hello = () => {
    return (
      <>
      <p>Hello, Selamat Datang di kelas Web Programming</p>
      <p>Tahun sekarang adalah {cekTahun()}</p>
      <p>Tanggal sekarang adalah {cekHari()}</p>
      </>
    );
  };

  export default Hello;