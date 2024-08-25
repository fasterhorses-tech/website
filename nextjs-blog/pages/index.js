import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to <a href="https://nextjs.org" className="text-blue-600 hover:underline">Next.js!</a>
        </h1>

        <p className="mb-4">
          Get started by editing <code className="bg-gray-100 rounded p-1 font-mono">pages/index.js</code>
        </p>

        <p className="mb-8 italic text-gray-600">
          Temporary page. Custom content coming soon. Stay tuned!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://nextjs.org/docs" className="block p-6 border rounded-lg hover:shadow-md">
            <h3 className="text-xl font-semibold mb-2">Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="block p-6 border rounded-lg hover:shadow-md">
            <h3 className="text-xl font-semibold mb-2">Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples" className="block p-6 border rounded-lg hover:shadow-md">
            <h3 className="text-xl font-semibold mb-2">Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className="block p-6 border rounded-lg hover:shadow-md">
            <h3 className="text-xl font-semibold mb-2">Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className="border-t py-4">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel" className="ml-2 h-4" />
          </a>
        </div>
      </footer>
    </div>
  );
}