import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { RateRangeEl, FormRow } from "../components";
import apiClient from "../utils/apiClient";
import { useGlobalContext } from "../App";

// Import Icons
import { TiStarFullOutline } from "react-icons/ti";
import { BiDollar } from "react-icons/bi";
import { BsUpload } from "react-icons/bs";

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

  const { user, setRestaurants } = useGlobalContext();
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

  const presetName = import.meta.env.VITE_UPLOAD_PRESET_NAME;
  const cloudName = import.meta.env.VITE_CLOUD_NAME;

  const uploadImage = async (file) => {
    // https://cloudinary.com/blog/guest_post/how-the-formdata-browser-api-works
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", presetName);
    formData.append("folder", "DineDiary");

    // Upload iamge to Cloudinary and get the image url back
    try {
      // https://cloudinary.com/documentation/image_upload_api_reference
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      const data = response.data;
      return data.secure_url;
    } catch (error) {
      console.error(
        "Error uploading image:",
        error.response?.data || error.message
      );
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }

    const imageUrl = await uploadImage(file);

    if (imageUrl) {
      setEntry({ ...entry, image: imageUrl });
    } else {
      return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiClient.post(`/restaurants/${userId}`, entry);
      const newRestaurant = response.data;
      setRestaurants((prev) => [...prev, newRestaurant]);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CardsContainer>
      <h1 className="heading">Create Entry</h1>
      <form onSubmit={handleSubmit}>
        {/* Image Upload */}
        <div className="file-upload-container">
          <label htmlFor="image" className="image-upload-btn">
            <BsUpload className="upload-btn" />
          </label>
          <input
            className="image-upload"
            type="file"
            name="image"
            id="image"
            onChange={(e) => handleFileChange(e)}
          />
          {entry.image ? (
            <span className="file-name">{entry.image}</span>
          ) : (
            <span className="file-name">Choose File</span>
          )}
        </div>

        <div className="form-inputs">
          {/* Restaurant name */}
          <FormRow
            type={"text"}
            name={"title"}
            value={entry.name}
            handleChange={(e) => setEntry({ ...entry, name: e.target.value })}
            placeholder="Title"
          />

          <div>
            <label htmlFor="review">Review</label>
            <textarea
              rows={8}
              name="review"
              id="review"
              value={entry.review}
              onChange={(e) => setEntry({ ...entry, review: e.target.value })}
              placeholder="Add a Description"
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
            placeholder="Cuisine"
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
  padding-bottom: var(--container-padding);
  width: 100%;
  /* background-color: aliceblue; */

  form {
    display: flex;
    gap: 55px;
  }

  .image-upload,
  .form-inputs {
    width: 50%;
  }

  label,
  input {
    display: block;
  }

  label {
    margin-bottom: 4px;
    /* color: var(--text-color); */
  }

  input {
    margin-bottom: 16px;
  }

  input::placeholder {
    font-family: var(--primary-font-light);
    font-size: 14px;
  }

  textarea {
    width: 100%;
    outline: none;
    border: none;
    padding: 10.25px 10px;
    border-radius: 8px;
    background-color: var(--bg-secondary-color);
    font-family: var(--primary-font-light);
    font-size: 14px;
    margin-bottom: 16px;
  }

  .react-datepicker-wrapper {
    display: block;
  }

  .react-datepicker__input-container input {
    width: 100%;
    outline: none;
    border: none;
    padding: 10.25px 10px;
    border-radius: 8px;
    background-color: var(--bg-secondary-color);
    color: var(--text-third-color);
  }

  #image {
    display: none;
  }

  .file-upload-container {
    width: 50%;
    background-color: var(--bg-secondary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .image-upload-btn {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--upload-icon-color);
    color: var(--bg-color);
    border-radius: 50%;
    cursor: pointer;
    font-size: 26px;
    margin-bottom: 20px;
  }

  .file-name {
    width: 380px;
    text-align: center;
    word-break: break-word;
  }
`;
