"use client";

import Link from "next/link";
import Image from "next/image";

export default function TutorialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="min-h-screen bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <h1 className="text-3xl font-bold text-white mb-6">
              <Link href={"/"} className="hover:text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="inline-flex mr-3"
                >
                  <path
                    fill="currentColor"
                    d="M21 11H6.83l3.58-3.59L9 6l-6 6l6 6l1.41-1.42L6.83 13H21z"
                  />
                </svg>
              </Link>
              How to Use This Application
            </h1>

            <div className="space-y-8 text-white/90">
              <section>
                <p className="mb-4">
                  This application helps you pre-fill your assignments with a
                  single click. Follow these instructions carefully to use it
                  effectively.
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    Login with your Registration number and DOB on{" "}
                    <a
                      href="http://www.ideunom.ac.in/mcq/"
                      target="_blank"
                      className="text-blue-300 hover:text-blue-400"
                    >
                      University of Madras (MCQ)
                    </a>{" "}
                    website.
                    <div className="my-4">
                      <Image
                        src="/screenshots/1.png"
                        alt="Screenshot 1"
                        width={800}
                        height={450}
                        className="rounded-lg border border-white/20"
                      />
                    </div>
                  </li>
                  <li>
                    Once you have logged in, you will see the list of
                    assignments available to take.
                    <div className="my-4">
                      <Image
                        src="/screenshots/2.png"
                        alt="Screenshot 2"
                        width={800}
                        height={450}
                        className="rounded-lg border border-white/20"
                      />
                    </div>
                  </li>
                  <li>
                    Select which assignment you want to take.
                    <div className="my-4">
                      <Image
                        src="/screenshots/3.png"
                        alt="Screenshot 3"
                        width={800}
                        height={450}
                        className="rounded-lg border border-white/20"
                      />
                    </div>
                  </li>
                  <li>
                    Once the quiz has loaded, press{" "}
                    <code className="text-blue-400 bg-gray-900 px-3 py-1 rounded">
                      CTRL + SHIFT + I
                    </code>
                    . This will open the developer tools in the same window.
                    <div className="my-4">
                      <Image
                        src="/screenshots/4.png"
                        alt="Screenshot 4"
                        width={800}
                        height={450}
                        className="rounded-lg border border-white/20"
                      />
                    </div>
                  </li>
                  <li>
                    Based on the assignment you have chosen, go to{" "}
                    <Link href="/" className="text-blue-300">
                      the app
                    </Link>{" "}
                    and select your assignment correctly. Use the &quot;Copy to
                    Clipboard&quot; button to copy the code.
                    <div className="my-4">
                      <Image
                        src="/screenshots/5.png"
                        alt="Screenshot 5"
                        width={800}
                        height={450}
                        className="rounded-lg border border-white/20"
                      />
                    </div>
                  </li>
                  <li>
                    Once copied, paste it in the developer tools console we
                    already opened.
                    <div className="my-4">
                      <Image
                        src="/screenshots/6.png"
                        alt="Screenshot 6"
                        width={800}
                        height={450}
                        className="rounded-lg border border-white/20"
                      />
                    </div>
                  </li>
                  <li>
                    Cross-verify everything! And submit your assignment!
                    <div className="my-4">
                      <Image
                        src="/screenshots/7.png"
                        alt="Screenshot 7"
                        width={800}
                        height={450}
                        className="rounded-lg border border-white/20"
                      />
                      <Image
                        src="/screenshots/8.png"
                        alt="Screenshot 8"
                        width={800}
                        height={450}
                        className="rounded-lg border border-white/20"
                      />
                    </div>
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Is it safe?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h3 className="text-xl font-medium mb-2">100% Safe</h3>
                    <p>
                      Since we are only modifying the frontend, this makes it
                      100% safe to use.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h3 className="text-xl font-medium mb-2">
                      Referenced using AI Models
                    </h3>
                    <p>
                      All answers are predicted and selected by AI models such
                      as ChatGPT and Claude!
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h3 className="text-xl font-medium mb-2">
                      No Unwanted Code
                    </h3>
                    <p>
                      The script contains only the logic needed to update the
                      correct answers, nothing more.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h3 className="text-xl font-medium mb-2">Cross-verify!</h3>
                    <p>
                      Data correctness is the most important factor, so
                      cross-verify everything!
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Tips for Success
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Always read the assignment description to understand what
                    the code is meant to do
                  </li>
                  <li>
                    Don&apos;t just copy and paste - take time to understand the
                    code
                  </li>
                  <li>Experiment with the code to see how it works</li>
                  <li>
                    If a code snippet doesn&apos;t work as expected, check for
                    any dependencies or requirements
                  </li>
                  <li>
                    Use the browser&apos;s developer tools to debug any issues
                  </li>
                </ul>
              </section>

              <div className="mt-8 text-center">
                <Link
                  href="/"
                  className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </div>
            <div className="mt-3 bg-gray-800 p-5 rounded">
              This project is intended solely for educational purposes. Any use
              beyond this scope is the responsibility of the user, and we
              disclaim any liability for misuse or unintended application.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
