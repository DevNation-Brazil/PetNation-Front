import "./Header.css"


const logo = require('../../assets/logoPetNation.png')

function Header() {
    return (
        <div className="headerWrapper">
            <img className="logo" src={logo} />
        </div>
    );
}

export default Header;