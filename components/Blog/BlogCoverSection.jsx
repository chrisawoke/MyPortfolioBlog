import { sortBlogs } from "@/utils";

const BlogCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  return <div>BlogCoverSection</div>;
};

export default BlogCoverSection;
