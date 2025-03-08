
//import reactLogo from './assets/react.svg'
import './video.css'
function Video(props: any) { 
    const {title ,chanelName, img}   = props
  return (      
     <div className='video-container'>
        <div className='video'>
          <img className='video-img' src={img} alt="img" />
          <p>{title}</p>
          <p>{chanelName}</p>
          <div className='video-footer'>
            <p>Лайки: 0</p>
            <button>Лайк</button>
          </div>
        </div>
     </div>        
   
  )
}

export default Video