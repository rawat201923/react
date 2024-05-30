# React(single page application)

### Why to learn REact?
- type,job, trend, build ui
- makes easy to manage & build complete frontend

### when should I learn React?
- After mastering in Js
- Must project dont't need react in initial

### Why react was created
- Ghost message(fantum msg) Problem    (No consistency in Ui like old facebook ui in message alert)
- state->js  & Ui->Dom

### Don't learn React if:
- you don't know how js works Or Dom works

### React learning process
- go in-depth -> babel,fibre,virtual Dom diff algo, hydration
- by making projects (one topic at a time) -> todo,calculator, github api

### React is a library
- framework(include restictions) Vs Library(full freedom)

### Topics to learn
- core of react (state or Ui manipulation , jsx)
- component reusability(props)
- How to propagate change (hooks like useState ,useEffect )

### Additional addon to react
- Router (React don't have router)
- State management (react don't have state management) ->redux,redux toolkit, zustand, context api
- class based component -> legacy code
- BAAS(backend as a service) apps - > social media clone, e-commerce app........

## freeapi.app(open source)

### After react
- React is not a complete solution in must case (no seo, brower render of js, no routing)

- framework(next js, gatsby, remix)

## if we want work on web we use react-don
## if we want work on mobike apps we use react-native

### create a project
- npx create-react-app peoject_name

- name of component be capitalize



# Virtual Dom , Fibre and reconciliation

- create root() method - it create dom
- React Fiber is an internal engine change geared to make React faster and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.

Because Fiber is asynchronous, React can:

- Pause, resume, and restart rendering work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance

This change allows React to break away from the limits of the synchronous stack reconciler. Previously, you could add or remove items, for example, but it had to work until the stack was empty, and tasks couldn’t be interrupted.

This change also allows React to fine-tune rendering components, ensuring that the most important updates happen as soon as possible.

Now, to truly understand the powers of Fiber, let’s talk about the old reconciler: the stack reconciler.

React’s stack reconciler