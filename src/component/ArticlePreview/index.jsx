import React, {useState} from 'react'
import './styles.scss'
import apImg from '../../images/articlePreview/drawers.jpg'
import apAvatar from '../../images/articlePreview/avatar-michelle.jpg'
import {motion} from 'framer-motion'
import Share from './Share'

const ArticlePreview = () => {


    const [isOpen, setIsOpen] = useState(false);

    const share = {
        mobile: {
            display: 'flex',
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 100,
        },
        desktop: {
            display: isOpen ? 'flex' : 'none',
            opacity: isOpen ? 1 : 0,
        }
    }

    const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}

    return (
        <div className="ap-screen">

            <motion.div
                initial={{y: 70, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={transition}
                className="ap-card"
            >
                
                <div className="ap-imgContainer">
                    <img src={apImg} alt="..."/>
                </div>

                <div className="ap-contentContainer">
                    <div className="ap-content">
                        <h3>
                            Shift the overall look and feel by adding these wonderful touches to furniture in your home
                        </h3>

                        <p>
                            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
                        </p>
                    </div>

                    <div className="ap-profile-container">
                        
                        <div className="ap-profile">

                            <div className="ap-avatarWrapper">
                                <img src={apAvatar} alt="..."/>
                            </div>

                            <div className="ap-infoContainer">
                                <h4>Michelle Appleton</h4>
                                <span>28 Jun 2020</span>
                            </div>
                        
                        </div>
                        
                        <motion.button
                            whileHover={{scale: 1.1}}
                            onClick={() => setIsOpen(!isOpen) }
                            className={`shareBtn ${isOpen ? 'ap-active' : ''}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                                <path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
                            </svg>
                        </motion.button>

                        <motion.div
                            className="ap-share-container"
                            initial={false}
                            animate={
                                window.innerWidth < 1024 ? 'mobile' : 'desktop'
                            }
                            transition={transition}
                            variants={share}
                        >
                            <Share/>
                        </motion.div>
                      
                    </div>

                </div>

            </motion.div>

        </div>
    )
}

export default ArticlePreview
