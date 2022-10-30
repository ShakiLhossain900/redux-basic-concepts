const redux = requre("redux");

//reducer
const initialState = {
  counter: 0,
};

const counterReducer = (state, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement"){
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = redux.createStore(counterReducer, initialState);

//subscriber
const counterSubscriber = () =>{
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);
