import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      {/* Add spacing below Navbar */}
      <div className="min-h-screen text-white mt-[8vmin]">
        <section className="max-w-7xl mx-auto px-4 py-16">
          {/* Introduction Section */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-purple-500 relative left-[11vmin] top-10">
              Know Who I<span className="text-white">'M</span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-lg mt-4 leading-relaxed">
                Hi Everyone, I am{" "}
                <span className="text-purple-500 font-bold">Dhruv Singh Parihar</span> from{" "}
                <span className="text-purple-500 font-bold">Bhopal, India</span>.
                <br />
                I am currently pursuing my{" "}
                <span className="text-purple-500 font-bold">B.Tech in Computer Science</span> from NIT Bhopal (2023-2027).
              </p>
              <p className="mt-8 text-lg leading-relaxed">Apart from coding, some other activities that I love to do!</p>
              <ul className="mt-4 list-none space-y-2">
                <li>➜ Playing Games</li>
                <li>➜ Writing Blogs</li>
                <li>➜ Travelling</li>
              </ul>
              <blockquote className="mt-8 italic text-purple-400">
                "Strive to build things that make a difference!"
                <br />— Someone
              </blockquote>
            </div>
            <div className="md:w-[45%]">
              <img src="/public/images/photo1.png" alt="Your profile" className="rounded-lg shadow-lg w-full h-auto" />
            </div>
          </div>

          {/* Skillset Section */}
          <div className="text-center mt-[20vmin]">
            <h2 className="text-4xl font-bold text-purple-500 mb-20">
              Professional <span className="text-white">Skillset</span>
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8">
              <div className=" bg-white bg-opacity-5 p-6 rounded-lg w-40 h-40 flex items-center justify-center transform transition-transform hover:scale-110 hover:bg-transparent hover:shadow-[0_4px_20px_rgba(128,0,128,0.7)] border-2 border-white hover:border-purple-500">
                <p className="text-2xl font-bold text-center">C++</p>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-lg w-40 h-40 flex items-center justify-center transform transition-transform hover:scale-110 hover:bg-transparent hover:shadow-[0_4px_20px_rgba(128,0,128,0.7)] border-2 border-white hover:border-purple-500">
                <p className="text-2xl font-bold">HTML</p>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-lg w-40 h-40 flex items-center justify-center transform transition-transform hover:scale-110 hover:bg-transparent hover:shadow-[0_4px_20px_rgba(128,0,128,0.7)] border-2 border-white hover:border-purple-500">
                <p className="text-2xl font-bold">CSS</p>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-lg w-40 h-40 flex items-center justify-center transform transition-transform hover:scale-110 hover:bg-transparent hover:shadow-[0_4px_20px_rgba(128,0,128,0.7)] border-2 border-white hover:border-purple-500">
                <p className="text-2xl font-bold">Tailwind</p>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-lg w-40 h-40 flex items-center justify-center transform transition-transform hover:scale-110 hover:bg-transparent hover:shadow-[0_4px_20px_rgba(128,0,128,0.7)] border-2 border-white hover:border-purple-500">
                <p className="text-2xl font-bold">JS</p>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-lg w-40 h-40 flex items-center justify-center transform transition-transform hover:scale-110 hover:bg-transparent hover:shadow-[0_4px_20px_rgba(128,0,128,0.7)] border-2 border-white hover:border-purple-500">
                <p className="text-2xl font-bold">React</p>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-lg w-40 h-40 flex items-center justify-center transform transition-transform hover:scale-110 hover:bg-transparent hover:shadow-[0_4px_20px_rgba(128,0,128,0.7)] border-2 border-white hover:border-purple-500">
                <p className="text-2xl font-bold">Node.js</p>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-lg w-40 h-40 flex items-center justify-center transform transition-transform hover:scale-110 hover:bg-transparent hover:shadow-[0_4px_20px_rgba(128,0,128,0.7)] border-2 border-white hover:border-purple-500">
                <p className="text-2xl font-bold">MongoDB</p>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-lg w-40 h-40 flex items-center justify-center transform transition-transform hover:scale-110 hover:bg-transparent hover:shadow-[0_4px_20px_rgba(128,0,128,0.7)] border-2 border-white hover:border-purple-500">
                <p className="text-2xl font-bold">Git</p>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-lg w-40 h-40 flex items-center justify-center transform transition-transform hover:scale-110 hover:bg-transparent hover:shadow-[0_4px_20px_rgba(128,0,128,0.7)] border-2 border-white hover:border-purple-500">
                <p className="text-2xl font-bold">Java</p>
              </div>
            </div>
          </div>

          {/* Tools I Use Section */}
          <div className="text-center mt-16 mb-[10vmin]">
            <h2 className="text-4xl font-bold text-purple-500 mb-20">
              Tools <span className="text-white">I Use</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white bg-opacity-5 p-6 rounded-lg w-40 h-40 flex items-center justify-center transform transition-transform hover:scale-110 hover:bg-transparent hover:shadow-[0_4px_20px_rgba(128,0,128,0.7)] border-2 border-white hover:border-purple-500">
                <p className="text-2xl font-bold">VS Code</p>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-lg w-40 h-40 flex items-center justify-center transform transition-transform hover:scale-110 hover:bg-transparent hover:shadow-[0_4px_20px_rgba(128,0,128,0.7)] border-2 border-white hover:border-purple-500">
                <p className="text-2xl font-bold">GitHub</p>
              </div>
              <div className="bg-white bg-opacity-5 p-6 rounded-lg w-40 h-40 flex items-center justify-center transform transition-transform hover:scale-110 hover:bg-transparent hover:shadow-[0_4px_20px_rgba(128,0,128,0.7)] border-2 border-white hover:border-purple-500">
                <p className="text-2xl font-bold">Windows</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
