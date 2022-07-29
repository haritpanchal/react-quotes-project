import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY = [
  {
    id: "q1",
    author: "Harit",
    text: "Learning react is fun",
  },
  {
    id: "q2",
    author: "Panchal",
    text: "Code is poetry",
  },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY} />;
};

export default AllQuotes;
