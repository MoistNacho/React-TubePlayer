import React, { Component } from 'react';
import styles from './Video.module.css';

class Video extends Component {
    handleVideo = (event) =>{
        this.props.catchVideo(event.currentTarget.id, this.props.video);
        document.body.scrollIntoView({block: "start"});
    };

    videoDate = (date) =>{
        const year = `${date.substring(0,4)}년 `;
        const month = `${date.substring(5,7)}월 `;
        const day = `${date.substring(8,10)}일`;
        return year+month+day;
    }

    render() {
        const { video } = this.props;
        return (
            <li className={styles.video} onClick={this.handleVideo} id={video.id.videoId ? video.id.videoId : video.id}>
                <div className={styles.item}>
                    <div className={styles.img}>
                        <img src={video.snippet.thumbnails.high.url} alt=""/>
                    </div>
                    <div className={styles.info}>
                        <span className={styles.title}>
                            {video.snippet.title}
                        </span>
                        <span className={styles.name}>{video.snippet.channelTitle}</span>
                        <span className={styles.date}>{this.videoDate(video.snippet.publishedAt)}</span>
                    </div>
                </div>   
            </li>
        );
    }
}

export default Video;