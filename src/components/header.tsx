import SideNav from "./side-nav";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        width: "200px",
      }}
    >
      <h2 style={{ textAlign: "center", margin: "5px 0 5px 0" }}>
        <a href="/home">MLB Live Tracker</a>
      </h2>
      <SideNav></SideNav>
    </div>
  );
}
export default Header;
