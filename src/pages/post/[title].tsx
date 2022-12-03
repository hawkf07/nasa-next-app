import Head from "next/head";
import { useRouter } from "next/router";

export default function Title({ }) {
  const router = useRouter();

  const { title } = router.query;

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
        <header className="p-1 text-gray-600 dark:text-gray-200">
          <h1 className="text-3xl">Post Title {title}</h1>
        </header>
      </main>
    </>
  );
}