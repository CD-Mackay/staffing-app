import styled from "styled-components";

const StyledAlert = styled.div`
opacity: ${props => props.alert ? 100 : 0};
transition: opacity 0.8s ease-out;
margin: 0 auto;
border-radius: 5px;
width: 40%;
padding-top: 5px;
text-align: center;
color: white;
background-color: ${props => props.alert ? props.alert.color : "white"};
span {
  font-size: 24px;
  font-weight: 600;
}
`;

export default StyledAlert;