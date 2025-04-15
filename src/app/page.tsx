import CourseSelector from "@/components/CourseSelector";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div
        className=" text-center bg-orange-100 border-orange-400 text-orange-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Important!</strong> Use it for carefully,
        cross verify everything, for educational purposes only.
      </div>
      <div className="min-h-screen bg-black/20 backdrop-blur-sm">
        <CourseSelector />
      </div>
    </main>
  );
}
