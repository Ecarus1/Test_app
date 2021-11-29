import musicService from "../../services/MusicService";
import { useEffect, useState } from "react";

import "./Card.scss";

function Card({name, changePlayListMusic, idAlbum, imgSrc}) {
    // const original = "image/original.jpg";
    const [dataMusic, setDataMusic] = useState([]);

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        musicService.getCurrentAllTracksInAlbum(idAlbum)
            .then(onLoadedMusicData);
    };

    const onLoadedMusicData = (newDataMusic) => {
        setDataMusic(newDataMusic);
    };
    
    return(
        <div className="card" onClick={() => changePlayListMusic(dataMusic)}>
            <img className="img" src={imgSrc} alt="" />
            <div className="card__border">
                <h2 className="card__group">{name}</h2>
            </div>
        </div>
    );
}

export default Card;