import Head from 'next/head'

const posts =  [ 
  { title: 'Top 10 Toools for Students', excerpt: 'Some tools, no tools, lots of tools.'},
  { title: 'Top 10 Toools for Developers', excerpt: 'Some tools, lots of tools, no tools, lots of tools.'},
]

export default function Home() {
  return (
    <div className="bg-purple-300 container mx-auto px-10 mb-8">
      <Head>
        <title>Perseus Writes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
              <div>
                {post.title}
                {post.excerpt}
              </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">

            </div>
        </div>
      </div>
    </div>
  )
}
