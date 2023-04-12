import fs from "fs"; //파일 처리와 관련된 모듈
import path from "path"; // 폴더와 파일의 경로를 쉽게 조작하도록 제공하는 모듈
import matter from "gray-matter"; // 스트링 또는 텍스트 파일의 front-matter를 파싱해줌.

export const getPosts = (pageIndex) => {
  // readdirSync : directory의 내용을 가져옴
  // process : Node.js의 process에 대한 정보 및 관리 오브젝트
  // process.cwd() : 현재 process의 working directory 리턴
  const dirFiles = fs.readdirSync(
    path.join(process.cwd(), "pages", "blog", "contents"),
    {
      withFileTypes: true,
    }
  );

  const posts = dirFiles
    .map((file) => {
      if (!file.name.endsWith(".mdx")) return;

      const fileContent = fs.readFileSync(
        path.join(process.cwd(), "pages", "blog", "contents", file.name),
        "utf-8"
      );

      //matter를 통해 메타데이터 data와 내용 content를 가져옴
      const { data, content } = matter(fileContent);
      const slug = file.name.replace(/.mdx$/, "");

      return { data, content, slug };
    })
    .filter((post) => post);

  return posts;
};
