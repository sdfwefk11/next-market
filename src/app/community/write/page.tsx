"use client";
import RootLayout from "@/app/layout";
import Button from "@/components/button";
import Navi from "@/components/navi";
import TextArea from "@/components/textarea";
import useCoords from "@/libs/client/useCoords";
import useMutation from "@/libs/client/useMutation";
import { Post } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface WriteForm {
  question: string;
}

interface WriteResponse {
  ok: boolean;
  post: Post;
}

export default function Write() {
  const { latitude, longitude } = useCoords();
  const { register, handleSubmit } = useForm<WriteForm>();
  const [post, { data, loading }] = useMutation<WriteResponse>("/api/posts");
  const router = useRouter();
  const onPostSubmit = (data: WriteForm) => {
    if (loading) return;
    post({ ...data, latitude, longitude });
  };
  useEffect(() => {
    if (data && data.ok) {
      router.push(`/community/${data.post.id}`);
    }
  }, [data, router]);
  return (
    <>
      <Navi />
      <form onSubmit={handleSubmit(onPostSubmit)} className="px-4">
        <TextArea
          required
          placeholder="Ask a question"
          register={register("question", { required: true, minLength: 5 })}
        />
        <Button text={loading ? "Loading..." : "Submit"} />
      </form>
    </>
  );
}
