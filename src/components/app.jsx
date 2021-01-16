import React, { Component } from 'react';
import Header from './header/Header';
import VideoList from './videoList/VideoList';
import WatchVideo from './watchVideo/WatchVideo';
import styles from './app.module.css';

class App extends Component { 
  state = {
    videos : [],
    videoInfo : null,
    isLoading:false
  };

  handleSearch = (name) =>{
    this.props.youtube.search(name)
    .then(videos => this.setState({
      videos : videos,
      isLoading:true
    }));
  }

  defaultVideos = () =>{
    this.props.youtube.default()
    .then(videos => this.setState({
      videos : videos,
      isLoading:true
    }));
  }

  catchVideoInfo = (id, info) => {
    this.setState({videoInfo : {
      id : id,
      title : info.snippet.title,
      description : info.snippet.description
    }});
  }

  clearVideoInfo = () => {
    this.setState({videoInfo : null});
  }

  componentDidMount() {
    this.defaultVideos();
  }

  render() {
    let {videos, videoInfo, isLoading} = this.state;
    return (
      <>
        <Header onSearch={this.handleSearch} returnMain={this.defaultVideos} clear={this.clearVideoInfo} />
        <section className={styles.section}>
          {
            videoInfo ? <WatchVideo videoInfo={videoInfo}/> : null
          }
          <VideoList videos={videos} isLoading={isLoading} catchVideo={this.catchVideoInfo} />
        </section>
      </>
    );
  }
}

export default App;