export default function Navbar({ title, link }) {
  return (
    <div className="z-30 fixed top-0 bg-[#f2e852] flex items-center p-4">
      <a href={link} className="HEAD text-[#0d0d0d] hover:underline">
        {title}
      </a>
    </div>
  );
}