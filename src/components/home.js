import styles from "@/app/files/uploaded.module.css";
import { useRouter } from "next/navigation";

const File = (props) => {
  const router = useRouter();
  const gotoLine = () => router.push(`/file/${props.name}`);
  return (
    <div className={styles.file}>
      <h2>{props.name}</h2>
      <button className={styles.file_btn} onClick={gotoLine}>
        Line Chart
      </button>
    </div>
  );
};

export default File;
