import { useEffect, useState } from "react";

const useMarkdown = (content) => {
  const [value, setValue] = useState("");
  const marked = require("marked");

  marked.setOptions({
    breaks: true,
    gfm: true,
   
  });

  const renderer = new marked.Renderer();

  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  useEffect(() => {
    setValue(content);
  }, [content]);

  let html = marked(value, { renderer: renderer });

  return html;
};

export default useMarkdown;
