import React, { Component } from 'react'; 

export default class Message extends Component {
  state={msgs:this.props.message.state};
  remove(msg){
    this.props.message.removeMessge(msg);
    this.forceUpdate();
    return false;
  }
  render() {
    var date= new Date().toString().split(" ");
    date.length = 3;
    var date = date.join(" ");
    if(this.state.msgs.length > 0){
      var messages =[];
      this.state.msgs.forEach((m)=>{
        messages.push(
          <div key={m}>
            <blockquote>
              <p style={{fontFamily: 'Titillium Web'}}>{m}</p>
              <p style={{color:'silver',fontFamily: 'Titillium Web'}}>{date}</p>
              <i onClick={this.remove.bind(this,m)} className="material-icons right">delete</i>
            </blockquote>
          </div>);
      });
    }
    return (
      <div className='row'>
        {messages}      	
      </div>
    );
  }
}