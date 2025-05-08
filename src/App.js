import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Travel</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#discover" className="nav__link">Discover</a>
                        </li>
                        <li className="nav__item">
                            <a href="#place" className="nav__link">Places</a>
                        </li>
                        
                    </ul>

                    <div className="nav__dark">
                       
                        <span className="change-theme-name">Dark mode</span>
                        <i className="ri-moon-line change-theme" id="theme-button"></i>
                    </div>

                    <i className="ri-close-line nav__close" id="nav-close"></i>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className="ri-function-line"></i>
                </div>
            </nav>
        </header>

        <main className="main">
            
            <section className="home" id="home">
                <img src="assets/img/home1.jpg" alt="" className="home__img"/>

                <div className="home__container container grid">
                    <div className="home__data">
                        <span className="home__data-subtitle">Discover your place</span>
                        <h1 className="home__data-title">Explore The <br/> Best <b>Beautiful <br/> Beaches</b></h1>
                        <a href="#" className="button">Explore</a>

                    </div>

                    <div className="home__social">
                        <a href="https://www.facebook.com/" target="_blank" className="home__social-link">
                            <i className="ri-facebook-box-fill"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="home__social-link">
                            <i className="ri-instagram-fill"></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank" className="home__social-link">
                            <i className="ri-twitter-fill"></i>
                        </a>
                    </div>

                    <div className="home__info">
                        <div>
                            <span className="home__info-title">5 best places to visit</span>
                            <a href="" className="button button--flex button--link home__info-button">
                                More <i className="ri-arrow-right-line"></i>
                            </a>
                        </div>

                        <div className="home__info-overlay">
                            <img src="assets/img/home2.jpg" alt="" className="home__info-img"/>
                        </div>
                    </div>
                </div>
            </section>

           
            <section className="about section" id="about">
                <div className="about__container container grid">
                    <div className="about__data">
                        <h2 className="section__title about__title">More Information <br/> About The Best Beaches</h2>
                        <p className="about__description">You can find the most beautiful and pleasant places at the best 
                            prices with special discounts, you choose the place we will guide you all the way to wait, get your 
                            place now.
                        </p>
                        <a href="#" className="button">Reserve a place</a>
                    </div>

                    <div className="about__img">
                        <div className="about__img-overlay">
                            <img src="assets/img/about1.jpg" alt="" className="about__img-one"/>
                        </div>

                        <div className="about__img-overlay">
                            <img src="assets/img/about2.jpg" alt="" className="about__img-two"/>
                        </div>
                    </div>
                </div>
            </section>
            
           
            <section className="discover section" id="discover">
                <h2 className="section__title">Discover the most <br/> attractive places</h2>
                
                <div className="discover__container container swiper-container">
                    <div className="swiper-wrapper">
                       
                        <div className="discover__card swiper-slide">
                            <img src="assets/img/discover1.jpg" alt="" className="discover__img"/>
                            <div className="discover__data">
                                <h2 className="discover__title">Bali</h2>
                                <span className="discover__description">24 tours available</span>
                            </div>
                        </div>

                        
                        <div className="discover__card swiper-slide">
                            <img src="assets/img/discover2.jpg" alt="" className="discover__img"/>
                            <div className="discover__data">
                                <h2 className="discover__title">Hawaii</h2>
                                <span className="discover__description">15 tours available</span>
                            </div>
                        </div>

                       
                        <div className="discover__card swiper-slide">
                            <img src="assets/img/discover3.jpg" alt="" className="discover__img"/>
                            <div className="discover__data">
                                <h2 className="discover__title">Hvar</h2>
                                <span className="discover__description">18 tours available</span>
                            </div>
                        </div>

                        
                        <div className="discover__card swiper-slide">
                            <img src="assets/img/discover4.jpg" alt="" className="discover__img"/>
                            <div className="discover__data">
                                <h2 className="discover__title">Whitehaven</h2>
                                <span className="discover__description">32 tours available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
            <section className="experience section">
                <h2 className="section__title">With Our Experience <br/> We Will Serve You</h2>

                <div className="experience__container container grid">
                    <div className="experience__content grid">
                        <div className="experience__data">
                            <h2 className="experience__number">20</h2>
                            <span className="experience__description">Year <br/> Experience</span>
                        </div>

                        <div className="experience__data">
                            <h2 className="experience__number">75</h2>
                            <span className="experience__description">Complete <br/> tours</span>
                        </div>

                        <div className="experience__data">
                            <h2 className="experience__number">650+</h2>
                            <span className="experience__description">Tourist <br/> Destination</span>
                        </div>
                    </div>

                    <div className="experience__img grid">
                        <div className="experience__overlay">
                            <img src="assets/img/experience1.jpg" alt="" className="experience__img-one"/>
                        </div>
                        
                        <div className="experience__overlay">
                            <img src="assets/img/experience2.jpg" alt="" className="experience__img-two"/>
                        </div>
                    </div>
                </div>
            </section>

          
            <section className="video section">
                <h2 className="section__title">Video Tour</h2>

                <div className="video__container container">
                    <p className="video__description">Find out more with our video of the most beautiful and 
                        pleasant places for you and your family.
                    </p>

                    <div className="video__content">
                        <video id="video-file">
                            <source src="/assets/video/video.mp4" type="video/mp4" />
                        </video>

                        <button className="button button--flex video__button" id="video-button">
                            <i className="ri-play-line video__button-icon" id="video-icon"></i>
                        </button>
                    </div>
                </div>
            </section>

           
            <section className="place section" id="place">
                <h2 className="section__title">Choose Your Place</h2>

                <div className="place__container container grid">
      
                    <div className="place__card">
                        <img src="assets/img/place1.jpg" alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4,8</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Bali</h3>
                                <span className="place__subtitle">Indonesia</span>
                                <span className="place__price">$2499</span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>

                    
                    <div className="place__card">
                        <img src="assets/img/place2.jpg" alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">5,0</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Bora Bora</h3>
                                <span className="place__subtitle">Polinesia</span>
                                <span className="place__price">$1599</span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>

                  
                    <div className="place__card">
                        <img src="assets/img/place3.jpg" alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4,9</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Hawaii</h3>
                                <span className="place__subtitle">EE.UU</span>
                                <span className="place__price">$3499</span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>

                  
                    <div className="place__card">
                        <img src="assets/img/place4.jpg" alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4,8</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Whitehaven</h3>
                                <span className="place__subtitle">Australia</span>
                                <span className="place__price">$2499</span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>

                    
                    <div className="place__card">
                        <img src="assets/img/place5.jpg" alt="" className="place__img"/>
                        
                        <div className="place__content">
                            <span className="place__rating">
                                <i className="ri-star-line place__rating-icon"></i>
                                <span className="place__rating-number">4,8</span>
                            </span>

                            <div className="place__data">
                                <h3 className="place__title">Hvar</h3>
                                <span className="place__subtitle">Croacia</span>
                                <span className="place__price">$1999</span>
                            </div>
                        </div>

                        <button className="button button--flex place__button">
                            <i className="ri-arrow-right-line"></i>
                        </button>
                    </div>
                </div>
            </section>

            
            <section className="subscribe section">
                <div className="subscribe__bg">
                    <div className="subscribe__container container">
                        <h2 className="section__title subscribe__title">Subscribe Our <br/> Newsletter</h2>
                        <p className="subscribe__description">Subscribe to our newsletter and get a 
                            special 30% discount.
                        </p>
    
                        <form action="" className="subscribe__form">
                            <input type="text" placeholder="Enter email" className="subscribe__input"/>
    
                            <button className="button">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            
           
            <section className="sponsor section">
                <div className="sponsor__container container grid">
                    <div className="sponsor__content">
                        <img src="assets/img/sponsors1.png" alt="" className="sponsor__img"/>
                    </div>
                    <div className="sponsor__content">
                        <img src="assets/img/sponsors2.png" alt="" className="sponsor__img"/>
                    </div>
                    <div className="sponsor__content">
                        <img src="assets/img/sponsors3.png" alt="" className="sponsor__img"/>
                    </div>
                    <div className="sponsor__content">
                        <img src="assets/img/sponsors4.png" alt="" className="sponsor__img"/>
                    </div>
                    <div className="sponsor__content">
                        <img src="assets/img/sponsors5.png" alt="" className="sponsor__img"/>
                    </div>
                </div>
            </section>
        </main>

       
            <div className="footer__container container grid">
                <div className="footer__content grid">
                    <div className="footer__data">
                        <h3 className="footer__title">Travel</h3>
                        <p className="footer__description">Travel you choose the <br/> destination, 
                            we offer you the <br/> experience.
                        </p>
                        <div>
                            <a href="https://www.facebook.com/" target="_blank" className="footer__social">
                                <i className="ri-facebook-box-fill"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" className="footer__social">
                                <i className="ri-twitter-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="footer__social">
                                <i className="ri-instagram-fill"></i>
                            </a>
                            <a href="https://www.youtube.com/" target="_blank" className="footer__social">
                                <i className="ri-youtube-fill"></i>
                            </a>
                        </div>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">About</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">About Us</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Features</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">New & Blog</a>
                            </li>
                        </ul>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">Company</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">Team</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Plan y Pricing</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Become a member</a>
                            </li>
                        </ul>
                    </div>
    
                    <div className="footer__data">
                        <h3 className="footer__subtitle">Support</h3>
                        <ul>
                            <li className="footer__item">
                                <a href="" className="footer__link">FAQs</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Support Center</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__rights">
                    <p className="footer__copy">&#169; 2021 Bedimcode. All rigths reserved.</p>
                    <div className="footer__terms">
                        <a href="#" className="footer__terms-link">Terms & Agreements</a>
                        <a href="#" className="footer__terms-link">Privacy Policy</a>
                    </div>
                </div>
            </div>
        
         
        <a href="#" className="scrollup" id="scroll-up">
            <i className="ri-arrow-up-line scrollup__icon"></i>
        </a>
        

        
    </div>
  );
}

export default App;
