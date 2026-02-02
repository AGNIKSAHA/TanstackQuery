import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function NotFound(){
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-5xl font-bold text-slate-800 mb-4">
          {error.status}
        </h1>
        <p className="text-slate-600 mb-6">
          {error.statusText || "Page not found"}
        </p>

        <Link
          to="/fetch-rq?page=1"
          className="text-sky-500 hover:underline"
        >
          ← Go back to posts
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      Something went wrong
    </div>
  );
}
