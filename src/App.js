import { Component } from 'react';
import sheet from './App.module.css'
import Tab from './components/Tab'

class App extends Component {

  state = {
    todos : [
      {id : 1, done : false, action : 'Buy milk' },
      {id : 2, done : false, action : 'Play golf' },
      {id : 3, done : true, action : 'Buy OJ' },
      {id : 4, done : false, action : 'Sing w/ Tony' },
      {id : 5, done : true, action : 'Go bowling' }
    ]
  }

  handleNewData = (data) => {
    const todo = {};
    todo.done = false;
    todo.action = data; 
    const list = [...this.state.todos, todo]
    this.setState({
      todos : list
    })
  }

  handleDataChange = (key, value) => {
    console.log(key, value);    
    const todos = [...this.state.todos];

    const todo = todos.filter((todo) => {
      return todo.id === key
    })

    const index = todos.findIndex((todo) => {
      return todo.id === key
    })

    todo[0].done = value;

    todos[index] = todo[0];

    this.setState({
      todos
    })
  }

  handleDeleteData = (id) => {
    const todos = [...this.state.todos];
    if(id){
      const index = todos.findIndex((todo) => {
        return todo.id === id
      })
      todos.splice(index, 1);
      this.setState({
        todos
      })
    }else{
      const array = todos.filter((todo) => {
        return todo.done === true
      })

      array.forEach((todo)=>{
        const index = todos.indexOf(todo);
        if (index > -1) {
          todos.splice(index, 1);
        }
      })

      this.setState({
        todos
      })

    }
  }

  render(){
    return (
      <div className="App">
        <nav className={sheet.navbar}>#todo</nav>
        <Tab data={this.state.todos} 
          onAddData={this.handleNewData} 
          onChangedData={this.handleDataChange}
          onDeleteData = {this.handleDeleteData}/>
      </div>
    )
  }
}

export default App;
