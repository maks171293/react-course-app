import {LOAD_AUTHOR_SUCCESS} from './actionTypes';
import authorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors){
  return {
    type: LOAD_AUTHOR_SUCCESS,
    payload: authors
  }
}

export function loadAuthors(){
  return function(dispatch){
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error)
    });
  }
}
