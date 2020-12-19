import { Component } from 'react';
import sheet from './App.module.css'
import Tab from './components/Tab'

class App extends Component {

  state = {
    todos : [
      { done : false, action : 'Buy milk' },
      { done : false, action : 'Play golf' },
      { done : true, action : 'Buy OJ' },
      { done : false, action : 'Sing w/ Tony' },
      { done : true, action : 'Go bowling' }
    ]
  }

  render(){
    return (
      <div className="App">
        <nav className={sheet.navbar}>#todo</nav>
        <Tab data={this.state.todos}/>
      </div>
    )
  }
}

export default App;
