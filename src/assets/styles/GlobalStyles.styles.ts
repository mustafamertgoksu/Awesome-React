import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

*:focus {
    outline: none;
}

html,
body,
#root,
.Main {
    height: 100%;
}

.Main {
    background-color: #fafafa;
    overflow: auto;
    font-family: 'Montserrat', sans-serif;
}
`;
