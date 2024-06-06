'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';
import { CreatePostFormState, CreateTopicFormState } from '../types';
import { paths } from '../utils/paths';

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name should have at least 3 letters' })
    .regex(/^[a-z\s]+$/i, { message: 'Name must consist only of letters' }),
  description: z.string().min(10, { message: 'Description should have at least 10 letters' }),
});

const createPostSchema = z.object({
  title: z.string().min(3, { message: 'Title should have at least 3 letters' }),
  content: z.string().min(10, { message: 'Content should have at least 10 letters' }),
});

export const createTopic = async (
  formState: CreateTopicFormState,
  formData: FormData,
): Promise<CreateTopicFormState> => {
  const result = createTopicSchema.safeParse({ name: formData.get('name'), description: formData.get('description') });
  console.log('click');
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();

  if (!session || !session.user) {
    return { errors: { _form: ['You must be signed in to create a post.'] } };
  }

  let newTopic;
  try {
    newTopic = await db.topic.create({
      data: {
        slug: result.data.name.toLowerCase().split(' ').join('-'),
        description: result.data.description,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { errors: { _form: [error.message] } };
    } else {
      return { errors: { _form: ['Something went wrong'] } };
    }
  }
  revalidatePath(paths.home());
  redirect(paths.topic(newTopic.slug));
};

export const createPost = async (
  slug: string,
  formState: CreatePostFormState,
  formData: FormData,
): Promise<CreatePostFormState> => {
  const result = createPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  const session = await auth();

  if (!session || !session.user) {
    return { errors: { _form: ['You must be signed in to create a post.'] } };
  }

  const topic = await db.topic.findFirst({ where: { slug } });

  if (!topic) {
    return { errors: { _form: ['Cannot find this topic'] } };
  }

  let newPost;

  try {
    newPost = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id,
        topicId: topic.id,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { errors: { _form: [error.message] } };
    } else {
      return { errors: { _form: ['Something went wrong'] } };
    }
  }
  revalidatePath(paths.topic(slug));
  redirect(paths.posts(slug, newPost.id));
};

// Create comment action

const createCommentScheme = z.object({
  content: z.string().min(3),
});

interface CreateCommentFormState {
  errors: {
    content?: string[];
    _form?: string[];
  };
  success?: boolean;
}

export async function createComment(
  { postId, parentId }: { postId: string; parentId?: string },
  formState: CreateCommentFormState,
  formData: FormData,
): Promise<CreateCommentFormState> {
  const result = createCommentScheme.safeParse({
    content: formData.get('content'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must be signed in to create a comment.'],
      },
    };
  }

  try {
    await db.comment.create({
      data: {
        content: result.data.content,
        postId: postId,
        parentId: parentId,
        userId: session.user.id,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ['Something went wrong'],
        },
      };
    }
  }
  const topic = await db.topic.findFirst({
    where: { posts: { some: { id: postId } } },
  });

  if (!topic) {
    return {
      errors: {
        _form: ['Failed to revalidate topic'],
      },
    };
  }
  revalidatePath(paths.posts(topic.slug, postId));
  return {
    errors: {},
    success: true,
  };
}

export const fetchPosts = async (slug: string) => {
  return await db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
  });
};

export const fetchTopPosts = async () => {
  return await db.post.findMany({
    orderBy: [
      {
        comments: {
          _count: 'desc',
        },
      },
    ],
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
    take: 5,
  });
};
