import styled from "styled-components";

const StyledAlert = styled.div`
visibility: ${props => props.alert ? "visible" : "hidden" };
margin: 0 auto;
z-index: 99;
`;

export default StyledAlert;