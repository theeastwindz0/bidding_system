import React from "react";

const InputField = ({
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
  rowWise,

}) => {
  return (
    <div className="">
      <div className={`col-span-1  ${rowWise ? 'grid grid-cols-3': 'flex flex-col' } `}>
        <label className=" text-white text-lg col-span-1 flex items-center py-1 font-semibold" htmlFor={uni}>
          {labelName}
        </label>
        <input
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={` p-4 rounded-md text-black bg-white rounded-xs ${rowWise ? 'col-span-2' : 'flex flex-col'}`}
          placeholder={placeholder}
          type={type}
          id={uni}
          name={uni}
          onBlur={onBlur}
        />
      </div>
      {touched && error && <p className="text-red-600 py-1">{error}</p>}
    </div>
  );
};

export default InputField;
