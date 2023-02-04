import { useState } from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const [color, setColor] = useState("");

  const handleMouseOver = () => {
    setColor("green");
  };

  const handleMouseOut = () => {
    setColor("");
  };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button>
        <a
          href="/"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{
            textDecorationLine: "none",
            color: color,
            textTransform: "uppercase",
          }}
        >
          go back
        </a>
      </button>
    </div>
  );
}
