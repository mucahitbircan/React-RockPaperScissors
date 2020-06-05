import React from "react";

class Comp1 extends React.Component {
    constructor(props) {
        super(props);
        // Burada this.setState()'i çağırmayınız!
        this.state = {
            game : ["rock","paper","scissors"],
        };
    }
    render() {
        return (
            <h3 style={{color:"rgba(0,0,18,0.95)"}}>{this.state.game[this.props.example]}</h3>
    )
        }
}
export default Comp1;