import { Search } from "../components/Search";
import { GlobalStyle } from "./globalStyle";
import { Header, HeaderWrapper, Left, Logo, PersonIcon, Text, Title, SubTitle, Right, Button, Content, Wrapper } from "./style";
import { Link } from "@inertiajs/inertia-react";

export function Layout(props) {

    function searchChange(event) {
        
        let searchValue = event.target.value;
        props.setSearch(searchValue);
    }

    return (
        <>
            <GlobalStyle />
            <Header>
                <HeaderWrapper>
                    <Left>
                        <Logo>
                            <PersonIcon />
                            <Text>
                                <Title>My Unsplash</Title>
                                <SubTitle>devchallenges.io</SubTitle>
                            </Text>
                        </Logo>
                        <form onSubmit={(event) => event.preventDefault() }>
                            <Search placeholder="Search by name" onChange={searchChange} />
                        </form>
                    </Left>
                    <Right>
                        <Button>
                            <Link href={''}>Add a photo</Link>
                        </Button>
                    </Right>
                </HeaderWrapper>
            </Header>

            <Content>
                <Wrapper>
                    { props.children }
                </Wrapper>
            </Content>
        </>
    );
}