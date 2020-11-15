import React from "react";
import { Link } from "react-router-dom";
import { CardDesing, Image, CardData, Button } from "./cardStyled";

const Card = (props) => {
  let cutSummary;

  if (props.shows.summary === undefined) {
    cutSummary = "Not Summary";
  } else {
    cutSummary =
      props.shows.summary.length > 450
        ? props.shows.summary.slice(0, 450) + " ..."
        : props.shows.summary;
  }

  let content = (
    <CardDesing>
      {"      "}
      <div
        style={{
          flex: "1 1 auto",
          marginRight: "2rem",
        }}
      >
        {" "}
        {props.shows.image ? (
          <Image src={props.shows.image.medium} alt={""}></Image>
        ) : (
          <Image
            src={
              "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
            }
            alt={""}
          ></Image>
        )}
      </div>

      <CardData>
        <h2>{props.shows.name}</h2>
        <h3 style={{ fontSize: "16px" }}>Runtime: {props.shows.runtime} </h3>
        <h4 style={{ fontSize: "16px" }}>
          Summary:{" "}
          <span
            dangerouslySetInnerHTML={{
              __html: cutSummary,
            }}
          ></span>{" "}
        </h4>
        <Link to={"/show/" + props.shows.id}>
          {" "}
          <Button> View more details </Button>
        </Link>
      </CardData>
    </CardDesing>
  );

  return content;
};

export default Card;
