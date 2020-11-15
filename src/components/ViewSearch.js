import React from "react";
import Paginations from "./Paginations";
import Card from "./Card";
import CardPerson from "./CardPerson";

const ViewSearch = (props) => {
  let serials = props.serials;
  let actors = props.actors;

  return (
    <div>
      <div>
        <>
          <h4> Movies </h4>
          {serials.map((serial) => (
            <Card shows={serial.show}></Card>
          ))}
        </>
      </div>
      <div>
        <Paginations type={"serials"}></Paginations>
      </div>

      <br />

      <div>
        <div>
          <h4> Actors </h4>
          {actors.map((actor) => (
            <CardPerson person={actor.person}></CardPerson>
          ))}
        </div>
      </div>
      <div>
        <Paginations type={"actors"}></Paginations>
      </div>
    </div>
  );
};
export default ViewSearch;
