import sheet from './App.module.css'
import TabBar from './components/TabBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import All from './components/All'
import Active from './components/Active'
import Completed from './components/Completed'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className={sheet.navbar}>#todo</nav>
        <TabBar />
        <Switch>
          <Route exact path='/' component={All} />
          <Route path='/active' component={Active} />
          <Route path='/completed' component={Completed} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
