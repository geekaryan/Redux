const redux = require("redux");

//so the reducer contain two things state and action the state containe
//the current state and action contains the actions that we take to update the state because using reducer
//only we can access the store..

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

//We always need someone to subscribe the store action so that we can change..
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
