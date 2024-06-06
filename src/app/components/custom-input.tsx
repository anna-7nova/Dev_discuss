'use client';

import { Input, InputProps } from '@nextui-org/react';

type CustomInputProps = InputProps;

export default function CustomInput({ label, placeholder, name, id, isInvalid, errorMessage }: CustomInputProps) {
  return (
    <Input
      id={id}
      label={label}
      placeholder={placeholder}
      name={name}
      variant='bordered'
      isInvalid={isInvalid}
      errorMessage={errorMessage}
    />
  );
}
