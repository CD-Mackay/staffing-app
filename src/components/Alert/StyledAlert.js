import styled from "styled-components";

const StyledAlert = styled.div`
  background-color: ${(props) => (props.alert ? props.alert.color : "white")};
  border-radius: 5px;
  color: white;
  opacity: ${(props) => (props.alert ? 100 : 0)};
  margin: 0 auto;
  padding-top: 5px;
  text-align: center;
  transition: opacity 0.8s ease-out;
  width: 40%;
  span {
    font-size: 24px;
    font-weight: 600;
  }
`;

export default StyledAlert;
