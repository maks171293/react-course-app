import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function courseReducer(state = initialState.courses, action){
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
      return action.payload;
    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        action.payload
      ];
    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter((course) => course.id !== action.payload.id),
        action.payload
      ]
    default:
      return state;
  }
};
