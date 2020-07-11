import React from 'react';
import '../App.css'; 
import Form from './form';
import Profile from './profile';
import Content from './content';

class Body extends React.Component{
    render() {
        //ISI QUOTES
        const contentList = [
            { 
                title : "Quotes #1", 
                quotes : "Dari pada insekyur mending kita bersyukur."
            },
            { 
                title : "Quotes #2",
                quotes : "Berhenti berkhayal terus dan mulai lakukan."
            },
            {   title : "Quotes #3",
                quotes : "Hidup ini cuma ada 2 masalah, kamu dan ulahmu."
            },
            {   title : "Quotes #4",
                quotes : "setiap perbuatan kan mendapat ganjaran setimpal."
            }   
        ]

        return(
            <>
            <div className = "container">
                <div className = "main-body">
                    <Profile />
                    {contentList.map((contentItem) => {
                        return (
                            < Content 
                            title = {contentItem.title}
                            quotes = {contentItem.quotes}
                            />
                        );
                    })}
                    {/* <Form/> */}
                </div>
            </div>
            </>
        )
    }
}

export default Body;