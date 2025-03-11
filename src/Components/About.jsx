import React, { useEffect } from "react";
import svg from "../../public/about1.svg";
import svg2 from "../../public/about2.svg";
import { FaApple, FaAndroid, FaSyncAlt, FaBug, FaWrench } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa6";
import { AiOutlineSolution } from "react-icons/ai";
import TeamCarousel from "./TeamCarousel/TeamCarousel";
import ScrollReveal from "scrollreveal";

const About = () => {
  const cardsContent = [
    {
      title: "Latest Technologies",
      description:
        "At ITSYBIZZ, we innovate with cutting-edge technologies like React, Vue, Next, Node, MongoDB, Flutter, and WordPress. From responsive web design to digital marketing and software development",
      icon: <FaRegFileCode className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Unique Solutions",
      description:
        "At ITSYBIZZ, we craft unique digital solutions tailored to your vision, ensuring a distinct online presence.",
      icon: <AiOutlineSolution className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Powerful Strategies",
      description:
        "Choosing us means a complete digital solution—from web design to marketing and brand building—all seamlessly integrated to elevate your presence.",
      icon: <FaSyncAlt className="w-10 h-10 text-green-500" />,
    },
  ];

    useEffect(() => {
      // Initialize ScrollReveal
      ScrollReveal().reveal('.reveal', {
        distance: '50px', // Distance of the effect
        duration: 800, // Duration of the effect
        delay: 100, // Delay before the effect starts
        opacity: 0, // Start opacity (element is invisible before scroll)
        scale: 0.85, // Scaling effect when revealing
        easing: 'ease-in-out', // Easing function for the effect
      });
    }, []);
  

  return (
    <>
      <div>
        <div className="w-full flex justify-center items-center py-15">
          <div className="flex flex-col md:flex-row items-center p-6 rounded-lg  w-full">
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left p-4">
              <h1 className="text-4xl pb-4 font-bold text-green-400">
                About Us
              </h1>
              <h1 className=" font-bold text-gray-50">
                Welcome to ITSYBIZZ, a driving force in digital evolution and
                innovation based in Faridabad & Delhi NCR. Our focus on website
                design and web development serves as a catalyst for businesses,
                bridging the gap between creativity and technology to transform
                digital landscapes. As we journey together, know that our
                destination is your digital triumph. It's a place where your
                brand shines brightly, your message resonates powerfully, and
                your goals are realized with precision. We invite you to join us
                on this transformative expedition, where the horizon is
                limitless, and the opportunities are boundless. Together, we'll
                uncover new horizons, navigate uncharted waters, and ultimately
                transform possibilities into the palpable reality of your
                digital success.
              </h1>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center reveal ">
              <img
                className="w-full max-w-xs md:max-w-sm rounded-lg"
                src="https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-backgrounds/about-page-marquee.sm.jpg"
                alt="AI Business Transformation"
              />
            </div>
          </div>
        </div>
        <div>
          {/* Why Choose Us Section */}

          <div className="flex flex-col md:flex-row items-center p-6 bg-white  w-full ">
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left p-4 reveal">
              <h1 className="text-4xl pb-4 font-bold text-gray-800">
                Our Vision
              </h1>
              <p className="text-lg leading-relaxed">
                At ITSYBIZZ , we envision a limitless digital future where
                businesses of all sizes thrive online. Through expert website
                design, development, digital marketing, brand building, and
                e-commerce solutions, we craft strategies that enhance your
                presence and elevate your brand. Our commitment is to turn this
                vision into reality.
              </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center reveal">
              <img
                className="w-full max-w-xs md:max-w-sm "
                src={svg}
                alt="AI Business Transformation"
              />
            </div>
          </div>
          {/* {second sections}   */}
          <div className="flex flex-col md:flex-row items-center p-6 bg-gray-50  w-full ">
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center reveal">
              <img
                className="w-full max-w-xs md:max-w-sm rounded-lg"
                src={svg2}
                alt="AI Business Transformation"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left p-4 reveal">
              <h1 className="text-4xl pb-4 font-bold text-gray-800">
                Our Mission
              </h1>
              <p className="text-lg leading-relaxed">
                Our mission is to blend creativity with technology, crafting
                impactful digital experiences through web design, development,
                marketing, and brand building. We bring ideas to life, ensuring
                lasting engagement and a strong online presence.
              </p>
            </div>
          </div>
          {/* {third sections}   */}
          <div className="flex flex-col md:flex-row items-center p-6 bg-white  w-full">
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left p-4 reveal">
              <h1 className="text-4xl pb-4 font-bold text-gray-800">
                Our Approach
              </h1>
              <p className="text-lg leading-relaxed">
                Partnering with ITSYBIZZ. unlocks endless possibilities. We
                blend innovation, expertise, and strategy to deliver seamless
                web design, development, and digital marketing solutions that
                evolve with your needs.
              </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center reveal">
              <img
                className="w-full max-w-xs md:max-w-sm "
                src={svg}
                alt="AI Business Transformation"
              />
            </div>
          </div>
          {/* fourth sections  */}

          <div className="flex flex-col md:flex-row items-center p-6 bg-gray-50  w-full">
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center reveal">
              <img
                className="w-full max-w-xs md:max-w-sm rounded-lg"
                src={svg2}
                alt="AI Business Transformation"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left p-4 reveal">
              <h1 className="text-4xl pb-4 font-bold text-gray-800">
                Our Core Services
              </h1>
              <p className="text-lg leading-relaxed">
                We power digital transformation with expert web design,
                development, marketing, brand building, and reputation
                management. Our tailored solutions and e-commerce expertise help
                businesses thrive globally.
              </p>
            </div>
          </div>

          <div className="p-8 ">
            {/* Responsive Cards */}
            <div className="text-center py-6  text-white">
              <h1 className="text-4xl capitalize  font-semibold reveal">
                Why Choose Us
              </h1>
              <div className="max-w-[80%] mx-auto  mt-6">
                <p className="text-lg leading-relaxed">
                  We don't believe in one-size-fits-all solutions. Our approach
                  is personalized, ensuring every client gets a strategy aligned
                  with their goals and challenges. From inception to execution,
                  our all-in-one services empower businesses to grow and
                  innovate.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 reveal">
              {cardsContent.map((card, index) => (
                <div
                  key={index}
                  className="bg-white p-7 reveal rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
                >
                  {card.icon}
                  <h2 className="text-xl font-semibold text-gray-800 mt-4">
                    {card.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <TeamCarousel />
      </div>
    </>
  );
};

export default About;
