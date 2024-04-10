function Header() {
  const header = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div style={header}>
      <div>Side content</div>
      <div style={{ justifySelf: "center" }}>MLB Tracker</div>
      <div>something!!</div>
    </div>
  );
}
export default Header;
