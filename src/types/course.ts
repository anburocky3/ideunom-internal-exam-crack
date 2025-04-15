export interface Assignment {
  title: string;
  code: string;
  description?: string;
  subject?: string;
}

export interface Subject {
  subjectCode: string;
  name: string;
  assignments: Assignment[];
}

export interface Semester {
  name: string;
  subjects: Subject[];
}

export interface Course {
  semesters: Semester[];
}

export interface CourseData {
  [key: string]: Course;
}
