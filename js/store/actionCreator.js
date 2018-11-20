import constants from './contants';


export const getAddItem = ()=>({
  type: constants.ADD_ITEM,
});

export const getRemoveItem = (index)=>({
  type: constants.REMOVE_ITEM,
  index
});

export const getChangeInputValue = (value)=>({
  type: constants.CHANGE_INPUT_VALUE,
  value
});