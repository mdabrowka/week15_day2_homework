import React from 'react';
import SongDisplay from '../components/SongDisplay.js';


class SongsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

      request.addEventListener('load', () => {
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const songList = JSON.parse(jsonString);
      const data = songList.feed.entry;
      this.setState({songs : data });
  });
  }

  render() {
    return (
      <div className="song-container">
        <h2>ITunes UK Chart Hits</h2>
       <SongDisplay songs={this.state.songs}/>
      </div>
    );
  }
}



export default SongsContainer;
