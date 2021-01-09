import React, {useState} from 'react'
import './styles.scss'
import NextIcon from './svg/Next'
import PrevIcon from './svg/Prev'
import {motion} from 'framer-motion'
import {userData} from './data/user'

const CodingBootcamp = () => {

    const [ [index, direction], setIndex ] = useState([0, 0]);

    const next = () => {
        setIndex([index === userData.length - 1 ? 0 : index + 1, 1])
    }

    const prev = () => {
        setIndex([index === 0 ? userData.length - 1 : index - 1, -1])
    }

    const imageVariants = {
        enter: (direction) => {
          return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1
        }
      };
    
    const textContainer = {
        start: {
            opacity: 0.8
        },
        enter: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }
        }
      }
    
    const text = {
        start: {
            y: 50,
            opacity: 0,
        },
        enter: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96],
            }
        }
      }

    return (
        <div className="cb-screen">
            
            <div className="cb-container">
                <div className="cb-imgSection">
                    <div className="cb-imgWrapper">
                            <motion.img
                                key= {index}
                                src={userData[index].imageUrl}
                                alt="..."
                                custom={direction}
                                initial='enter'
                                animate='center'
                                variants={imageVariants}
                            />
                    </div>
                    <div className="cb-navBtn">
                        <motion.button
                            whileTap={{backgroundImage: 'linear-gradient(-90deg, #ffffff, #E2E8F0)'}}
                            onClick={() => prev()}
                        >
                            <PrevIcon/>
                        </motion.button>

                        <motion.button
                            whileTap={{backgroundImage: 'linear-gradient(90deg, #ffffff, #E2E8F0)'}}
                            onClick={() => next()}
                        >
                            <NextIcon/>
                        </motion.button>
                    </div>
                </div>
                <motion.div
                    key={index}
                    initial='start'
                    animate='enter'
                    variants={textContainer}
                    className="cb-textSection"
                >
                    <motion.p variants={text}>
                        {userData[index].testimoni}
                    </motion.p>

                    <motion.div variants={text} className="cb-profile">
                        <h3>{userData[index].name}</h3>
                        <span>{userData[index].title}</span>
                    </motion.div>

                </motion.div>
            </div>

        </div>
    )
}

export default CodingBootcamp
