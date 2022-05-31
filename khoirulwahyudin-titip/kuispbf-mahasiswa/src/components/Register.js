import React, { Component } from 'react';
import { Button, Container, Grid, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Login from './Login';

class Register extends Component {
    render(){
        // const {email, password} = this.state
        return(
            <Container>
                <Grid container justify="center">
                    <Grid xs="12" md="8" lg="4">
                        <h2>Halaman Register</h2>
                        {/* <form onSubmit={this.handleSubmit}> */}
                            <TextField type="email" fullWidth margin="dense" variant="outlined" size="small"  name="email" label="Email" required />
                            <TextField type="password" fullWidth margin="dense" variant="outlined" size="small" name="password" label="Password" required />
                            <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
                        {/* </form> */}
                        <p>sudah punya akun? <Link to="/login">Login</Link></p>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default Register;