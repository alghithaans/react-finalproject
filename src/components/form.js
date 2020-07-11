import React, {useState, useEffect} from 'react';
import '../App.css';

//hooks, lifecycle method (useEffect), form, function component

function Form() {
    //initial state
    const [state, setState] = useState({
        name :'',
        pertanyaan :''
    });

    //useEffect initialization
    useEffect(() => {
        console.log("test")

        return()=>{
            console.log("test 2")
        }
    }, []);

    //onSubmit Handle
    const onSubmit = (event) => {
        event.preventDefault();
        alert(`hai ${state.name} pertanyaanku adalah ${state.pertanyaan}`)
    }

    //onchange event handler
    const onChange = (event) => {
        const {name, value} = event.target;
        setState({ [name]: value})
    }

    //JSX form
        return(
            <>
            <div className = "form">
                <form className = "main-form" onSubmit = {onSubmit}>
                    <h1>Kirimkan Pertanyaan ke Saya.</h1>
                    <label>
                        <h2>Nama :</h2>
                        <input name="name" type="text" value={state.name} onChange={onChange}></input>
                    </label>
                    <br/>
                    <label>
                        <h2>Pertanyaan :</h2>
                        <textarea name="pertanyaan" value={state.pertanyaan} type="text" onChange={onChange}></textarea>
                    </label>
                    <br/>
                    <button type="submit" >Submit</button>
                </form>
            </div>
            </>
        )
}

export default Form;

//class component

// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             name : '',
//             pertanyaan: '',
//         }

//         this.onChange = this.onChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//     }

//     onSubmit(event) {
//         event.preventDefault(); //untuk menghindari refresh page
//         alert(`hai ${this.state.name} pertanyaanku adalah ${this.state.pertanyaan}`)
//     }

//     onChange(event) {
//         const {name, value} = event.target;
//         this.setState({ [name]: value})
//     }

//     render(){
//         const { name, pertanyaan } = this.state;
//         return(
//             <>
//             <div className = "form">
//                 <form className = "main-form" onSubmit = {this.onSubmit}>
//                     <label>
//                         <h2>Nama :</h2>
//                         <input name="name" type="text" value={name} onChange={this.onChange}></input>
//                     </label>
//                     <br/>
//                     <label>
//                         <h2>Pertanyaan :</h2>
//                         <textarea name="pertanyaan" value={pertanyaan} type="text" onChange={this.onChange}></textarea>
//                     </label>
//                     <br/>
//                     <button type="submit" >Submit</button>
//                 </form>
//             </div>
//             </>
//         )
//     }
// }

// export default Form;