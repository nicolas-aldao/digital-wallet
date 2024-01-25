import "./home.css";
import { CardBalance } from "../../organisms/CardBalance/index";

export default function Home() {
  return (
    <div className="outerContainer">
      <div className="wrapper">
        <CardBalance />
      </div>
    </div>
  );
}
