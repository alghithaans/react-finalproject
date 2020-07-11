import React from 'react';
import '../App.css'; 

class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return(
        <>
            <div className = "card-content">
                <div className = "content-item">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.quotes}</p>
                </div>
            </div>
        </>
        )
    }
}

export default Content;