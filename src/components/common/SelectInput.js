import React, {PropTypes} from 'react';

const SelectInput = (props) => {
  const {name, label, value, defaultOption, options, onChange} = props;
  return(
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <div className='field'>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className='form-control'>
          <option value=''>{defaultOption}</option>
          {options.map((option)=> {
            return <option key={option.value} value={option.value}>{option.text}</option>
            })}
        </select>
      </div>
    </div>
  );
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  defaultOption: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
}

export default SelectInput;
