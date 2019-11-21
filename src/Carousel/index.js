import React, {Fragment, useState}from 'react';
import './carousel.scss';
import Fourth from './fourth_phase.jpg';
import Hunter from './hunter.jpg';
import Nicht from './nicht.jpg';
import Vice from './vice_versa.png';
import Moon from './full_moon.jpg';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Carousel() {

    const [currentMovie, currentStyle] = useState(0);

    const movie = [
        {
            movieTitle: "Hunt for the Wilderpeople",
            movieDescription: "Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. From the director of What We Do In The Shadows.",
            moviePoster: Hunter
        },
        {
            movieTitle: "Nichts passiert / A Decent Man",
            movieDescription: "A Swiss family takes a ski vacation and runs into trouble when the father, the titular decent man, finds himself in a series of moral quandaries.",
            moviePoster: Nicht
        },
        {
            movieTitle: "Vice Versa",
            movieDescription: "Come along with the Good Company crew as they travel throughout the US, Japan, BC and Quebec to showcase skiing in the best way possible.",
            moviePoster: Vice
        },
        {
            movieTitle: "The Fourth Phase",
            movieDescription: "From the creators of The Art of FLIGHT, Red Bull Media House presents THE FOURTH PHASE, a snowboarding epic starring iconic athlete Travis Rice.",
            moviePoster: Fourth
        },
        {
            movieTitle: "Full Moon",
            movieDescription: "Be inspired by women who push boundaries. FULL MOON showcases the legends, current icons and future prodigies of this ever-evolving lifestyle sport.",
            moviePoster: Moon
        }
    ]

    const arrayLength = movie.length;
    const [movieIndex, setMovieIndex] = useState(0);

    console.log("initial state", movieIndex);
    const LeftArrow = () => {
        return (
            <button className = "swipeButton" onClick = {() => {
                if(movieIndex === 0)
                    setMovieIndex(arrayLength - 1);
                else
                    setMovieIndex(movieIndex - 1);
                console.log("left clicked", movieIndex);
            }}>
            <IoIosArrowBack />
            </button>
        ); 
    }

    const RightArrow = () => {
        return (
            <button className = "swipeButton" onClick = {() => {
                if(movieIndex === arrayLength - 1)
                    setMovieIndex(0);
                else
                    setMovieIndex(movieIndex + 1);
                console.log("right clicked", movieIndex);
            }}>
            <IoIosArrowForward />
            </button>
        );
    }

    const CarouselItem = ({movie}) => {
        return (
            <div className = "carouselBackground">
                <div className = "posterWrapper">
                    <img className = "moviePoster" src = {movie.moviePoster} alt = "Movie Poster" />
                </div>
                <div className = "movieText">
                    <div className = "movieTitle">{movie.movieTitle}</div>
                    <p className = "movieDescription">{movie.movieDescription}</p>
                    <div className = "buttonWrapper">
                        <button className = "buyNow"><IoIosArrowForward className = "buttonArrow"/>Buy Now</button>
                        <button className = "watchTrailer">Watch Trailer</button>
                    </div>
                </div>
            </div>
        );
    }

  return (
        <Fragment >
            <div>
                <div className = "carouselWrapper"></div>

                {/* <img className = "carouselWallpaper" style = {{background: url(Fourth)}} /> */}
                <div className = "colorOverlay"></div>
                <div className = "carousel">
                        <LeftArrow />
                        <CarouselItem movie = {movie[movieIndex]} />
                        <RightArrow />
                </div>
            </div>
        </Fragment>
  );
}

export default Carousel;