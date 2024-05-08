'use client';

import { Input, InputProps } from '@nextui-org/react';

type CustomInputProps = InputProps;

export default function CustomInput({ label, placeholder, name, id }: CustomInputProps) {
  return <Input id={id} label={label} placeholder={placeholder} name={name} variant='bordered' />;
}
