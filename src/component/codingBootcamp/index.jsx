import React, {useState} from 'react'
import './styles.scss'
import tanya from '../../images/codingBootcamp/image-tanya.jpg'
import john from '../../images/codingBootcamp/image-john.jpg'
import NextIcon from './svg/Next'
import PrevIcon from './svg/Prev'
import {motion, AnimatePresence} from 'framer-motion'

const variants = {
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
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const transition = {duration: 1, ease: [0.43, 0.13, 0.23, 0.96]}

const CodingBootcamp = () => {

    const [ [index, direction], setIndex ] = useState([0, 0]);

    const userData = [
        {
            name: 'Tanya Sinclair',
            testimoni: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
            imageUrl: tanya,
            title: 'UX Designer'

        },
        {   
            name: 'John Tarkpor',
            testimoni: '" If you want to lay the best foundation possible I\'d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer "',
            imageUrl: john,
            title: 'Junior Front-end Developer'
        },
    ]

    const next = () => {
        setIndex([index === userData.length - 1 ? 0 : index + 1, 1])
    }

    const prev = () => {
        setIndex([index === 0 ? userData.length - 1 : index - 1, -1])
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
                                variants={variants}
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
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={transition}
                    className="cb-textSection"
                >
                    <p>
                        {userData[index].testimoni}
                    </p>

                    <div className="cb-profile">
                        <h3>{userData[index].name}</h3>
                        <span>{userData[index].title}</span>
                    </div>

                </motion.div>
            </div>

        </div>
    )
}

export default CodingBootcamp
