//nanti kalau udah jadi banget coba pakai icon sebagai react component sekarang coba biasa dulu
import GithubIcon from "../assets/icons/Github.svg";
import WhatsAppIcon from "../assets/icons/WhatsApp.svg";
import LinkedInIcon from "../assets/icons/Linkedin.svg";
import InstagramIcon from "../assets/icons/Instagram.svg";
export default function Navbar({ title, link }) {
  return (
    <div className="z-30 fixed top-0 left-0 flex items-center justify-between m-4 text-white p-2 rounded-full w-full pr-20">
      <div className="">
        <a href={link} className="HEAD">
          {title}
        </a>
      </div>
      <div className="flex gap-10">
        <a href="https://www.instagram.com/jaoharfs_/" target="_blank">
          <img
            src={InstagramIcon}
            alt="Instagram Icon"
            className="w-4 h-4 invert"
          />
        </a>
        <a href="https://id.linkedin.com/in/jaoharbahydwitanto" target="_blank">
          <img
            src={LinkedInIcon}
            alt="LinkedIn Icon"
            className="w-4 h-4 invert"
          />
        </a>
        <a href="https://github.com/joestudiocode" target="_blank">
          <img src={GithubIcon} alt="Github Icon" className="w-4 h-4 invert" />
        </a>
        <a href="https://wa.me/11234567890" target="_blank">
          <img
            src={WhatsAppIcon}
            alt="WhatsApp Icon"
            className="w-4 h-4 invert"
          />
        </a>
      </div>
    </div>
  );
}
