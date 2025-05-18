import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

function NotFound() {
  return (
    <main className="flex h-screen w-full flex-col space-y-6 text-center justify-center items-center">
      <h1 className="text-3xl font-semibold">
        This page could not be found :(
      </h1>
      <Link href="/" className={buttonVariants({ variant: "default" })}>
        Go back to Dashboard
      </Link>
    </main>
  );
}

export default NotFound;
