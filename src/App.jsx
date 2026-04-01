import { useState } from 'react'
import '@/index.css'
import HomeScreen from '@/screens/HomeScreen'
import CreateProfileScreen from '@/screens/CreateProfileScreen'
import SearchScreen from '@/screens/SearchScreen'

function App() {
  const [screen, setScreen] = useState('home')

  return (
    <div className="app-container">
      <div className="content">
        {screen === 'home' && (
          <HomeScreen onNavigate={setScreen} />
        )}
        {screen === 'create' && (
          <CreateProfileScreen onBack={() => setScreen('home')} />
        )}
        {screen === 'search' && (
          <SearchScreen onBack={() => setScreen('home')} />
        )}
      </div>
    </div>
  )
}

export default App
