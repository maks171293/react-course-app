import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createCourse} from '../../actions/courseActions.js'

class CoursesPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      course: {title: ""}
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputSubmit = this.onInputSubmit.bind(this);
  }
  onInputChange(event){
    const title = event.target.value;
    this.setState({
      course: {title: title}
    })
  }
  onInputSubmit(){
    this.props.createCourse(this.state.course);
    console.log(this.props.courses);
  }
  render(){
    const showCourse = (course, index) => {
      return (
        <div key={index}>
        {course.title}
        </div>
      )
    }
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(showCourse)}
        <h2>Add Course</h2>
        <input
          type="text"
          defaultValue={this.state.course.title}
          placeholder="Enter the title of the course"
          onChange={this.onInputChange}
        />
        <input
          type="submit"
          defaultValue="Save"
          onClick={this.onInputSubmit}
        />
      </div>
    );
  }
}
CoursesPage.propTypes = {
  createCourse: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
}
function mapStateToProps(state){
  return {
    courses: state.courses
  }
}
function mapDispatchToProps(dispatch){
  return{
    createCourse: bindActionCreators(createCourse, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
