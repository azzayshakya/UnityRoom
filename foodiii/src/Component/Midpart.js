import Css from '../Css/Midpart.css'
// import Images from '../Images/service-1.jpg'
import React from 'react';
import {Link} from 'react-router-dom'

const Midpart = () => {
    return <div>         
    <div className="services">
        <div>
            <div className="image">
                 <img className="ab"  src="../Images/service-1.jpg" alt=""/>
            </div>
            <div className="about">
                <Link to="/foodcards">
                <span>Order Online</span><br />
                stay home and order to your...
                </Link>
            </div>
        </div>

        <div>
            <div className="image">
                <img className="bc" src="../Images/service-2.jpg" alt=""/>
               
            </div>
            <div className="about">
                <span>Rooms</span>
                view the city's favourite d..
            </div>
        </div>
        <div>
            <div className="image">
                <img className="cd" src="../Images/clubs.jpg" alt=""/> 

            </div>
            <div className="about">
                <span>Nightlife and Clubs</span>
                Expore the city's top night...
            </div>
        </div>
    </div>



    <div className="collections">
        <h1>
            Collections
        </h1>
        <div className="explore">
            <div className="left">
                Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends

            </div>
            <div className="right">
                   All collection of delhi ncr <img src="../Images/right-arrow.png" alt=""/>
            </div>
        </div>
    </div>



    <div className="collection-image">
        <div>
            <div className="image">
                 <img className="ab"  src="../Images/collections-1.jpg" alt=""/>
            </div>
            <div className="about">
                <span>Order Online</span> 
                stay home and order to your...<img src="../Images/right-arrow-black.png" alt=""/>
            </div>
        </div>

        <div>
            <div className="image">
                <img className="bc" src="../Images/collections-2.jpg" alt=""/>
               
            </div>
            <div className="about">
                <span>dining</span>
                view the city's favourite d.. <img src="../Images/right-arrow-black.png" alt=""/>
            </div>
        </div>
        <div>
            <div className="image">
                <img className="cd" src="../Images/collection-3.jpg" alt=""/> 

            </div>
            <div className="about">
                <span>Nightlife and Clubs</span>
                Expore the city's top night...<img src="../Images/right-arrow-black.png" alt=""/>
            </div>
        </div>
        <div>
            <div className="image">
                <img className="cd" src="../Images/collections-4.jpg" alt=""/> 

            </div>
            <div className="about">
                <span>Nightlife and Clubs</span>
                Expore the city's top night...<img src="../Images/right-arrow-black.png" alt=""/>
            </div>
        </div>
    </div>
    


    <div className="popular">

        <p>Popular localities in and around <span>Delhi NCR</span></p>

        <div className="boxes">
            <div>Connaught place <br/> <span>258 places</span> <img src="../Images/right-arrow-black.png" alt=""/></div>
            <div>Connaught place <br/> <span>258 places</span> <img src="../Images/right-arrow-black.png" alt=""/></div>
            <div>Connaught place <br/> <span>258 places</span> <img src="../Images/right-arrow-black.png" alt=""/></div>
        </div>

        <div className="boxes">
            <div>Connaught place <br/> <span>258 places</span> <img src="../Images/right-arrow-black.png" alt=""/></div>
            <div>Connaught place <br/><span>258 places</span> <img src="../Images/right-arrow-black.png" alt=""/></div>
            <div>Connaught place <br/> <span>258 places</span> <img src="../Images/right-arrow-black.png" alt=""/></div>
        </div>

        <div className="boxes">
            <div>Connaught place <br/> <span>258 places</span><img src="../Images/right-arrow-black.png" alt=""/></div>
            <div>Connaught place <br/> <span>258 places</span><img src="../Images/right-arrow-black.png" alt=""/></div>
            <div>See <br/> <span>More</span><img src="../Images/right-arrow-black.png" alt=""/></div>
        </div>

    </div>


    <div className="download">

        <div className="left">
             
             <img src="../Images/mobile.avif" alt=""/>

        </div>
        <div className="right">
              
            <h1>Get the Foodiii app</h1>
              <h3> We will send you a link, open it on your phone to download <br/>the app</h3> 
              <div>
                <input type="radio"/>
              </div>
              <div className="input">
                <input type="email" placeholder="Email"/> <button>Share App Link</button>
              </div>
              <p>Download app from</p>
              <div className="down_img">
                <img className="img-1" src="../Images/google playwebp.webp" alt=""/><img src="../Images/appstore.webp" alt=""/>
              </div>

        </div>


    </div>

    <div className="explore-near-me">
        <h1>Explore options near me</h1>
        <div className="boxes">

        <div>Popular cuisines near me  <img src="../Images/right-arrow-black.png" alt=""/></div>
        <div>Popular restaurant types near me <img src="../Images/right-arrow-black.png" alt=""/></div>
        <div>Top restaurant chains <img src="../Images/right-arrow-black.png" alt=""/></div>
        <div>Cities we Deliver To <img src="../Images/right-arrow-black.png" alt=""/></div>


        </div>
        
    </div>
    </div>;
}

export default Midpart;