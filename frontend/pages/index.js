import Head from 'next/head'
import React from "react"

export default function Home() {
  return (
    <div className="container bg-primary">
      <Head>
        <title>Under Construction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Under Construction
        </h1>

        <p className="description">
          This site is currently under construction. You can still reach out to me via the links below:
        </p>

        <div className="grid">
          <a href="https://twitter.com/msrcodes" className="card">
            <h3>Twitter &rarr;</h3>
            <p>Find my occasional thoughts, ramblings and pictures of cute animals.</p>
          </a>

          <a href="https://github.com/mikaelsrozee" className="card">
            <h3>GitHub &rarr;</h3>
            <p>See what I'm working on as well as any horribly old (and often horribly horrible) code.</p>
          </a>

          <a
            href="https://www.curseforge.com/members/msrcodes/projects"
            className="card"
          >
            <h3>CurseForge &rarr;</h3>
            <p>There was once a time where I developed and designed mods for Minecraft. Find my work here.</p>
          </a>

          <a
            href="https://www.twitch.tv/msrcodes"
            className="card"
          >
            <h3>Twitch &rarr;</h3>
            <p>
              Follow me on Twitch where I occasionally stream development or chat and play games.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
