import {HELLO_WORLD} from '../actions';

export default( state = "", {type}) => {
  switch(type){
    case HELLO_WORLD:
        return "Hello World";
    default:

      return state;
  }
}