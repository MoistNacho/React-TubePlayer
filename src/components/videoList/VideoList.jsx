import React, { Component } from 'react';
import Video from '../videoItem/Video';
import styles from './VideoList.module.css';

class videoList extends Component {
    render() {
        let {videos, isLoading, catchVideo} = this.props;
        return (
            <ul className={styles.list}>
                <div className={styles.videos}>
                    {
                        isLoading ?
                        videos.map((video)=>{
                            return <Video key={video.etag} video={video} catchVideo={catchVideo} />
                        })
                        :
                        `Loading...`
                    } 
                </div> 
            </ul>
        );
    }
}

export default videoList;