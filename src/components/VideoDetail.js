import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Choose video</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (<div className="ui segment">
                <div className="ui embed">
                    <iframe title="video-player" src={videoSrc} />
                </div>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
    )}

export default VideoDetail;