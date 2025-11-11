export default function MenuItem({ href, children }) {
  return (
    <h1 className="bg-[#0d0d0d] inline-block border-4 border-[#d92323]">
      <a href={href}>{children}</a>
    </h1>
  );
}