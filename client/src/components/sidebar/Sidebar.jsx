import "./sidebar.css"

export default function Sidebar() {
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
        <li className="sidebarListItem">Comedy</li>
        <li className="sidebarListItem">Horror</li>
        <li className="sidebarListItem">Romance</li>
        <li className="sidebarListItem">Drama</li>
        <li className="sidebarListItem">Fantasy</li>
        <li className="sidebarListItem">Slice Of Life</li>
      </ul>
      </div>
    </div>
  )
}
