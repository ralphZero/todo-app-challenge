import { Component } from 'react';
import sheet from './App.module.css'
import Tab from './components/Tab'

class App extends Component {

  state = {
    todos : []
  }

  componentDidMount(){
    if(!localStorage.getItem('todos')){
      console.log('has no todos');
      localStorage.setItem('todos', '');
    }else{
      console.log('has todos');
      const todos = JSON.parse(localStorage.getItem('todos'));
      this.setState({
        todos
      })
    }
  }

  componentDidUpdate(oldProps, oldState){
    if(oldState !== this.state){
      const todos = JSON.stringify(this.state.todos)
      localStorage.setItem('todos', todos)
      console.log('str : '+localStorage.getItem('todos'));
    }
  }

  handleNewData = (data) => {
    const todo = {};
    todo.id = Math.floor(Math.random()*16777215).toString(16)
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
