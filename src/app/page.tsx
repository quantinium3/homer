import ThemeToggle from "@/components/theme-toggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="max-w-4xl mx-auto">
            <nav className="flex justify-between item-center py-3">
                <div className="flex items-center gap-3">
                    <Link href="/">
                        <Image className="dark:invert" src="/logo.svg" width={32} height={32} alt="logo" />
                    </Link>
                    <span className="text-xl font-semibold">Houshou</span>
                </div>
                <div className="flex gap-3 items-center text-md">
                    <Link href="/discover" className="hover:underline hover:underline-offset-2">discover</Link>
                    <SignedOut>
                        <Link href="/signin" className="hover:underline hover:underline-offset-2">signup</Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <ThemeToggle />
                </div>
            </nav>


            <main className="text-center py-3">
                this is a blogging platform with the main aim to be minimalist and fast.
            </main>
        </div>
    );
}
