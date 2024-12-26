import { IoClose } from "react-icons/io5";
import { mainColors } from "../utils/colors";
import { HomeContactButtons } from "../sections/HomeLeft/HomeContactButtons";

export function MenuMobile({
  isMenuOpen,
  setIsMenuOpen,
  isHomeOrContact,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isHomeOrContact: () => "home" | "contact" | undefined;
}) {
  function handleCloseMenu() {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  }

  {
    return isMenuOpen ? (
      <div
        style={{
          backgroundColor: mainColors.purple,
          width: "100vw",
          height: "100vh",
          zIndex: "100",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <div className="d-flex justify-content-between w-100 p-5">
          <h5 className="clickable" onClick={handleCloseMenu}>
            Julia
          </h5>
          <IoClose className="clickable" size={32} onClick={handleCloseMenu} />
        </div>
        <div className="h-100 d-flex flex-column" style={{ marginTop: "40%" }}>
          <HomeContactButtons
            isHomeOrContact={isHomeOrContact}
            isMenuOpen={isMenuOpen}
          />
        </div>
      </div>
    ) : (
      ""
    );
  }
}
