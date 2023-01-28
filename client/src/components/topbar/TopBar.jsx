import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = false;

  return (

    <div className="top">
        <div className="topLeft">
        <img className="topLogo" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="" />
        </div>

        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                    GENRE
                </li>
                <div className="topSearch">
                    <div className="searchItem">
                        <button className="searchBtn">
                            Search
                        </button>
                        <input type="Search" placeholder="Search" className="searchInput" />
                    </div>
                </div>
            </ul>
        </div>
        
        <div className="topRight">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/write">WRITE</Link>
                </li>
                <li className="topListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
            {
                user ? (
                    <img className="topImg" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="" />
                ) : ( 
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )
            }
            </div>
    </div>
  )
}
