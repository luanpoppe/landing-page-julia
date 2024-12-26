import { Link } from "react-router-dom";

export function HomeContactButtons({
  isHomeOrContact,
  isMenuOpen,
  onClick,
}: {
  isHomeOrContact: () => "home" | "contact" | undefined;
  isMenuOpen: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <div>
      <div
        className={`d-flex justify-content-center ${
          isMenuOpen ? "flex-column align-items-center" : ""
        }`}
        style={{ gap: "32px" }}
      >
        <Link onClick={onClick} to={"/"}>
          <div style={isHomeOrContact() == "home" ? { fontWeight: "700" } : {}}>
            Home
          </div>
        </Link>
        <Link
          onClick={onClick}
          to={"/contact"}
          style={isHomeOrContact() == "contact" ? { fontWeight: "700" } : {}}
        >
          <div>Contact</div>
        </Link>
      </div>
    </div>
  );
}
