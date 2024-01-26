import { useEffect, useState } from "react";
import "./home.css";
import { CardBalance } from "../../organisms/CardBalance/index";
import { getUserById } from "../../../services/apiDigitalWallet";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserById("65b32b744548d2c06ed245b2");
      setData(res?.data);
      return;
    };
    try {
      fetchData();
    } catch (e) {
      console.log("err ", e);
    }
  }, []);

  return (
    <div className="outerContainer">
      <div className="wrapper">
        <p className="m-6 ml-2 text-left">{`${data?.firstname} ${data?.lastname}`}</p>
        <CardBalance info={data} />
      </div>
    </div>
  );
}
