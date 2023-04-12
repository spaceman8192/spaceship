// [ _document.js ]
// _app 다음에 실행된다.
// static.html를 구성하기 위한 _app.js에서 구성한 html body가 어떤 형태로 들어갈지 구성
// 주 사용 목적은 폰트 import, charset, 웹 접근성 관련 태그 설정
// 모든 Content를 구성하고 _document.js를 실행하여 html형태로 출력됨

// next/document에서 상속받는 컴포넌트로 작성해야한다.
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        />
      </Head>
      <body>
        <Main />
        {/* _app.js가 실행되면서 갖추어진 content들은 Main Component에 생성된다. */}
        <NextScript />
      </body>
    </Html>
  );
}
