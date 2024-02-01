import {IoSearch} from "../../assets";
const SearchBox = () => {
    return (
        <div className="search-box">
            <IoSearch  className="search-icon"/>
            <input className="search-input" placeholder="Search ideas or opportunites..."/>
        </div>
    )
}

export default SearchBox;