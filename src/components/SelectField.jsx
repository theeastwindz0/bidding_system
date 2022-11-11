import React from "react";

const SelectField = ({
  labelName,
  type,
  uni,
  placeholder,
  onChange,
  value,
  touched,
  error,
  onBlur,
  disabled,
  children,
  inputClass
}) => {
  return (
    <div className="">
      <div className="col-span-1 flex flex-col ">
        <label className="text-white text-lg col-span-1 flex items-center py-1 font-semibold " htmlFor={uni}>
          {labelName}
        </label>
        <select
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={`  p-4 rounded-md text-black bg-white rounded-xs ${inputClass}`}

          placeholder={placeholder}
          type={type}
          id={uni}
          name={uni}
          onBlur={onBlur}
        >
        {children}
        </select>
      </div>
      {touched && error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SelectField;
