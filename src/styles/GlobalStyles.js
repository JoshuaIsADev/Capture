import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-grey-0: #fff;
  --color-grey-100: #dedede;
  --color-grey-200: #bebebe;
  --color-grey-300: #9e9e9e;
  --color-grey-400: #808080;
  --color-grey-500: #636363;
  --color-grey-600: #484848;
  --color-grey-700: #2e2e2e;
  --color-grey-800: #161616;
  --color-grey-900: #000000;
  
  --color-danger: #000000;

  --background-color: #FFFFFF;

  --border-radius-sm: .5rem;
  --border-radius-md: 1rem;
  --border-radius-lg: 2rem;

  --container-width-m: 820px;
  /* --container-width-small: 450px; */
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: var(--color-gray-900);
}

html, body {
  font-family: 'Inter Tight', sans-serif;
  background-color: var(--background-color);
  letter-spacing: .05rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: visible;
}

html {
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

li {
  list-style: none;
}


h1, h2, h3, h4, li, label {
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: .1rem;
}

textarea {
  font-family: 'Inter Tight', sans-serif;
}

h2 {
  color: var(--color-grey-300)
}

p {
  font-size: 1rem;
  font-weight: 300;
  line-height:2rem;
}

/* .summary-container {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 1rem;
} */

img {
  object-fit: cover;
  object-position: top ;
  width: 100%;
}

//MEDIA QUERIES
/* @media (max-width: 1550px) {
  *,
  *::before,
  *::after {
    font-size: 12px;
  }
} */
/* @media (max-width: 1100px) {
  *,
  *::before,
  *::after {
    font-size: 12px;
  }
}

@media (max-width: 800px) {
  .container {
  flex-direction: column;
  }

  .header-container {
  flex-direction: column;
  flex-direction: column-reverse;
  }

  .content-container {
  width: 100%;
  }

  .hero-headline {
  width: 100%;
  padding: .25rem;
  margin: 10rem 0 0rem;
}
} */

//OVERRIDES
.faded {
  color: var(--color-grey-300)
}




`;

export default GlobalStyles;
