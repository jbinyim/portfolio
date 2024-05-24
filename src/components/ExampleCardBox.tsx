import React from "react";
import { db, DbData } from "../db";
import Spinner from "react-bootstrap/Spinner";
import ExampleCard from "./ExampleCard";

interface IExampleCardBoxProps {
  menuToggle: string;
}

const ExampleCardBox = ({ menuToggle }: IExampleCardBoxProps) => {
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
  } else if (menuToggle === "react") {
    const arr = db.example.filter(isExample);
    return (
      <>
        {arr.map((item) => (
          <ExampleCard key={item.id} item={item} />
        ))}
      </>
    );
  } else if (menuToggle === "javascript") {
    const arr = db.example.filter(isExample);
    return (
      <>
        {arr.map((item) => (
          <ExampleCard key={item.id} item={item} />
        ))}
      </>
    );
  } else {
    return <Spinner animation="border" variant="dark" />;
  }
};

export default ExampleCardBox;
