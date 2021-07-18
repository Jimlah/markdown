import Nav from "./Nav";
import { useState } from "react";
import useMarkdown from "../config/useMarkdown";

const Preview = ({ content }) => {
  const [hide, setHide] = useState(false);

  const html = useMarkdown(content);

  const handleHide = (e) => {
    setHide(!hide);
  };

  return (
    <section>
      <Nav name="Preview" handleHide={handleHide} />
      {hide ? null : (
        <article className="bg-white px-2 py-1">
          {html && (
            <div dangerouslySetInnerHTML={{ __html: html }} id="preview" />
          )}
        </article>
      )}
    </section>
  );
};

export default Preview;
