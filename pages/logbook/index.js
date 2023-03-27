import LogCard from "@/components/common/LogCard";
import Header from "@/components/Header";
import styles from "@/styles/Logcard.module.css";

const Logbook = () => {
  return (
    <>
      <Header />
      <div className={styles.logbook}>
        <h1>Logbook</h1>
        <div className={styles.logbookList}>
          <LogCard logDate={Date(2023, 3, 27)}>
            <p>= Next.js Framework 구성</p>
            <p>= Vercel 서버 Deploy</p>
            <p>
              = Logbook 임시 페이지 개발 <br />
              &nbsp;&nbsp;- asd
            </p>
            <p>
              = Header 공통 Component 개발 <br />
              &nbsp;&nbsp;- Link logbook에만 적용됨..
            </p>
          </LogCard>
          <LogCard>logcard</LogCard>
        </div>
      </div>
    </>
  );
};

export default Logbook;
