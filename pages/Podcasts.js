import React from "react";
// import classes from "../css/Podcasts.module.css";
import Podcast from "./Podcast";
import podcastimg1 from "../assets/podcast_img_1.svg";
import podcastimg2 from "../assets/podcast_img_2.svg";
import download from "../assets/download_icon.svg";
import Link from "./Link";

export default function Podcasts(props) {
  return (
    <div className="Podcasts">
      <h1 className="PlaylistsTitle">Playlist</h1>
      <div className="Downloads">
        <h1 className="DownloadsTitle">Downloads</h1>
        <img
          className="DownloadIcon"
          src={download}
          alt="download icon"
        />
        <div className="MobileLine"></div>
      </div>
      <Podcast
        icon={podcastimg1}
        author="JoeRogan"
        title="JRE MMA Show #75 with Dan Hardy"
        description="Joe is joined by former welterweight fighter and UFC commentator, Dan Hardy."
        likes="84"
        reproductions="96"
        percentage="48"
      ></Podcast>
      <Podcast
        icon={podcastimg2}
        author="myfavoritemurder"
        title="MFM Minisode 13"
        description="This week’s hometowns include serial killer connections and an acid trip discovery."
        likes="43"
        reproductions="87"
        percentage="79"
      ></Podcast>
      <Podcast
        icon={podcastimg1}
        author="JoeRogan"
        title="JRE MMA Show #75 with Dan Hardy"
        description="Joe is joined by former welterweight fighter and UFC commentator, Dan Hardy."
        likes="84"
        reproductions="96"
        percentage="48"
      ></Podcast>
      <div className="Links">
        <Link name="google" href="https://google.com"></Link>
        <Link name="yahoo" href="https://yahoo.com"></Link>
        <Link name="amazon" href="https://amazon.com"></Link>
      </div>
      <div className="PodcastsLine"></div>
    </div>
  );
}
