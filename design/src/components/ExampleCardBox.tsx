import React from "react";
import { db, DbData } from "../db";
import ExampleCard from "./ExampleCard";

interface IExampleCardBox {
  menuToggle: string;
}

const ExampleCardBox = ({ menuToggle }: IExampleCardBox) => {
  const isExample = (ex: DbData) => {
    if (ex.type === menuToggle) {
      return true;
    }
  };

  if (menuToggle === "all") {
    return (
      <>
        {db.example.map((item) => (
          <ExampleCard key={item.id} item={item} />
        ))}
      </>
    );
  }
  if (menuToggle === "react") {
    const arr = db.example.filter(isExample);
    return (
      <>
        {arr.map((item) => (
          <ExampleCard key={item.id} item={item} />
        ))}
      </>
    );
  }
  if (menuToggle === "javascript") {
    const arr = db.example.filter(isExample);
    return (
      <>
        {arr.map((item) => (
          <ExampleCard key={item.id} item={item} />
        ))}
      </>
    );
  }
  return <div>ExampleCardBox</div>;
};

export default ExampleCardBox;
