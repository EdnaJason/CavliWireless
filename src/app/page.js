import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className="home">
      <Link href="/files" className="link">
        View Files
      </Link>
    </main>
  );
}
