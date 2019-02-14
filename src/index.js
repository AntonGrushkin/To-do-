import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      tasks: []
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
      tasks: [...this.state.tasks, this.state.text],
      text: ''
    })
  }
  render() {
    return (
      <div>
        <input onChange={this.RecordValue} value={this.state.text}></input>
        <button onClick={this.addItem}>Добавить</button>
        <List tasks={this.state.tasks}/>
      </div> 
    )
  }
} 

class List extends App {
  
  render() {
    return (
      <div>
        <ul>{this.props.tasks.map((task, index) => <li key={index}>{task}</li>)}</ul>
      </div> 
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)