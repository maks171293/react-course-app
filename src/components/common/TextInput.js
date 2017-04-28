import React, {PropTypes} from 'react';

const TextInput = (props) => {
  const {name, label, value, onChange, placeholder} = props;
  return(
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <div className='field'>
        <input
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className='form-control'
        />
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default TextInput;
