const logger = store => next => action => {
  console.group(action.type);
  console.log("The action: " + action.type);
  const returnValue = next(action);
  console.log("The current state is: " + store.getState());
  Object.values(store.getState().questions).forEach(q => {
    console.log(q.optionOne.text);
  });
  console.groupEnd();
  return returnValue;
};

export default logger;
