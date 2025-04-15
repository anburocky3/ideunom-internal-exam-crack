"use client";

import { useState } from "react";
import { Assignment } from "@/types/course";
import { courseData } from "@/data/course";
import { loadJavaScriptCode } from "@/service/file";
import CodeBlock from "./CodeBlock";
import Link from "next/link";

export default function CourseSelector() {
  const [selectedCourse, setSelectedCourse] = useState<string>("MBA");
  const [selectedSnippet, setSelectedSnippet] = useState<Assignment | null>(
    null
  );
  const [showCopied, setShowCopied] = useState(false);
  const [codeContent, setCodeContent] = useState<string>("");

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourse(e.target.value);
    setSelectedSnippet(null);
    setCodeContent("");
  };

  const handleSnippetClick = async (
    subjectName: string,
    snippet: Assignment
  ) => {
    setSelectedSnippet({ ...snippet, subject: subjectName });

    // If the code is a path to a JavaScript file, load it
    if (snippet.code.startsWith("snippets/")) {
      try {
        const code = await loadJavaScriptCode(snippet.code);
        setCodeContent(code);
      } catch (error) {
        console.error("Error loading code:", error);
        setCodeContent(snippet.code);
      }
    } else {
      setCodeContent(snippet.code);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      // Use the loaded code content if available, otherwise use the provided text
      const contentToCopy = codeContent || text;
      await navigator.clipboard.writeText(contentToCopy);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className=" p-4 ">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between">
          <div className="text-center flex-1 mb-6">
            <h1 className="text-4xl font-bold text-white mb-2">
              University of Madras
            </h1>
            <p className="text-gray-200">
              Select a course to view its assignments and code snippets
            </p>
          </div>
          <div className="flex items-center justify-end mb-4">
            <Link
              href="/help"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              How to Use
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-5 h-5 inline-flex"
              >
                <path
                  fill="currentColor"
                  d="M10 19h3v3h-3zm2-17c5.35.22 7.68 5.62 4.5 9.67c-.83 1-2.17 1.66-2.83 2.5C13 15 13 16 13 17h-3c0-1.67 0-3.08.67-4.08c.66-1 2-1.59 2.83-2.25C15.92 8.43 15.32 5.26 12 5a3 3 0 0 0-3 3H6a6 6 0 0 1 6-6"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <label
            htmlFor="course-select"
            className="block text-sm font-medium text-white mb-2"
          >
            Select Course
          </label>
          <select
            id="course-select"
            value={selectedCourse}
            onChange={handleCourseChange}
            className="w-full p-3 border border-white/20 rounded-lg shadow-lg bg-white/10 text-white focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
          >
            <option value="" className="bg-gray-800 text-white">
              Select a Course
            </option>
            {Object.keys(courseData).map((course) => (
              <option
                key={course}
                value={course}
                className="bg-gray-800 text-white"
              >
                {course}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <section id="form">
          {selectedCourse && (
            <div className="space-y-6 animate-fade-in">
              {courseData[selectedCourse].semesters.map((semester) => (
                <div
                  key={semester.name}
                  className="border border-white/20 rounded-lg p-6 bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-white">
                    {semester.name}
                  </h2>
                  <div className="space-y-4 bg-indigo-800 p-5 rounded border-b border-white/20">
                    {semester.subjects.map((subject) => (
                      <div key={subject.name} className="space-y-3">
                        <h3 className="text-xl font-medium text-white/90 ">
                          {subject.name}
                          {subject.subjectCode && (
                            <span>
                              {" "}
                              -{" "}
                              <span className="bg-blue-500 text-sm px-2 py-1 rounded">
                                ({subject.subjectCode})
                              </span>
                            </span>
                          )}
                        </h3>
                        <div className="space-y-2 pl-4">
                          <div className="space-y-2">
                            {subject.assignments.map((assignment) => (
                              <button
                                key={assignment.title}
                                onClick={() =>
                                  handleSnippetClick(subject.name, assignment)
                                }
                                className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-200 group"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <span className="text-white group-hover:text-indigo-300 transition-colors duration-200">
                                      {assignment.title}
                                    </span>
                                    {assignment.description && (
                                      <p className="text-sm text-white/60 mt-1">
                                        {assignment.description}
                                      </p>
                                    )}
                                  </div>
                                  <svg
                                    className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-200"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        <section id="codes">
          {selectedSnippet ? (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-white">
                    {selectedSnippet.subject}{" "}
                    <span className="font-normal">
                      ({selectedSnippet.title})
                    </span>
                  </h3>
                  <p className="text-white/60 mt-1"></p>

                  <div className="">
                    Paste this code in the{" "}
                    <a
                      href="http://www.ideunom.ac.in/mcq/"
                      target="_blank"
                      className="text-blue-300"
                    >
                      University Of Madras MCQ
                    </a>
                  </div>
                  {/* {selectedSnippet.description && (
                    <p className="text-white/60 mt-1">
                      {selectedSnippet.description}
                    </p>
                  )} */}
                </div>
                <button
                  onClick={() => copyToClipboard(selectedSnippet.code)}
                  className="btn btn-secondary relative"
                  title="Copy to clipboard"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                  {showCopied && (
                    <span className="absolute -top-8 right-0 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
              <div className="code-block">
                <CodeBlock
                  code={codeContent || selectedSnippet.code}
                  language="javascript"
                />
              </div>
            </div>
          ) : (
            <div className="bg-white/10 p-5 rounded ">
              <h4>Select your assignment</h4>
              <p>
                Please cross-verify everything and select the subject code and
                look for the questions properly. You are responsible for your
                own safety!
              </p>
            </div>
          )}
        </section>
      </div>

      <div className="mt-3 bg-gray-800 p-5 rounded">
        This project is intended solely for educational purposes. Any use beyond
        this scope is the responsibility of the user, and we disclaim any
        liability for misuse or unintended application.
      </div>
    </div>
  );
}
