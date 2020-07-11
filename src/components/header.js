import React from 'react';
import '../App.css';


class Header extends React.Component {
    render(){
        return(
            <>
                <div className = "header">
                    <div className = "main-header">
                        <div className = "head-right">
                            <ul>
                                <li >Contact</li>
                                <li >Portofolio</li>
                                <li >Photo</li>
                                <li >Home</li>
                            </ul>
                    </div>   
                    </div>
                </div>
            </>
        )
    }
}

export default Header;