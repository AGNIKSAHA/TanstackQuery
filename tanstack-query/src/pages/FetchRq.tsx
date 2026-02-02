import {
  useQuery,
  keepPreviousData,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import type { Post } from "../types/Post";
import { fetchPosts } from "../api/api";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { deletePost } from "../api/api";

function FetchRq() {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const queryClient = useQueryClient();
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery<Post[]>({
    queryKey: ["posts", pageNumber],
    queryFn: async () => {
      const res = await fetchPosts(pageNumber);
      return res.data;
    },
    placeholderData: keepPreviousData,
    // gcTime:1000,
    // staleTime:5000,
    // refetchInterval:1000,
    // refetchIntervalInBackground:true
  });

  const deleteMutation = useMutation<
    void, // mutation return type
    Error, // error type
    number // variables type (id)
  >({
    mutationFn: (id: number) => deletePost(id),

    onSuccess: (_data, id) => {
      queryClient.setQueryData<Post[]>(
        ["posts", pageNumber],
        (currentPosts) => {
          if (!currentPosts) return currentPosts;

          return currentPosts?.filter((post) => post.id !== id);
        },
      );
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-slate-500">
        Loading posts...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] text-red-500">
        {(error as Error).message || "Failed to fetch posts"}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
      {posts?.map((post) => {
        const { userId, id, title, body } = post;

        return (
          <div
            key={id}
            className="rounded-lg border border-slate-200 p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
              <span className="font-medium">User: {userId}</span>
              <span>ID: {id}</span>
            </div>
            <NavLink to={`/rq/${id}`} key={id}>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">
                {title}
              </h2>

              <p className="text-slate-600 leading-relaxed">{body}</p>
            </NavLink>
            <button
              onClick={() => {
                const confirmed = confirm("Are you sure?");
                if (confirmed) {
                  deleteMutation.mutate(id);
                }
              }}
              //   disabled={isDeleting}
              className="inline-flex items-center gap-2 rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {/* {isDeleting ? "Deleting..." : "Delete"} */}
              delete
            </button>
          </div>
        );
      })}

      <div className="flex justify-center items-center gap-3 mt-10">
        {/* Previous */}
        <button
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          disabled={pageNumber === 0 ? true : false}
          onClick={() => setPageNumber((prev: number) => prev - 3)}
        >
          ← Previous
        </button>

        {/* Page Indicator */}
        <span className="text-sm text-slate-500">
          Page{" "}
          <span className="font-medium text-slate-700">
            {Math.ceil(pageNumber / 3) + 1}
          </span>
          {/* of{" "}
          <span className="font-medium text-slate-700">10</span> */}
        </span>

        {/* Next */}
        <button
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          onClick={() => setPageNumber((prev: number) => prev + 3)}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default FetchRq;
