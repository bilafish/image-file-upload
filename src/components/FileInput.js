const FileInput = ({ setBase64String }) => {
  return (
    <form
      onChange={(e) => {
        let file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (readerEvent) => {
            let binaryString = readerEvent.target.result;
            setBase64String(btoa(binaryString));
          };
          reader.readAsBinaryString(file);
        }
      }}
    >
      <input
        type="file"
        name="image"
        id="image-file-input"
        accept=".jpeg, .png, .jpg"
      />
    </form>
  );
};

export default FileInput;
