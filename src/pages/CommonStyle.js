import styled, { createGlobalStyle } from "styled-components"

export const GlobalReset = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

`