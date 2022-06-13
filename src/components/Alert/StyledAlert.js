import styled from "styled-components";

const StyledAlert = styled.div`
visibility: ${props => props.alert ? "visible" : "hidden" };
margin: 0 auto;
z-index: 99;
background-color: ${props => props.alert ? props.alert.color : "white"};
`;

export default StyledAlert;