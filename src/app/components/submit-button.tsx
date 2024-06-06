'use client';

import { useFormStatus } from 'react-dom';
import { Button, Spinner } from '@nextui-org/react';

type SubmitButtonProps = {
  text: string;
};

export const SubmitButton = ({ text }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      isLoading={pending}
      type='submit'
      spinner={<Spinner color='default' classNames={{ circle1: 'border-green-900' }} />}
      className='bg-olive'
    >
      {!pending && text}
    </Button>
  );
};
