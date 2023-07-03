# Code Challenge

Your task is to create a 2-page application

### 📄 Currency converter page:

- display this component:

![converter](https://raw.githubusercontent.com/forexco/code-challenge-2/main/design/converter.png)

- automatically fetch rate when both sides of currency provided

- displaying a loading sign when the component is fetching data from API

- displaying the fetched rate in "Market Rate" on fetching rate success (error sign when fetching failed)

- if the amount changes on either side, automatically re-calculate another amount

- click the icon in the middle to switch 2 currencies and re-fetch the rate

- click the "Submit" button to save the conversion data to database

### 📄 Transactions page:

- 

## 🎯 Requirements:

- use TypeScript

- use React/Vue.js

- use any relational database

- use any Node.js framework to create API

- use this API to retrieve currency rates: https://openexchangerates.org/ (Note: This API provides rates with USD as the base currency, e.g., USD -> AUD. It does not allow changing the base currency. Therefore, you need to devise a solution using the available data to calculate the desired conversion rate.)

- keep the component as close to design as possible (blue1:`#33428E`, blue2: `#012754`, button:`#002854`, background: `#F8F9FB`) (please find icons in assets folder)

- use docker to containerize the app

### ⭐Bouns:

- clean structure

- use Material UI with Styled-components or Emotion

- use Nest.js to create your API

- write a couple of tests

## Handover

- create a Github repository to track your work

- commit your work frequently

- work on a separate branch and when you are ready, open a Pull Request to the main branch

- write a `README.md` with instructions on how to set up and start your solution

- when you finish the code challenge, send us the link to the repository

#### Email [j.dong@forexco.com.au](mailto:j.dong@forexco.com.au) for questions related to this code challenge
