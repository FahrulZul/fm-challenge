import React from 'react'
import './styles.scss'
import lsLogo from '../../images/loopstudios/logo.svg'
import lsAbout from '../../images/loopstudios/mobile/image-interactive.jpg'
import LsMenuToggle from './LsMenuToggle'
import {creationData} from './LsData/index.jsx'

const LoopStudios = () => {

    return (
        <div className="lsPage">

            <header className="lsHeader">
                <div className="lsHeader-container">
                    <img src={lsLogo} alt="Loopstudios Logo"/>
                    <LsMenuToggle/>
                </div>
            </header>
            
            <section className='lsHero'>
                <div className="lsHero-container">
                    <h1 className="lsHero-title">Immersive<br/>experiences<br/>that<br/>Deliver</h1>
                </div>
            </section>

            <section className="lsAbout">
                <div className="lsAbout-container">
                    <img src={lsAbout} alt="Man playing VR"/>
                    <h2>
                       The leader in interactive vr 
                    </h2>
                    <p>
                        Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award winning creations have transform businesses through digital experiences that bind to their brand.
                    </p>
                </div>
            </section>

            <section className="lsCreation">
                <div className="lsCreation-container">
                    <h2>
                        our creations
                    </h2>
                    <div className="lsCreation-gridContainer">

                        {
                            creationData.map((data, key) => (
                                <div key={key} className="lsCreation-card">
                                    <img src={data.imgUrl} alt={data.title}/>
                                    <h3>{data.title}</h3>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>


        </div>
    )
}

export default LoopStudios
