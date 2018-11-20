// import {fromJS} from 'immutable';
import constants from './contants';

const defaultState = {
  list:['react','react-native','redux'],
  inputValue:'',
};

export default (state = defaultState,action)=>{

  switch(action.type){
    case constants.ADD_ITEM:
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      return newState;
    case constants.REMOVE_ITEM:
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.splice(action.index,1);
      return newState;
    case constants.CHANGE_INPUT_VALUE:
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;
      return newState;
    default:
      return state;
  }
}

