export const paths = {
  home() {
    return '/';
  },
  topic(slug: string) {
    return `/topics/${slug}`;
  },
  postCreate(slug: string) {
    return `/topics/${slug}/posts/new`;
  },
  posts(slug: string, postId: string) {
    return `/topics/${slug}/posts/${postId}`;
  },
};
