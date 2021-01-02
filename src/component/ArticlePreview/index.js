import React, {useState} from 'react'
import './styles.scss'
import apImg from '../../images/articlePreview/drawers.jpg'
import apAvatar from '../../images/articlePreview/avatar-michelle.jpg'
import {motion} from 'framer-motion'
import Share from './Share'

const ArticlePreview = () => {


    const [isOpen, setIsOpen] = useState(false);

    const desktop = {
        open: {
            display: 'flex',
            opacity: 1
        },
        close: {
            opacity: 0,
            display: 'none'
        }
    }

    const transition = {duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96]}

    return (
        <div className="ap-screen">

            <div className="ap-card">
                
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
                            className="shareBtn"
                            onClick={() => setIsOpen(!isOpen) }
                            data-isOpen = {isOpen}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                                <path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
                            </svg>
                        </motion.button>
                        
                        {/* Share on Mobile */}
                        <motion.div
                            className="ap-shareBlock-mobile"
                            initial={{y: 100}}
                            animate={{
                                y: isOpen && window.innerWidth < 1024 ? 0 : 100 ,
                            }}
                            transition={transition}
                        >
                            <Share/>
                        </motion.div>
                      
                    </div>
                    
                    <motion.div 
                        className="ap-shareBlock-desktop"
                        initial={false}
                        animate={ 
                            isOpen && window.innerWidth >= 1024 ? 'open' : 'close'
                        }
                        variants={desktop}
                        transition={transition}
                    >
                        <Share/>
                    </motion.div>

                </div>

            </div>

        </div>
    )
}

export default ArticlePreview
