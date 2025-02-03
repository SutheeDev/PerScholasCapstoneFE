import { useState } from "react";
import { useGlobalContext } from "../App";
import { FormRow } from "../components";
import styled from "styled-components";
import apiClient from "../utils/apiClient";
import { useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const { user, setUser } = useGlobalContext();
  const id = user._id;

  const navigate = useNavigate();

  const initialUser = {
    name: user.name,
    lastname: user.lastname,
    email: user.email,
  };

  const [userState, setUserState] = useState(initialUser);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiClient.patch(`/user/${id}`, userState);
      setUser(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CardsContainer>
      <div className="page-wrapper">
        <h1 className="heading">Profile Update</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <FormRow
              type="text"
              name="name"
              value={userState.name}
              handleChange={(e) =>
                setUserState({ ...userState, name: e.target.value })
              }
              placeholder="Name"
            />

            <FormRow
              type="text"
              name="lastname"
              value={userState.lastname}
              handleChange={(e) =>
                setUserState({ ...userState, lastname: e.target.value })
              }
              labelText="last name"
              placeholder="Last Name"
            />

            <FormRow
              type="email"
              name="email"
              value={userState.email}
              handleChange={(e) =>
                setUserState({ ...userState, email: e.target.value })
              }
              placeholder="Email"
            />

            <div className="btn-container">
              <button className="btn save-btn" type="submit">
                Save Profile
              </button>
              <button
                to="/"
                className="btn cancel-btn"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </CardsContainer>
  );
};
export default UpdateUser;

const CardsContainer = styled.div`
  padding-right: var(--container-padding);
  padding-bottom: var(--container-padding);
  width: 100%;

  .btn-container {
    margin-top: 32px;
    text-align: right;
  }

  .cancel-btn {
    margin-left: 20px;
  }
`;
