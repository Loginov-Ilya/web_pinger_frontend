
//import reactLogo from './assets/react.svg'
import { useState } from 'react'
import './video.css'
function Video(props: any) { 
    const {title ,chanelName, img}   = props

    // let likesCount = 0
    const [likesCount,setLikesCount] = useState(0)

    let increseLikes = ()=>{      
      setLikesCount(likesCount + 1)
     // console.log(title, likesCount);
      
    }
  return (      
     <div className='video-container'>
        <div className='video'>
          <img className='video-img' src={img} alt="img" />
          <p>{title}</p>
          <p>{chanelName}</p>
          <div className='video-footer'>
            <p>Лайки: {likesCount}</p>
            <button onClick={increseLikes}>Лайк</button>
          </div>
        </div>
     </div>        
   
  )
}

export default Video