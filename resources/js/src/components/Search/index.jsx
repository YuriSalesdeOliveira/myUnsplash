import { Wrapper, SearchIcon, Input } from "./style";

export function Search(props) {
    return (
        <Wrapper>
            <SearchIcon />
            <Input {...props} />
        </Wrapper>
    );
}