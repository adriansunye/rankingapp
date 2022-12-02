import styled,{css} from "styled-components";
import { colorVariables } from '@utils/variables'

export const CustomParagraph = styled.p`
    letter-spacing: -0.05rem;
    font-family: 'Mulish' !important;
    ${props => props.weight === "bold" ? "font-weight: bold;":null}
    ${props => props.weight === "light" ? "font-weight: light;":null}
    ${props => props.color === "grey" ?  `color: ${colorVariables.grisOscuro};`:null}
    ${props => props.size === "small" ? "font-size: 1rem;":null}
    ${props => props.size === "medium" ? "font-size: 1.2rem;":null}
    ${props => props.size === "large" ? "font-size: 1.5rem;":null}
    ${ (props) => props.isDescription && css`
        scrollbar-gutter: stable;
        max-height: 300px;
        overflow: hidden;
        overflow-y: auto;
        margin-bottom: 2rem;
        padding-right: 1.5rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-radius: 0.5rem;
        position:relative;
        --scrollbar-width: 12px;
        --mask-height: 32px;
        --mask-image-content: linear-gradient(
        to bottom,
        transparent,
        black var(--mask-height),
        black calc(100% - var(--mask-height)),
        transparent);

    --mask-size-content: calc(100% - var(--scrollbar-width)) 100%;
    --mask-image-scrollbar: linear-gradient(black, black);
    --mask-size-scrollbar: var(--scrollbar-width) 100%;

    mask-image: var(--mask-image-content), var(--mask-image-scrollbar);
    mask-size: var(--mask-size-content), var(--mask-size-scrollbar);
    mask-position: 0 0, 100% 0;
    mask-repeat: no-repeat, no-repeat;

    scrollbar-width: thin;
    scrollbar-color: currentColor transparent;
    

    &::-webkit-scrollbar {
		width: 12px;
        transition: all 2s ease-in;
	}

    &:hover::-webkit-scrollbar {
		width: 12px;
	}

    &:hover::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
        border-radius: 0.5rem;
        transition: all 2s ease-in;
	}

    &:hover::-webkit-scrollbar-thumb {
		height: 60px !important;
		background: ${colorVariables.lila};
		outline: 1px solid white;
		border-radius: 0.5rem;
        transition: all 2s ease-in;
	}

    &&:hover::-webkit-scrollbar-track-piece {
		height: 30px;
		width: 30px;
        transition: all 2s ease-in;
	}
       
    ` }

`

