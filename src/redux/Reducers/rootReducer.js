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
      name: 'اللي بينا حياة',
      artist: 'artist',
      src: 'https://www.esm3.com/mp3/play.asp?sid=299282',
      album: 'N/A',
      uploadDate: new Date(Date.now()),
      img: "https://27mi124bz6zg1hqy6n192jkb-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/Our-Top-10-Songs-About-School-768x569.png"
    },
    {
      id: v4(),
      name: 'أنت الحظ',
      artist: 'amr diab',
      src: 'https://www.esm3.com/mp3/play.asp?sid=297526',
      album: 'عيشني',
      uploadDate: new Date(Date.now()),
      img: "https://esm3cdn.com/singers/albums/21175.gif"
    },
    {
      id: v4(),
      name: 'spider man',
      artist: 'Marvel studio',
      src: 'https://anghamiaudio.akamaized.net/mp43/196398364883_001_ISRC_QZMEN2132789_MD5_3900f0ab350e5ac183f29530cddec4a1-2.m4a?anghakamitoken=st=1654610253~exp=1654610733~acl=*~hmac=3cb50506f8ed31e10f13534112d646924f6f29a8b84bd1ca24c43071ac1f0b57&ngsw-bypass=true',
      album: 'No Way Home',
      uploadDate: new Date(Date.now()),
      img: "https://img.youm7.com/ArticleImgs/2021/11/15/382488-%D8%A7%D9%84%D8%A8%D9%88%D8%B3%D8%AA%D8%B1-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF-%D9%84%D9%84%D9%81%D9%8A%D9%84%D9%85.jpg"
    }
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