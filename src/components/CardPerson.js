import React from "react";
import { CardDesing, Image, CardData } from "./cardStyled";

const CardPerson = (props) => {
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
        {props.person.image ? (
          <Image src={props.person.image.medium} alt={""}></Image>
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
        {<h2>{props.person.name}</h2>}
        {props.person.birthday ? (
          <h3 style={{ fontSize: "16px" }}>
            Birthday: {props.person.birthday}{" "}
          </h3>
        ) : (
          ""
        )}
        {props.person.deathday ? (
          <h3 style={{ fontSize: "16px" }}>
            Deathday: {props.person.deathday}{" "}
          </h3>
        ) : (
          ""
        )}
        {props.person.gender ? (
          <h3 style={{ fontSize: "16px" }}>Gender: {props.person.gender} </h3>
        ) : (
          ""
        )}
        {props.person.country ? (
          <h3 style={{ fontSize: "16px" }}>
            Country: {props.person.country.name}{" "}
          </h3>
        ) : (
          ""
        )}
      </CardData>
    </CardDesing>
  );

  return content;
};

export default CardPerson;
