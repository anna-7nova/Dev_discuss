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

export const createPost = async (prevState: { message: string }, formData: FormData) => {
  const { title, content } = {
    title: formData.get('title'),
    content: formData.get('content'),
  };

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
        userId: '',
        topicId: '',
      },
    });

    console.log('newPost', newPost);
    redirect('/');
    
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: 'Something went wrong' };
    }
  }
};


export const createComment = async (state: { message: string }, formData: FormData) => {
  const {content} = {
    content: formData.get('content') as string,
  };

  try {
    const newComment = await db.comment.create({
      data: {
        id: "",
        content,
        postId: "",
        userId: "",
        parentId: "",
      },
    });
    console.log(newComment);
    redirect(`/topics/topicIds/posts`);
    
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: 'Something went wrong' };
    }
  }
};