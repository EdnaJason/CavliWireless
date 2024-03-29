"use client";

import { uploadFile } from "@/axios";
import styles from "./upload.module.css";
import { useRef, useState } from "react";
import { Loading } from "@/components/Loading";
import Link from "next/link";

const Upload = () => {
  const ref = useRef(null);
  const [file, setFile] = useState(null);
  const handleChange = (e) => setFile(e.target.files[0]);
  const handleClick = () => ref?.current?.click();
  const handleClear = () => {
    setFile(null);
    ref.current.value = "";
  };

  const [loading, setLoading] = useState(false);
  const handleUpload = async () => {
    try {
      setLoading(true);
      const temp = new FormData();
      temp.append("file", ref.current.files[0]);
      const res = await uploadFile(temp);
      console.log(res);
      if (res.data?.status === "success") {
        alert("Upload success!");
        handleClear();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="home">
      <input
        hidden
        ref={ref}
        type="file"
        name="file"
        accept=".json"
        multiple={false}
        onChange={handleChange}
      />
      <div className="btnHolder">
        <button className="btn" onClick={handleClick}>
          Upload sensory data
        </button>
        <Link className="btn" href="/files">
          Go Back
        </Link>
      </div>
      <div className="file_uploader">
        {file && file.name && (
          <div className="list">
            <div className="listItem">
              <h3>Added File: </h3>
              <div>{file.name}</div>
              <div>{file.size}</div>
              <div>{file.lastModified}</div>
              <button
                type="button"
                className="btn2"
                onClick={handleUpload}
              >
                {loading ? <Loading /> : "Upload"}
              </button>
              <button
                type="button"
                className="btn2"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Upload;
