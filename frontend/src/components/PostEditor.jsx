// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";

// export default function PostEditor() {
//   const [images, setImages] = useState([]);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const onDrop = useCallback((acceptedFiles) => {
//     const previewFiles = acceptedFiles.map(file =>
//       Object.assign(file, {
//         preview: URL.createObjectURL(file)
//       })
//     );
//     setImages(prev => [...prev, ...previewFiles]);
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   const handleSubmit = () => {
//     const postData = {
//       title,
//       content,
//       images
//     };
//     console.log("Post Created:", postData);
//     // Send to backend here
//   };

//   return (
//     <div style={{ maxWidth: "600px", margin: "auto" }}>
//       <h2>Create Post</h2>

//       <input
//         type="text"
//         placeholder="Post Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
//       />

//       <textarea
//         placeholder="Write something..."
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         style={{ width: "100%", padding: "10px", height: "100px" }}
//       />

//       <div
//         {...getRootProps()}
//         style={{
//           border: "2px dashed #aaa",
//           padding: "20px",
//           textAlign: "center",
//           marginTop: "15px",
//           background: isDragActive ? "#f0f8ff" : "white"
//         }}
//       >
//         <input {...getInputProps()} />
//         {isDragActive
//           ? "Drop the files here..."
//           : "Drag & drop images here, or click to select"}
//       </div>

//       <div style={{ display: "flex", marginTop: "10px", gap: "10px" }}>
//         {images.map((file, index) => (
//           <img
//             key={index}
//             src={file.preview}
//             alt="preview"
//             width="80"
//             height="80"
//           />
//         ))}
//       </div>

//       <button
//         onClick={handleSubmit}
//         style={{
//           marginTop: "15px",
//           padding: "10px 20px",
//           background: "black",
//           color: "white",
//           border: "none"
//         }}
//       >
//         Publish Post
//       </button>
//     </div>
//   );
// }
