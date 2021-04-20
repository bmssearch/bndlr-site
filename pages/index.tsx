import styles from "./index.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.hero}>
            <h1 className={styles.title}>
              <img
                className={styles.logo}
                src="/images/bndlr.svg"
                alt="bndlr"
              />
            </h1>
            <p className={styles.lead} style={{ marginTop: 16 }}>
              BMS bundle installer
            </p>
            <div className={styles.download}>
              <a
                className={styles.button}
                style={{ marginTop: 48 }}
                href="https://github.com/bmssearch/bndlr/releases/latest"
              >
                Download for PC
              </a>
              <p className={styles.note} style={{ marginTop: 16 }}>
                ※自己責任においてご利用ください。データの破損やその他の不具合について責任を負いかねます。
                <br />
                ※精査されていないURLからのダウンロードは常にリスクが伴います。
                <a href="./security">考えられるリスク</a>の例をご確認ください。
              </p>
            </div>
          </div>
          <video
            className={styles.video}
            src="/images/demo.mp4"
            autoPlay={true}
            muted={true}
            loop={true}
          ></video>

          <section style={{ marginTop: 120 }}>
            <h2>機能</h2>
            <ul>
              <li>BMSマニフェストを読み込みインストールリストを作成</li>
              <li>インストールリストからBMSを自動インストール</li>
              <li>Anti-だばぁ</li>
              <li>カスタムフォルダの出力（いまのところLR2用のみ）</li>
              <li>
                ダウンロードしたBMSの更新を監視し、追加差分・アーカイブ修正をインストール
              </li>
            </ul>
          </section>

          <section style={{ marginTop: 120 }}>
            <h2>バグ報告・要望</h2>
            <p>
              オープンソースです。諸々
              <a href="https://github.com/bmssearch/bndlr">GitHub</a>
              からどうぞ。
            </p>
            <ul>
              <li>GitHubでIssueを作成してください</li>
              <li>バグはPull Request出してくれるともっと嬉しいです</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}
