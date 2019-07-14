import React, {Component} from 'react';


class Form extends Component {


    render(){
        return(
        <form onSubmit={this.props.handleSubmit}>
        Enter Star Name<input value={this.props.newStar.name} onChange={this.props.handleChangeFor('name')}/>
        Enter Star Diameter<input value={this.props.newStar.diameter} onChange={this.props.handleChangeFor('diameter')}/>
        <input type='submit' value='submit star'/>
        </form>
        )

    }

}//end Header

export default Form;