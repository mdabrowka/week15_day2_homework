import React from 'react';

class Song extends React.Component {
  render(){
    // if (!this.props.song) return null;

    return (
      <div>
        <h3>{this.props.position}</h3>
       <h4>Artist: {this.props.artist}</h4>
       <h5>Title: {this.props.title}</h5>
    </div>
    );
  }
}

export default Song;
