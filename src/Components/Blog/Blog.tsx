import BlogList from "./BlogList";

const Blog = () => {
  return (
    <>
      <h1 className="text-center p-4 bg-green-500 text-white font-semibold">
        Blogs
      </h1>
      <div className="bg-gray-100">
        <BlogList />
      </div>
    </>
  );
};

export default Blog;
