const FileInput = ({ setBase64String, setFileType, setFileSize }) => {
  return (
    <form
      onChange={(e) => {
        let file = e.target.files[0];
        console.log("File:", file);
        if (file) {
          setFileType(file.type);
          // Convert from bytes to megabytes
          setFileSize(file.size / 1024 / 1024);
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
