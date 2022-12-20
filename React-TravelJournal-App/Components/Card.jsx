import React from "react";
import location from "../public/location.svg";

function CardTile(props) {
    const url = props.props.imageUrl;
    const locate = props.props.location.toUpperCase();
    const gmaps = props.props.googleMapsUrl;
    const title = props.props.title;
    const Sdate = props.props.startDate;
    const Edate = props.props.endDate;
    const description = props.props.description;
  return (
    <div className="Card">
      <div
        className="Card-img"
        style={{ backgroundImage: `url(${url})` }}
      ></div>
      <div className="Card-details">
        <p className="Card-details-location">
          <img src={location} /> {locate}{" "}
          <span>
            <a href={gmaps} target={"_blank"}>
              View on Google Maps
            </a>
          </span>
        </p>
        <p className="Card-details-title">{title}</p>
        <p className="Card-details-date">{`${Sdate} - ${Edate}`}</p>
        <p className="Card-details-decr">{description}</p>
      </div>
    </div>
  );
}

export default CardTile;
