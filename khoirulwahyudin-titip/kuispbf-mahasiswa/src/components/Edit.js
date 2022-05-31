import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      nama: '',
      jurusan: '',
      prodi: '',
      status:''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('mahasiswa').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const mahasiswa = doc.data();
        this.setState({
          key: doc.id,
          nama: mahasiswa.nama,
          jurusan: mahasiswa.jurusan,
          prodi: mahasiswa.prodi,
          angkatan:mahasiswa.angkatan,
          status: mahasiswa.status
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({mahasiswa:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nama, jurusan, prodi, angkatan, status } = this.state;

    const updateRef = firebase.firestore().collection('mahasiswa').doc(this.state.key);
    updateRef.set({
      nama,
      jurusan,
      prodi,
      angkatan,
      status
    }).then((docRef) => {
      this.setState({
        key: '',
        nama: '',
        jurusan: '',
        prodi: '',
        angkatan: '',
        status: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Edit Mahasiswa
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Mahasiswa List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="nama">Nama:</label>
                <input type="text" class="form-control" name="nama" value={this.state.nama} onChange={this.onChange} placeholder="Nama" />
              </div>
              <div class="form-group">
                <label for="jurusan">Jurusan:</label>
                <input type="text" class="form-control" name="jurusan" value={this.state.jurusan} onChange={this.onChange} placeholder="Jurusan" />
              </div>
              <div class="form-group">
                <label for="prodi">Prodi:</label>
                <input type="text" class="form-control" name="prodi" value={this.state.prodi} onChange={this.onChange} placeholder="Prodi" />
              </div>
              <div class="form-group">
                <label for="angkatan">Angkatan:</label>
                <input type="number" class="form-control" name="angkatan" value={this.state.angkatan} onChange={this.onChange} placeholder="Angkatan" />
              </div>
              <div class="form-group">
                <label for="status">Status:</label>
                <input type="text" class="form-control" name="status" value={this.state.status} onChange={this.onChange} placeholder="Status" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
