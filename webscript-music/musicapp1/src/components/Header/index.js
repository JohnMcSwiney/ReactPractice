import { searchIcon } from "../../assets";

const Header = (props) => {
    return (
        <header className="header flex justify-sb">
         <div className="logo">
            <img className="logoPic" src ="./diamond.png" alt="Trove"/>
         </div>
         <div>
            <img src={searchIcon}/>
         </div>
        </header>

      );
}
 
export default Header;