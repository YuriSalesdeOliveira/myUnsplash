import styled from "styled-components";

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
`;

export const Column = styled.div``;