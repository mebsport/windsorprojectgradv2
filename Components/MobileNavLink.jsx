import Link from "next/link";

const MobileNavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className='block py-4 pl-3 pr-4 text-[#c7c7c7] sm:text-xl rounded md:p-0 hover:text-[#8c2724]'
    >
      {title}
    </Link>
  );
};

export default MobileNavLink;
