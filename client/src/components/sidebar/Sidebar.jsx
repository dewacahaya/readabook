import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=>
    {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span> 
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste laudantium a 
                ipsum aspernatur delectus reiciendis unde suscipit quidem quisquam tempora minima, 
                soluta odit reprehenderit consectetur. Rem atque impedit modi sequi?</p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span> 
      <ul className="sidebarList">
        {cats.map((c)=>(
          <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
          </Link>
        ))}
      </ul>
      </div>
    </div>
  )
}
