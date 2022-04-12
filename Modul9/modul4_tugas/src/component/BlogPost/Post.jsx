import React from "react";

const Post = (props) => {
    return(
        <div className="mahasiswa">
            <div className="gambar-mahasiswa">
    <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbail Mahasiswa" />                
            </div>
            <div className= "konten-mahasiswa">
            <div className= "nim-mahasiswa">{props.NIM}</div>
            <div className = "nama-mahasiswa">{props.nama}</div>
            <div className = "alamat-mahasiswa">{props.alamat}</div>
            <div className = "hp-mahasiswa">{props.hp}</div>
            <div className = "angkatan-mahasiswa">{props.angkatan}</div>
            <div className = "status-mahasiswa">{props.status}</div>
            <button className = "btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
         </div>
    </div>
    )
}

export default Post;