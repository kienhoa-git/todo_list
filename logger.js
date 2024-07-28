export default function logger(reducer) {
  return (prevState, action, args) => {
    console.group(action);
    let nextState = reducer(prevState, action, args);
    console.log("prevState: ", prevState);
    console.log("nextState: ", nextState);
    console.log("action Arguments: ", args);
    console.groupEnd();
    return nextState;
  };
}
