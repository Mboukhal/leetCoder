import { appWindow } from "@tauri-apps/api/window";
import "./TitleBarMain.css"



export const TitleBar = () => {

  return (
    <div data-tauri-drag-region className="title-bar">

      <div className="title-box">
        <p className="title">LeetCoder</p>
      </div>
      <div className="tb-box">
        <div className="minimize" onClick={_ => appWindow.minimize()}></div>
        <div className="maximize" onClick={ _=> appWindow.toggleMaximize()}></div>
        <div className="close" onClick={ _=> appWindow.close()}></div>
      </div>

      <div className="tb-menu">
        {/* <button className="menu-logo">  </button>*/}
       
      </div>

    </div>
  );


}