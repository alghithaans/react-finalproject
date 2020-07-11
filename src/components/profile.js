import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Form from './form';
import Content from './content';
import profile from '../img/alghita.png'

function Profile () {
    return (
        <Router>
            <div className = "main-profile">
                <div className = "box">
                    <div className = "context-profile">
                        <h1>Halo ini Gita,</h1>
                        <img src={profile}></img>
                        <h3>Web page ini dibuat menggunakan React JS.</h3>
                        <p>Sebagai persyaratan lulus dari Sanbercode. </p>
                        <p>Web Page ini tidak sempurna.</p>
                        <div className = "profile-button">
                            <Link  to="/question" className="btn question">Kirim Saya Pertanyaan</Link>
                            <a href="https://www.instagram.com/alghitha/" className="btn instagram">Kunjungi Instagram Saya</a>
                        </div>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path = "/question">
                    <Form/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Profile;