import { sortBlogs } from "@/utils";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];
  return <div>BlogCoverSection</div>;
};

export default HomeCoverSection;
