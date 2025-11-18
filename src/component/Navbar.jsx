//nanti kalau udah jadi banget coba pakai icon sebagai react component sekarang coba biasa dulu
import GithubIcon from "../assets/icons/Github.svg";
import WhatsAppIcon from "../assets/icons/WhatsApp.svg";
import LinkedInIcon from "../assets/icons/Linkedin.svg";
import InstagramIcon from "../assets/icons/Instagram.svg";
import { Link } from "react-router-dom";
export default function Navbar({ title, link }) {
  return (
    <nav className="z-30 fixed top-0 left-0 flex items-center justify-between text-white px-10 py-4 rounded-full w-screen">
      <nav className="">
        <Link to={link} className="HEAD hover:opacity-80">
          {title}
        </Link>
      </nav>
      <div className="flex gap-10">
        <Link href="https://www.instagram.com/jaoharfs_/" target="_blank">
          <img
            src={InstagramIcon}
            alt="Instagram Icon"
            className="w-4 h-4 invert hover:opacity-80"
          />
        </Link>
        <Link
          href="https://id.linkedin.com/in/jaoharbahydwitanto"
          target="_blank"
        >
          <img
            src={LinkedInIcon}
            alt="LinkedIn Icon"
            className="w-4 h-4 invert"
          />
        </Link>
        <Link href="https://github.com/joestudiocode" target="_blank">
          <img src={GithubIcon} alt="Github Icon" className="w-4 h-4 invert" />
        </Link>
        <Link href="https://wa.me/11234567890" target="_blank">
          <img
            src={WhatsAppIcon}
            alt="WhatsApp Icon"
            className="w-4 h-4 invert"
          />
        </Link>
      </div>
    </nav>
  );
}
