// import reactLogo from "./assets/react.svg";
import "./App.css";
import { User, Link } from "@nextui-org/react";

function App() {
  return (
    <div className="outerContainer">
      <div className="wrapper">
        <h1>Digital Wallet</h1>
        <User
          name="Nicolás Aldao"
          className="user lg"
          description={
            <Link
              href="https://next-portfolio-beta-lac.vercel.app/"
              size="sm"
              isExternal
            >
              @nicolasaldao
            </Link>
          }
          avatarProps={{
            src: "https://next-portfolio-beta-lac.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.5686b1e2.png&w=640&q=75",
          }}
        />
      </div>
    </div>
  );
}

export default App;
