import { useState } from "react";
import musicService from "../../services/MusicService";

import CardList from "../CardList/CardList";
import Header from "../Header/Header";
import Info from "../Info/Info";
import Player from "../Player/Player";
import Playlist from "../Playlist/Playlist";
import SearchPanel from "../SearchPanel/SearchPanel";

// const original = "image/original.jpg";
import "./App.scss";

function App() {
    const [dataMusic, setDataMusic] = useState([
        {
            id: 1,
            title: "Самый дорогой",
            artist: "Нервы",
            imgSrc: "image/original.jpg",
            src: "music/Nervi-SmiyDorogoiChelovek.mp3",
            status: false
        }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    
    const changePlayListMusic = (songs) => {
        setDataMusic(songs);
        setCurrentSongIndex(0);
        console.log("Состояние изменилось");
    };

    const res = musicService.getAllTracks();
    console.log(res.data);

    return(
        <div className="container">
            <Header/>
            <Info />
            <CardList changePlayListMusic={changePlayListMusic}/>
            <Playlist dataPlaylist={dataMusic} />
            <Player dataMusic={dataMusic} setDataMusic={setDataMusic} currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex}/>
            <SearchPanel />
        </div>
    );
}

export default App;
