import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";

const MobileHeaderLink: React.FC<{
  item: HeaderItem;
  onNavigate?: () => void;
}> = ({ item, onNavigate }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : onNavigate}
        className="flex w-full items-center justify-between py-4 text-[1.45rem] font-medium tracking-[-0.02em] text-[#163a3d] transition hover:text-[#c4510a] focus:outline-hidden"
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>
      {submenuOpen && item.submenu && (
        <div className="mt-1 w-full rounded-2xl border border-[#eadfd4] bg-white/80 p-3">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              onClick={onNavigate}
              className="block rounded-xl px-3 py-2 text-base text-[#24585c] transition hover:bg-[#f6efe8] hover:text-[#c4510a]"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;
