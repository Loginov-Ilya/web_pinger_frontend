
// import reactLogo from './assets/react.svg'

import './App.css'
import Video from './Video'
import { VIDEOS } from './videos'

function App() {
   
  return (
      <>
     <div className='video-container'>
        
       {VIDEOS.map((video)=>(
        <Video title={video.title} chanelName={video.chanelName}  img={video.img} />
       ))

       }
     </div>     
      </>
   
  )
}

export default App