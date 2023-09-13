import { FooterBody } from "./footer-body";
import { FooterFooter } from "./footer-footer";

export const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] px-4 pt-16 text-background/80">
      <div className="container space-y-16">
        {/* FooterBody */}
        <FooterBody />

        {/* FooterFooter */}
        <FooterFooter />
      </div>
    </footer>
  );
};
