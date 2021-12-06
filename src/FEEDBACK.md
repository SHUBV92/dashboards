- Create file separation with imports - components / utils etc
- Don't think such a complex Table is required for now. Would recommend starting simple and using normal html tables for now.
- SET UP PRETTIER!!!

## Overall: Looking much better with React, especially hooks and Redux. CSS may need some work but I think you're just missing one critical way of thinking that hasn't clicked yet. I can explain later! Well done (FINALLY) for keeping file names consistent. Always keep it simple and get the core functionality working before adding complexity.

[Login.tsx](./containers/Login/Login.tsx)

- [x] Line 15: Why is stopPropagation() needed here?
- [x] Line 21: Always keep event.preventDefault() at the top!
- [0] Line 22: Don't think 'return' is needed.

[actions.ts](./store/actions.ts)

- [0] can get rid of the return to clean it up

[reducer.ts](./store/reducer.ts)

- [x] Line 11: Rename this to CURRENT_USER_STATE. It's quite confusing otherwise.

- [0] Line 32: Is this suppose to be 'action.payload.currentUser'?

[history.ts](./utils/history.ts)

- [x] what is this for?

[AccordionContainer.tsx](./containers/AccordionContainer/AccordionContainer.tsx)

- [] Line 12: try to find better names to not have instances like: 'state.data.data'

- [Explain] 'accords' State should never hold data like this. It should only hold a unique id that will then be used to find the actual object.
- [Explain] You don't need the 'open' key in every accordian as there will only always be one open and the state will always have one value. Can explain this properly later! You aren't using it anyways within the map.
- [Explain] You don't need to pass down the handleOpen function to every accordian either. Since you aren't using it anyways within the map

- [Explain] Line 25: Why is handleOpen wrapped in an object here?

- Line 48: Good use of destructuring in map

## WELL DONE!!! :D

[Dashboard.styles.ts](./containers/Dashboard/Dashboard.styles.ts)

- [x] Line 14: PLEASE clean the indentation.

- [0] CSS looks quite messy but I need to go through this properly with you and the designs to understand what's happening!

[Dashboard.tsx](./containers/Dashboard/Dashboard.tsx)

- Line 12: What's gird?

## MUAHAHAHHAHAHA

[PositionsPanel.tsx](./components/PositionsPanel/PositionsPanel.tsx)

- Line 11: OOOH someone's using axios!

- Use async/await here, I want to see how you do it. ["I have"]

- Line 33: Is this project about trading or tv shows? :P [" I couldnt get the coin api working thats why"]

[SearchBar.tsx](./components/SearchBar/SearchBar.tsx)

- This file is sexy.

[NavBar.tsx](./containers/NavBar/NavBar.tsx)

- Line 10: Rename this from 'Row' to 'Nav' to be clear. [ "Row is using a reusable piece of code that actually sets the direction to Row or Column " ]

[useData.ts](./hooks/useData.ts)

- this is HOT.
