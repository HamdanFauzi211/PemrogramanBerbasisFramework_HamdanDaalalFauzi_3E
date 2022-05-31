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
          <h4><Link to="/">Mahasiswa List</Link></h4>
            <h3 class="panel-title">
              {this.state.mahasiswa.title}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Nama:</dt>
              <dd>{this.state.mahasiswa.nama}</dd>
              <dt>Jurusan:</dt>
              <dd>{this.state.mahasiswa.jurusan}</dd>
              <dt>Prodi:</dt>
              <dd>{this.state.mahasiswa.prodi}</dd>
              <dt>Angkatan:</dt>
              <dd>{this.state.mahasiswa.angkatan}</dd>
              <dt>Status:</dt>
              <dd>{this.state.mahasiswa.status}</dd>
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
