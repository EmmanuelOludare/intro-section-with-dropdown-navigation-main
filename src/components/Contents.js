import { useState,useRef } from "react"
import LogoNavigation from './LogoNavigation'
import MainPage from './MainPage'

const Contents = () => {

  const [overlay,setOverlay] = useState('none');

  const openOverlay = () => {
    setOverlay('flex');
  };

  const closeOverlay = () => {
    setOverlay('none');
  };

  return (
    <div className="Contents">
      <div className="overlay" style={{display:overlay}} ></div>
        <LogoNavigation openOverlay={openOverlay} closeOverlay={closeOverlay}/>
        <MainPage />
    </div>
  )
}

export default Contents