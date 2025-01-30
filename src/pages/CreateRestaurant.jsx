import { useState } from "react";
import styled from "styled-components";
import { RateRangeEl } from "../components";

// Import Icons
import { TiStarFullOutline } from "react-icons/ti";
import { BiDollar } from "react-icons/bi";

const initialState = {
  name: "",
  cuisine: "",
  visitDate: "",
  rating: 0,
  review: "",
  priceRange: 0,
  image: "",
};

const CreateRestaurant = () => {
  const [entry, setEntry] = useState(initialState);

  return (
    <CardsContainer>
      <h1 className="heading">Create Entry</h1>
      <form action="">
        <input className="image-upload" type="file" name="" id="" />
        <div className="form-inputs">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
          <label htmlFor="review">Review</label>
          <textarea name="review" id="review"></textarea>
          <label htmlFor="cuisine">Cuisine</label>
          <input type="text" name="cuisine" id="cuisine" />
          <label htmlFor="date">Date Visit</label>
          <input type="date" name="date" id="date" />
          <label htmlFor="rating">Rating</label>
          <RateRangeEl
            Icon={TiStarFullOutline}
            num={5}
            onClick={(e) => setEntry({ ...entry, rating: e })}
            range={entry.rating}
          />
          <label htmlFor="price">Price</label>
          <RateRangeEl
            Icon={BiDollar}
            num={4}
            onClick={(e) => setEntry({ ...entry, priceRange: e })}
            range={entry.priceRange}
          />

          <button>Save Entry</button>
          <button>Cancel</button>
        </div>
      </form>
    </CardsContainer>
  );
};
export default CreateRestaurant;

const CardsContainer = styled.div`
  padding-right: var(--container-padding);
  width: 100%;
  /* background-color: aliceblue; */

  form {
    display: flex;
  }

  .image-upload,
  .form-inputs {
    width: 50%;
  }

  label,
  input {
    display: block;
  }
`;
