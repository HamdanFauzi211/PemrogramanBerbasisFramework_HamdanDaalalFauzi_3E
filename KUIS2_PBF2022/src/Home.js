import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class Home extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('mahasiswa');
    this.unsubscribe = null;
    this.state = {
      mahasiswa: [],
      key: ''
    };
  }



  onCollectionUpdate = (querySnapshot) => {
    const mahasiswa = [];
    querySnapshot.forEach((doc) => {
      const { nim, nama, prodi, nohp, angkatan,  status } = doc.data();
      mahasiswa.push({
        key: doc.id,
        doc, // DocumentSnapshot
        nim,
        nama,
        prodi,
        nohp,
        angkatan,
        status,
      });
    });
    this.setState({
      mahasiswa
   });
  }

  delete(id){
    firebase.firestore().collection('mahasiswa').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <center><h1>Data Mahasiswa Aktif/Cuti/Lulus</h1></center>
                <center><h1>Politeknik Negeri Malang</h1></center>
          </div>
          <div class="panel-body">
            <h4><Link to="/create" class="btn btn-primary">Tambah Mahasiswa</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Nim</th>
                  <th>Nama</th>
                  <th>Prodi</th>
                  <th>No HP</th>
                  <th>Angkatan</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mahasiswa.map(mahasiswa =>
                  <tr>
                    <td>{mahasiswa.nim}</td>
                    <td>{mahasiswa.nama}</td>
                    <td>{mahasiswa.prodi}</td>
                    <td>{mahasiswa.nohp}</td>
                    <td>{mahasiswa.angkatan}</td>
                    <td>{mahasiswa.status}</td>
                 
                    <Link to={`/edit/${mahasiswa.key}`} class="btn btn-warning">Edit</Link>&nbsp;
                    <Link to={`/show/${mahasiswa.key}`} class="btn btn-secondary">Tampilkan</Link>&nbsp;
                  </tr>
                  
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
