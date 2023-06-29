import Nav from "../additionnel/nav"
import React from 'react'

// const Welcome =()=>{
//     return(
//         <>
//     <h1>welcome page</h1>
//     </>
//     )
    
// }
class Welcome extends React.Component{

    constructor(props){
        console.log('constructor phase')
        super(props);
        this.state = {
            firstname : "Aicha",
            lastname:"Sahil"
        }
    }
render(){
    console.log('render phase')
    console.log(this.state);
    return(
        <>
   <Nav />

        <h1>Hello, {this.props.name}</h1>
        <p>age : {this.props.age}</p>
        <p>Title : {this.props.title}</p>
        <button onClick={() =>{    
            this.setState({
                lastname:"khalid"
            })
            }}
        >
                change my name
        </button>
        <h6>created by ,{this.state.firstname} {this.state.lastname}</h6>

        </>
    )
}
// componentDidMount(){
//     // this.setState({
//     //     firstname:"zaina",
//     //     lastname:"sahil",
//     // })

//     console.log("componentDidMount phase")
// }
}
export default Welcome