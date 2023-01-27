import './style.css';
import { searchIconGrey } from "../../assets";

const SearchInput = (props) => {
    return ( 
        <div className = "SearchInputContainer flex">
            <img src={searchIconGrey}/>
            <input className="plr-5" placeholder="Search..."/>
        </div>
     );
}
 
export default SearchInput;