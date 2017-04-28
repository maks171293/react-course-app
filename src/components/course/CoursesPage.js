import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/courseActions.js'
import CoursesList from './CoursesList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component{
  constructor(props){
    super(props);
    this.redirectToCoursePage = this.redirectToCoursePage.bind(this);
  }
  redirectToCoursePage(event){
    browserHistory.push('/course')
  }

  render(){
    return (
      <div>
        <h1>Courses</h1>
        <input type='submit'
          value='Add Course'
          onClick={this.redirectToCoursePage}
          className='btn btn-primary'
        />
        <CoursesList courses={this.props.courses} />
      </div>
    );
  }
}
CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
}
function mapStateToProps(state){
  return {
    courses: state.courses
  }
}
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
