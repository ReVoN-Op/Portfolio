import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col flex-grow  text-white mt-[30vmin]">
        <div className="flex flex-wrap justify-between w-full max-w-7xl px-8">
          {/* Left Section */}
          <div className="text-left w-full md:w-[50%] pl-[15vmin] mt-[10vmin] pb-[40vmin]">
            <h1 className="font-bold text-4xl">
              Heyy Dhruv here 👋, Wanna be a <span className="text-purple-900">Software Engineer</span>
            </h1>
            <div className="text-2xl mt-4 font-bold text-purple-500">
              <Typewriter
                words={['Frontend Developer', 'Competitive Coder']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-end pr-[10vmin] mt-8 md:mt-0 pl-[40vmin]">
            <img
              src="/images/coder.jpg"
              alt="Coder"
              className="w-64 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <section className="flex flex-wrap items-center justify-between w-full max-w-7xl px-8 mt-12 mb-[15vmin]">
          {/* Left Section */}
          <div className="text-left w-full md:w-1/2 pl-[10vmin]">
            <h2 className="font-bold text-4xl mb-10 pl-[3vmin]">
              LET ME <span className="text-purple-500 font-bold">INTRODUCE</span> MYSELF
            </h2>
            <p className="text-lg leading-relaxed text-white font-2xl">
              I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              <br /><br />
              I am fluent in classics like <span className="text-purple-500 italic">C++, Javascript and MERN Stack.</span>
              <br /><br />
              My fields of interest are <span className="text-purple-500 italic">building new web technologies and products,</span> and I am also interested in algorithms.
              <br /><br />
              Whenever possible, I apply my passion for developing products with Node.js and modern JavaScript libraries and <span className="text-purple-500 italic">frameworks like React.js.</span>
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 pl-[40vmin]">
            <img
              src="/images/avatar.jpg"
              alt="Avatar"
              className="w-64 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>

      <Footer className="absolute bottom-0 w-full" />
    </>
  );
};

export default Home;
