// [ _app ]
// 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트. 
// 주 사용 목적은 모든 컴포넌트에 공통으로 적용할 속성 관리

import "@/styles/globals.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import Layout from "@/layouts/Layout.js";
import MDXComponents from "@/components/MDXComponents";
import { MDXProvider } from "@mdx-js/react";

export default function App({ Component, pageProps }) {
  // Component : 서버에 요청한 페이지. GET / 요청을 보냈다면 Component에는 /page/index.js 파일을 받아온다.
  // PageProps : getInitialProps, getStaticProps, getServerSideProps 중 하나를 통해 fetching한 초기 속성값
  return (
    <MDXProvider components={MDXComponents}>
      <Layout>
        <ProSidebarProvider>
          <Component {...pageProps} />
        </ProSidebarProvider>
      </Layout>
    </MDXProvider>
  );
}
