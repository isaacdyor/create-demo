import { Github } from "lucide-react";
import Link from "next/link";

export const GithubLink = () => {
  return (
    <Link
      className="absolute top-4 right-4"
      href="https://github.com/isaacdyor/create-demo"
    >
      <Github />
    </Link>
  );
};
