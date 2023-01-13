import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingTitle">
            <span className="settingUpdateTitle">Update Your Account</span>
            <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm">
            <label>Profile Picture</label>
            <div className="settingPP">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="" />
                <label htmlFor="fileInput">
                <i className="settingPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
            </div>
                <label>Username</label>
                <input type="text" placeholder="Decay"/>
                <label>Email</label>
                <input type="email" placeholder="decay@gmail.com"/>
                <label>Password</label>
                <input type="password"/>
            <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
