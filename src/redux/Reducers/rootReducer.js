import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
const initialState = {
  songs: [
    {
      id: v4(),
      name: 'عرفة',
      artist: 'legcy',
      src: 'https://res.cloudinary.com/sherycloud/video/upload/v1632331200/Lege-Cy_-_Arafa___%D8%B9%D8%B1%D9%81%D8%A9_-_%D9%84%D9%8A%D8%AC%D9%8A-%D8%B3%D9%8A_Official_Music_Video_dl9yax.mp4',
      album: 'N/A',
      uploadDate: new Date(Date.now()),
      img: "https://images.genius.com/4d65180b948263c69ef8c480b9aa40f1.1000x1000x1.png"
    },
    {
      id: v4(),
      name: 'tesla',
      artist: 'marwan moussa',
      src: 'https://serv100.albumaty.com/songs_2020/Albumaty.Com_mrwan_mwsy_tysla.mp3',
      album: 'florida',
      uploadDate: new Date(Date.now()),
      img: "https://www.albumaty.com/uploads/cdnimg/5d773e8e6c9e080c95cfe0ae411b9342.jpg"
    },
    {
      id: v4(),
      name: 'segara',
      artist: 'afroto',
      src: 'https://serv100.albumaty.com/songs_2020/Albumaty.Com_afrwtw_sygarh.mp3',
      album: 'N/A',
      uploadDate: new Date(Date.now()),
      img: "https://www.albumaty.com/uploads/cdnimg/33727fed199110e93ce4351ec82455f1.webp"
    },
  ]
}

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    addSong: (state, action) => {
      const song = {
        id: v4(),
        name: action.payload.name,
        src: action.payload.src,
        artist: action.payload.artist,
        album: action.payload.album,
        img: action.payload.img,
        uploadDate: new Date(Date.now())
      };
      state.songs.push(song);
    }
  }
})

export default songsSlice.reducer;

export const { addSong } = songsSlice.actions