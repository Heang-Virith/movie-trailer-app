import './navbar.scss';

export default function Navbar() {

    const menus = [
        {
            route: '/about-us',
            name: 'About Us',
        },
        {
            route: '/solution',
            name: 'Solution',
        },
        {
            route: '/resource',
            name: 'Resource',
        },
        {
            route: '/pricing',
            name: 'Pricing',
        },
        {
            route: '/contact',
            name: 'Contact',
        }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src="https://www.logodesign.net/images/home-page-logo-03.png" alt="" />
                </div>
                <ul className="navbar-menus">
                    {
                        menus.map((menu, i) =>
                            <li key={i}>{ menu.name }</li>
                        )
                    }
                </ul>
                <button className="navbar-btn">Try for free</button>
            </div>
        </nav>
    );
}