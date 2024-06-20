// import React, { useState } from 'react';
// import './App.css';
// import { portfolioItems } from './utils/data';

// export const App = () => {
//   console.log(portfolioItems); // Check console to see how portfolioItems look like. You can delete this after.
//   return <div className="App"></div>;
// };


//EXERCISE 01

// Instructions
// Download the starter files here on our GitHub repo(opens in a new tab).
// Inspect the data.json in /utils, to get an idea of how the portfolio data looks like.
// In App.jsx, create a new state selectedItem and initialize it to the 1st item of the portfolio data. You can acces it as follows:
//    portfolioItems[0]

// Create a new component <PortfolioItemPage /> in pages/PortfolioItemPage.jsx.
// In App.jsx, import the PortfolioItemPage component and pass it the selectedItem state variable as item prop.
// We will make this state more dynamic in the 2nd part of the exercise at the end of the module.
// Continue in PortfolioItemPage.jsx and use the above prop to show the following details in <PortfolioItemPage />:
//    - Title (item.title)
//    - Description (item.description)
//    - Image (item.imageUrl)
// You don’t have to add styling yet as we will use a new design system in the 2nd part of the exercise. If you really want to, you are of course free to do so.
// Create a new component <PortfolioPage /> in pages/PortfolioPage.jsx.
// You can return some placeholder JSX such as some text for now. We will expand this component in the 2nd part of the exercise later in the module.
// Go back to App.jsx and use a conditional to render <PortfolioItemPage /> only when selectedItem exists. If it does not exist, render <PortfolioPage />.
// You can test the app by removing the array item from the selectedItem state variable initialisation and see if it renders your <PortfolioPage />


import React, { useState } from 'react';
import './App.css';
import { portfolioItems } from './utils/data';
import { useState } from 'react';

export const App = () => {
  console.log(portfolioItems); // Check console to see how portfolioItems look like. You can delete this after.
  return <div className="App"></div>;
};

export const selectedItem = () => {
  const [portfolioItems, setPortfolioItems] = useState(0);

  return (
    <>
      <p>Selected protfolio: {portfolioItems}</p>
    </>
  );
};