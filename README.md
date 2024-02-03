# Sorting Algorithm Visualiser

## What is the Sorting Algorithm Visualiser?

The Sorting Algorithm Visualiser aims to provide a visual representation of
how algorithms work under the hood. I.e. What steps they go through to sort an
array.

## Sorting Algorithm Mechanics - how does it work?:

When a particular sorting method is selected, the associated algorithm is run
behind the scenes and used to build an animations array. The animations array
(a series of operations) is then used to trigger DOM manipulation events that
show the sorting algorithm in action. These events are nested within
setTimeout bocks - set with increasing delays - which provide the impression
of a real-time animation whilst ensuring the web app remains responsive.

## What were the key skills practiced in this project?

- Developing an web app from scratch using React framework and 'React create app'
- Developing reusable React components
- Using Hooks (useState, useEffect) to track state accros the application and trigger events
- Simulating asyncrounous programming. I.e. Learnt about the event loop and what is happening under the hood in JavaScript, and practiced using setTimeout to manipulate delays inline with the animaitons needs
- DOM manipulation to dynamically change element properties throughout running the animations
- HTML & CSS - including using flexbox to order the page as desired. (design based on the cattpuchin mocha theme)

## How can I run the Sorting Algorithm Visualiser myself?

In the project directory:

`npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

![sorting-gif](/gifs/sorting-gif1.gif)
