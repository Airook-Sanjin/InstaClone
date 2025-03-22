const profileIcon = "/assets/default-user.png";
const More = "/assets/icons/more.svg";
export default function Post(){
    return <div className="Post-cards">
    <section className="Post-Author">
      <img
        className="Profile-Icon"
        alt="Profile Img"
        src={profileIcon}
      />
      <p>User1</p>
      <button className="Nav-button Post-More" title="More">
        <img src={More} alt="More" />
      </button>
    </section>
    <img
      className="Card-Photo"
      src={
        "https://redec.org/app/plugins/instagram-feed/img/thumb-placeholder.png"
      }
      alt="PlaceHolderIMG"
      // height="1080px"
      // width="1350px"
    />
    <section className="Card-Caption">
      <img
        className="Profile-Icon"
        alt="Profile Img"
        src={profileIcon}
      />
      <p className="Caption">
        case flag south itself fill alphabet pride member shorter longer
        distance catch trunk basic missing rope broken raise shot
        machine machinery throat second however
      </p>
    </section>
  </div>
}