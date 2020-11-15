import React, { useEffect, useState } from "react";
import { fetchShowsData, fetchPersonsData } from "./connectApi";
import ViewSearch from "./ViewSearch";
import { setGlobal, useGlobal } from "reactn";

setGlobal({
  pageShows: 1,
  pageActors: 1,
});

export default function Search({ match }) {
  const [serials, setSerial] = useState([]);
  const [actors, setActors] = useState([]);

  const [pageShows] = useGlobal("pageShows");
  const [pageActors] = useGlobal("pageActors");

  const userInput = match.params.searchValue;

  useEffect(() => {
    let showsPromisData = fetchShowsData(userInput, pageShows);
    showsPromisData.then(function (result) {
      setSerial(result);

      let actorsPromisData = fetchPersonsData(userInput, pageActors);
      actorsPromisData.then(function (result) {
        setActors(result);
      });
    });
  }, [pageShows, pageActors]);

  return (
    <div>
      <ViewSearch actors={actors} serials={serials}></ViewSearch>
    </div>
  );
}
