export function ProfileImage(props: {
  imgSize?: string;
  isInHeader?: boolean;
}) {
  const imageSize = props.imgSize ?? "145px";

  return (
    <div className={`${props.isInHeader ? "" : "mb-3"}`}>
      <img
        src="https://storage.googleapis.com/uxfolio/66e0c774b0349900027d9a16/portfolios/078b3ec3-5259-4c0d-b4a5-bc73c915c215/Fk1oLRDzOW6vZzuR.jpeg"
        alt="Profile Picture"
        style={{
          width: imageSize,
          height: imageSize,
          borderRadius: "50%",
        }}
      />
    </div>
  );
}
