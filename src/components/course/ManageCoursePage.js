import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component{
  constructor(props, context){
    super(props, context);

  this.state = {
    course: Object.assign({}, this.props.course),
  };
  this.updateCourseState = this.updateCourseState.bind(this);
  this.onSaveCourse = this.onSaveCourse.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.course.id != nextProps.course.id){
      this.setState({course: nextProps.course})
    }
  }
  updateCourseState(event){
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }
  onSaveCourse(event){
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.context.router.push('/courses')
  }
  render(){
    return(
      <div>
        <h3>Manage corse</h3>
        <CourseForm
          onChange={this.updateCourseState}
          allAuthors={this.props.authors}
          onSave={this.onSaveCourse}
          course={this.state.course}
        />
      </div>
    );
  }
}
ManageCoursePage.contextTypes = {
  router: PropTypes.object.isRequired
}

function getCourseById(courses, id){
  const course = courses.filter(course => course.id == id);
  if(course) return course[0];
  return null;
}


function mapStateToProps(state, ownProps){
  const courseId = ownProps.params.id;
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  if(courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId)
  }
  const authorsFormattedForDropdown = state.authors.map((author) => {
    return{
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
};
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
