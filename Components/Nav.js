// import Home from "./app/assets/icons/home.svg";
const Search = "/assets/icons/search.svg";
const Explore = "/assets/icons/explore.svg";
const Reels = "/assets/icons/reels.svg";
const Messages = "/assets/icons/messenger.svg";
const Heart = "/assets/icons/heart.svg";
const Create = "/assets/icons/add.svg";
const More = "/assets/icons/more.svg";
const profileIcon = "/assets/default-user.png";
export default function Nav(){
    return (
        <div className="Dashboard">
        {/* <img
          src={instaLogo}
          className="App-logo"
          alt="InstaClone Logo"
          width="200rem"
        /> */}
       
        <section className="NAV">
          <button className="Nav-button ">
            <img className="Nav-Icon Home" src ={Search} alt="HomeIcon" />
            <a>Home</a>
          </button>
          <button className="Nav-button ">
            <img className="Nav-Icon Search" src={Search} alt="SearchIcon" />
            <p>Search</p>
          </button>
          <button className="Nav-button">
            <img className="Nav-Icon Explore" src={Explore} alt="ExploreIcon" />
            <p>Explore</p>
          </button>
          <button className="Nav-button">
            <img className="Nav-Icon Reels" src={Reels} alt="ReelIcon" />
            <p>Reels</p>
          </button>
          <button className="Nav-button">
            <img
              className="Nav-Icon Messages"
              src={Messages}
              alt="MessageIcon"
            />
            <p>Messages</p>
          </button>
          <button className="Nav-button">
            <img
              className="Nav-Icon Notifications"
              src={Heart}
              alt="LikeIcon"
            />
            <p>Notifications</p>
          </button>
          <button className="Nav-button">
            <img className="Nav-Icon Create" src={Create} alt="CreateIcon" />
            <p>Create</p>
          </button>
          <button className="Nav-button">
            <img
              className="Nav-Icon IProfile"
              src={profileIcon}
              alt="ProfileIcon"
            />
            <p>Profile</p>
          </button>
          <section className="MoreSection">
            <button className="Nav-button More">
              <img className="Nav-Icon " src={More} alt="ProfileIcon" />
              <p>More</p>
            </button>
          </section>
        </section>
      </div>
    );
    }