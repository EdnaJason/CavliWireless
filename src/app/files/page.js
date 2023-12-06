"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/files/uploaded.module.css";
import File from "@/components/home";
import { getFiles } from "@/axios";

const Page = () => {
  const router = useRouter();
  const handleAdd = () => router.push("/upload");
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await getFiles();
      if (res.data.status !== "success") {
        setFiles([]);
      } else {
        console.log("added");
        setFiles(res.data.fileNames);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(files);
  return (
    <div>
      <div className="uploaded_header">
        <h2>View your uploaded files here</h2>
        <button className="upload_btn" onClick={fetchData}>
          Refresh
        </button>
        <button className="upload_btn" onClick={handleAdd}>
          Add file
        </button>
      </div>
      <hr />
      <div className="files_holder">
        {loading && <p>Loading...</p>}
        {!loading &&
          files &&
          files.map((file, index) => <File key={index} name={file} />)}
        {!loading && (!files || files.length === 0) && <p>No files found</p>}
      </div>
    </div>
  );
};

export default Page;
