import { Link } from "react-router-dom";
import { ProfileImage } from "../../components/ProfileImage";
import styled from "styled-components";

const ProfileHeaderMargin = styled(Link)`
  @media (min-width: 992px) {
    margin-bottom: -10px;
  }
`;

export function ProfileHeader({ color }: { color?: string }) {
  return (
    <>
      <div className="d-flex align-items-center" style={{ gap: "10px" }}>
        <ProfileImage isInHeader={true} imgSize="50px" />
        <div
          className="d-flex flex-column justify-content-center"
          style={{ height: "50px", maxHeight: "30px" }}
        >
          <ProfileHeaderMargin
            style={{ maxHeight: "30px" }}
            // className="profile-header-margin"
            to={"/"}
          >
            <p
              style={{
                color: color ? `${color}` : "",
                marginBottom: "-5px",
                fontSize: "16px",
                maxHeight: "30px",
              }}
            >
              Julia
            </p>
          </ProfileHeaderMargin>
          <Link to={"/"} className="d-block" style={{ fontSize: "12px" }}>
            <em style={{ color: color ? `${color}` : "" }}>UX designer</em>
          </Link>
        </div>
      </div>
    </>
  );
}
