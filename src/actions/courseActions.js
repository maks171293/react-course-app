import {LOAD_COURSES_SUCCESS,UPDATE_COURSE_SUCCESS,CREATE_COURSE_SUCCESS} from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){
  return {
    type: LOAD_COURSES_SUCCESS,
    payload: courses
  }
}

export function updateCourseSuccess(course){
  return {
    type: UPDATE_COURSE_SUCCESS,
    payload: course
  }
}

export function createCourseSuccess(course){
  return {
    type: CREATE_COURSE_SUCCESS,
    payload: course
  }
}
export function loadCourses(){
  return function(dispatch){
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course){
  return function(dispatch){
    return courseApi.saveCourse(course).then(course => {
      course.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(course));
    }).catch(error => {
      throw(error);
    });
  };
}
