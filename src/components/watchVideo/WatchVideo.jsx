import React, { Component } from 'react';


class WatchVideo extends Component {

    render() {
        const { videoInfo } = this.props;
        return (
            <section className="watchSection">
                <iframe 
                    type="text/html"
                    title="yotube player" 
                    src={`https://www.youtube.com/embed/${videoInfo.id}`}
                    frameBorder="0" 
                    allowFullScreen
                ></iframe>
                <div className="watch-videoInfo">
                    <div className="watch-videoTitle">
                        {videoInfo.title}
                    </div>
                    <span className="watch-videoDes">
                        {videoInfo.description}
                    </span>
                </div>       
            </section>
        );
    }
}

export default WatchVideo;