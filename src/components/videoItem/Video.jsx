import React, { Component } from 'react';

class Video extends Component {
    clickRef = React.createRef();
    handleVideo = () =>{
     this.props.VideoInfo(this.clickRef.current.id, this.props.video);
     document.body.scrollIntoView({block: "start"});
    };

    render() {
        const { video } = this.props;
        return (
            <li ref={this.clickRef} className="video" onClick={this.handleVideo} id={video.id.videoId ? video.id.videoId : video.id}>
                <div className="video-item">
                    <div className="video-img">
                        <img src={video.snippet.thumbnails.high.url} alt=""/>
                    </div>
                    <div className="video-info">
                        <span className="video-title">
                            {video.snippet.title}
                        </span>
                        <span className="video-name">{video.snippet.channelTitle}</span>
                        <span className="video-views">{video.snippet.publishedAt}</span>
                    </div>
                </div>   
            </li>
        );
    }
}

export default Video;