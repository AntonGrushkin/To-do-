import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Input extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: '', 
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.fillField = this.fillField.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value})
  }
  fillField(event){
    this.setState({text: this.state.value})
    event.preventDefault();
    ReactDOM.render(<Element />, document.getElementById('form'));
  }
  render() { 
    return (
      <form id="form">
        <input
        placeholder="Введите текст"
        value={this.state.value}
        onChange={this.handleChange}
        >
        </input>
        <button onClick={this.fillField}>Кнопка</button>
      </form>
    );
  }
}
class Element extends Input{
  render(){
    return(
        <div id="newElement">{this.state.text}</div>
    )
  }
}

ReactDOM.render(
  <Input />, 
  document.getElementById('root')
)