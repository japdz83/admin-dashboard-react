import React from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import ImgWidgetSm from "../../img/widgets-img-1.jpg";
import ImgWidgetSm2 from "../../img/widgetSm-img-2.jpg";
import ImgWidgetSm3 from "../../img/widgetSm-img-3.jpg";
import ImgWidgetSm4 from "../../img/widgetSm-img-4.jpg";
import ImgWidgetSm5 from "../../img/widgetSm-img-5.jpg";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle"> New Join Membership</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src={ImgWidgetSm}
            alt="Img Widget Profile"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">John Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src={ImgWidgetSm2}
            alt="Img Widget Profile"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">John Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src={ImgWidgetSm3}
            alt="Img Widget Profile"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">John Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src={ImgWidgetSm4}
            alt="Img Widget Profile"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">John Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src={ImgWidgetSm5}
            alt="Img Widget Profile"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">John Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
