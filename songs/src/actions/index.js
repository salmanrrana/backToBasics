// this is the action creator
export const selectSong = song => {
  // return an action ...that is an object
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
