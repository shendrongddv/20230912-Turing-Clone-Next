import { siteFooterNav } from "@/config/site";
import { SiteLogoFooter } from "../site-logo";
import Link from "next/link";

export const FooterBody = () => {
  return (
    <div className="grid gap-8 text-sm sm:grid-cols-2 md:grid-cols-5">
      {/* Col */}
      <div className="sm:col-span-2 md:col-span-1">
        <SiteLogoFooter />
      </div>

      {siteFooterNav?.map((item) => (
        <div key={item.id} className="space-y-3">
          <h4 className="font-bold text-white">{item.title}</h4>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-1">
            {item.links?.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  aria-label={item.label}
                  className="underline-offset-8 hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
