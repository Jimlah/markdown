import Nav from "./Nav";
import TextArea from "./TextArea";
import { useState } from "react";

const Editor = ({ handleChange, value }) => {
  const [hide, setHide] = useState(false);

  const handleHide = (e) => {
    setHide(!hide);
  };
  return (
    <section>
      <Nav name="Editor" handleHide={handleHide} />
      {hide ? null : <TextArea handleChange={handleChange} value={value} />}
    </section>
  );
};

export default Editor;
