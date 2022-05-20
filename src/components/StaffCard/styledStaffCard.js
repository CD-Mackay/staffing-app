import styled from "styled-components";

const StyledStaffCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  border-bottom: 2px solid gray;
  .image-wrapper {
    padding: 10px;
    img {
      width: 200px;
      height: auto;
      border-radius: 500px;
    }
  }

  .employee-info {
    padding: 10px;
  }
  ul {
    list-style-type: none;
  }
`;

export default StyledStaffCard;
