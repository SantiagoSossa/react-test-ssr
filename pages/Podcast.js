import React from "react";
import heart from "../assets/heart_icon.svg";
import headphones from "../assets/headphones_icon.svg";
import cloud from "../assets/cloud_icon.svg";
import check from "../assets/check_icon.svg";
import play from "../assets/playbutton_icon.svg";

export default function Podcast(props) {
  return (
    <div className="Podcast">
      <div className="ImagePodcast">
        <img
          className="Image"
          src={props.icon}
          alt="podcast icon"
        ></img>
        <div className="ImagePlay">
            <img className="Play" src={play} alt="play"/>
        </div>
      </div>
      <div className="Content">
        <h1 className="Author">{props.author}</h1>
        <h1 className="Title">{props.title}</h1>
        <p className="Description">{props.description}</p>
        <div className="BottomBar">
          <div className="Icons">
            <div className="Icon">
              <img src={heart} alt="heart" />
              <p className="IconText">{props.likes}</p>
            </div>
            <div className="Icon">
              <img src={headphones} alt="headphones" />
              <p className="IconText">{props.reproductions}</p>
            </div>
            <div className="Icon">
              <img className="Cloud" src={cloud} alt="cloud" />
              <img className="Check" src={check} alt="check" />
            </div>
          </div>
          <div className="Percentage">
            <div className="PercentageBar"></div>
            <div className="PercentageBarCurrent"></div>
            <p className="PercentageText">{props.percentage}%</p>
          </div>
        </div>
        <div className="Dots"></div>
      </div>
      <div className="PodcastLine"></div>
    </div>
  );
}
