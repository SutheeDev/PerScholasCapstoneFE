import styled from "styled-components";

const Card = () => {
  return (
    <Wrapper>
      <div className="image">
        <img src="" alt="" />
      </div>
      <div className="card-content">
        <p>Content</p>
      </div>
    </Wrapper>
  );
};
export default Card;

const Wrapper = styled.div`
  width: 408px;
  height: 304px;
  border-radius: 12px;
  overflow: hidden;
  background-color: wheat;
`;
