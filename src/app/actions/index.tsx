"use server";

import { db } from "@/db";
import { notFound, redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

export const createTopic = async (
  prevState: { message: string },
  formData: FormData
) => {
  const { name, description } = {
    name: formData.get("name"),
    description: formData.get("description"),
  };

  try {
    if (typeof name !== "string" || name.length < 3) {
      return { message: "Name should be longer" };
    }

    if (typeof description !== "string" || description.length < 2) {
      return { message: "Description should be longer" };
    }

    const newTopic = await db.topic.create({
      data: {
        slug: name,
        description,
      },
    });

    console.log("newTopic", newTopic);
    redirect("/");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "Something went wrong" };
    }
  }
};

export const createPost = async (
  prevState: { message: string },
  formData: FormData
) => {
  const { title, content } = {
    title: formData.get("title"),
    content: formData.get("content"),
  };

  try {
    if (typeof title !== "string" || title.length < 3) {
      return { message: "Title should be longer" };
    }

    if (typeof content !== "string" || content.length < 2) {
      return { message: "Content should be longer" };
    }

    const newPost = await db.post.create({
      data: {
        title,
        content,
        userId: "",
        topicId: "",
      },
    });

    console.log("newPost", newPost);
    redirect("/");
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "Something went wrong" };
    }
  }
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
  { postId, parentId }: { postId: string, parentId: string | undefined },
  formState: CreateCommentFormState,
  formData: FormData
): Promise<CreateCommentFormState> {
  const result = createCommentScheme.safeParse({
    content: formData.get("content"),
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
        _form: ["please, authorize youself"],
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

    return {
      errors: {}
      
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }
  /*const topic = await db.topic.findFirst({
    where: {posts: {some: {id: postId}}}
  })
  
  if(!topic){
    return {
      errors: {
        _form: ["Failed topic"]
      }
    }
  }
  revalidatePath("/");
  return {
    errors: {},
    success: true,
  }*/
}


