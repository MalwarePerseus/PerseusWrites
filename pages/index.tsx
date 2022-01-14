import Head from 'next/head'

const posts =  [ 
  { title: 'Top 10 Toools for Students', excerpt: 'Some tools, no tools, lots of tools.'},
  { title: 'Top 10 Toools for Developers', excerpt: 'Some tools, lots of tools, no tools, lots of tools.'},
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Perseus Writes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}
