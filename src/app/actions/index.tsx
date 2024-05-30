'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

type FormState = {
  message: string;
};

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

    const newTopic = await db.topic.create({
      data: {
        slug: name,
        description,
      },
    });

    console.log('newTopic', newTopic);
    redirect('/');
    
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: 'Something went wrong' };
    }
  }
};

export const createPost = async (topicId: string, formState: FormState, formData: FormData) => {
  const { title, content } = {
    title: formData.get('title'),
    content: formData.get('content'),
  };

  const session = await auth();

  if (!session || !session.user) {
    return { message: 'You must be signed in to create a post' };
  }

  const topic = await db.topic.findFirst({ where: { slug: topicId } });

  if (!topic) {
    return { message: 'Cannot find this topic' };
  }

  try {
    if (typeof title !== 'string' || title.length < 3) {
      return { message: 'Title should be longer' };
    }

    if (typeof content !== 'string' || content.length < 2) {
      return { message: 'Content should be longer' };
    }

    const newPost = await db.post.create({
      data: {
        title,
        content,
        userId: session.user.id,
        topicId: topic.id,
      },
    });

    revalidatePath(`/topics/${topicId}`);
    redirect(`/topics/${topicId}/posts/${newPost.id}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: 'Something went wrong' };
    }
  }
};
