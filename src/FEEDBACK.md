- Create file separation with imports - components / utils etc
- Don't think such a complex Table is required for now. Would recommend starting simple and using normal html tables for now.
- SET UP PRETTIER!!!

### Overall: Looking much better with React, especially hooks and Redux. CSS may need some work but I think you're just missing one critical way of thinking that hasn't clicked yet. I can explain later! Well done (FINALLY) for keeping file names consistent. Always keep it simple and get the core functionality working before adding complexity.

[Login.tsx](./containers/Login/Login.tsx)

- Line 15: Why is stopPropagation() needed here?
- Line 21: Always keep event.preventDefault() at the top!
- Line 22: Don't think 'return' is needed.

[actions.ts](./store/actions.ts)

- can get rid of the return to clean it up

[reducer.ts](./store/reducer.ts)

- Line 11: Rename this to CURRENT_USER_STATE. It's quite confusing otherwise.

- Line 32: Is this suppose to be 'action.payload.currentUser'?

[history.ts]

- what is this for?

[AccordionContainer.tsx](./containers/AccordionContainer/AccordionContainer.tsx)

- Line 12: try to find better names to not have instances like: 'state.data.data'

- 'accords' State should never hold data like this. It should only hold a unique id that will then be used to find the actual object.
- You don't need the 'open' key in every accordian as there will only always be one open and the state will always have one value. Can explain this properly later! You aren't using it anyways within the map.
- You don't need to pass down the handleOpen function to every accordian either. Since you aren't using it anyways within the map

- Line 25: Why is handleOpen wrapped in an object here?

- Line 48: Good use of destructuring in map

### WELL DONE!!! :D

[Dashboard.styles.ts](./containers/Dashboard/Dashboard.styles.ts)

- Line 14: PLEASE clean the indentation.

- CSS looks quite messy but I need to go through this properly with you and the designs to understand what's happening!

[Dashboard.tsx](./containers/Dashboard/Dashboard.tsx)

- Line 12: What's gird?

### MUAHAHAHHAHAHA

[PositionsPanel.tsx](./components/PositionsPanel/PositionsPanel.tsx)

- Line 11: OOOH someone's using axios!

  - Use async/await here, I want to see how you do it.

- Line 33: Is this project about trading or tv shows? :P

[SearchBar.tsx](./components/SearchBar/SearchBar.tsx)

- This file is sexy.

[NavBar.tsx](./containers/NavBar/NavBar.tsx)

- Line 10: Rename this from 'Row' to 'Nav' to be clear.

[useData.ts](./hooks/useData.ts)

- this is HOT.
