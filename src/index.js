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
    this.deleteItem =   this.deleteItem.bind(this)
  }
  RecordValue(event) {
    this.setState({
      text: event.target.value
    })
  }
  addItem(event) {
    event.preventDefault()
    if(this.state.text !== '') {
      this.setState({ 
        tasks: [...this.state.tasks, this.state.text], 
        text: ''
      })
    }
  }
  deleteItem(task) {
    this.setState({
      tasks: this.state.tasks.filter((currentTask) => currentTask !== task)
    })
  }
  render() {
    return (
      <div>
        <input onChange={this.RecordValue} value={this.state.text}></input>
        <button onClick={this.addItem}>Добавить</button>
        <ul>{this.state.tasks.map((task, index) => <li key={index}>{task}<button onClick={() => this.deleteItem(task)}>Удалить</button></li>)}</ul>
      </div> 
    )
  }
} 

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)