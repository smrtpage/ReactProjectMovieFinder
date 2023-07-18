import { ButtonBase } from "@mui/material";

function Button({ onClick }) {
  return (
    <div className="btnWrap">
      <ButtonBase
        sx={{
          backgroundColor: "#6d92ed",
          padding: "20px 40px",
          borderRadius: "10px",
          fontSize: "18px",
        }}
        onClick={onClick}
      >
        Load More
      </ButtonBase>
    </div>
  );
}
export default Button;
