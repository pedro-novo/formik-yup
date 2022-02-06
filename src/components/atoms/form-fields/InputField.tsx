import React, { FC } from "react";
import { useField } from "formik";
import { TextFieldProps, TextField } from "@mui/material";
import { at } from "lodash";

interface PropsType {
  errorText?: string;
  defaultProps?: TextFieldProps;
}

const InputField: FC<PropsType> = (props) => {
  const { errorText, ...restProps } = props;
  const [field, meta] = useField(props.defaultProps.name);

  const renderHelperText = () => {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return error;
    }
  };

  return (
    <TextField
      type='text'
      helperText={"Helper Text"}
      {...field}
      {...restProps.defaultProps}
    />
  );
};

export default InputField;
