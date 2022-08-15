import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { RadioButtons } from "~/components/RadioButtons";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>渡邉研究</title>
        <meta name="description" content="渡邉研究" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="font-bold text-2xl text-center mb-8">
          光らせたい場所を選択しよう！
        </h1>

        <div className={styles.grid}>
          <RadioButtons index={0} />

          <RadioButtons index={1} />

          <RadioButtons index={2} />
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; 帝京大学教育学部初等教育学科 福島ゼミ
      </footer>
    </div>
  );
};

export default Home;
