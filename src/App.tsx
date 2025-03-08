
import reactLogo from './assets/react.svg'

import './App.css'
import Video from './Video'
function App() {
   
  return (
      <>
     <div className='video-container'>
        <Video title="Видео 1" chanelName="Канал 1"  img={reactLogo} />
  
     </div>     
      </>
   
  )
}

export default App