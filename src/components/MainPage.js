import heroImage from '../images/image-hero-mobile.png'
import databiz from '../images/client-databiz.svg'
import audiophile from '../images/client-audiophile.svg'
import meet from '../images/client-meet.svg'
import maker from '../images/client-maker.svg'

const MainPage = () => {
  return (
    <div className="MainPage">
        <div className="hero__image-container"><img src={heroImage} className="heroImage" /></div>
        <div className="hero__text-container">
            <h1 className="hero__text-header">Make remote work</h1>
            <p className="hero__text-paragraph">Get your team in sync, no matter your location. Streamline processes, 
            create team rituals, and watch productivity soar.</p>
            <button className="hero__text-button">Learn more</button>
            <div className="clients">
                <img src={databiz} alt="databiz" className="databiz" />
                <img src={audiophile} alt="audiophile" className="audiophile" />
                <img src={meet} alt="meet" className="meet" />
                <img src={maker} alt="maker" className="maker" />
            </div>
        </div>
    </div>
  )
}

export default MainPage