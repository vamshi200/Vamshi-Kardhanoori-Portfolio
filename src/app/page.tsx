"use client";

import { useEffect, useState } from "react";

function Skill({ logo, name }: { logo: string; name: string }) {
  return (
    <div className="skillBox">
      <img src={`/logos/${logo}`} alt={name} className="skillLogo" />
      <p>{name}</p>
    </div>
  );
}

export default function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPortfolio(true), 5200);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "AI RAG Document Chatbot",
      category: "Generative AI Application",
      desc: "Built a production-style document intelligence system that enables users to upload documents, retrieve relevant context, and generate accurate answers using Retrieval-Augmented Generation.",
      stack: "LangChain • FAISS • Hugging Face • Streamlit • Python",
      impact:
        "Improves document search, contextual Q&A, knowledge discovery, and information accessibility across unstructured documents.",
      architecture:
        "Document Upload → Text Extraction → Chunking → Embeddings → FAISS Vector Store → Semantic Retrieval → LLM Response",
    },
    {
      title: "AI Customer Feedback Intelligence",
      category: "NLP Analytics Platform",
      desc: "Developed an AI-powered feedback analytics platform that analyzes customer comments, detects sentiment patterns, extracts recurring themes, and converts raw feedback into actionable business insights.",
      stack: "Python • NLP • Streamlit • Pandas • Text Analytics",
      impact:
        "Helps teams identify customer pain points, product improvement areas, sentiment trends, and decision-ready insights from large volumes of feedback.",
      architecture:
        "Customer Feedback → Text Cleaning → NLP Processing → Sentiment Analysis → Theme Extraction → Insights Dashboard",
    },
    {
      title: "Real-Time IoT Kinesis Data Pipeline",
      category: "Cloud Data Engineering",
      desc: "Designed a real-time AWS streaming pipeline for ingesting, processing, storing, and querying IoT sensor events from smart manufacturing systems.",
      stack: "AWS Kinesis • Lambda • Firehose • S3 • Athena • QuickSight",
      impact:
        "Supports scalable event ingestion, near real-time monitoring, operational analytics, and visibility into manufacturing sensor performance.",
      architecture:
        "IoT Sensors → Kinesis Data Streams → Lambda Processing → Firehose Delivery → S3 Data Lake → Athena Queries → QuickSight Dashboard",
    },
    {
      title: "CI/CD Pipeline for Node.js Microservices",
      category: "Cloud DevOps Automation",
      desc: "Implemented an automated CI/CD workflow for containerized Node.js microservices using Docker, GitHub Actions, Terraform, and AWS cloud deployment practices.",
      stack: "Node.js • Docker • GitHub Actions • Terraform • AWS",
      impact:
        "Improves release reliability, deployment consistency, infrastructure automation, and production-readiness for cloud-native microservices.",
      architecture:
        "Code Commit → GitHub Actions → Docker Build → Terraform Provisioning → AWS Deployment → Monitoring",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {!showPortfolio && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <div className="vIntro">
            <span>V</span>
          </div>
        </div>
      )}

      {showPortfolio && (
        <div className="fadeIn">
          <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md px-8 py-5 flex justify-between">
            <h1 className="text-red-700 text-3xl font-black">V</h1>
            <div className="hidden md:flex gap-7 text-gray-300">
              <a href="#about">About</a>
              <a href="#education">Education</a>
              <a href="#certifications">Certifications</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <section className="hero">
            <p className="now">NOW STREAMING</p>
            <h1>Vamshi Kardhanoori</h1>
            <p className="role">Generative AI Engineer</p>
            <p className="sub">Machine Learning Engineer | Data Scientist</p>
            <p className="desc">
            Designing intelligent AI systems powered by Large Language Models,
    Retrieval-Augmented Generation, cloud-native infrastructure,
    scalable ML pipelines, and enterprise-grade Generative AI solutions.
            </p>

            
          </section>

          <section id="about" className="section">
            <h2>About Me</h2>
            <div className="card aboutCard">
              <p className="tagline">
                Engineering intelligence. Building scalable AI. Creating
                technology that delivers impact.
              </p>

              <p>Hello, I&apos;m Raghuvamshi Kardhanoori.</p>

              <p>
                I am an AI and Machine Learning Engineer focused on building
                intelligent systems that bridge advanced research with real-world
                business impact. My work centers around Generative AI, Large
                Language Models, Machine Learning, Natural Language Processing,
                Retrieval-Augmented Generation, and scalable cloud-native AI
                solutions.
              </p>

              <p>
                I completed my Master&apos;s in Information Science and
                specialize in designing production-oriented AI systems that
                transform complex data into meaningful insights, automation, and
                decision intelligence. My technical foundation spans modern AI
                engineering, cloud technologies, model deployment, MLOps
                practices, and end-to-end machine learning architectures.
              </p>

              <p>
                I enjoy solving challenging problems by building reliable,
                scalable, and intelligent applications that create measurable
                value. From developing enterprise AI solutions to architecting
                intelligent automation systems, I focus on combining innovation,
                engineering excellence, and practical execution.
              </p>

              <p>
                My approach to technology is driven by continuous learning,
                strong engineering principles, and a commitment to building
                solutions that are impactful, efficient, and designed for
                real-world adoption.
              </p>

              <p>
                This portfolio represents my journey, technical expertise, and
                passion for building the next generation of AI-powered systems.
              </p>
            </div>
          </section>

          <section id="education" className="section">
            <h2>Education</h2>

            <div className="educationGrid">
              <div className="educationCard">
                <img
                  src="/logos/mst.png"
                  alt="Missouri S&T"
                  className="eduLogo"
                />

                <div>
                  <h3>Missouri University of Science and Technology</h3>
                  <h4>Master&apos;s in Information Science and Technology</h4>
                  <p>Rolla, Missouri, USA</p>
                  <span>Graduated • December 2025</span>
                </div>
              </div>

              <div className="educationCard">
                <img
                  src="/logos/cmr.png"
                  alt="CMR Institute of Technology"
                  className="eduLogo cmrLogo"
                />

                <div>
                  <h3>CMR Institute of Technology</h3>
                  <h4>Bachelor&apos;s Degree</h4>
                  <p>Hyderabad, India</p>
                </div>
              </div>
            </div>
          </section>

          <section id="certifications" className="section">
            <h2>Certifications</h2>
            <div className="grid">
              <div className="card">
                <h3>AWS Certified Developer Associate</h3>
                <p>
                  Validated expertise in AWS cloud services, serverless
                  architectures, application deployment, cloud-native
                  development, security best practices, monitoring, CI/CD
                  workflows, and building scalable, resilient solutions using
                  core AWS technologies.
                </p>
              </div>

              <div className="card">
                <h3>SQL Advanced — HackerRank</h3>
                <p>
                  Demonstrated advanced SQL proficiency including complex joins,
                  window functions, query optimization, data transformation,
                  analytical functions, and relational database problem solving
                  for data-driven applications.
                </p>
              </div>

              <div className="card">
                <h3>Software Engineer — HackerRank</h3>
                <p>
                  Validated software engineering skills covering problem
                  solving, algorithms, data structures, programming
                  fundamentals, debugging, and scalable software development
                  practices aligned with industry engineering standards.
                </p>
              </div>

              <div className="card">
                <h3>Business Analytics and Data Science</h3>
                <p>
                  Demonstrated expertise in business intelligence, statistical
                  analysis, predictive modeling, data visualization, data-driven
                  decision making, analytical problem solving, and transforming
                  complex datasets into actionable business insights using modern
                  analytics methodologies.
                </p>
              </div>

              <div className="card">
                <h3>Generative AI Fundamentals — Databricks</h3>
                <p>
                  Validated foundational expertise in Generative AI concepts,
                  Large Language Models, prompt engineering, transformer
                  architectures, Retrieval-Augmented Generation, vector search,
                  AI application workflows, and building scalable enterprise AI
                  solutions using modern generative AI technologies.
                </p>
              </div>
              <div className="card">
  <h3>Foundation: Introduction to LangChain - Python</h3>
  <p>
    Completed LangChain Academy training covering LangChain fundamentals,
    prompt engineering, LLM orchestration, retrieval workflows, chains, and
    production-style AI application development using Python.
  </p>
</div>

<div className="card">
  <h3>Foundation: Introduction to LangGraph - Python</h3>
  <p>
    Completed LangChain Academy training covering LangGraph fundamentals,
    agent workflows, graph-based orchestration, state management, multi-step
    reasoning systems, and production-ready AI agent architecture using Python.
  </p>
</div>
<div className="card">
  <h3>Fundamentals of Agents — Hugging Face</h3>
  <p>
    Completed Hugging Face Agents training covering AI agent fundamentals,
    tool usage, reasoning workflows, Thought–Action–Observation execution patterns,
    autonomous agent systems, Large Language Model orchestration, and production-oriented
    intelligent agent development using modern Generative AI frameworks.
  </p>
</div>
            </div>
          </section>

          <section id="skills" className="section">
            <h2>Tech Stack</h2>

            <div className="stackGrid">
              <div className="skillCard">
                <h3>Programming Skills</h3>
                <div className="iconGrid">
                  <Skill logo="python-official.svg" name="Python" />
                  <Skill logo="java-ar21.svg" name="Java" />
                  <Skill logo="javascript-ar21.svg" name="JavaScript" />
                  <Skill logo="typescriptlang-ar21.svg" name="TypeScript" />
                  <Skill logo="golang-ar21.svg" name="Go" />
                  <Skill logo="r-project-icon.svg" name="R" />
                  <Skill logo="mysql-ar21.svg" name="MySQL" />
                  <Skill logo="postgresql-ar21.svg" name="PostgreSQL" />
                </div>
              </div>

              <div className="skillCard">
                <h3>AI / ML & Data Stack</h3>
                <div className="iconGrid">
                  <Skill logo="pytorch-ar21.svg" name="PyTorch" />
                  <Skill logo="tensorflow-ar21.svg" name="TensorFlow" />
                  <Skill logo="numpy-ar21.svg" name="NumPy" />
                  <Skill logo="usepanda-ar21.svg" name="Pandas" />
                  <Skill logo="apache_spark-ar21.svg" name="Spark" />
                  <Skill logo="databricks-ar21.svg" name="Databricks" />
                  <Skill logo="snowflake-ar21.svg" name="Snowflake" />
                  <Skill logo="postgresql-ar21.svg" name="SQL" />
                </div>
              </div>

              <div className="skillCard">
                <h3>Cloud Platforms</h3>
                <div className="iconGrid">
                  <Skill logo="amazon_aws-ar21.svg" name="AWS" />
                  <Skill logo="google_cloud-ar21.svg" name="Google Cloud" />
                  <Skill logo="microsoft_azure-ar21.svg" name="Azure" />
                  <Skill logo="databricks-ar21.svg" name="Databricks" />
                  <Skill logo="snowflake-ar21.svg" name="Snowflake" />
                </div>
              </div>

              <div className="skillCard">
                <h3>DevOps & Infrastructure</h3>
                <div className="iconGrid">
                  <Skill logo="docker-ar21.svg" name="Docker" />
                  <Skill logo="kubernetes-ar21.svg" name="Kubernetes" />
                  <Skill logo="microsoft_azure-ar21.svg" name="Azure AI" />
                  <Skill logo="google_cloud-ar21.svg" name="GCP Deployments" />
                </div>
              </div>
            </div>

            <div className="whatIDo">
              <div>
                <span>▣</span>
                Build Generative AI Applications
              </div>
              <div>
                <span>⌁</span>
                Develop Scalable ML Pipelines
              </div>
              <div>
                <span>◈</span>
                Design Intelligent Automations
              </div>
              <div>
                <span>☁</span>
                Deploy & Monitor AI Systems
              </div>
              <div>
                <span>▥</span>
                Extract Insights from Complex Data
              </div>
            </div>
          </section>

          <section id="experience" className="section">
            <h2>Experience</h2>
            <div className="experienceContainer">

<div className="experienceCard">

<div className="experienceYears">
Apr 2025 – Present
</div>

<div className="company">
Google
</div>

<div className="role">
Generative AI Engineer
</div>

<p className="experienceDesc">

Architected enterprise-scale Generative AI solutions leveraging Large Language Models, Retrieval-Augmented Generation frameworks, vector search infrastructure, intelligent agent workflows, and cloud-native AI systems to build production-grade applications that transform unstructured data into actionable intelligence and scalable business value.
</p>

<div className="techStack">

<span>Python</span>

<span>LLMs</span>

<span>LangChain</span>

<span>RAG</span>

<span>AWS</span>

<span>Azure</span>

<span>PyTorch</span>

</div>

</div>


<div className="experienceCard">

<div className="experienceYears">
May 2024 – Mar 2025
</div>

<div className="company">
Evernorth Health Services
</div>

<div className="role">
Machine Learning Engineer
</div>

<p className="experienceDesc">

Designed and deployed machine learning solutions focused on healthcare analytics, predictive intelligence, NLP pipelines, model optimization, and cloud-native AI architectures to improve operational efficiency, automate decision workflows, and enable data-driven healthcare insights at scale.
</p>

<div className="techStack">

<span>Python</span>

<span>NLP</span>

<span>Machine Learning</span>

<span>AWS</span>

<span>Azure</span>

<span>Healthcare AI</span>

<span>MLOps</span>

</div>

</div>


<div className="experienceCard">

<div className="experienceYears">
Oct 2020 – Sep 2023
</div>

<div className="company">
AMD
</div>

<div className="role">
Data Scientist
</div>

<p className="experienceDesc">

Developed large-scale data science and machine learning solutions involving statistical modeling, experimentation frameworks, predictive analytics, cloud-enabled intelligence platforms, and advanced analytical systems to drive business optimization, engineering insights, and scalable data-driven decision making.
</p>

<div className="techStack">

<span>Python</span>

<span>SQL</span>

<span>Azure</span>

<span>AWS</span>

<span>Machine Learning</span>

<span>GPU Architecture</span>

<span>LLM Inferencing</span>


</div>

</div>

</div>
          </section>

          <section id="projects" className="section">
            <h2>Featured Projects</h2>
            <div className="projectRow">
              {projects.map((project) => (
                <div className="projectCard" key={project.title}>
                <div className="projectTop">
                  <div className="thumb">V</div>
                  <span>{project.category}</span>
                </div>
              
                <h3>{project.title}</h3>
              
                <p>{project.desc}</p>
              
                <div className="architectureBox">
                  <strong>Architecture</strong>
                  <p>{project.architecture}</p>
                </div>
              
                <p className="impact">{project.impact}</p>
              
                <p className="stack">{project.stack}</p>
              
                <div className="miniButtons">
                  <a href="https://github.com/vamshi200" target="_blank">
                    GitHub
                  </a>
                </div>
              </div>
              ))}
            </div>
          </section>

          <section id="contact" className="section contact">
            <h2>Let&apos;s Build Something Intelligent</h2>
            <div className="card">
              <p>Email: vammshi0204@gmail.com</p>
              <p>Phone: +1 (573) 537-0775</p>
              <p className="red mt">Open To Work</p>
            </div>
          </section>
          <section id="feedback" className="feedbackSection">
  <h2>Share Feedback</h2>

  <p>
  Always open to connecting with professionals, discussing emerging AI technologies, exploring innovative ideas, and collaborating on opportunities that create meaningful impact through technology.
  </p>

  <div className="feedbackCard">
    <textarea
      placeholder="Write your feedback here..."
      className="feedbackInput"
    ></textarea>

    <a
      href="mailto:vammshi0204@gmail.com?subject=Portfolio Feedback"
      className="feedbackButton"
    >
      Send Feedback
    </a>
  </div>
</section>

          <footer className="footer">
            <div className="footerContent">
              <div className="copyright">
                © {new Date().getFullYear()} All
                Rights Reserved.
              </div>

              <div className="builtBy">Engineered and Designed by Vamshi</div>
            </div>
          </footer>
        </div>
      )}

      <style>{`
        html { scroll-behavior: smooth; }
        body { background: black; }

        .vIntro {
          position: relative;
          animation: zoomOut 5.2s cubic-bezier(.76,0,.24,1) forwards;
        }

        .vIntro span {
          font-family: Impact, Arial Black, sans-serif;
          font-size: 24vw;
          font-weight: 900;
          line-height: .75;
          display: block;
          background:
            linear-gradient(90deg,#180000 0%,#420003 18%,#7A0008 35%,#B20710 52%,#790007 68%,#360002 82%,#120000 100%),
            repeating-linear-gradient(90deg,#5d0006 0px,#8e0009 3px,#ca0010 6px,#ff1a25 8px,#890009 11px,#430003 14px);
          background-blend-mode: screen;
          background-size: 100% 100%, 230% 100%;
          background-position: center, 0% 0%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          filter:
            drop-shadow(0 0 6px rgba(120,0,0,.45))
            drop-shadow(0 0 16px rgba(180,0,0,.25));
          animation: stripeInside 5.2s cubic-bezier(.76,0,.24,1) forwards;
        }

        @keyframes stripeInside {
          0%,35% { background-position: center,0% 0%; letter-spacing: -8px; opacity: 1; }
          55% { background-position: center,90% 0%; opacity: 1; }
          75% { background-position: center,170% 0%; letter-spacing: 16px; opacity: 1; }
          100% { background-position: center,260% 0%; letter-spacing: 80px; opacity: 0; }
        }

        @keyframes zoomOut {
          0% { transform: scale(.25); opacity: 0; }
          18% { transform: scale(1); opacity: 1; }
          60% { transform: scale(1.04); opacity: 1; }
          100% { transform: scale(7); opacity: 0; }
        }

        .fadeIn { animation: fadeIn 1s ease forwards; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 40px;
        }

        .now { color: #7A0008; letter-spacing: 4px; margin-bottom: 20px; }
        .hero h1 { font-size: 76px; font-weight: 900; }
        .role { color: #B20710; font-size: 28px; margin-top: 25px; }
        .sub { color: #aaa; font-size: 22px; margin-top: 12px; }
        .desc { color: #777; max-width: 880px; margin-top: 28px; line-height: 1.8; }

        .buttons {
          display: flex;
          gap: 16px;
          margin-top: 35px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .buttons a, .miniButtons a {
          background: #111;
          border: 1px solid #333;
          padding: 13px 24px;
          border-radius: 8px;
          color: white;
          text-decoration: none;
          transition: .3s;
        }

        .buttons a:hover, .miniButtons a:hover {
          background: #7A0008;
          border-color: #B20710;
        }

        .section { padding: 90px 8vw; }
        .section h2 { font-size: 42px; font-weight: 900; margin-bottom: 30px; }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .card, .projectCard {
          background: #111;
          padding: 30px;
          border-radius: 18px;
          border: 1px solid #222;
          color: #ccc;
          transition: .3s;
        }

        .aboutCard p {
          margin-bottom: 22px;
          line-height: 1.85;
          color: #d0d0d0;
        }

        .aboutCard .tagline {
          color: #B20710;
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 30px;
        }

        .educationGrid {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .educationCard {
          display: flex;
          align-items: center;
          gap: 26px;
          padding: 30px;
          background: #080808;
          border: 1px solid rgba(229,9,20,.18);
          border-radius: 24px;
          box-shadow: 0 0 24px rgba(229,9,20,.08);
          transition: .35s;
        }

        .educationCard:hover {
          transform: translateY(-6px);
          border-color: #E50914;
          box-shadow: 0 0 35px rgba(229,9,20,.25);
        }

        .eduLogo {
          width: 95px;
          height: 95px;
          object-fit: contain;
          padding: 6px;
          border-radius: 18px;
          flex-shrink: 0;
          background: transparent;
          filter:
            drop-shadow(0 0 10px rgba(229,9,20,.18))
            brightness(1.02);
        }

        .cmrLogo {
          width: 110px;
          height: 75px;
          object-fit: contain;
          background: white;
          padding: 8px;
          border-radius: 12px;
        }

        .educationCard h3 {
          font-size: 26px;
          font-weight: 800;
          margin-bottom: 8px;
          color: white;
        }

        .educationCard h4 {
          color: #E50914;
          font-size: 18px;
          margin-bottom: 8px;
        }

        .educationCard p {
          color: #bdbdbd;
          font-size: 16px;
        }

        .educationCard span {
          color: #8f8f8f;
          font-size: 14px;
        }

        .card:hover {
  transform: scale(1.03);
  border-color: #7A0008;
  box-shadow: 0 0 30px rgba(122,0,8,.35);
}

.experienceContainer {
display:flex;
flex-direction:column;
gap:24px;
margin-top:35px;
max-width:1000px;
margin-left:auto;
margin-right:auto;
}

.experienceCard {
  background: #0b0b0b;
  border:1px solid rgba(255,255,255,.06);
  padding: 34px;
  border-radius: 22px;
  transition: .35s;
  position: relative;
}

.experienceCard:hover {
  transform: translateY(-5px);
  border-color: #B20710;
  box-shadow: 0 0 30px rgba(229,9,20,.18);
}
  .techStack{

display:flex;

flex-wrap:wrap;

gap:10px;

margin-top:22px;

}

.techStack span{

background:#111;

border:1px solid rgba(229,9,20,.18);

padding:8px 14px;

border-radius:999px;

font-size:13px;

color:#e0e0e0;

transition:.3s;

}

.techStack span:hover{

background:#7A0008;

transform:translateY(-2px);

box-shadow:
0 0 15px rgba(229,9,20,.20);

}


.company {
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.experienceRole {
  color: white;
  font-size: 34px;
  font-weight: 800;
  margin-bottom: 14px;
}

.experienceDesc {
  color: #b8b8b8;
  line-height: 1.9;
  max-width: 900px;
  font-size: 16px;
}

.experienceYears {
  position: absolute;
  right: 30px;
  top: 30px;
  color: #777;
  font-size: 14px;
}

        .card h3, .projectCard h3 {
          color: white;
          font-size: 24px;
          margin-bottom: 14px;
        }

        .red { color: #B20710; }
        .mt { margin-top: 16px; }

        .stackGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .skillCard {
          background: radial-gradient(circle at top left, rgba(122,0,8,.16), #080808 40%, #050505 100%);
          padding: 32px;
          border-radius: 24px;
          border: 1px solid rgba(229,9,20,.18);
          box-shadow: 0 0 40px rgba(229,9,20,.08);
          transition: .35s;
        }

        .skillCard:hover {
          transform: translateY(-8px);
          border-color: #7A0008;
          box-shadow: 0 0 45px rgba(229,9,20,.20);
        }

        .skillCard h3 {
          color: #B20710;
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 26px;
        }

        .iconGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .skillBox {
          background: #111;
          border: 1px solid rgba(255,255,255,.06);
          border-radius: 18px;
          padding: 20px 12px;
          text-align: center;
          transition: .3s;
          min-height: 118px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .skillBox:hover {
          transform: scale(1.06);
          background: #161616;
          box-shadow: 0 0 28px rgba(229,9,20,.24);
          border-color: rgba(229,9,20,.45);
        }

        .skillLogo {
          width: 72px;
          height: 46px;
          object-fit: contain;
          margin-bottom: 14px;
          background: #f5f5f5;
          padding: 6px;
          border-radius: 10px;
        }

        .skillBox p {
          color: #e5e5e5;
          font-size: 14px;
          font-weight: 600;
        }

        .whatIDo {
          margin-top: 46px;
          background: #0b0b0b;
          border: 1px solid rgba(229,9,20,.18);
          border-radius: 24px;
          padding: 24px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .whatIDo div {
          color: #ddd;
          font-size: 15px;
          line-height: 1.5;
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
          text-align: center;
        }

        .whatIDo span {
          font-size: 28px;
          color: #B20710;
        }

        .projectCard {
  width: 100%;
  min-height: auto;
  background: #0b0b0b;
  border: 1px solid rgba(229,9,20,.14);
  padding: 28px;
  border-radius: 22px;
  transition: .35s;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.projectCard:hover {
  transform: translateY(-8px);
  border-color: #B20710;
  box-shadow: 0 0 30px rgba(229,9,20,.18);
}

.projectCard {
  width: 100%;
  min-height: auto;
  background: #0b0b0b;
  border: 1px solid rgba(229,9,20,.14);
  padding: 28px;
  border-radius: 22px;
  transition: .35s;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.projectCard:hover {
  transform: translateY(-8px);
  border-color: #B20710;
  box-shadow: 0 0 30px rgba(229,9,20,.18);
}

        .thumb {
          height: 150px;
          border-radius: 14px;
          background: linear-gradient(135deg,#250000,#080808,#5a0005);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 54px;
          font-weight: 900;
          color: #7A0008;
          margin-bottom: 22px;
        }

        .stack {
          color: #B20710;
          margin-top: 18px;
          font-size: 14px;
        }

        .miniButtons {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }

        .contact {
          padding-bottom: 80px;
        }

        .footer {
  padding: 70px 25px;
  border-top: none;
  background: #050505;
  text-align: center;
  margin-top: 40px;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: "";
  display: none;
}

.footerContent {
  max-width: 900px;
  margin: auto;
}

.copyright {
  color: #666;
  margin-top: 18px;
  font-size: 14px;
}

.builtBy {
  margin-top: 10px;
  color: #B20710;
  font-weight: 800;
  letter-spacing: 1px;
}

        @media (max-width: 900px) {
          .stackGrid {
            grid-template-columns: 1fr;
          }

          .whatIDo {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .hero h1 { font-size: 46px; }
          .section { padding: 70px 24px; }
          .section h2 { font-size: 34px; }
          .projectCard { min-width: 290px; }
          .iconGrid { grid-template-columns: repeat(2, 1fr); }
          .educationCard {
            flex-direction: column;
            text-align: center;
          }
        }
          .feedbackSection {
  margin: 40px 8vw;
  padding: 60px 30px;
  text-align: center;
  border-radius: 26px;
  background: radial-gradient(circle at top, rgba(178,7,16,.18), transparent 55%), #080808;
  border: 1px solid rgba(229,9,20,.16);
}

.feedbackSection h2 {
  font-size: 38px;
  font-weight: 900;
  margin-bottom: 18px;
}

.feedbackSection p {
  color: #aaa;
  max-width: 720px;
  margin: auto;
  line-height: 1.8;
}

.feedbackCard {
  margin: 30px auto 0;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.feedbackInput {
  min-height: 150px;
  resize: vertical;
  background: #111;
  border: 1px solid rgba(229,9,20,.18);
  border-radius: 18px;
  color: white;
  padding: 20px;
  outline: none;
}

.feedbackInput:focus {
  border-color: #E50914;
  box-shadow: 0 0 25px rgba(229,9,20,.18);
}

.feedbackButton {
  align-self: center;
  background: #111;
  border: 1px solid #333;
  padding: 13px 26px;
  border-radius: 8px;
  color: white;
  text-decoration: none;
  transition: .3s;
}

.feedbackButton:hover {
  background: #7A0008;
  border-color: #B20710;
  transform: translateY(-3px);
}
      `}</style>
    </main>
  );
}
