import React from "react";
import Social from "./Social";
import home from "./home.css"
import Data from "./Data"


const Home = () =>{
    return (
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <Social />

                    <div className="home_img">

                    </div>
                    <Data />
                </div>
            </div>
        </section>
    )
}

export default Home;