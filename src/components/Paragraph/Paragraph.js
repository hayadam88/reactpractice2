import React, {Component} from 'react';


class Paragraph extends Component {

    render(){
        return(
         <p>Our new star is {this.props.newStar.name} with a diameter of {this.props.newStar.diameter}</p>
        )

    }

}//end Header

export default Paragraph;