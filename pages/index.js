import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Dashboard from "@/components/Dashboard";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
  const {status, data: session} = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth/signin")
    }
  })

  if (status === "loading") {
    return <Loader/>
  }

  return (
    <div>
      <Head>
        <title>Spotify Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Dashboard/>
    </div>
  );
}
