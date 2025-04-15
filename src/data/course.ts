import { CourseData } from "@/types/course";

export const courseData: CourseData = {
  MBA: {
    semesters: [
      //   {
      //     name: "Semester 1",
      //     subjects: [
      //       {
      //         name: "Business Management",
      //         assignments: [],
      //       },
      //       {
      //         name: "Marketing",
      //         assignments: [],
      //       },
      //     ],
      //   },
      //   {
      //     name: "Semester 2",
      //     subjects: [
      //       {
      //         name: "Human Resource Management",
      //         assignments: [],
      //       },
      //     ],
      //   },
      {
        name: "Semester 3",
        subjects: [
          {
            subjectCode: "SPBA201",
            name: "Human Resouce Management",
            assignments: [
              {
                title: "Assignment 1",
                code: "// No code available",
                description: "Cross-verify wherever possible. ",
              },
              {
                title: "Assignment 2",
                code: "snippets/mba/SPBA201/2.js",
                description: "Cross-verify wherever possible. ",
              },
            ],
          },
          {
            subjectCode: "SPBA202",
            name: "Marketing Management",
            assignments: [
              {
                title: "Assignment 1",
                code: "snippets/mba/SPBA202/1.js",
                description: "Cross-verify wherever possible. ",
              },
              {
                title: "Assignment 2",
                code: "snippets/mba/SPBA202/2.js",
                description: "Cross-verify wherever possible. ",
              },
            ],
          },
          {
            subjectCode: "SPBA203",
            name: "Operation Management",
            assignments: [
              {
                title: "Assignment 1",
                code: "snippets/mba/SPBA203/1.js",
                description: "Cross-verify wherever possible. ",
              },
              {
                title: "Assignment 2",
                code: "snippets/mba/SPBA203/2.js",
                description: "Cross-verify wherever possible. ",
              },
            ],
          },
          {
            subjectCode: "SPBA205",
            name: "Innovation and Entreprenuership",
            assignments: [
              {
                title: "Assignment 1",
                code: "snippets/mba/SPBA205/1.js",
                description: "Cross-verify wherever possible. ",
              },
              {
                title: "Assignment 2",
                code: "snippets/mba/SPBA205/2.js",
                description: "Cross-verify wherever possible. ",
              },
            ],
          },
          {
            subjectCode: "SPBA204",
            name: "Financial Management",
            assignments: [
              {
                title: "Assignment 1",
                code: "snippets/mba/SPBA204/1.js",
                description: "Cross-verify wherever possible. ",
              },
              {
                title: "Assignment 2",
                code: "snippets/mba/SPBA204/2.js",
                description: "Cross-verify wherever possible. ",
              },
            ],
          },
        ],
      },
      {
        name: "Semester 4",
        subjects: [
          {
            subjectCode: "",
            name: "Coming Soon!",
            assignments: [],
          },
        ],
      },
    ],
  },
};
