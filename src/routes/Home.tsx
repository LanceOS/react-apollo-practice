import React from "react";
import { useQuery } from "@apollo/client/react";
import { GET_ROCKETS } from "../queries/RocketQueries.ts";

export const Home = () => {
  const { data, loading, error } = useQuery(GET_ROCKETS);
  console.log("Data: ", data);
  console.log("Error: ", error);
  return (
    <main class="mx-auto max-w-5xl py-24 px-4">
      <h1>Hello World</h1>
    </main>
  );
};
