import React, { Component } from 'react';

class Players extends Component{
    constructor(props){
        super(props);
        this.state={
            clicks:0,

        }
    }
    getLastClicked = ()=>{
        this.props.getLastClicked(this.props.player)
    };
    countClicks = (e)=>{
        this.setState(
            {
                clicks:this.state.clicks+1,

            }

        )

    };

    render(){
        return(
            <div>
               <h1>Player {this.props.player}</h1>
                <h2>Score: {this.state.clicks}</h2>
                <button onClick={this.getLastClicked}>Click</button>
            </div>

        );
    }
}

export default Players;