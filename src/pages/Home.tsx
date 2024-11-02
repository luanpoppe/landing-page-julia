import { mainColors } from "../utils/colors";

const profilePictureSize = "145px";

export function Home() {
  return (
    <>
      <div className="d-flex h-100">
        <section
          style={{
            backgroundColor: mainColors.purple,
            color: mainColors.whiteLetters,
            padding: "40px",
          }}
          className="col-4 d-flex flex-column justify-content-center align-items-center h-100"
          id="left-home"
        >
          <div>
            <img
              src="https://storage.googleapis.com/uxfolio/66e0c774b0349900027d9a16/portfolios/078b3ec3-5259-4c0d-b4a5-bc73c915c215/Fk1oLRDzOW6vZzuR.jpeg"
              alt="Profile Picture"
              style={{
                width: profilePictureSize,
                height: profilePictureSize,
                borderRadius: "50%",
                marginBottom: "40px",
              }}
            />
          </div>
          <h1 style={{ marginBottom: "22px" }}>Julia</h1>
          <div style={{ marginBottom: "60px", textAlign: "center" }}>
            I am passionate about using my creativity to tackle challenges. I
            have a 7-year career in Graphic Design and Web Design and am
            currently specializing and seeking an opportunity in the UX/UI
            Design field.
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ gap: "32px" }}
          >
            <div style={{ fontWeight: "700" }}>Home</div>
            <div>Contact</div>
          </div>
        </section>
        <section
          className="d-flex justify-content-center gap-4 text-center"
          id="right-home"
          style={{ marginTop: "10%", marginRight: "10%", marginLeft: "10%" }}
        >
          <div>
            <img src="../public/home-picture-1.png" alt="Project Sanar" />
            <h4 className="font-varela-round" style={{ paddingTop: "22px" }}>
              Rebranding for all Sanar's Landing Pages - Click to see more!
            </h4>
            <div>2023</div>
          </div>
          <div>
            <img
              src="../public/home-picture-2.png"
              alt="Project navigation for shopping centers"
            />
            <h4 className="font-varela-round" style={{ paddingTop: "22px" }}>
              Navigation app for shopping centers - Click to see more!
            </h4>
            <div>2024</div>
          </div>
        </section>
      </div>
    </>
  );
}
