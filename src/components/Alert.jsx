import styled from "styled-components";
import { useGlobalContext } from "../App";
import { useEffect } from "react";

const Alert = () => {
  const { setIsAlert } = useGlobalContext();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <Wrapper>
      <div className="msg-container">
        <h3>Are you sure?</h3>
        <p>
          Do you really want to delete this restaurant? This process cannot be
          undone.
        </p>
        <div className="btn-container">
          <button className="btn cancel-btn" onClick={() => setIsAlert(false)}>
            Cancel
          </button>
          <button className="btn delete-btn">Delete</button>
        </div>
      </div>
    </Wrapper>
  );
};
export default Alert;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--overlay);
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  z-index: 50;
  overflow: hidden;

  .msg-container {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: var(--bg-color);
    border-radius: var(--card-radius);
    padding: var(--container-padding);
    text-align: center;
  }

  .btn-container {
    margin-top: 20px;
  }

  .delete-btn {
    background-color: red;
    color: var(--white);
  }

  .btn {
    width: 120px;
    margin: 0 7px;
  }
`;
