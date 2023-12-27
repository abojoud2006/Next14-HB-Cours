"use client";
import { useRouter } from "next/navigation";

function ContactBtn() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };
  return <button onClick={handleClick}>Contact</button>;
}

export default ContactBtn;
