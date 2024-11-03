import HomeLeft from "../sections/HomeLeft";

export function Home() {
  return (
    <>
      <div className="d-flex h-100">
        <HomeLeft></HomeLeft>
        <section
          className="d-flex justify-content-center gap-4 text-center"
          id="right-home"
          style={{ marginTop: "10%", marginRight: "10%", marginLeft: "10%" }}
        >
          <div>
            <img src="./home-picture-1.png" alt="Project Sanar" />
            <h4 className="font-varela-round" style={{ paddingTop: "22px" }}>
              Rebranding for all Sanar's Landing Pages - Click to see more!
            </h4>
            <div>2023</div>
          </div>
          <div>
            <img
              src="./home-picture-2.png"
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
