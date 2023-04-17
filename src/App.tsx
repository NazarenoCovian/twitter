import { Toaster } from 'react-hot-toast'
import './App.css'
import { Feed } from './components/Feed/Feed'
import Widgets from './components/Widgets/Widgets'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
    <div className="max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Toaster />
      <main className='grid grid-cols-9'>
        
        {/* SIDEBAR */}
        <Sidebar />

        {/* FEED */}
        <Feed />

        {/* WIDGEST */}
        <Widgets />

      </main>

    </div>
  )
}

export default App
