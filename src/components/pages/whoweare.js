import {
  ArrowTrendingUpIcon,
  CogIcon,
  UserGroupIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Almost a Decade of Operation",
    description:
      "TELKHA has been serving telecom vendors, operators, and enterprises with integrated solutions for nearly 10 years.",
    icon: CogIcon,
  },
  {
    name: "+200 Employees",
    description:
      "With an agile approach, a $3M investment in deployment tools, and a multi-skilled workforce, TELKHA drives innovation.",
    icon: UserGroupIcon,
  },
  {
    name: "20 Global Partners",
    description:
      "TELKHA collaborates with 20 technology leaders to expand across APAC and deliver cutting-edge solutions.",
    icon: UserPlusIcon,
  },
  {
    name: "25 Stakeholders",
    description:
      "Serving top telecom operators, enterprises, ICT firms, and government sectors, TELKHA ensures industry-wide impact.",
    icon: ArrowTrendingUpIcon,
  },
  {
    name: "Company Accomplishments",
    description:
      "TELKHA has optimized over 10,000 wireless sites, conducted telecom site surveys for 5,000+ locations, and installed wireless site \
      facilities at more than 500 sites. With 3,000+ optical IP and fixed network implementations and 2,000+ circuit migrations",
    icon: CheckCircleIcon,
  },
];

export default function WhoWeAre() {
  return (
    <section className="h-auto dark:bg-gray-900 bg-slate-600 py-24 sm:py-26">
      <div className="container px-6 py-10 mx-auto">
        <div className="mx-auto max-w-7xl lg:text-center">
          <p
            className="text-pretty text-4xl font-semibold tracking-tight
           text-gray-800 sm:text-6xl lg:text-balance"
          >
            What makes TELKHA the right choice?
          </p>
          <p className="mt-8 text-lg/8 text-gray-700">
            We are dedicated to delivering innovative, state-of-the-art
            technology and building solutions that help companies optimize
            operations, enhance efficiency, and achieve sustainable growth. Our
            commitment lies in providing tailored, impactful solutions that meet
            the evolving needs of businesses across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="p-6 border rounded-xl border-r-gray-300 dark:border-gray-700"
            >
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-white bg-green-700 rounded-xl md:mx-4">
                  <feature.icon className="w-6 h-6" aria-hidden="true" />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-medium text-gray-800 capitalize dark:text-white">
                    {feature.name}
                  </h1>

                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
