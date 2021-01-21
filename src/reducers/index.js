import { combineReducers } from 'redux';

 const songsreducer = () => {

    return[
        {title: 'Umunumba', duration: '3:10'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'Ikinyafu', duration: '3:00'},
        {title: 'All Star', duration: '3:15'},
        {title: 'Kigoma', duration: '4:05'}
    ];
};

 const selectedSongReducer = (selectedSong=null, action) => {

    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;

};


export default combineReducers({

    songs: songsreducer,
    selectedSong: selectedSongReducer,
});