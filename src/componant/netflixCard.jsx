import React, { useState, useRef } from "react";
import '../css/netflixcard.css';
import movieData from "../api/movieData.json";
import NetflixLargeCard from "../componant/NetflixLargeCard";

export default function NetflixCard() {
    

    const [selectedCard, setSelectedCard] = useState(null);
    const movieName = [];

    const handleclick = (cardName) => {
        setSelectedCard(cardName);
    }
    const handleCloseModel = () => {
        setSelectedCard(null);
    }

    const scrollRef = useRef(null);
    const cardLeftRef = useRef(null);
    const cardRightRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -1060, behavior: 'smooth' });
        cardLeftRef.current.classList.add("disable");
        cardRightRef.current.classList.add("enable");
        cardLeftRef.current.classList.remove("enable");
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 1060, behavior: 'smooth' });
        cardLeftRef.current.classList.add("enable");
        cardRightRef.current.classList.add("disable");
        cardRightRef.current.classList.remove("enable");
    };

    return (
        <div className="netflix-data">
            <h1 className="trending-now" >Trending Now</h1>
            <button className="scroll-btn scroll-left" onClick={scrollLeft} ref={cardLeftRef}>◀</button>

            {
                movieData.map((curElem) => {
                    movieName.push(curElem.name);
                    if (curElem.name === selectedCard) {
                        return (
                            <NetflixLargeCard key={curElem.name} selectedCard={selectedCard} handleCloseModel={handleCloseModel} cardData={curElem} />
                        )
                    }

                    return null;
                })
            }

            <div className="all-min-cards" ref={scrollRef}>

                {
                    movieName.map((name, index) => (
                        <NetFlixMinCard key={index} minCardNum={(index + 1).toString()} onClick={() => handleclick(name)} />
                    ))
                }
                
            </div>
            <button className="scroll-btn scroll-right" onClick={scrollRight} ref={cardRightRef}>▶</button>
        </div>
    );
}

function NetFlixMinCard({minCardNum, onClick}) {
    return (
        <div onClick={onClick} className="min-card" style={{backgroundImage: `url(./src/image/movieMiniThumb/${minCardNum}.webp)`}}>
            <h1 className="min-card-num">{minCardNum}</h1>
        </div>
    );
}
