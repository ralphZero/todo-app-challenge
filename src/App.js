import sheet from './App.module.css'
import Tab from './components/Tab'


function App() {
  return (
      <div className="App">
        <nav className={sheet.navbar}>#todo</nav>
        <Tab/>
      </div>
  );
}

export default App;
