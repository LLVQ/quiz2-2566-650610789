export const PostOwner = (props) => {
  return (
    <div>
      <div className="vstack gap-3">
        <div className="d-flex align-items-center gap-3">
          <img
            src="/profileImages/12345.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <span className="fw-semibold fs-5">{props.name}</span>
        </div>

        <span>{props.text}</span>
        

        <div className="d-flex align-items-center gap-1">
          <img src="/like.svg" width={20}></img>
          <span className="text-muted">{props.like}</span>
        </div>
        <hr className="m-0 border" />
      </div>
    </div>
  );
};
