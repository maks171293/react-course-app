import React from 'react';
import {Link} from 'react-router';

const CoursesList = (props) =>{
  const courses = props.courses;
  return(
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course =>{
          return (
            <tr key={course.id}>
              <td><a href={course.watchHref} traget="_blank">Watch</a></td>
              <td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
              <td>{course.length}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CoursesList;
