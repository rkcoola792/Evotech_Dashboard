
import './App.css'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import Header from './components/Header'
function App() {

  return (
    <div className="App flex">
      <div className='w-[320px] h-screen'  style={{backgroundColor:"#1E1E2D"}}>
      <Sidebar />
</div>
      <div className='flex flex-col w-full'>
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App
