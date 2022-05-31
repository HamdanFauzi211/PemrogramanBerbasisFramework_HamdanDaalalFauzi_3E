import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mahasiswa: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('mahasiswa').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          mahasiswa: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
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

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h1><Link to="/">Data Mahasiswa </Link></h1>
            <h1 class="panel-title">
              {this.state.mahasiswa.title}
            </h1>
          </div>
          <div class="panel-body">
            <dl>
              <dt>NIM:</dt>
              <dt>{this.state.mahasiswa.nim}</dt>
              <dt>Nama:</dt>
              <dd>{this.state.mahasiswa.nama}</dd>
              <dt>Prodi:</dt>
              <dd>{this.state.mahasiswa.prodi}</dd>
              <dt>Angkatan:</dt>
              <dd>{this.state.mahasiswa.angkatan}</dd>
              <dt>Status:</dt>
              <dd>{this.state.mahasiswa.status}</dd>
              <dt>NOHP:</dt>
              <dt>{this.state.mahasiswa.nohp}</dt>
            </dl>
            {/* <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp; */}
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
