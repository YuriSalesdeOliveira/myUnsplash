import styled from "styled-components"
import { BsFillPersonFill } from "react-icons/bs"

export const Header = styled.header`
    width: 100%;
    height: 6rem;
    margin: 2.5rem 0;
`;

export const HeaderWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 3rem;
`;

export const PersonIcon = styled(BsFillPersonFill)`
    margin-right: .5rem;
    font-size: 2.6rem;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-weight: 800;
    font-size: 1.6rem;
    color: #333333;
`;

export const SubTitle = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: #333333;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
`;

export const Button = styled.div`
    a {
        padding: 1.8rem;
        font-weight: 700;
        font-size: 1.2rem;
        color: #ffffff;
        transition: all linear .2s;
        border-radius: 1.2rem;
        box-shadow: 0px .1rem .6rem rgba(0, 0, 0, 0.1);
        background: #3db46d;

        &:hover {
            box-shadow: 0px .1rem .6rem rgba(0, 0, 0, 0.3);
        }
    }
`;

export const Content = styled.main``;

export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;
