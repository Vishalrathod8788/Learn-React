import myStyle from "./Netflix.module.css";

import styled from "styled-components";

import "./style.css";
export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;
  const ButtonThapa = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    color: var(--btn-color);
    font-weight: bold;
    cursor: pointer;
    radius: 5px;
  `;

  //  In styled-components, you can pass a function within the template literal to dynamically set CSS properties based on props or state.

  const Rating = styled.h3`
    font-size: 1.6rem;
    color: #7dcea0;
    text-transform: capitalize;
  `;

  const ratingClass = rating >= 8.5 ? myStyle.super_hit : myStyle.average;

  return (
    <li className={myStyle.card}>
      <div>
        <img src={img_url} alt={name} />
      </div>
      {/* <div className={myStyle["card-content"]}> */}
      <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
        <h2>Name: {name} </h2>
        <Rating>
          Rating:
          <span className={`${myStyle.rating} ${ratingClass}`}>{rating}</span>
        </Rating>
        <p>Summary: {description} </p>
        <p>Genre: {genre.join(", ")} </p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank">
          {/* <button style={btn_style}>Watch Now</button> */}
          <ButtonThapa rating={rating}>Watch Now</ButtonThapa>
        </a>
      </div>
    </li>
  );
};
