import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
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
  const match = useRouteMatch();
  const quote = DUMMY.find((quote) => quote.id === detail.quoteId);

  if (!quote) {
    return <p>No Quote Found!! </p>;
  }
  return (
    <section>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
