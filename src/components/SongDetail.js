import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    if(!song){
        return <div><h3>Select Song</h3></div>
    }
    return <div>
        <h3><strong>Song Detail for:</strong></h3>
        Title: <strong>{song.title}</strong>
        <br/>
         Duration: <strong>{song.duration}</strong>
        </div>
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong}
};

export default connect(mapStateToProps)(SongDetail);

