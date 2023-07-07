import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { photos } from "@/utils/photos";

export default function Home() {
  return (
    <>
      <Head>
        <title>Camilo Rivera / Photos</title>
        <meta
          name="description"
          content="Experienced developer proficient in TypeScript, React, Node.js, and SQL."
          key="desc"
        />
        <meta property="og:image" content="https://runonce.io/og.jpg" />
      </Head>
      <main>
        <div className="mx-auto max-w-screen-md px-4">
          <h1 className="my-4 text-4xl font-extrabold lowercase tracking-tight">
            Photos
          </h1>
          <p className="mb-4 text-lg [text-wrap:balance] dark:text-slate-300">
            I also do amateur photography.
          </p>
        </div>
        <div className="mx-auto mb-8 mt-8 grid max-w-screen-xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {photos.map(({ id, src, alt, priority }) => (
            <Link key={id} href={"/photo/" + id}>
              <Image
                priority={priority}
                src={src}
                alt={alt}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}