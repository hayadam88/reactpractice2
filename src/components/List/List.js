import React, {Component} from 'react';


class List extends Component {

    render(){
        return(
        <ul>
      
        {this.props.starList.map(star => <li key={star.name}>The star {star.name} has a diameter of {star.diameter}</li>)}
        
        </ul>
        )

    }

}//end Header

export default List;