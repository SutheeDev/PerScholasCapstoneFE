import { useParams } from "react-router-dom";
import { useGlobalContext } from "../App";
import { Navbar } from "../components";
import styled from "styled-components";
import formatDate from "../utils/formatDate";

import { TiStarFullOutline } from "react-icons/ti";
import { BiDollar } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiEdit2 } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";

const Restaurant = () => {
  const { id } = useParams();

  const { restaurants } = useGlobalContext();
  const restaurant = restaurants.find((res) => res._id === id);
  console.log(restaurant);

  const date = new Date(restaurant.visitDate);
  const formattedDate = formatDate(date);
  console.log(formattedDate);

  return (
    <main>
      <Navbar />
      <Content>
        <div className="page-wrapper">
          <IoIosCloseCircleOutline />
          <GoKebabHorizontal />
          <div className="restaurant-img"></div>
          <div className="restaurant-details">
            <h2>{restaurant.name}</h2>
            <div>
              <p>Date</p>
              <p>{restaurant.cuisine}</p>
            </div>
            <p>{restaurant.review}</p>
            <div>
              <div className="rating">
                <p>Rating</p>
                <TiStarFullOutline />
              </div>
              <div className="price">
                <p>Price</p>
                <BiDollar />
              </div>
            </div>
          </div>
        </div>
      </Content>
    </main>
  );
};
export default Restaurant;

const Content = styled.div`
  /* display: flex; */
  min-height: calc(100vh - 137px);
`;
