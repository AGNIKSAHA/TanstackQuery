import { useEffect, useState } from "react";
import type { Post } from "../types/Post";
import { fetchPosts } from "../api/api";

function FetchOld(){
//   const [posts, setPosts] = useState<Post[] | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   const fetchData = async (pageNumber:number): Promise<void> => {
//     try {
//       const res = await fetchPosts(pageNumber);

//       if (res.status === 200) {
//         setPosts(res.data);
//       }
//     } catch (err: unknown) {
//       setError("Failed to fetch posts");
//       console.error("Error in FetchOld:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-[60vh] text-slate-500">
//         Loading posts...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-[60vh] text-red-500">
//         {error}
//       </div>
//     );
//   }

  return (
    <div>
        Hello
    </div>
    // <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
    //   {posts?.map((post) => {
    //     const { userId, id, title, body } = post;

    //     return (
    //       <div
    //         key={id}
    //         className="rounded-lg border border-slate-200 p-5 shadow-sm hover:shadow-md transition"
    //       >
    //         <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
    //           <span className="font-medium">User: {userId}</span>
    //           <span>ID: {id}</span>
    //         </div>

    //         <h2 className="text-lg font-semibold text-slate-800 mb-2">
    //           {title}
    //         </h2>

    //         <p className="text-slate-600 leading-relaxed">
    //           {body}
    //         </p>
    //       </div>
    //     );
    //   })}
    // </div>
  );
}

export default FetchOld;
