import React from 'react'
import facebookIcon from '../../images/articlePreview/icons/icon-facebook.svg'
import twitterIcon from '../../images/articlePreview/icons/icon-twitter.svg'
import pinterestIcon from '../../images/articlePreview/icons/icon-pinterest.svg'

const Share = () => {
    return (
        <>
            <span className="ap-share">share</span>

            <a className="ap-share-link" href="#facebook">
                <img src={facebookIcon} alt="..."/>
            </a>

            <a className="ap-share-link" href="#twitter">
                <img src={twitterIcon} alt="..."/>
            </a>

            <a className="ap-share-link" href="#facebook">
                <img src={pinterestIcon} alt="..."/>
            </a>
        </>
    )
}

export default Share
