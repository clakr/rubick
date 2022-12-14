import type { NextPage } from 'next'
import Head from 'next/head'
import { trpc } from '../utils/trpc'

const Home: NextPage = () => {
  const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }])

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Rubick
        </h1>
        <p>
          this will be a side-project that will fetch a Dota 2 heroes api. each
          hero corresponds to a project made by{' '}
          <a
            href="https://github.com/clakr"
            className="text-blue-500 underline underline-offset-1"
          >
            myself.
          </a>
        </p>
        <p className="text-sm">
          there are a lot of dota 2 heroes btw. heavily inspired by{' '}
          <a
            href="https://github.com/TheoBr"
            className="text-blue-500 underline underline-offset-1"
          >
            Theo Browne&apos;s
          </a>{' '}
          <a
            href="https://roundest.t3.gg/"
            className="text-blue-500 underline underline-offset-1"
          >
            roundest
          </a>
          .
        </p>
      </main>
    </>
  )
}

export default Home
