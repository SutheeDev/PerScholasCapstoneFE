import { useState } from "react";
import { RateRangeEl, FormRow } from "../components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

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

  // Convert date into ISO format
  const handleDate = (date) => {
    const isoDate = date.toISOString();
    setEntry({ ...entry, visitDate: isoDate });
  };

  return (
    <CardsContainer>
      <h1 className="heading">Create Entry</h1>
      <form action="">
        <input className="image-upload" type="file" name="" id="" />
        <div className="form-inputs">
          {/* Restaurant name */}
          <FormRow
            type={"text"}
            name={"title"}
            value={entry.name}
            handleChange={(e) => setEntry({ ...entry, name: e.target.value })}
          />

          <label htmlFor="review">Review</label>
          <textarea name="review" id="review"></textarea>

          {/* Cuisine */}
          <FormRow
            type={"text"}
            name={"cuisine"}
            value={entry.cuisine}
            handleChange={(e) =>
              setEntry({ ...entry, cuisine: e.target.value })
            }
          />
          {/* <label htmlFor="cuisine">Cuisine</label>
          <input type="text" name="cuisine" id="cuisine" /> */}

          {/* visitDate */}
          {/* https://reactdatepicker.com/ */}
          <label htmlFor="date">Date Visit</label>
          <DatePicker
            selected={entry.visitDate}
            onChange={(date) => handleDate(date)}
            closeOnScroll={true}
            maxDate={new Date()}
            placeholderText="Click to select a date"
            dateFormat="MM / dd / yyyy"
          />

          {/* Rating */}
          <label htmlFor="rating">Rating</label>
          <RateRangeEl
            Icon={TiStarFullOutline}
            num={5}
            onClick={(e) => setEntry({ ...entry, rating: e })}
            range={entry.rating}
          />

          {/* PriceRange */}
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
