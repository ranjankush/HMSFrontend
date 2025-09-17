import React, { useState } from "react";
import RoomResult from "../common/RoomResult";
import RoomSearch from "../common/RoomSearch";




const HomePage = () => {

    const [roomSearchResults, setRoomSearchResults] = useState([]);

    // Function to handle search results
    const handleSearchResult = (results) => {
        setRoomSearchResults(results);
    };

    return (
        <div className="home">
            {/* HEADER / BANNER ROOM SECTION */ }
            <section>
                <header className="header-banner">
                    <img src="./assets/images/hotel.webp" alt="Taj Hotel" className="header-image" />
                    <div className="overlay"></div>
                    <div className="animated-texts overlay-content">
                        <h1>
                            Welcome to <span className="hotel-color">Taj Hotel</span>
                        </h1><br />
                        <h3>Step into a heaven of comfort and care</h3>
                    </div>
                </header>
            </section>

            {/* SEARCH/FIND AVAILABLE ROOM SECTION */ }
            <RoomSearch handleSearchResult={ handleSearchResult } />
            <RoomResult roomSearchResults={ roomSearchResults } />

            <h4><a className="view-rooms-home" href="/rooms">All Rooms</a></h4>

            <h2 className="home-services">Services at <span className="hotel-color">Taj Hotel</span></h2>

            {/* SERVICES SECTION */ }
            <section className="service-section"><div className="service-card">
                <img src="./assets/images/reception-hotel.jpg" alt="Air Conditioning" />
                <div className="service-details">
                    <h3 className="service-title">Air Conditioning</h3>
                    <p className="service-description">Stay cool and comfortable throughout your stay with our individually controlled in-room air conditioning.</p>
                </div>
            </div>
                <div className="service-card">
                    <img src="./assets/images/bar.jpg" alt="Mini Bar" />
                    <div className="service-details">
                        <h3 className="service-title">Mini Bar</h3>
                        <p className="service-description">Enjoy a convenient selection of beverages and snacks stocked in your room's mini bar with no additional cost.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/Parking.jpeg" alt="Parking" />
                    <div className="service-details">
                        <h3 className="service-title">Parking</h3>
                        <p className="service-description">We offer on-site parking for your convenience . Please inquire about valet parking options if available.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/wifi-hotel.jpg" alt="WiFi" />
                    <div className="service-details">
                        <h3 className="service-title">WiFi</h3>
                        <p className="service-description">Stay connected throughout your stay with complimentary high-speed Wi-Fi access available in all guest rooms and public areas.</p>
                    </div>
                </div>

            </section>
            {/* AVAILABLE ROOMS SECTION */ }
            <section className="footer-section">
                <div className="content">
                    <p>
                       <h4>Hotel Taj is the right choice for visitors who are searching for a combination of charm and a joyful nature view to explore the surroundings.
                        Our rooms are appointed to make your stay more comfortable!!.
                    </h4> 
                       </p>
                </div>

                <div className="footer-details">
                    <div className="footer-item">
                        <p>
                            <img className="icon" src="./assets/images/location.png" alt="Location" />
                            <a className="footer-link" href="/">
                                Apollo Bandar, Colaba, Mumbai, Maharashtra 400001
                            </a>
                        </p>

                    </div>

                    <div className="footer-item">
                        <p>
                            <img className="icon" src="./assets/images/gmail.png" alt="Mail" />
                            <a className="footer-link" href="/">
                                care.tajhotels@gmail.com
                            </a>
                        </p>

                    </div>

                    <div className="footer-item">
                        <p>
                            <img className="icon" src="./assets/images/viber.png" alt="Phone" />
                            <a className="footer-link" href="/">
                                +91 (22) 6601 1825
                            </a>
                        </p>

                    </div>
                </div>



                <div className="social">
                    <div className="cont">
                    <p> <h4>Social Media</h4></p>
                    </div>
                    

                    <div >

                        <img className="social-icon" src="./assets/images/facebook.png" alt="Facebook" />
                        <img className="social-icon" src="./assets/images/instagram.png" alt="Facebook" />
                        <img className="social-icon" src="./assets/images/twitter.png" alt="Facebook" />
                    </div>
                </div>
            </section>

        </div>
    );
}

export default HomePage;
