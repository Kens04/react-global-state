import { EditButton } from "./EditButton";

const style = {
  width: "300px",
  height: "200px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "#e9dbd0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

// シンプルになった！
export const Card = () => {
  // export const Card = props => {
  // props として管理者フラグを受け取る
  // const { isAdmin } = props;

  return (
    <div style={style}>
      <p>山田太郎</p>
      {/* <EditButton isAdmin={isAdmin}></EditButton> */}
      <EditButton></EditButton>
    </div>
  );
};