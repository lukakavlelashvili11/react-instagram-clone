import React from 'react'
import InnerStory from '../../components/Stories/InnerStory'
import './stories.scss'

const Stories: React.FC = () => {
    return(
        <div className="stories-page">
            <InnerStory/>
        </div>
    )
}

export default Stories