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
        {/* <div className="page-wrapper"> */}
        <div className="icons">
          <IoIosCloseCircleOutline className="close-btn" />
          <GoKebabHorizontal className="menu-btn" />
        </div>
        <div className="restaurant-content">
          <div className="restaurant-img">
            <img src={restaurant.image} alt={restaurant.name} />
          </div>
          <div className="restaurant-details">
            <h2>{restaurant.name}</h2>
            <div>
              <p>{formattedDate}</p>
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
        {/* </div> */}
      </Content>
    </main>
  );
};
export default Restaurant;

const Content = styled.div`
  /* display: flex; */
  min-height: calc(100vh - 137px);
  background-color: aliceblue;
  /* position: relative; */
  padding: var(--container-padding);

  display: flex;
  flex-direction: column;

  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--container-padding);
  }

  .restaurant-content {
    display: flex;
    align-items: flex-start;
    gap: 55px;
  }

  .restaurant-img {
    width: 50%;
    height: fit-content;
    /* aspect-ratio: 1 / 1; */
    /* background-color: var(--bg-secondary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    border-radius: var(--card-radius);
    background-color: red;
    overflow: hidden;
  }

  .restaurant-img img {
    width: 100%;
    object-fit: cover;
    /* display: none; */
  }

  .restaurant-details {
    width: 50%;
  }

  /* .close-btn,
  .menu-btn {
    position: absolute;
    top: 0;
    cursor: pointer;
  }
  .close-btn {
    left: var(--container-padding);
  }

  .menu-btn {
    right: var(--container-padding);
  } */
`;
