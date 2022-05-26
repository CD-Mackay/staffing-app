import styled from "styled-components";

const StyledStaffCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  width: 100%;
  border-bottom: 2px solid gray;
  .image-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    img {
      max-width: 20vw;
      height: auto;
      border-radius: 500px;
    }
  }

  .employee-info {
    padding: 10px;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: row-reverse;
    li {
      background-color: gray;
      margin: 2px;
      padding: 5px;
      border-radius: 10px;
    }
  }

  @media (min-width: 768px) {
    .image-wrapper {
      img {
        max-width: 155px;
      }
    }
  }
`;

export default StyledStaffCard;
