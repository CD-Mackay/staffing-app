import styled from "styled-components";

const StyledStaffCard = styled.div`
background-color: ${props => props.flag === "green" ? "#BDF0C9" : props.flag === "red" ? "#F0C9CD" : ""};
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
  grid-template-areas:
    "image header"
    "image info";
  width: 100%;
  border-bottom: 2px solid gray;
  .image-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    grid-area: image;
    img {
      max-width: 20vw;
      height: auto;
      border-radius: 500px;
    }
  }

  .employee-header {
    grid-area: header;
    h4 {
      font-size: 36px;
      margin: 0px;
      padding-top: 5px;
    }
  }
  .employee-info {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    grid-area: info;
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
