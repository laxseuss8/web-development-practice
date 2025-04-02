import { CheckCircleIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Almost a Decade of Operation",
    description:
      "TELKHA has been serving telecom vendors, operators, and enterprises with integrated solutions for nearly 10 years.",
    icon: CheckCircleIcon,
  },
  {
    name: "200 Employees",
    description:
      "With an agile approach, a $3M investment in deployment tools, and a multi-skilled workforce, TELKHA drives innovation.",
    icon: CheckCircleIcon,
  },
  {
    name: "20 Global Partners",
    description:
      "TELKHA collaborates with 20 technology leaders to expand across APAC and deliver cutting-edge solutions.",
    icon: CheckCircleIcon,
  },
  {
    name: "25 Stakeholders",
    description:
      "Serving top telecom operators, enterprises, ICT firms, and government sectors, TELKHA ensures industry-wide impact.",
    icon: CheckCircleIcon,
  },
  {
    name: "Our Accomplishments",
    description:
      "TELKHA has optimized over 10,000 wireless sites, conducted telecom site surveys for 5,000+ locations, and installed wireless site \
      facilities at more than 500 sites. With 3,000+ optical IP and fixed network implementations and 2,000+ circuit migrations",
    icon: CheckCircleIcon,
  },
];

export default function WhoWeAre() {
  return (
    <div className="bg-slate-500 py-12 sm:py-26">
      <div className="mx-auto max-w-7xl px-3 lg:px-8">
        <div className="mx-auto max-w-7xl lg:text-center">
          <p
            className="text-pretty text-4xl font-semibold tracking-tight
           text-gray-900 sm:text-6xl lg:text-balance"
          >
            What makes TELKHA the right choice?
          </p>
          <p className="mt-8 text-lg/8 text-gray-900">
            We are dedicated to delivering innovative, state-of-the-art
            technology and building solutions that help companies optimize
            operations, enhance efficiency, and achieve sustainable growth. Our
            commitment lies in providing tailored, impactful solutions that meet
            the evolving needs of businesses across industries.
          </p>
        </div>
        <div className="mx-auto max-w-4xl sm:mt- lg:mt-12 lg:max-w-6xl">
          <div
            className="grid max-w-xl grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-6 lg:max-w-none 
          lg:grid-cols-4 lg:gap-y-16 justify-center"
          >
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-14">
                <dt className="text-pretty text-lg mt-8 font-bold text-gray-900">
                  <div className="absolute left-0 top-9 flex size-10 items-center justify-center rounded-lg bg-green-700">
                    <feature.icon
                      aria-hidden="true"
                      className="size-8 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-5 text-base/7 text-gray-800">
                  {feature.description}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
