import React from "react";
import RocketList from "../components/RocketList";

export const Home = () => {


  return (
    <main className="mx-auto max-w-5xl py-24 px-4 space-y-4">
      <h1 className="font-bold text-7xl">Rockets</h1>
      <RocketList />
    </main>
  );
};
