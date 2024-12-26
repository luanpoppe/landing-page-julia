import { Link } from "react-router-dom";

export function HomeContactButtons({
  isHomeOrContact,
  isMenuOpen,
}: {
  isHomeOrContact: () => "home" | "contact" | undefined;
  isMenuOpen: boolean;
}) {
  return (
    <div>
      <div
        className={`d-flex justify-content-center ${
          isMenuOpen ? "flex-column align-items-center" : ""
        }`}
        style={{ gap: "32px" }}
      >
        <Link to={"/"}>
          <div style={isHomeOrContact() == "home" ? { fontWeight: "700" } : {}}>
            Home
          </div>
        </Link>
        <Link
          to={"/contact"}
          style={isHomeOrContact() == "contact" ? { fontWeight: "700" } : {}}
        >
          <div>Contact</div>
        </Link>
      </div>
    </div>
  );
}
