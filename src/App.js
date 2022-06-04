import React, {Component} from 'react';
import './App.css';
import Comp1 from "./component/comp1";

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: true,
            rock: 0,
            paper: 1,
            scissors: 2,
            val1:0,
            val2:0,
            score1:0,
            score2:0
        }
    }
    refree(a,b){
        if(a===b){
            return 'draw';
        }
        else if(a===0 && b===2){
            this.setState({score1: this.state.score1+1})
        }
        else if(a===2 && b===1){
            this.setState({score1: this.state.score1+1})
        }
        else if(a===1 && b===0){
            this.setState({score1: this.state.score1+1})
        }
        else{
            this.setState({score2: this.state.score2+1})
        }
    }
    handleClick=(x)=> {
        const min = 0;
        const max = 2;
        const random = Math.floor(Math.random()*(max-min+1)+min);
        this.refree(x,random);
        this.setState({
            val1:x,
            val2:random
        })
    }
  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <div className="scoreboard">
                    <div className="userLabel">
                          PLAYER:  <Comp1 example={this.state.val1}/>
                    </div>
                    <div className="computerLabel" >
                          COMPUTER: <Comp1 example={this.state.val2}/>
                    </div>

                    <div id="scoreboard">
                          <span id="user-score">{this.state.score1}</span>:<span id="computer-score">{this.state.score2}</span>
                    </div>
                      
                  </div>


                  <view>
                      <button className='buttons' onClick={() => this.handleClick(this.state.rock)}>
                          rock
                      </button>
                      <button className='buttons' onClick={() => this.handleClick(this.state.scissors)}>
                          scissors
                      </button>
                      <button className='buttons' onClick={() => this.handleClick(this.state.paper)}>
                          paper
                      </button>
                  </view>
              </header>
          </div>
      )
  };
}

export default App;
