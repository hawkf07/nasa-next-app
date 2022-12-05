import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import querystring from "querystring";
import { Card } from "../components/Card";
import { Collection } from "../types";
import { trpc } from "../utils/trpc";

export const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query;

  const { title } = router.query;
  const { data, isSuccess, isError, isLoading } = trpc.nasaApi.getAll.useQuery({
    q,
  });

  return (
    <div>
      <Head>
        <title> Search Result </title>
      </Head>
      <main className="flex min-h-screen flex-col bg-gray-100  dark:bg-gray-800">
        <div className="container flex flex-col gap-8 p-5">
          <header className="p-1 text-gray-600 dark:text-gray-200">
            <h1 className="text-3xl">Search Result For {q}</h1>
          </header>
          {isLoading && (
            <button
              type="button"
              className="bg-blue-400 dark:bg-blue-600"
              disabled
            >
              <svg
                className=" mr-3 h-5 w-5 animate-spin"
                viewBox="0 0 24 24"
              ></svg>
              Processing...
            </button>
          )}
          <div className="flex flex-col gap-5 p-1">
            {isSuccess &&
              data?.collection.items.map((item, index) => {
                return item.data.map((result) => {
                  return (
                    <div key={result.nasa_id}>
                      <h1>
                        <Link
                          href={{
                            pathname: `/post/${result.title}`,
                            query: {
                              q,
                              index,
                            },
                          }}
                        >
                          {result.title}
                        </Link>
                      </h1>
                    </div>
                  );
                });
              })}
            {isError && <p> There is an Error</p>}
          </div>
        </div>
      </main>
    </div>
  );
};
export default SearchPage;
