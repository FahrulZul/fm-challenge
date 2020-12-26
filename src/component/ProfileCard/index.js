import React from 'react'
import './styles.scss'
import banner from '../../images/profileCard/bg-pattern-card.svg'
import avatar from '../../images/profileCard/image-victor.jpg'

const ProfileCard = () => {
    return (
        <div className="pc-screen">
            <div className="profileCard">

                <div className="pc-banner">
                    <img src={banner} alt="Banner"/>
                </div>

                <div className="pc-avatar">
                    <div className="avatar-wrapper">
                        <img src={avatar} alt="avatar"/>
                    </div>
                </div>

                <div className="pc-profile">
                    <h1>Victor Crest <span>26</span></h1>
                    <h2>London</h2>
                </div>
                
                <div className="pc-info">

                    <div className="info-container">
                        <h2>80K</h2>
                        <span>Followers</span>
                    </div>

                    <div className="info-container">
                        <h2>803K</h2>
                        <span>Likes</span>
                    </div>

                    <div className="info-container">
                        <h2>1.4K</h2>
                        <span>Photos</span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProfileCard
