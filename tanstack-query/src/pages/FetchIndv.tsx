import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchInvpost } from "../api/api";
import type { Post } from "../types/Post";


export default function FetchIndv() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);

  const { data, isPending, isError, error } = useQuery<Post>({
    queryKey: ["post", postId],
    queryFn: () => fetchInvpost(postId),
    enabled: Number.isFinite(postId),
  });


  if (!Number.isFinite(postId)) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-red-500">
        Invalid post ID
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-slate-500">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-red-500">
        {(error as Error).message}
      </div>
    );
  }

  const { userId, id: postID, title, body } = data!;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
      >
        ← Back
      </button>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        {/* Meta info */}
        <div className="flex items-center gap-6 text-sm text-slate-500 mb-4">
          <span>
            <span className="font-medium text-slate-700">User:</span> {userId}
          </span>
          <span>
            <span className="font-medium text-slate-700">Post ID:</span>{" "}
            {postID}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-slate-900 mb-4 leading-tight">
          {title}
        </h1>

        {/* Body */}
        <p className="text-slate-600 leading-relaxed text-base">{body}</p>
      </div>
    </div>
  );
}
