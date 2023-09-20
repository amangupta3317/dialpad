import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className=" overflow-hidden bg-gradient-to-bl from-[#4895ef] to-[#10002b] via-[#5a189a] end-[#9d4edd] px-6 py-24 sm:py-32 lg:overflow-visible lg:px-14">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className=" font-bold text-xl leading-7 text-[#a5adff]">
                Why ConCent ?
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#07f49e] sm:text-4xl">
                A Better Workflow
              </h1>
              <p className="mt-6 text-xl leading-8 text-white">
                "Your gateway to effortless and intuitive conversations. Our
                website transforms how you interact, making every word count."
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-24 -mt-12 p-12 lg:sticky lg:top-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="bg-contain rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-white lg:max-w-lg">
              <p>
                Unlock the true pulse of your customer interactions with our
                communication solutions. Dive deep into the emotions, opinions,
                and feedback of every conversation. Our advanced AI technology
                listens, analyzes, and deciphers sentiments in real-time,
                empowering you to respond swiftly to customer needs, identify
                trends, and enhance customer satisfaction. Elevate your contact
                center performance with data-driven insights, and ensure every
                interaction leaves a positive impact.
              </p>
              <ul className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="mt-1 h-5 w-5 flex-none text-[#3bf4fb]"
                    aria-hidden="true"
                  />
                  <span className=" text-[#dac3e8]">
                    <strong className="font-bold text-white">
                      AI-Powered Conversations-
                    </strong>{" "}
                    Our advanced AI technology enhances every conversation,
                    providing real-time insights and improving customer
                    interactions.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-[#3bf4fb]"
                    aria-hidden="true"
                  />
                  <span className=" text-[#dac3e8]">
                    <strong className="font-bold text-white">
                      Enhanced Conversations-
                    </strong>{" "}
                    Elevate your calls with AI transcription, sentiment
                    analysis, and smart call routing.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-[#3bf4fb]"
                    aria-hidden="true"
                  />
                  <span className=" text-[#dac3e8]">
                    <strong className="font-bold text-white">
                      Scalable Solutions-
                    </strong>{" "}
                    Whether you're a small startup or a large enterprise,
                    Dialpad AI scales to meet your communication needs.
                  </span>
                </li>
              </ul>
              <p className="mt-8 text-white">
                Experience the future of customer engagement. Revolutionize your
                contact center operations with ConCent. Make data-driven
                decisions, improve agent performance, and boost customer
                loyalty. Elevate your customer experience, one conversation at a
                time.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-[#3bf4fb]">
                Are you ready to take a leap forward?
              </h2>
              <p className="mt-6 text-white">
                Get Ready to unlock the power of AI-driven communication? Join
                ConCent now and experience the future of business conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
