import LinkedInIcon from "../../assets/images/linkedin-icon.svg";
import kImage from "../../assets/images/partners-image/k.png";
import chariImage from "../../assets/images/partners-image/chari.png";
import ericImage from "../../assets/images/partners-image/eric.png";
import ivyImage from "../../assets/images/partners-image/ivy.png";
import yamImage from "../../assets/images/partners-image/yam.png";
import jhaImage from "../../assets/images/partners-image/jha.png";

const teamMembers = [
  {
    name: "Khalid Khalil",
    role: "CEO & Founder",
    imgSrc: kImage,
    url: "https://www.linkedin.com/in/khalid-khalil-00954720/",
  },
  {
    name: "Roxanne Co-Khalil",
    role: "Chief Finance Officer",
    imgSrc: yamImage,
  },
  {
    name: "Charina Catarroja",
    role: "Finance Head",
    imgSrc: chariImage,
    url: "https://www.linkedin.com/in/charina-catarroja-4a1b4a217/",
  },
  {
    name: "Erik Estrada",
    role: "Operations Head",
    imgSrc: ericImage,
    url: "https://www.linkedin.com/in/erik-estrada-ece-clssgb-cem-761659a6/",
  },
  {
    name: "Ivy Del Valle",
    role: "VP of Sales",
    imgSrc: ivyImage,
  },
  {
    name: "Janice Brillantes",
    role: "HR Manager",
    imgSrc: jhaImage,
    url: "https://www.linkedin.com/in/brillantesjg2016/",
  },
];

const MeetTheTeam = () => {
  return (
    <section className="bg-secondary py-2">
      <div className="mx-auto px-3 lg:px-8 max-w-7xl lg:text-center text-center">
        <h2
          className="py-6 text-pretty text-4xl font-semibold tracking-tight
           text-white sm:text-6xl lg:text-balance"
        >
          Meet the TELKHA Team!
        </h2>
        <p className="text-lg/8  text-white mt-2">
          In today’s digital age, seamless connectivity is not a luxury—it’s a
          necessity. Telkha Networks Inc. is at the forefront of revolutionizing
          how businesses and individuals experience communication. With
          cutting-edge technology, unparalleled reliability, and a commitment to
          innovation, we deliver high-speed, secure, and scalable networking
          solutions that empower businesses to thrive in a hyper-connected
          world.
        </p>
        <div className="py-4 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-14">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="max-w-xs mx-auto p-6 border rounded-3xl shadow-xl bg-white dark:bg-gray-800 
  flex flex-col items-center hover:scale-105 transition-all duration-1000"
            >
              <div className="w-full h-56 overflow-hidden rounded-[20px]">
                <img
                  className="w-full h-full object-cover"
                  src={member.imgSrc}
                  alt={member.name}
                  style={{
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="relative flex flex-col flex-grow w-full">
                <h3 className="text-md font-bold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-gray-800 text-xs">{member.role}</p>
              </div>
              <a
                href={member.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 pt-1"
              >
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className="w-8 h-8 hover:scale-150 transition-transform duration-300 hover:opacity-70"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MeetTheTeam;
