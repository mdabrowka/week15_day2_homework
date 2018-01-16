import React from 'react';
import Song from './Song';

class SongDisplay extends React.Component {

render() {

	// console.log(this.props.songs[0]);
  if (this.props.songs[0]) {
    console.log(this.props.songs[0].title.label);
  }

  //console.log(this.props.songs[0].title.label);

    const songNodes = this.props.songs.map(function(song, index){
      return (
       <Song key = {index}
         position={index+1}
         title={song['im:name'].label}
         artist ={song['im:artist'].label}/>
      );
    })

  return (
    <div className="song-display">
      {songNodes}
    </div>
  )
}
}


export default SongDisplay;
