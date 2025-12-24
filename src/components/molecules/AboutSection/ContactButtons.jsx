import Button from "@/components/atoms/AboutSection/Button";
import SocialIcon from "@/components/atoms/AboutSection/SocialIcon";
import instagramIcon from "@/assets/image/About-Image/insta-link.png";

export default function ContactButtons() {
  return (
    <div
      className="
        flex items-center justify-center lg:justify-start mt-[20px]
        w-full max-w-[368px] mx-auto lg:mx-0 lg:w-fit gap-[41px]
      "
    >
      <form
        action="https://cbox.mobi/go/healing-touch?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
        target="_blank"
      >
        <Button>Записатися</Button>
      </form>

      <div className="flex items-center gap-[20px]">
        <SocialIcon
          href="https://www.instagram.com/massage__uzhgorod/?igsh=dHN6Mmt4czJnZmJ3#"
          src={instagramIcon}
          alt="Instagram"
        />
      </div>
    </div>
  );
}