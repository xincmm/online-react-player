import React from 'react';
import ReactDOM from 'react-dom';
import reactCreateClass from 'create-react-class';
import DPlayer from "../lib";

const Example = reactCreateClass({

  getInitialState() {
    return {
      canplay: false,
      play: false,
      currentTime: 0,
    };
  },

  seek() {
    this.dp.seek(10)
  },

  play() {
    this.dp.play()
  },

  pause() {
    this.dp.pause()
  },

  onLoad(dp) {
    this.dp = dp;
    this.dp.on('episode_change', currentIndex => {
      console.log(currentIndex)
    })
  },

  onCanplay() {
    this.setState({
      canplay: true,
    })
  },

  onPlay() {
    this.setState({
      play: true,
    })
  },

  onPause() {
    this.setState({
      play: false,
    })
  },

  onEnded() {
    console.log('end')
  },

  onError() {
    console.log('error')
  },

  onPlaying() {
    this.setState({
      currentTime: this.dp.video.currentTime,
    })
  },

  render() {
    return (
      <div style={{ width: 800, margin: '0px auto' }}>
        <DPlayer
          options={{
            loop: false,
            logo: 'https://avatars3.githubusercontent.com/u/17537749?v=4&s=460',
            video: {
              url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
              pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
            },
            showEpisode: true,
            currentEpisode: 0,
            episodes: [{"id":39464,"topicId":3606,"genre":"video","index":1,"name":"第1集","path":"http://202.119.245.12:8080/2019-12-23/想见你/1.mp4"},{"id":39465,"topicId":3606,"genre":"video","index":2,"name":"第2集","path":"http://202.119.245.12:8080/2019-12-23/想见你/2.mp4"},{"id":39466,"topicId":3606,"genre":"video","index":3,"name":"第3集","path":"http://202.119.245.12:8080/2019-12-23/想见你/3.mp4"},{"id":39467,"topicId":3606,"genre":"video","index":4,"name":"第4集","path":"http://202.119.245.12:8080/2019-12-23/想见你/4.mp4"},{"id":39468,"topicId":3606,"genre":"video","index":5,"name":"第5集","path":"http://202.119.245.12:8080/2019-12-23/想见你/5.mp4"},{"id":39469,"topicId":3606,"genre":"video","index":6,"name":"第6集","path":"http://202.119.245.12:8080/2019-12-23/想见你/6.mp4"},{"id":39470,"topicId":3606,"genre":"video","index":7,"name":"第7集","path":"http://202.119.245.12:8080/2019-12-23/想见你/7.mp4"},{"id":39471,"topicId":3606,"genre":"video","index":8,"name":"第8集","path":"http://202.119.245.12:8080/2019-12-23/想见你/8.mp4"},{"id":39472,"topicId":3606,"genre":"video","index":9,"name":"第9集","path":"http://202.119.245.12:8080/2019-12-23/想见你/9.mp4"},{"id":39473,"topicId":3606,"genre":"video","index":10,"name":"第10集","path":"http://202.119.245.12:8080/2019-12-23/想见你/10.mp4"},{"id":39474,"topicId":3606,"genre":"video","index":11,"name":"第11集","path":"http://202.119.245.12:8080/2019-12-23/想见 /11.mp4"},{"id":39475,"topicId":3606,"genre":"video","index":12,"name":"ç¬¬12é","path":"http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /12.mp4"},{"id":39652,"topicId":3606,"genre":"video","index":13,"name":"ç¬¬13é","path":"http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /13.mp4"},{"id":39653,"topicId":3606,"genre":"video","index":14,"name":"ç¬¬14é","path":"http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /14.mp4"},{"id":40200,"topicId":3606,"genre":"video","index":15,"name":"ç¬¬15é","path":"http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /15.mp4"},{"id":40199,"topicId":3606,"genre":"video","index":16,"name":"ç¬¬16é","path":"http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /16.mp4"},{"id":40789,"topicId":3606,"genre":"video","index":17,"name":"ç¬¬17é","path":"http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /17.mp4"},{"id":40790,"topicId":3606,"genre":"video","index":18,"name":"ç¬¬18é","path":"http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /18.mp4"},{"id":41654,"topicId":3606,"genre":"video","index":19,"name":"ç¬¬19é","path":"http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /19.mp4"},{"id":41655,"topicId":3606,"genre":"video","index":20,"name":"ç¬¬20é","path":"http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /20.mp4"},{"id":41784,"topicId":3606,"genre":"video","index":21,"name":"ç¬¬21é","path":"http://202.119.245.12:8080/2019-12-23/æ³è§ä½ /21.mp4"},{"id":41785,"topicId":3606,"genre":"video","index":22,"name":"ç¬¬22é","path":"http://202.119.245.12:8080/2019-12-23/想见你/22.mp4"},{"id":41826,"topicId":3606,"genre":"video","index":23,"name":"第23集","path":"http://202.119.245.12:8080/2019-12-23/想见你/23.mp4"},{"id":41827,"topicId":3606,"genre":"video","index":24,"name":"第24集","path":"http://202.119.245.12:8080/2019-12-23/想见你/24.mp4"},{"id":42060,"topicId":3606,"genre":"video","index":25,"name":"第25集","path":"http://202.119.245.12:8080/2019-12-23/想见你/25.mp4"},{"id":42061,"topicId":3606,"genre":"video","index":26,"name":"第26集","path":"http://202.119.245.12:8080/2019-12-23/想见你/26.mp4"},{"id":42062,"topicId":3606,"genre":"video","index":27,"name":"第27集","path":"http://202.119.245.12:8080/2019-12-23/想见你/27.mp4"}],
          }}
          onLoad={this.onLoad}
          onPlay={this.onPlay}
          onCanplay={this.onCanplay}
          onPause={this.onPause}
          onEnded={this.onEnded}
          onError={this.onError}
          onPlaying={this.onPlaying}
        />
        <button onClick={this.play}>play</button>
        <button onClick={this.pause}>pause</button>
        <button onClick={this.seek}>seek 10</button>

        <h3>canplay {JSON.stringify(this.state.canplay)}</h3>
        <h3>play {JSON.stringify(this.state.play)}</h3>
        <h3>currentTime {this.state.currentTime}</h3>
      </div>
    );
  }
});

ReactDOM.render(
  <Example />,
  document.getElementById('example')
);