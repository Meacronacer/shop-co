interface props {
  top?: string;
  bottom?: string;
  width?: string;
  current?: string;
}

const Line: React.FC<props> = ({
  top = "0px",
  bottom = "0px",
  width = "90%",
  current = "1px solid rgba(0, 0, 0, 0.1)",
}) => {
  return (
    <div
      style={{
        border: current,
        maxWidth: "1240px",
        margin: `${top} auto ${bottom} auto`,
        width: width,
        height: "0px",
        paddingInline: "10px",
      }}
    ></div>
  );
};

export default Line;
