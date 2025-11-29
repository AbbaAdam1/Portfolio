import React from "react";
import "./index.css";

const Experience = () => {
  return (
    <section id="experience" className="pt-20">
      <h1 className="text-4xl">Experience</h1>

      <div id="dim">
        <div className="float">
          <div className="flex items-center justify-between">
            <div>Software Engineer</div>
            <div className="text-sm text-slate-500">2021-2023</div>
          </div>
          <div className="text-slate-500">
            GenSpark (Fannie Mae Contract)
          </div>
          <p className="font-normal text-sm text-slate-700 py-5 dark:text-slate-400">
            <ul>
              <li>● Developed full-stack applications using Java, JavaScript, TypeScript, React.js, and SQL</li>
              <li>● Automated ETL processes using AWS, Python, and SQL, transforming business requirements into production-quality code</li>
              <li>● Built Lambda functions for Redshift to S3 data ingestion, handling 20% of project-wide data quality checks</li>
              <li>● Achieved 80% code coverage through comprehensive testing and delivered constructive code reviews</li>
              <li>● Quickly adapted to new frameworks, delivering stable software solutions across multiple projects</li>
            </ul>
          </p>
        </div>

        <div className="float">
          <div className="flex items-center justify-between">
            <div>Front-End Developer Internship</div>
            <div className="text-sm text-slate-500">2021</div>
          </div>
          <div className="text-slate-500">TDM Business Toole Suite</div>
          <p className="font-normal text-sm text-slate-700 py-5 dark:text-slate-400">
            <ul>
              <li>● Enhanced web applications using JavaScript and React, improving user experience and workflows</li>
              <li>● Conducted cross-browser testing and converted CSS to Styled-Components for improved maintainability</li>
            </ul>
          </p>
        </div>

        <div className="float">
          <p className="pb-10 text-xl">Technologies:</p>
          <div className="text-slate-400">
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
            <div className="text-xl text-white">
              Bachelor of Arts in Computer Science
            </div>
            <div className="text-sm text-slate-500">2017-2021</div>
          </div>
          <div className="text-slate-500">Purdue School of Science, IUPUI</div>
        </div>
      </div>

        <div className="float">
          <div className="text-xl pb-10">Certifications:</div>
          <div className="flex items-center justify-between">
            <div className="text-xl text-white">
              AWS Certified Solutions Architect - Associate
            </div>
            <div className="text-sm text-slate-500">2024</div>
          </div>
        </div>

      <div className="Rfloat">
        <div className="flex items-center pl-7 pt-5">
          <a
            className="inline-flex items-center pr-1 leading-tight font-medium text-slate-200 group border-b border-transparent pb-px transition hover:border-teal-300"
            href="https://docs.google.com/document/d/1oWPxVTdAF16dtbIQt5Yz9VGc-S4R8cX68QiKadC5cOo"
            target="_blank"
            rel="noreferrer"
          >
            View Full Resume
          </a>
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
    </section>
  );
};

export default Experience;
