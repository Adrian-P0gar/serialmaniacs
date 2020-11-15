import React from "react";
import { useGlobal } from "reactn";
import { ButtonGroup, Button } from "react-bootstrap";

const Paginations = (props) => {
  const [pageShows, setPageShows] = useGlobal("pageShows");
  const [pageActors, setPageActors] = useGlobal("pageActors");

  let type = props.type;
  let page;

  if (type === "serials") {
    page = pageShows;
  } else if (type === "actors") {
    page = pageActors;
  }

  function previousPage() {
    if (type === "serials") {
      setPageShows(pageShows - 1);
    } else if (type === "actors") {
      setPageActors(pageActors - 1);
    }
  }

  function nextPage() {
    if (type === "serials") {
      setPageShows(pageShows + 1);
    } else if (type === "actors") {
      setPageActors(pageActors + 1);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ButtonGroup aria-label="Basic example">
        {page === 1 ? (
          <Button variant="secondary" disabled>
            Previous
          </Button>
        ) : (
          <Button variant="secondary" onClick={previousPage}>
            Previous
          </Button>
        )}
        <Button variant="secondary"> {page} </Button>
        <Button variant="secondary" onClick={nextPage}>
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Paginations;
