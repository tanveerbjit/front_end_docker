import React from 'react';
import { Controller } from 'react-hook-form';

const FormInput = ({
  name,
  control,
  type,
  placeholder,
  rules,
  errors,
  vendor = "auth",
}) => {
  return (
    <div>
      {vendor !== "auth"? (<label className="docboard-title text-gray-dark text-capitalize d-block mb-2">
       {name}
      </label>):"" }
      
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type={type}
            className={`border border-primary docboard-bg-soft docboard-field form-control field ${
              vendor === "auth" ? " mb-3" : ""
            }`}
            placeholder={placeholder}
            {...field}
          />
        )}
        rules={rules}
      />
      {errors && <p className="text-danger">{errors.message}</p>}
    </div>
  );
};

export default FormInput;
