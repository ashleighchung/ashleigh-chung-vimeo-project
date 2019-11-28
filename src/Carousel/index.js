import React, {Fragment, useState}from 'react';
import classNames from 'classnames';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { slideInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components'

import HuntForTheWilderPeople from './hunter.jpg';
import NichtsPassiert from './nicht.jpg';
import ViceVersa from './vice_versa.png';
import TheFourthPhase from './fourth_phase.jpg';
import FullMoon from './full_moon.jpg';

import './carousel.scss';

function Carousel() {

    const movies = [
        {
            movieTitle: "Hunt for the Wilderpeople",
            movieDescription: "Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do In The Shadows.",
            moviePoster: HuntForTheWilderPeople,
            movieStyleName: "HuntForTheWilderPeople",
        },
        {
            movieTitle: "Nichts passiert / A Decent Man",
            movieDescription: "A Swiss family takes a ski vacation and runs into trouble when the father, the titular decent man, finds himself in a series of moral quandaries.",
            moviePoster: NichtsPassiert,
            movieStyleName: "NichtsPassiert",
        },
        {
            movieTitle: "Vice Versa",
            movieDescription: "Come along with the Good Company crew as they travel throughout the US, Japan, BC and Quebec to showcase skiing in the best way possible.",
            moviePoster: ViceVersa,
            movieStyleName: "ViceVersa",
        },
        {
            movieTitle: "The Fourth Phase",
            movieDescription: "From the creators of The Art of FLIGHT, Red Bull Media House presents THE FOURTH PHASE, a snowboarding epic starring iconic athlete Travis Rice.",
            moviePoster: TheFourthPhase,
            movieStyleName: "TheFourthPhase",
        },
        {
            movieTitle: "Full Moon",
            movieDescription: "Be inspired by women who push boundaries. FULL MOON showcases the legends, current icons and future prodigies of this ever-evolving lifestyle sport.",
            moviePoster: FullMoon,
            movieStyleName: "FullMoon",
        }
    ]

    const arrayLength = movies.length;
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    // const SlideInLeft = styled.div`animation: 2s ${keyframes`${slideInLeft}`} infinite`;

    const getWallpaper = (n) => classNames("wallpaper", `${n}Wallpaper`);
    const getColorOverlay = (n) => classNames("colorOverlay", `${n}ColorOverlay`);
    const getBuyNowButton = (n) => classNames("buyNowButton", `${n}BuyNowButton`);

    const LeftArrow = () => {
        return (
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

    const RightArrow = () => {
        return (
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

    const CarouselItem = ({currentMovie}) => {
        return (
            <div className = "carouselWrapper">
                <div>
                    <img className = "moviePoster" src = {currentMovie.moviePoster} alt = "Movie Poster" />
                </div>
                <div className = "movieText">
                    <div className = "movieTitle">{currentMovie.movieTitle}</div>
                    <p className = "movieDescription">{currentMovie.movieDescription}</p>
                    <div className = "buttonWrapper">
                        <button className = {getBuyNowButton(currentMovie.movieStyleName)}><IoIosArrowForward className = "buttonArrow"/>Buy Now</button>
                        <button className = "watchTrailerButton">Watch Trailer</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Fragment >
                <div className = {getWallpaper(movies[currentMovieIndex].movieStyleName)}></div>
                <div className = {getColorOverlay(movies[currentMovieIndex].movieStyleName)} />

                <div className = "carousel">
                    <LeftArrow />
                    {/* <div className = "leftMovie"><CarouselItem currentMovie = {movies[currentMovieIndex - 1 === -1 ? arrayLength - 1 : currentMovieIndex - 1]} /></div> */}
                    {/* <div className = "currentMovie"> */}
                        <CarouselItem currentMovie = {movies[currentMovieIndex]} />
                    {/* </div> */}
                    {/* <div className = "rightMovie"><CarouselItem  currentMovie = {movies[currentMovieIndex + 1 === arrayLength ? 0 : currentMovieIndex + 1]} /></div> */}
                    <RightArrow />
                </div>
        </Fragment>
    );
}

export default Carousel;