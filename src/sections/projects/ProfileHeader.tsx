import { Link } from "react-router-dom";
import { ProfileImage } from "../../components/ProfileImage";

export function ProfileHeader({ color }: { color?: string }) {
  console.log("color: ", color);
  return (
    <>
      <div
        className="d-flex align-items-center"
        style={{ paddingTop: "40px", gap: "10px" }}
      >
        <ProfileImage imgSize="50px" />
        <div className="d-flex flex-column">
          <Link style={{}} to={"/"}>
            <p
              style={{
                color: color ? `${color}` : "",
                marginBottom: "-5px",
              }}
            >
              Julia
            </p>
          </Link>
          <Link to={"/"} className="d-block" style={{ fontSize: "12px" }}>
            <em style={{ color: color ? `${color}` : "" }}>UX designer</em>
          </Link>
        </div>
      </div>
    </>
  );
}
