import { Link } from "@radix-ui/themes";
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
        <Link href="/home">MLB Live Tracker</Link>
      </h2>
      <SideNav></SideNav>
    </div>
  );
}
export default Header;
