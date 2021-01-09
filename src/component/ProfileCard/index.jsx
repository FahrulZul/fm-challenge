import React from 'react'
import './styles.scss'
import banner from '../../images/profileCard/bg-pattern-card.svg'
import avatar from '../../images/profileCard/image-victor.jpg'
import { motion } from 'framer-motion'

const ProfileCard = () => {

    const transition= {duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96]};

    return (
        <motion.div
            initial={{backgroundPosition: 'right 100vw bottom 100vh, left 100vw top 100vh'}}
            animate={{backgroundPosition: "right 52vw bottom 34.5vh, left 48vw top 52vh"}}
            transition={transition}
            className="pc-screen"
        >
            <motion.div
                initial={{y: 70, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.7}}
                className="profileCard"
            >

                <div className="pc-banner">
                    <img src={banner} alt="Banner"/>
                </div>

                <div className="pc-avatar">
                    <div className="pc-avatar-wrapper">
                        <img src={avatar} alt="avatar"/>
                    </div>
                </div>

                <div className="pc-profile">
                    <h1>Victor Crest <span>26</span></h1>
                    <h2>London</h2>
                </div>
                
                <div className="pc-info">

                    <div className="pc-info-container">
                        <h2>80K</h2>
                        <span>Followers</span>
                    </div>

                    <div className="pc-info-container">
                        <h2>803K</h2>
                        <span>Likes</span>
                    </div>

                    <div className="pc-info-container">
                        <h2>1.4K</h2>
                        <span>Photos</span>
                    </div>

                </div>

            </motion.div>
        </motion.div>
    )
}

export default ProfileCard
