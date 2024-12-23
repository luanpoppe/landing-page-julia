import { Link } from "react-router-dom";
import { ProfileImage } from "../../components/ProfileImage";

export function ProfileHeader() {
  return (
    <>
      <div
        className="d-flex align-items-center"
        style={{ paddingTop: "40px", gap: "10px" }}
      >
        <ProfileImage imgSize="50px" />
        <div className="d-flex flex-column">
          <Link style={{ marginBottom: "-5px" }} to={"/"}>
            Julia
          </Link>
          <Link to={"/"} className="d-block" style={{ fontSize: "12px" }}>
            <em>UX designer</em>
          </Link>
        </div>
      </div>
    </>
  );
}
