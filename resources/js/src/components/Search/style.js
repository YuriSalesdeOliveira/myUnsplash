import { BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    width: 28rem;
    height: 5rem;
    border-radius: 1rem;
    border: 1px solid #bdbdbd;
    overflow: hidden;
`;

export const SearchIcon = styled(BiSearchAlt2)`
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    font-size: 1.8rem;
    color: #bdbdbd;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    padding-left: 3.4rem;
    border: none;

    &:focus {
        outline: none;
    }
`;
