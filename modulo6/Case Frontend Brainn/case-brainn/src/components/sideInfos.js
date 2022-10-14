import styled from "styled-components";

const StyleHeader = styled.div `
display: none;
font-family: "Montserrat";
@media (min-width: 912px) {
    display: block;
}
`

export const SideInfos = (props) => {
    return (
        <StyleHeader>
            <svg
                width="613"
                height="1080"
                viewBox="0 0 613 1080"
                fill="none"
            >
                <path
                   d="M613 0C613 0 361.26 501.011 613 1080H0V0H613Z" fill={props.color}
                />
            </svg>
        </StyleHeader>
    )
}