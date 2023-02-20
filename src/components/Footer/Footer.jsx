import './Footer.scss';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="container2">
            <div className="flex1">
                <div className="flex-child flex-child1 movies">
                    <div className='movies-container'>
                        <h2><NavLink to='#'>123Movies</NavLink></h2>
                        <ul>
                            <li><NavLink to='#'>Movies</NavLink></li>
                            <li><NavLink to='#'>Top IMDb</NavLink></li>
                            <li><NavLink to='#'>DMCA</NavLink></li>
                            <li><NavLink to='#'>FAQ</NavLink></li>
                            <li><NavLink to='#'>Advertising</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className="flex-child flex-child2 movies">
                    <div className='movies-container'>
                        <h2>Movies</h2>
                        <ul>
                            <li><NavLink to='#'>Action</NavLink></li>
                            <li><NavLink to='#'>History</NavLink></li>
                            <li><NavLink to='#'>Thriller</NavLink></li>
                            <li><NavLink to='#'>Sci-Fi</NavLink></li>
                            <li><NavLink to='#'>Crime</NavLink></li>
                        </ul>
                    </div>
                </div>

                <div className="flex-child flex-child3">
                    <div className='subscribe-container'>
                        <h2>Subscribe</h2>
                        <p>Subscribe to 123Moviesfree.net RSS Feed to receive updates on movies, tv-series and news</p>
                        <form className="email">
                            <input className="email-input" type="email" placeholder="Enter your email"/>
                            <button className="subscribe" type="button">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="flex-child flex-child4">
                    <div className='info-container'>
                        <div className='logo-container'>
                            <img src="https://ww1.123moviesfree.net/static/logo-footer.png" alt="logo" />
                        </div>
                        <p>123Movies - Watch Movies Online For Free and Download the latest movies without Registration at 123Moviesfree.net</p>
                        <div className='link-container'>
                            <NavLink className='link' to='#'>
                                <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                                <span>Connect with us on facebook</span>
                            </NavLink>
                        </div>
                        <p className='warning'>
                            Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex2">
                <p>Copyright © 2023 123moviesfree.net . All Rights Reserved</p>
            </div>
        </div>
    );
}