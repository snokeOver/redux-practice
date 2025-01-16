export const logger = (state) => (next) => (action) => {
  console.log(action.type);
  console.log("Prev State", state.getState());
  const result = next(action);

  console.info("Next state", state.getState());
  console.groupEnd();
  return result;
};
