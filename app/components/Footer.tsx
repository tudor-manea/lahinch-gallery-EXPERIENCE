import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillDribbbleCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="w-[89%] m-auto flex items-center justify-between py-2">
        <span>© 2024 Lahinch Gallery Experience. All rights reserved.</span>
        <div className="flex gap-6 text-2xl">
          <AiFillInstagram />
          <AiFillTwitterSquare />
          <AiFillFacebook />
          <AiFillDribbbleCircle />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
