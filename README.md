# Code Challenge

Your task is to create a 2-page application

### 📄 Currency converter page:

- display this component:

 ![image](https://github.com/forexco/code-challenge-3/assets/109489175/77ea850e-dba5-4d5a-9bed-4c313313cf29)

- automatically fetch rate when both sides of currency provided

- displaying a loading sign when the component is fetching data from API

- displaying the fetched rate in "Market Rate" on fetching rate success (error sign when fetching failed)

- calculate and display the fee amount using the following formula:


![image](https://github.com/forexco/code-challenge-3/assets/109489175/2197bac9-e1e5-480d-b957-87e87b2a9469)

- click the icon in the middle to switch 2 currencies and re-fetch the rate

- click the "Submit" button to save the conversion data to database

#### Bonus:
- by default source currency amount can be changed (Bonus: if the amount changes on either side, automatically re-calculate another amount)
- if target currency amount is changeable, fee is calculated using this formula:

![image](https://github.com/forexco/code-challenge-3/assets/109489175/113d6cbc-6bbf-46e8-80a4-4d8d00fade9d)

### 📄 Transactions page:

- display this component:

![image](https://github.com/forexco/code-challenge-3/assets/109489175/51cbe4dc-e949-4fcc-b180-fc8ffa0c9d64)

- fetch data from database and populate the table


## 🎯 Requirements:

- use TypeScript

- use React

- use any relational database

- use any Node.js framework to create API

- use this API to retrieve currency rates: https://openexchangerates.org/ (Note: This API provides rates with USD as the base currency, e.g., USD -> AUD. It does not allow changing the base currency. Therefore, you need to devise a solution using the available data to calculate the desired conversion rate.)

- keep the component as close to design as possible (blue1:`#33428E`, blue2: `#012754`, button:`#002854`, background: `#F8F9FB`) (please find icons in assets folder)

- use docker to containerize the app

### ⭐Bouns:

- use Material UI with Styled-components or Emotion

- use Nest.js to create your API

- write a couple of tests

## Handover

- create a private Github repository to track your work

- invite [github.com/alenbasar](https://github.com/alenbasar) and [github.com/dongongngg-forexco](https://github.com/dongongngg-forexco) as collaborators

- work on a staging branch and when you are ready, open a Pull Request to the main branch and request review

- write a `README.md` with instructions on how to set up and start your solution

#### Email [j.dong@forexco.com.au](mailto:j.dong@forexco.com.au) for questions related to this code challenge
