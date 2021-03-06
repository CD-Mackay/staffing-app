import styled from "styled-components";

const StyledStaffCard = styled.div`
  background-color: ${(props) =>
    props.flag === "green" ? "#BDF0C9" : props.flag === "red" ? "#F0C9CD" : ""};
  border-bottom: 2px solid gray;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
  grid-template-areas:
    "image header"
    "image info";
  width: 100%;
  .image-wrapper {
    display: flex;
    flex-direction: column;
    grid-area: image;
    justify-content: center;
    padding: 10px;
    img {
      border-radius: 500px;
      height: auto;
      max-width: 20vw;
    }
  }

  .employee-header {
    display: flex;
    grid-area: header;
    justify-content: space-between;
    div {
      display: flex;
    }
    h4 {
      font-size: 36px;
      margin: 0px;
      padding-top: 5px;
      padding-right: 5px;
    }
    p {
      font-style: italic;
    }
    button {
      background: none;
      border: 0px;
      margin-right: 15px;
    }
    button:hover {
      cursor: pointer;
    }
  }
  .employee-info {
    display: flex;
    justify-content: space-between;
    grid-area: info;
    padding: 10px;
    .flag-info {
      max-width: 150px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
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
