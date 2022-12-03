import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Card } from "../components/Card";

export const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query;
  const data = [
    {
      title: "something",
      descriptin: "Hello world",
      id: 1,
    },
    {
      title: "something",
      descriptin: "Hello world",
      id: 2,
    },
    {
      title: "something",
      descriptin: "Hello world",
      id: 3,
    },
  ];
  return (
    <div>
      <Head>
        <title> Search Page</title>
      </Head>
      <main className="container flex min-h-screen flex-col bg-gray-100 p-5 dark:bg-gray-800">
        <header className="p-1 text-gray-600 dark:text-gray-200">
          <h1 className="text-3xl">Search Result For {q}</h1>
        </header>
        <div className="flex flex-col gap-8 p-1">
          {data.map((item, index) => {
            return (
              <div key={item.id} className="p-1 text-xl">
                <Link href={"/post/" + item.title}>{item.title}</Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
export default SearchPage;
