import styled from "styled-components";
import { RateRangeEl, FormRow } from "../components";
import DatePicker from "react-datepicker";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../App";
import formatDate from "../utils/formatDate";
import { useState } from "react";
import axios from "axios";

// Import Icons
import { TiStarFullOutline } from "react-icons/ti";
import { BiDollar } from "react-icons/bi";
import { BsUpload } from "react-icons/bs";

const UpdateRestaurant = () => {
  const { restaurants } = useGlobalContext();
  const { id } = useParams();

  const restaurant = restaurants.find((res) => res._id === id);
  const cuisine = restaurant.cuisine;
  const review = restaurant.review;
  const priceRange = restaurant.priceRange;
  const imageUrl = restaurant.image;

  const initialState = {
    name: restaurant.name,
    cuisine: cuisine || "",
    visitDate: restaurant.visitDate,
    rating: restaurant.rating,
    review: review || "",
    priceRange: priceRange || 0,
    image:
      imageUrl ||
      "https://res.cloudinary.com/dnc7potxo/image/upload/v1738184597/DineDiary/placeholder-image.png",
  };

  const [entry, setEntry] = useState(initialState);

  const handleDate = (date) => {
    const isoDate = date.toISOString();
    setEntry({ ...entry, visitDate: isoDate });
  };

  const handlePriceRange = (priceRange) => {
    let priceSymbol = "";
    for (let i = 0; i < priceRange; i++) {
      priceSymbol += "$";
    }
    setEntry({ ...entry, priceRange: priceSymbol });
  };

  const presetName = import.meta.env.VITE_UPLOAD_PRESET_NAME;
  const cloudName = import.meta.env.VITE_CLOUD_NAME;

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", presetName);
    formData.append("folder", "DineDiary");

    try {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Save update!");
  };

  return (
    <CardsContainer>
      <div className="page-wrapper">
        <h1 className="heading">Update Entry</h1>
        <form onSubmit={handleSubmit}>
          {/* Image Upload */}
          <FileUploadContainer
            className="file-upload-container"
            bgimg={entry.image}
          >
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
              <span className="file-name">Change image</span>
            ) : (
              <span className="file-name">Add image</span>
            )}
          </FileUploadContainer>

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
              placeholder="Add a Cuisine"
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

            <div className="btn-container">
              <button className="btn save-btn" type="submit">
                Save Update
              </button>
              <Link to="/" className="btn cancel-btn">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </CardsContainer>
  );
};
export default UpdateRestaurant;

const CardsContainer = styled.div`
  padding-right: var(--container-padding);
  padding-bottom: var(--container-padding);
  width: 100%;

  form {
    display: flex;
    align-items: flex-start;
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
    border-radius: var(--form-radius);
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
    border-radius: var(--form-radius);
    background-color: var(--bg-secondary-color);
    color: var(--text-third-color);
  }

  #image {
    display: none;
  }

  .btn-container {
    margin-top: 32px;
  }

  .save-btn {
    background-color: var(--text-secondary-color);
    color: var(--bg-color);
    margin-right: 20px;

    transition: all 0.1s ease;
    &:hover {
      transform: scale(1.05);
    }
  }

  .cancel-btn {
    background-color: var(--bg-secondary-color);
    color: var(--text-third-color);

    transition: all 0.1s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const FileUploadContainer = styled.div`
  width: 50%;
  aspect-ratio: 1 / 1;
  background-color: var(--bg-secondary-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--card-radius);
  position: relative;

  background-image: ${(props) =>
    props.bgimg ? `url(${props.bgimg})` : "none"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  overflow: hidden;

  /* Create overlay effect */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0);
    z-index: 1;
  }

  &:hover::after {
    background: var(--upload-overlay);
  }

  .image-upload-btn,
  .file-name {
    position: absolute;
    z-index: 5;
    opacity: 0;
  }

  &:hover .image-upload-btn,
  &:hover .file-name {
    opacity: 1;
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
    top: 58%;
    color: var(--bg-color);
    width: 380px;
    text-align: center;
    word-break: break-word;
  }
`;
