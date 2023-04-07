import "@/styles/globals.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import Layout from "@/layouts/Layout.js";
import MDXComponents from "@/components/MDXComponents";
import { MDXProvider } from "@mdx-js/react";

export default function App({ Component, pageProps }) {
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
