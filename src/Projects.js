import React from "react";
import "./index.css";

const Projects = () => {
  return (
    <section id="projects" className="pt-20">
      <h1 className="text-4xl pb-5">Projects</h1>
      <div id="dim">
        <a
          href="https://pokemon-box-nine.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="float">
            <img
              src="pokemon-box.png"
              alt="Pokemon Box"
              className="border-2 border-slate-400/50"
            />
            <div className="sm:flex items-center justify-between pt-5">
              <div className="flex items-center">
                Pokemon Box (Storage app)
                <div className="pl-2 pt-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </div>
              </div>
              <button
                className="text-white hover:text-teal-300 focus-visible:text-teal-300"
                onClick={() =>
                  window.open(
                    "https://github.com/AbbaAdam1/pokemon-box/",
                    "_blank",
                  )
                }
                rel="noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </button>
            </div>
            <p className="font-normal text-sm text-slate-700 py-5 dark:text-slate-400">
              Developed a Pokemon database website where users can create an
              account and log-in to store, read, and delete Pokemon data.
            </p>
            <ul className="flex flex-wrap">
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  JavaScript
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  React.js
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Next.js{" "}
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  PostgreSQL
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Supabase Authentication
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Tailwind CSS
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Node.js
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  REST API
                </div>
              </li>
            </ul>
          </div>
        </a>

        <a
          href="https://harmony-hub-zeta.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="float">
            <img
              src="harmony-hub.png"
              alt="Harmony Hub"
              className="border-2 border-slate-400/50"
            />
            <div className="sm:flex items-center justify-between pt-5">
              <div className="flex items-center">
                Harmony Hub (Music App)
                <div className="pl-2 pt-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </div>
              </div>
              <button
                className="text-white hover:text-teal-300 focus-visible:text-teal-300"
                onClick={() =>
                  window.open(
                    "https://github.com/AbbaAdam1/HarmonyHub",
                    "_blank",
                  )
                }
                rel="noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </button>{" "}
            </div>
            <p className="font-normal text-sm text-slate-700 py-5 dark:text-slate-400">
              Developed an app that displays albums using Spotify API, and
              allows playing audio clips from each album using an audio player I
              built in JavaScript.
            </p>
            <ul className="flex flex-wrap">
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  TypeScript
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  React.js
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Next.js{" "}
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Tailwind CSS
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Node.js
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  REST API
                </div>
              </li>
            </ul>
          </div>
        </a>

        <a
          href="https://portfolio-abbaadam1.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="float">
            <img
              src="portfolio.png"
              alt="Portfolio"
              className="border-2 border-slate-400/50"
            />
            <div className="sm:flex items-center justify-between pt-5">
              <div className="flex items-center">
                Portfolio
                <div className="pl-2 pt-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </div>
              </div>
              <button
                className="text-white hover:text-teal-300 focus-visible:text-teal-300"
                onClick={() =>
                  window.open(
                    "https://github.com/AbbaAdam1/Portfolio",
                    "_blank",
                  )
                }
                rel="noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </button>{" "}
            </div>
            <p className="font-normal text-sm text-slate-700 py-5 dark:text-slate-400">
              Crafted a portfolio page to highlight my experience and also
              demonstrate my design proficiency through its layout and
              presentation.{" "}
            </p>
            <ul className="flex flex-wrap">
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  JavaScript
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  React.js
                </div>
              </li>
              <li className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                  Tailwind CSS
                </div>
              </li>
            </ul>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;