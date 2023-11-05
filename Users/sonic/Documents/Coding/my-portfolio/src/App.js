import './index.css';

function App() {
function update(e){
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
  console.log(x)
  console.log(y)
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)
  return (
    <div className="lg:flex md:p-16 lg:p-24">
      <div className="lg:fixed">
        <h1 className="text-4xl lg:text-5xl font-bold">Mahamadou Adam</h1>
        <h2 className="pl-1 pt-3 text-xl font-bold">Full-Stack Engineer</h2>
        <p className="wrapper pl-1 pt-5 md:pb-10 text-slate-400">Passionate about creating interactive and user-friendly web applications.</p>
        <nav className="nav hidden lg:block">
          <ul className="mt-8">
            <li>
              <a className="group flex items-center py-3 active" href="#about">
                <span className="nav-indicator mr-4 h-px transition-all bg-slate-600 w-8 group-hover:bg-slate-200 group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3 active" href="#experience">
                <span className="nav-indicator mr-4 h-px transition-all bg-slate-600 w-8 group-hover:bg-slate-200 group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
              </a>
            </li>
            <li>
              <a className="group flex items-center py-3 active" href="#projects">
                <span className="nav-indicator mr-4 h-px transition-all bg-slate-600 w-8 group-hover:bg-slate-200 group-hover:w-16 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
              </a>
            </li>
          </ul>
        </nav>

<ul className="flex items-center text-slate-500 lg:fixed lg:bottom-0 lg:left-70 ml-1 mb-24 sm:mt-5">
  <li className="mr-5 text-xs">
    <a className="block hover:text-teal-400" href="https://github.com/AbbaAdam1" target="_blank" rel="noreferrer">
      <span className="sr-only">GitHub</span>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2.00.27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
      </svg>
    </a>
  </li>
  <li className="mr-5 text-xs">
    <a className="block hover:text-teal-400" href="https://www.linkedin.com/in/mahamadou-adam-a12704148/" target="_blank" rel="noreferrer">
      <span className="sr-only">LinkedIn</span>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
      </svg>
    </a>
  </li>
</ul>


      </div>


      <div className="lg:w-1/2 lg:ml-auto md:pl-8">
      <section id="about">
      <h1 className="text-4xl">About</h1>

        <p className="text-slate-400 pl-6 md:pl-6 pt-8">Hello! I'm Mahamadou Adam, a dedicated Full-Stack Developer with 1+ years of experience. Skilled in technologies such as JavaScript, TypeScript, and React.js, I bring designs to life with beautiful and responsive user interfaces. I'm committed to professionalism, reliability, and exceeding client expectations.</p>
</section>

        <section id="experience" className="pt-20">
        <h1 className="text-4xl">Experience</h1>

<div id="dim">
        <div className="float">
          <div className="flex items-center justify-between">
          <div>Full-Stack Developer</div>
          <div className="text-sm text-gray-500">2022-2023</div>
          </div>
          <div className="text-gray-500">Fannie Mae (Contracted by GenSpark)</div>
          <p className="font-normal text-sm text-gray-700 py-5 dark:text-gray-400">Collaborated in an Agile environment to develop large-scale software for Fannie Mae. Leveraged Cloud Computing and AWS for efficient, secure Python development. Ensured high-quality data for decision-making. Delivered key milestones on time, adhering to project requirements in a Scrum setting.</p>
        </div>

        <div className="float">
          <div className="flex items-center justify-between">
          <div>Full-Stack Developer</div>
          <div className="text-sm text-gray-500">2021-2022</div>
          </div>
          <div className="text-gray-500">GenSpark</div>
          <p className="font-normal text-sm text-gray-700 py-5 dark:text-gray-400">Designed, developed, and deployed web apps using industry-standard practices. Demonstrated full-stack Java capability through team and individual projects. Utilized front-end dev with JavaScript and React. Built secure server-side apps with robust data handling.</p>
        </div>

        <div className="float">
          <div className="flex items-center justify-between">
          <div>Web Application Developer Internship</div>
          <div className="text-sm text-gray-500">2021</div>
          </div>
          <div className="text-gray-500">TDM Business Toole Suite</div>
          <p className="font-normal text-sm text-gray-700 py-5 dark:text-gray-400">Collaborated with a team to develop the user interface of a web application with HTML, CSS, Java, and JavaScript. Created visually appealing interfaces that enhanced user engagement and facilitated seamless navigation.</p>
        </div>

        <div className="float">
          <p className="pb-10 text-xl">Technologies:</p>
          <div className="text-gray-400">
<div className="sm:grid grid-cols-2 gap-4">
  <ul className="list-disc pl-5">
    <li className="pb-2">JavaScript</li>
    <li className="pb-2">Next.js</li>
    <li className="pb-2">Node.js</li>
    <li className="pb-2">MySQL</li>
    <li className="pb-2">HTML/CSS</li>
    <li className="pb-2">Authentication</li>
    <li className="pb-2">AWS</li>
  </ul>
  <ul className="list-disc pl-5">
    <li className="pb-2">Git/Github/Bitbucket</li>
    <li className="pb-2">TypeScript</li>
    <li className="pb-2">Python</li>
    <li className="pb-2">Tailwind</li>
    <li className="pb-2">PostgreSQL</li>
    <li className="pb-2">REST API</li>
    <li className="pb-2">Agile/Scrum</li>
  </ul>
</div>
          </div>
        </div>

        <div className="float">
          <div className="text-xl pb-10">Education:</div>
          <div className="flex items-center justify-between">
          <div className="text-xl text-white">Bachelor of Arts in Computer Science</div>
          <div className="text-sm text-gray-500">2017-2021</div>
          </div>
          <div className="text-gray-500">Purdue School of Science, IUPUI</div>
        </div>
                  </div>

        <div className="floaty">
        <div className="flex items-center pl-7 pt-5">
        <a className="inline-flex items-center pr-1 leading-tight font-medium text-slate-200 group border-b border-transparent pb-px transition hover:border-teal-300" href="https://pokemon-box-nine.vercel.app/" target="_blank" rel="noreferrer">View Full Resume</a>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
        </div>
        </div>

        </section>

        <section id="projects" className="pt-20">
        <h1 className="text-4xl pb-5">Projects</h1>
        <div id="dim">
        <a href="https://harmony-hub-zeta.vercel.app/" target="_blank" rel="noreferrer">
        <div className="float">
          <img src='harmony-hub.png' alt="Harmony Hub" className="border-2 border-slate-400/50" />
          <div className="sm:flex items-center justify-between pt-5">
          <div className="flex items-center">Harmony Hub (Music App)
          <div className="pl-2 pt-2">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
          </div>
          </div>
          <a className="text-white hover:text-teal-300 focus-visible:text-teal-300" href="https://github.com/AbbaAdam1/HarmonyHub" target="_blank" rel="noreferrer"><span className="sr-only">GitHub</span><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
          </div>
          <p className="font-normal text-sm text-gray-700 py-5 dark:text-gray-400">Developed an app that displays albums using Spotify API, and allows playing audio clips from each album using an audio player I built in JavaScript.</p>
          <ul class="flex flex-wrap">
            <li class="mr-1.5 mt-2">
              <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">TypeScript</div>
            </li>
            <li class="mr-1.5 mt-2">
              <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React.js</div>
            </li>
            <li class="mr-1.5 mt-2">
              <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Next.js </div>
            </li>
            <li class="mr-1.5 mt-2">
              <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Tailwind CSS</div>
            </li>
            <li class="mr-1.5 mt-2">
              <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Node.js</div>
            </li>
            <li class="mr-1.5 mt-2">
              <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">REST API</div>
            </li>
          </ul>
        </div>
        </a>


        <a href="https://pokemon-box-nine.vercel.app/" target="_blank" rel="noreferrer">
        <div className="float">
          <img src='pokemon-box.png' alt="Pokemon Box" className="border-2 border-slate-400/50" />
          <div className="sm:flex items-center justify-between pt-5">
          <div className="flex items-center">Pokemon Box (Storage app)
          <div className="pl-2 pt-2">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg>
          </div>
          </div>
          <a className="text-white hover:text-teal-300 focus-visible:text-teal-300" href="https://github.com/AbbaAdam1/pokemon-box/" target="_blank" rel="noreferrer"><span className="sr-only">GitHub</span><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
          </div>
          <p className="font-normal text-sm text-gray-700 py-5 dark:text-gray-400">Developed a Pokemon database website where users can create an account and log-in to store, read, and delete Pokemon data.</p>
          <ul class="flex flex-wrap">
            <li class="mr-1.5 mt-2">
              <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">JavaScript</div>
            </li>
            <li class="mr-1.5 mt-2">
              <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">React.js</div>
            </li>
            <li class="mr-1.5 mt-2">
              <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Next.js </div>
            </li>
            <li class="mr-1.5 mt-2">
              <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">PostgreSQL</div>
            </li>
            <li class="mr-1.5 mt-2">
              <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Supabase Authentication</div>
            </li>
            <li class="mr-1.5 mt-2">
              <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Tailwind CSS</div>
            </li>
            <li class="mr-1.5 mt-2">
              <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">Node.js</div>
            </li>
            <li class="mr-1.5 mt-2">
              <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">REST API</div>
            </li>
          </ul>
        </div>
        </a>
        </div>
        </section>


<div id="dim">
         <a href="tel:+13174643056" className="md:float lg:flex items-center md:pl-5 py-5">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="h-10 w-10" xmlns="http://www.w3.org/2000/svg"><path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path><path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path></svg>
        <div className="lg:pl-24">+1 317-464-3056</div>
        </a>

        <a href="mailto:mahadamsp@gmail.com" className="md:float lg:flex items-center md:pl-5 py-5">
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="h-10 w-10" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        <div className="lg:pl-24">mahadamsp@gmail.com</div>
        </a>

        <div className="md:float lg:flex items-center lg:pl-5 py-5">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" className="h-10 w-10" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 5c1.609 0 3.12.614 4.254 1.73 1.126 1.107 1.746 2.579 1.746 4.14s-.62 3.03-1.745 4.139l-4.255 4.184-4.254-4.186c-1.125-1.107-1.745-2.576-1.745-4.139s.62-3.032 1.745-4.141c1.135-1.113 2.647-1.727 4.254-1.727m0-2c-2.047 0-4.096.768-5.657 2.305-3.124 3.074-3.124 8.057 0 11.131l5.657 5.563 5.657-5.565c3.124-3.072 3.124-8.056 0-11.129-1.561-1.537-3.609-2.305-5.657-2.305zM12 8.499c.668 0 1.296.26 1.768.731.976.976.976 2.562 0 3.537-.473.472-1.1.731-1.768.731s-1.295-.26-1.768-.731c-.976-.976-.976-2.562 0-3.537.473-.471 1.101-.731 1.768-.731m0-1c-.896 0-1.792.342-2.475 1.024-1.367 1.367-1.367 3.584 0 4.951.684.684 1.578 1.024 2.475 1.024s1.792-.342 2.475-1.024c1.366-1.367 1.366-3.584 0-4.951-.683-.683-1.579-1.024-2.475-1.024z"></path></svg>
        <div className="lg:pl-24">Indianapolis, Indiana</div>
        </div>
</div>
      </div>
    </div>
  );
}

export default App;
