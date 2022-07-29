import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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

const QuoteDetail = () => {
  const detail = useParams();
  const quote = DUMMY.find((quote) => quote.id === detail.quoteId);

  if (!quote) {
    return <p>No Quote Found!!</p>;
  }
  console.log(quote);
  return (
    <section>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={`/quotes/${detail.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
