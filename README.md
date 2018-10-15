![Image](./totally-money.png?raw=true)

# Totally Money - Crazy Cards

A Crazy Cards Application that allows customers to enter their details and see what cards are available to them (see [spec](https://www.totallymoney.com/content/candidate-test.html)).

A single-page application written in React, consisting of a parent component (`<App />`), and a  `<Card />` component for rendering the available cards as children of this parent.

The application's logic is handled by a model written in JS, `cardList.js`, which filters the available cards according to the user's income and employment status.

Information on the cards themselves is stored as a JSON file under `./assets/availableCards.json`. This seemed the most appopriate way of storing this date and allows for easy modification.

The page itself is styled using the CSS grid system, with Totally Money font and colouring styles.

This app is tested with Jest and Enzyme for testing the React components and model, and Cypress for full end-to-end testing of User Stories (as outlined in the spec).

## Getting started

To run this application locally, please run:

```shell
npm install
npm start
```

This will open your browser automatically and navigate to `localhost:3000`.

## Built With

This application was built using the `create-react-app` tool, a front-end build pipeline for a single-page React application.

## Approach

It seemed appropriate to solve all the requirements defined in the specification by simplifying the user's experience as much as possible. Because the application only requires two values from the user in order to return a list (employment status and income), using two sets of radio buttons for each input was a straightforward way of getting this information from the user without complicating the interface unnecessarily.

The specification also required that the user be able to get more detail on each card. In order not to clutter the page, while also keeping the app in one page, each card has two sides and flips when the user hovers over it. The back-side of the card, which shows on hover, contains more details about the cards.

The user can select a number of cards and see the total credit available to them. To handle this selection feature, a group of three checkboxes (one per card) exist which update the state of the component when changed. Checking and unchecking the component will add and subtract from the total credit value appropriately.

## Tests
To run the unit tests of the model and React components, run:

```shell
npm test
```
The unit tests focus mostly on testing outcome and changes to the component state. Appropriate event mocks have been used as much as possible.

A full end-to-end browser test was run with the Cypress tool, with the tests mimicking the user stories as much as possible, and allowing for some complex behaviour from the user (e.g. checking and unchecking multiple times).

To run this in the terminal, run: `npm run feature:test`.

## Style guide

The airbnb style guide was used where possible for .js and .jsx files. HTML was cleaned up using the [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) tool. Overall, I used this [Front-End Checklist](https://github.com/thedaviddias/Front-End-Checklist) where applicable for major points (I was not able to check off everything). For the application as a whole, I used [this](https://github.com/elsewhencode/project-guidelines) guide for best-practices with Javascript projects as much as possible.
