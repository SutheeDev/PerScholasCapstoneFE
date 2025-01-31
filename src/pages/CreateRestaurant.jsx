import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { RateRangeEl, FormRow } from "../components";
import apiClient from "../utils/apiClient";
import { useGlobalContext } from "../App";

// Import Icons
import { TiStarFullOutline } from "react-icons/ti";
import { BiDollar } from "react-icons/bi";

const initialState = {
  name: "",
  cuisine: "",
  visitDate: "",
  rating: 0,
  review: "",
  priceRange: "",
};

const CreateRestaurant = () => {
  const [entry, setEntry] = useState(initialState);

  const { user } = useGlobalContext();
  const userId = user._id;

  const navigate = useNavigate();

  // Convert date into ISO format
  const handleDate = (date) => {
    const isoDate = date.toISOString();
    setEntry({ ...entry, visitDate: isoDate });
  };

  const handlePriceRange = (priceRange) => {
    // Convert number into a string of "$"
    let priceSymbol = "";
    for (let i = 0; i < priceRange; i++) {
      priceSymbol += "$";
    }
    setEntry({ ...entry, priceRange: priceSymbol });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await apiClient.post(`/restaurants/${userId}`, entry);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CardsContainer>
      <h1 className="heading">Create Entry</h1>
      <form onSubmit={handleSubmit}>
        <input className="image-upload" type="file" name="" id="" />
        <div className="form-inputs">
          {/* Restaurant name */}
          <FormRow
            type={"text"}
            name={"title"}
            value={entry.name}
            handleChange={(e) => setEntry({ ...entry, name: e.target.value })}
          />

          <div>
            <label htmlFor="review">Review</label>
            <textarea
              name="review"
              id="review"
              value={entry.review}
              onChange={(e) => setEntry({ ...entry, review: e.target.value })}
            ></textarea>
          </div>

          {/* Cuisine */}
          <FormRow
            type={"text"}
            name={"cuisine"}
            value={entry.cuisine}
            handleChange={(e) =>
              setEntry({ ...entry, cuisine: e.target.value })
            }
          />

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
            onClick={(e) => handlePriceRange(e)}
            range={entry.priceRange.length}
          />

          <button className="btn" type="submit">
            Save Entry
          </button>
          <Link to="/">Cancel</Link>
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
