import React, { Component } from 'react';
import Video from '../videoItem/Video';
import styles from './VideoList.module.css';

class videoList extends Component {
    render() {
        let {videos, isLoading} = this.props;
        return (
            <ul className={styles.videoList}>
                {
                    isLoading ?
                    videos.map((video)=>{
                        return <Video key={video.etag} video={video} VideoInfo={this.props.VideoInfo} />
                    })
                    :
                    `Loading...`
                } 
            </ul>
        );
    }
}

export default videoList;