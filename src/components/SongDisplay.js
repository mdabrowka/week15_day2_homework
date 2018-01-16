import React from 'react';
// import Song from './Song';

class SongDisplay extends React.Component {

//   constructor(props) {
//     super(props);
// }


render() {

	// console.log(this.props.songs[0]);
  if (this.props.songs[0]) {
    console.log(this.props.songs[0].title.label);
  }

  //console.log(this.props.songs[0].title.label);

    // const songNodes = this.props.songs.feed.entry.map(function(song, index){
    //   return (
    //   <ul>
    //   <li key={index} {song['im:name']} </li>
    //   </ul>
    //   );
    // })

  return (
    <div className="song-display">
      {/* {songNodes} */}
    </div>

    )
}



}


export default SongDisplay;
