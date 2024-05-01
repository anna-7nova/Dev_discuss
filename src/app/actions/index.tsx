'use server';
import { db } from '@/db';
import { redirect } from 'next/navigation';

export const createTopic = async (prevState: { message: string }, formData: FormData) => {
  const { name, description } = {
    name: formData.get('name'),
    description: formData.get('description'),
  };

  try {
    if (typeof name !== 'string' || name.length < 3) {
      return { message: 'Name should be longer' };
    }

    if (typeof description !== 'string' || description.length < 2) {
      return { message: 'Description should be longer' };
    }

    await db.topic.create({
      data: {
        slug: name,
        description,
      },
    });

    redirect('/');
    
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: 'Something went wrong' };
    }
  }
};
