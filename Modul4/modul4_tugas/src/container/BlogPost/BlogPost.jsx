import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component{
    state = {               //komponen state dari react untuk statefull cin
        listMahasiswa: [],      //variabel array yang digunakan untuk menyimpan data
        insertMahasiswa: {
            userId: 1,
            NIM: 1,
            nama: "",
            alamat: "",
            hp:"",
            angkatan: 2018,
            status:""
        }
    }

    ambilDataDariServerAPI = () => {                        //komponen untuk mengecek component telah di mount-img, maka panggil API
        fetch('http://localhost:3001/mahasiswa?_sort=id&_order=desc')                //alamat url API yang ingin kita ambil datanya
            .then(response => response.json())              //ubah response data dari url API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {                //data json hasil ambil dari API kita masukkan kedalam listArtikel pada state
                this.setState({
                    listMahasiswa: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount(){              //komponen yang mengecek ketika component telah di mount ing, maka panggil API
        this.ambilDataDariServerAPI() //ambil data dari server api LOKAL
    }

    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, {method: 'DELETE'})
        .then(res => {
            this.ambilDataDariServerAPI()
        })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState( {
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
        .then( (Response ) => {
            this.ambilDataDariServerAPI();
        });
    }

    render() {
        return(

            <div className="post-mahasiswa">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahMahasiswa}/>    
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="nama" name="nama" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Nomer Handphone</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="nohp" name="nohp" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="angkatan" name="angkatan" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="status" name="status" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <center><h2>Data Mahasiswa Jurusan Teknologi Informasi</h2></center>
                <center><h2>Politeknik Negeri Malang</h2></center>
                {
                    this.state.listMahasiswa.map(mahasiswa => {
                        return <Post key={mahasiswa.NIM} 
                        NIM={mahasiswa.NIM}
                        nama={mahasiswa.nama}
                        alamat={mahasiswa.alamat}
                        hp = {mahasiswa.hp}
                        angkatan = {mahasiswa.angkatan}
                        status = {mahasiswa.status}
                        idMahasiswa={mahasiswa.id}
                        hapusMahasiswa={this.handleHapusmahasiswa}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;