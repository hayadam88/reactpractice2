import React, {Component} from 'react';


class App extends Component { 
  
  constructor(props){
    super(props)

      this.state = {
        starList: ['hadar', 'gacrux', 'fomalhaut']
      }

  }// end constructor



  render() {
    let starListItemArray = [];
    for (let i=0; i<this.state.starList.length; i++){
      const starListItem = <li>{this.state.starList[i]}</li>
      starListItemArray.push(starListItem);
    }



    return (
    <>
      <div>
        this.state: {JSON.stringify(this.state)}
      </div>
      <div>
        this.state.starList: {this.state.starList}
      </div>
      <ul>
        {starListItemArray}
      </ul>
    </>
    );
  }
}

export default App;
