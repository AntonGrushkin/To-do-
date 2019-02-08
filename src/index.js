import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      task: []
    }
    this.RecordValue =   this.RecordValue.bind(this)
    this.addItem =   this.addItem.bind(this)
  }
  RecordValue(event) {
    this.setState({
      text: event.target.value
    })
  }
  addItem(event) {
    event.preventDefault()
    this.setState({
      task: [...this.state.task, this.state.text]
    })
  }
  render() {
    return (
      <form onSubmit={this.addItem}>
        <input onChange={this.RecordValue} value={this.state.text}></input>
        <button type="submit">Добавить</button>
        <div>{this.state.task}</div>
      </form> 
    )
  }
}
ReactDOM.render(
  <App />, 
  document.getElementById('root')
)