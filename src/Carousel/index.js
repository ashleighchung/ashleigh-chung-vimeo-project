import React, {Fragment, useState}from 'react';
import classNames from 'classnames';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import HuntForTheWilderPeople from './hunter.jpg';
import NichtsPassiert from './nicht.jpg';
import ViceVersa from './vice_versa.png';
import TheFourthPhase from './fourth_phase.jpg';
import FullMoon from './full_moon.jpg';

import './carousel.scss';

/* ARRAY OF ALL MOVIES (PLUS THEIR PROPERTIES) IN CAROUSEL */
function Carousel() {
    const movies = [
        {
            movieTitle: "Hunt for the Wilderpeople",
            movieDescription: "Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do In The Shadows.",
            moviePoster: HuntForTheWilderPeople,
            movieStyleName: "HuntForTheWilderPeople",
            movieTrailer: "https://player.vimeo.com/video/182894323",
            movieBuyLink: "https://vimeo.com/ondemand/huntforthewilderpeople",
        },
        {
            movieTitle: "Nichts passiert / A Decent Man",
            movieDescription: "A Swiss family takes a ski vacation and runs into trouble when the father, the titular decent man, finds himself in a series of moral quandaries.",
            moviePoster: NichtsPassiert,
            movieStyleName: "NichtsPassiert",
            movieTrailer: "https://player.vimeo.com/video/369732210",
            movieBuyLink: "https://vimeo.com/ondemand/nichtspassiertadecentman",
        },
        {
            movieTitle: "Vice Versa",
            movieDescription: "Come along with the Good Company crew as they travel throughout the US, Japan, BC and Quebec to showcase skiing in the best way possible.",
            moviePoster: ViceVersa,
            movieStyleName: "ViceVersa",
            movieTrailer: "https://player.vimeo.com/video/180836160",
            movieBuyLink: "https://vimeo.com/ondemand/viceversafilm",
        },
        {
            movieTitle: "The Fourth Phase",
            movieDescription: "From the creators of The Art of FLIGHT, Red Bull Media House presents THE FOURTH PHASE, a snowboarding epic starring iconic athlete Travis Rice.",
            moviePoster: TheFourthPhase,
            movieStyleName: "TheFourthPhase",
            movieTrailer: "https://player.vimeo.com/video/182511910",
            movieBuyLink: "https://vimeo.com/ondemand/thefourthphase",
        },
        {
            movieTitle: "Full Moon",
            movieDescription: "Be inspired by women who push boundaries. FULL MOON showcases the legends, current icons and future prodigies of this ever-evolving lifestyle sport.",
            moviePoster: FullMoon,
            movieStyleName: "FullMoon",
            movieTrailer: "https://player.vimeo.com/video/180790969",
            movieBuyLink: "https://vimeo.com/ondemand/fullmoonsnowboard",
        }
    ]

    const arrayLength = movies.length;

    /* STATE HOOK THAT SETS THE DEFAULT MOVIE TO INDEX 0 AND ALLOWS THE STATE OF THE CAROUSEL TO BE DETERMINDED BY THE CURRENTMOVIEINDEX */
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    
    /* CONSTS USED FOR DYNAMIC WALLPAPERS/COLOR OVERLAYS/BUTTON COLORS FOR EACH MOVIE */
    const getWallpaper = (n) => classNames("wallpaper", `${n}Wallpaper`);
    const getColorOverlay = (n) => classNames("colorOverlay", `${n}ColorOverlay`);
    const getBuyNowButton = (n) => classNames("buyNowButton", `${n}BuyNowButton`);

    /* FUNCTIONALITY OF LEFT SIDE ARROW */
    const LeftArrow = () => {
        return (
            /* ONCLICK ALLOWS DECREMENTATION OF CURRENTMOVIEINDEX */
            <button className = "sideButton" onClick = {() => {
                if(currentMovieIndex === 0)
                    setCurrentMovieIndex(arrayLength - 1);
                else
                    setCurrentMovieIndex(currentMovieIndex - 1);
            }}>
            <IoIosArrowBack />
            </button>
        ); 
    }

    /* FUNCTIONALITY OF RIGHT SIDE ARROW */
    const RightArrow = () => {
        return (
            /* ONCLICK ALLOWS INCREMENTATION OF CURRENTMOVIEINDEX */
            <button className = "sideButton" onClick = {() => {
                if(currentMovieIndex === arrayLength - 1)
                    setCurrentMovieIndex(0);
                else
                    setCurrentMovieIndex(currentMovieIndex + 1);
            }}>
            <IoIosArrowForward />
            </button>
        );
    }

    /* ACTUAL CONTENT OF CAROUSEL USING DYNAMIC DATA FROM MOVIE ARRAY DEPENDING ON CURRENTMOVIEINDEX*/
    const CarouselItem = ({currentMovie}) => {
        return (
            <div className = "carouselWrapper">
                <div><img className = "moviePoster" src = {currentMovie.moviePoster} alt = "Movie Poster" /></div>
                <div className = "movieText">
                    <div className = "movieTitle">{currentMovie.movieTitle}</div>
                    <p className = "movieDescription">{currentMovie.movieDescription}</p>
                    <div className = "buttonWrapper">
                        <a href = {movies[currentMovieIndex].movieBuyLink} className = "buyNowLink"><button className = {getBuyNowButton(currentMovie.movieStyleName)}><IoIosArrowForward className = "buttonArrow"/>Buy Now</button></a>
                        <a href = {movies[currentMovieIndex].movieTrailer}><button className = "watchTrailerButton">Watch Trailer</button></a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Fragment >
            {/* WALLPAPER AND COLOR TINT FOR EACH SLIDE */}
            <div className = {getWallpaper(movies[currentMovieIndex].movieStyleName)}></div> 
            <div className = {getColorOverlay(movies[currentMovieIndex].movieStyleName)} />

            {/* ACTUAL CONTENT OF CAROUSEL */}
            <div className = "carousel">
                <LeftArrow />
                <CarouselItem currentMovie = {movies[currentMovieIndex]} />
                <RightArrow />
            </div>
        </Fragment>
    );
}

export default Carousel;


