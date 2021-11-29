import Card from "../Card/Card";
import musicService from "../../services/MusicService";

import "./CardList.scss";
import { useEffect, useState } from "react";


function CardList({changePlayListMusic}) {
    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        musicService.getAllAlbums()
            .then(onCardListLoaded);
    };

    const onCardListLoaded = (newCardList) => {
        setCardList(newCardList);
    };

    const element = cardList.map(item => {
        return(
            <Card key={item.id} idAlbum={item.id} name={item.title} imgSrc={item.imgSrc} changePlayListMusic={changePlayListMusic}/>
        );
    });

    return(
        <div className="cards">
            {element}
        </div>
    );
}

export default CardList;