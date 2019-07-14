import React, {Component} from 'react';
import Header from '../Header/Header';
import Paragraph from '../Paragraph/Paragraph';
import List from '../List/List';

class App extends Component { 
  
  constructor(props){
    super(props)

      this.state = {
        starList: [
          { name: 'hadar',
            diameter: 50,
            
          }, 
          { name:'gacrux',
            diameter: 40,
          
          }, 
          { name: 'fomalhaut',
            diameter: 60,
        
          },
      ],// end array
      newStar: {
        name: '',
        diameter: '',
      }
      }//end state


  this.handleSubmit = this.handleSubmit.bind(this);
  }// end constructor

  handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState({
        newStar: {
          ...this.state.newStar,
          [propertyName]: event.target.value,
        }
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.newStar);

    this.setState({
      // pushes the new star item into the starList array when we click submit
      starList: [...this.state.starList, this.state.newStar],
      //this then clears the input fields because we set the input values below to these properties
      newStar: {
        name: '',
        diameter: '',
      }
    })
    
  }


  render() {
    // let starListItemArray = [];

    //   for (let i=0; i<this.state.starList.length; i++){
    //   const starListItem = <li>{this.state.starList[i]}</li>
    //   starListItemArray.push(starListItem);
    // }

    
    // this.state.starList.forEach(star => {
    //   const starListItem = <li>{star}</li>
    //   starListItemArray.push(starListItem);
    // })
  
    // const starListItemArray = this.state.starList.map(star => {
    //   const starListItem = <li>{star}</li>
    //   return starListItem
    // })

    //  const starListItemArray = this.state.starList.map(star => {
    //   return <li>{star}</li>;
    // })
    
    //const starListItemArray = this.state.starList.map(star => <li>{star}</li>);

    return (
    <>
     
      <Header />
      <Paragraph newStar={this.state.newStar}/>
        <form onSubmit={this.handleSubmit}>
        Enter Star Name<input value={this.state.newStar.name} onChange={this.handleChangeFor('name')}/>
        Enter Star Diameter<input value={this.state.newStar.diameter} onChange={this.handleChangeFor('diameter')}/>
        <input type='submit' value='submit star'/>
        </form>
      <List starList={this.state.starList} />
    </>
    );
  }
}

export default App;
