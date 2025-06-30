import MainArea from './components/mainArea'
import TopBar from './components/topBar'
import SearchBar from './components/SerchBar'


const App = () => {
  return (
    <div className='bg-gray-800 h-screen overflow-hidden'>
      <TopBar />
      <SearchBar />
        <MainArea />

    </div>
  )
}

export default App