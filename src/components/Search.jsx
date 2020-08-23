import React ,{ useState} from 'react'
import "./Search.css"
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import {Button} from "@material-ui/core"
import {useHistory} from "react-router-dom";
import {useStateValue} from "../StateProvider"
import { actionTypes } from '../reducer'

function Search( {hideButtons = false} ) {
    // eslint-disable-next-line no-empty-pattern
    const[{}, dispatch] = useStateValue();

    const [input, setinput] = useState("");
    const history = useHistory();

    const search = e => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        })


        history.push("/search");

    }

    return (
        <form className="search">
            <div className="search__input">
               <SearchIcon className="search__inputIcon" />
               <input value={input} onChange={e => setinput(e.target.value)} />
               <MicIcon />
            </div>

            { !hideButtons ? 
                (<div className="search__buttons">
                <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button onClick={search} variant="outlined">I'm Feeling Lucky</Button>
                </div>)
                        :
                (<div className="search__buttonsHidden">
                <Button  type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button onClick={search} variant="outlined">I'm Feeling Lucky</Button>
                </div>) }

            
        </form>
    )
}

export default Search
