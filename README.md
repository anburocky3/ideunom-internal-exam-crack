# IDEUNOM Internal Exam Assistant

Simple app designed to help students with IDEUNOM (University of Madras) internal exams by providing pre-filled answers for assignments.

## Screenshots

![Screenshot](/public/screenshots/2.png)
![Screenshot](/public/screenshots/3.png)
![Screenshot](/public/screenshots/5.png)
![Screenshot](/public/screenshots/6.png)

## Features

- **Course Selection**: Browse through different courses and semesters
- **Assignment Navigation**: Access assignments by subject
- **Code Snippets**: View and copy JavaScript code snippets for exam answers
- **Syntax Highlighting**: Code displayed with proper syntax highlighting
- **Copy to Clipboard**: One-click copying of code snippets

## How It Works

1. **Login to IDEUNOM MCQ Portal**: Access the [University of Madras MCQ portal](http://www.ideunom.ac.in/mcq/) with your registration number and DOB
2. **Select Assignment**: Choose the assignment you want to take
3. **Open Developer Tools**: Press `CTRL + SHIFT + I` to open browser developer tools
4. **Copy Code**: From this application, select the matching assignment and copy the code
5. **Paste in Console**: Paste the code in the browser console
6. **Verify and Submit**: Cross-verify the answers and submit your assignment

## Safety and Ethics

- **Frontend Only**: The application only modifies the frontend, making it safe to use
- **AI-Generated Answers**: Answers are predicted using AI models like ChatGPT and Claude
- **Minimal Code**: Scripts contain only the logic needed to update answers
- **Educational Purpose**: Intended solely for educational purposes
- **Cross-Verification**: Users are encouraged to verify all answers before submission

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Disclaimer

This project is intended solely for educational purposes. Any use beyond this scope is the responsibility of the user, and we disclaim any liability for misuse or unintended application.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Highlight.js](https://highlightjs.org/) - Code syntax highlighting

## License

This project is for educational purposes only.
