import Image from "next/image";
import Link from "next/link";

import SiteLogo from "@/public/turing.webp";
import SiteLogoAlt from "@/public/turing-white.webp";

export const SiteLogoNavbar = () => {
  return (
    <Link href="/" aria-label="Turing">
      <Image
        src={SiteLogo}
        priority
        alt="Turing"
        width={100}
        height={50}
        className="h-[18px] w-auto"
      />
    </Link>
  );
};

export const SiteLogoFooter = () => {
  return (
    <Link href="/" aria-label="Turing">
      <Image
        src={SiteLogoAlt}
        alt="Turing"
        width={100}
        height={50}
        className="h-[18px] w-auto"
      />
    </Link>
  );
};
