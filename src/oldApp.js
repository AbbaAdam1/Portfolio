import './index.css';
//import './App.css';

function App() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h1 className="text-5xl">Mahamadou Adam</h1>
        <h2 className="text-2xl">Full-Stack Engineer</h2>
        <p className="text-sm">I be building stuff, ya feel?</p>

      </div>


      <div>
        <p>Shes cheer captain and Im on the bleachers</p>
        <p>Technologies:</p>
        <div className="block">
            <div className="grid grid-cols-2 gap-4">
                <ul class="list-disc">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>Rest API</li>
                    <li>HTML/CSS</li>
                    <li>Next.js</li>
                    <li>Tailwind</li>
                </ul>
                <ul class="list-disc">
                    <li>Authentication</li>
                    <li>Python</li>
                    <li>AWS</li>
                    <li>Git/Github/Bitbucket</li>
                    <li>Agile/Scrum</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                  <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                </ul>
            </div>
        </div>
        <a href="https://www.example.com">Harmony Hub (Music app)</a>
        <a href="https://www.example.com">Pokemon Box (Storage app)</a>

        <p>+1 317-464-3056</p>
        <p>mahadamsp@gmail.com</p>
        <p>Indianapolis, Indiana</p>

      </div>
    </div>
  );
}


export default App;
