import React from 'react'
import './styles.scss'
import tanya from '../../images/codingBootcamp/image-tanya.jpg'
import NextIcon from './svg/Next'
import PrevIcon from './svg/Prev'


const CodingBootcamp = () => {
    return (
        <div className="cb-screen">
            
            <div className="cb-container">
                <div className="cb-imgSection">
                    <div className="cb-imgWrapper">
                        <img src={tanya} alt="..."/>
                    </div>
                    <div className="cb-navBtn">
                        <button>
                            <PrevIcon/>
                        </button>

                        <button>
                            <NextIcon/>
                        </button>
                    </div>
                </div>
                <div className="cb-textSection">
                    <p>
                        “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”
                    </p>
                    <div className="cb-profile">
                        <h3>Tanya Sinclair</h3>
                        <span>UX Engineer</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CodingBootcamp
