import React, { Component } from 'react';
import styles from './WatchVideo.module.css';


class WatchVideo extends Component {

    render() {
        const { videoInfo } = this.props;
        return (
            <section className={styles.section}>
                <iframe 
                    type="text/html"
                    className={styles.player}
                    title="yotube player" 
                    src={`https://www.youtube.com/embed/${videoInfo.id}`}
                    frameBorder="0" 
                    allowFullScreen
                ></iframe>
                <div className={styles.info}>
                    <div className={styles.title}>
                        {videoInfo.title}
                    </div>
                    <span className={styles.description}>
                        {videoInfo.description}
                    </span>
                </div>       
            </section>
        );
    }
}

export default WatchVideo;