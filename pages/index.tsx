import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bndlr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <img src="/images/bndlr.svg" alt="bndlr" />
          </h1>

          <p>Coming soon</p>
        </main>
      </div>
    </>
  );
}
