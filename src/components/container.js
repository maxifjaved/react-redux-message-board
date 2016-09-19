import React, { Component } from 'react'; 
import Message from './message';

export default class Container extends Component {
  state={value:''};
  componentDidMount() {
    this.refs.form.onsubmit = () => this.sendMessage();
  }
  sendMessage(){
    this.props.saveMessge(this.state.value);
    this.setState({value: '' });
    return false;
  }
  handleChange(event) {
    this.setState({value: event.target.value });
   }
  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col s8">
        <h5 style={{fontFamily: 'Titillium Web'}}>Message Board</h5>
        <form ref="form">
          	<input
              value={this.state.value}
              style={{fontFamily: 'Titillium Web'}}
              onChange={this.handleChange.bind(this)} />
        </form>
        <Message message={this.props} />
      </div>
      </div>
      </div>
    );
  }
}