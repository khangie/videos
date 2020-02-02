import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    
    // Loop through all videos
    const renderedList = videos.map((video) => {
        return <VideoItem video={video}/>;
    });
    
    return <div>{renderedList}</div>;
}

export default VideoList;