import React from "react";
import { ChangeEvent } from "react";

const AddBlog: React.FC = () => {
  const url: URL = new URL(window.location.href);
  const queryParams: URLSearchParams = new URLSearchParams(url.search);
  const id: string | null = queryParams.get("id");

  const handleEditBlog = async (): Promise<void> => {
    if (id) {
      const response = await fetch("http://localhost:3000/blog/" + id);
      const json = await response.json();
      setTitle(json.title);
      setAuthor(json.author);
      setContent(json.content);
    }
  };

  React.useEffect((): void => {
    handleEditBlog();
  }, []);

  const [title, setTitle] = React.useState<string | undefined>(undefined);
  const [content, setContent] = React.useState<string | undefined>(undefined);
  const [author, setAuthor] = React.useState<string | undefined>(undefined);
  const handleSubmit = async (): Promise<void> => {
    const url = id
      ? "http://localhost:3000/blog/" + id
      : "http://localhost:3000/blog";
    const method = id ? "PUT" : "POST";
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
        author: author,
      }),
    });
    const json = await response.json();
    console.log(json);
  };

  return (
    <div className="bg-gray-200">
      <form
        className="flex flex-col w-1/2 mx-auto pt-20 h-screen"
        onSubmit={handleSubmit}
      >
        <input
          className="p-2 mb-2"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          required
        />
        <input
          className="p-2 mb-2"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAuthor(e.target.value)
          }
          required
        />
        <textarea
          className="p-2 mb-2"
          placeholder="Content"
          value={content}
          rows={5}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setContent(e.target.value);
          }}
        />
        <button className="px-3 mr-1 py-2 border text-green-500 border-green-500 border-1 font-semibold rounded-lg shadow-md hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-75">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
