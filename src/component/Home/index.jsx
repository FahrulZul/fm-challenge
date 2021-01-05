import React from 'react'
import './styles.scss'
import profileCardComponent from '../../images/home/profile-card-component.jpg'
import articlePreview from '../../images/home/article-preview.jpg'
import codingBootcamp from '../../images/home/coding-bootcamp.jpg'
import comingSoon from '../../images/home/coming-soon.svg'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const Home = () => {

    const project = [
        {
            title: 'Profile card',
            imgUrl: profileCardComponent,
            url: '/profile-card',
        },
        {
            title: 'Article Preview',
            imgUrl: articlePreview,
            url: '/article-preview',
        },
        {
            title: 'Coding Bootcamp',
            imgUrl: codingBootcamp,
            url: '/coding-bootcamp',
        },
        {
            title: 'Coming Soon..',
            imgUrl: comingSoon,
            url: '/',
        },
    ]
    return (
        <div className="home-screen">

            <div className="home-gridContainer">

                {
                    project.map((info, id) => (
                        <Link key={id} className="link" to={info.url}>
                            <motion.div
                                className="projectCard"
                                whileHover={{transform: 'translateY(-5px)'}}
                            >
                                <div className="projectCard-image">
                                    <img src={info.imgUrl} alt="Frontens Challenge"/>
                                </div>
                                <div className="projectCard-info">
                                    <span>#fmChallenge</span>
                                    <h2>
                                        {info.title}
                                    </h2>
                                </div>
                            </motion.div>
                        </Link>
                    ))
                }

            </div>

        </div>
    )
}

export default Home
