import React from 'react'
import './styles.scss'
import { useCycle } from 'framer-motion'
import LsMenuToggle from './LsMenuToggle'
import LsSidebar from './LsSidebar'
// import {creationData} from './LsData/index.jsx'

import lsLogo from '../../images/loopstudios/logo.svg'
// import lsAbout from '../../images/loopstudios/mobile/image-interactive.jpg'
// import facebookLogo from '../../images/loopstudios/icon-facebook.svg'
// import twitterLogo from '../../images/loopstudios/icon-twitter.svg'
// import instagramLogo from '../../images/loopstudios/icon-instagram.svg'
// import pinterestLogo from '../../images/loopstudios/icon-pinterest.svg'

const LoopStudios = () => {

    const [isOpen, toggleOpen] = useCycle(false, true)

    return (
        <div className="lsPage">

            <header className="lsHeader">
                <div className="lsHeader-container">
                    <img src={lsLogo} alt="Loopstudios Logo"/>
                    <LsMenuToggle isOpen={isOpen} toggle={() => toggleOpen()}/>
                </div>
                <LsSidebar isOpen={isOpen}/>
            </header>
            
            <section className='lsHero'>
                <div className="lsHero-container">
                    <h1 className="lsHero-title">Immersive experiences that Deliver</h1>
                </div>
            </section>

            {/* <section className="lsAbout">
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

                    <button className="lsCreation-btn">
                        see all
                    </button>
                </div>
            </section>

            <footer className="lsFooter">
                <div className="lsFooter-container">
                    <img src={lsLogo} alt="Loopstudio Logo"/>
                    <div className="lsNavLink-container">
                        <a href="#about">About</a>
                        <a href="#careers">Careers</a>
                        <a href="#events">Events</a>
                        <a href="#products">Products</a>
                        <a href="#support">Support</a>
                    </div>
                    <div className="lsSocMed-container">
                        <a href="#facebook">
                            <img src={facebookLogo} alt="Loopstudios Facebook"/>
                        </a>
                        <a href="#twitter">
                            <img src={twitterLogo} alt="Loopstudios Twitter"/>
                        </a>
                        <a href="#pinterest">
                            <img src={pinterestLogo} alt="Loopstudios Pinterest"/>
                        </a>
                        <a href="#instagram">
                            <img src={instagramLogo} alt="Loopstudios Instagram"/>
                        </a>
                    </div>

                    <span className="lsCopyright">
                        © 2021 Loopstudios. All rights reserved.
                    </span>
                </div>
            </footer> */}
        </div>
    )
}

export default LoopStudios
