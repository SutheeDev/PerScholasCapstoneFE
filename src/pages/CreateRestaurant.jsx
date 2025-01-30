import styled from "styled-components";
import { RateRangeEl } from "../components";

// Import Icons
import { CiStar } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import { BiDollar } from "react-icons/bi";

const CreateRestaurant = () => {
  return (
    // <section>
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
          <RateRangeEl Icon={TiStarFullOutline} num={5} />
          <label htmlFor="price">Price</label>
          <BiDollar className="dollar" />
          <BiDollar className="dollar" />
          <BiDollar className="dollar" />
          <BiDollar className="dollar" />
          <BiDollar className="dollar" />
          <button>Save Entry</button>
          <button>Cancel</button>
        </div>
      </form>
    </CardsContainer>
    // {/* </section> */}
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
