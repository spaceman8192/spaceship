import Image from "next/image";
import nextImg from "@/public/next.svg";

const MeetMe = () => {
  return (
    <div>
      <Image
        src={nextImg}
        alt="john doe avatar"
        width={150}
        height={150}
        style={{ background: "white" }}
      />
      <p>
        Hey, I am <strong>John Doe</strong>. I love coding. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Reiciendis commodi numquam
        incidunt blanditiis quibusdam atque natus inventore sunt autem iusto.
      </p>
      <p>https://blog.logrocket.com/create-next-js-mdx-blog/</p>
    </div>
  );
};

export default MeetMe;
