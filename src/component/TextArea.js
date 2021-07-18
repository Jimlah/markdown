const TextArea = ({ handleChange, value }) => {
  return (
    <textarea
      name="editor"
      id="editor"
      cols="30"
      rows="10"
      className="w-full px-2 py-1 focus:outline-none"
      value={value}
      type="text"
      onChange={handleChange}
    ></textarea>
  );
};

export default TextArea;
