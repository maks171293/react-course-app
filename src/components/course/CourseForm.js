import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading}) =>{
  return(
    <form>
      <h3>Course overview</h3>
      <TextInput
        name='title'
        label='Title'
        placeholder='Enter the title of the course'
        value={course.title}
        onChange={onChange}
      />

      <SelectInput
        name='authorId'
        label='Author'
        value={course.authorId}
        defaultOption='SelectAuthor'
        options={allAuthors}
        onChange={onChange}
      />

      <TextInput
        name='category'
        label='Category'
        placeholder='Enter the category'
        value={course.category}
        onChange={onChange}
      />

      <TextInput
        name='length'
        label='Length'
        placeholder='Enter the length of the course'
        value={course.length}
        onChange={onChange}
      />
      <input
        type='submit'
        disabled={loading}
        value={loading? 'Saving' : 'Save'}
        className='btn btn-primary'
        onClick={onSave}
      />
    </form>
  );
}

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool
};


export default CourseForm;
