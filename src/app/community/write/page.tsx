"use client";
import RootLayout from "@/app/layout";
import Button from "@/components/button";
import TextArea from "@/components/textarea";
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
  const { register, handleSubmit } = useForm<WriteForm>();
  const [post, { data, loading }] = useMutation<WriteResponse>("/api/posts");
  const router = useRouter();
  const onPostSubmit = (data: WriteForm) => {
    if (loading) return;
    post(data);
  };
  useEffect(() => {
    if (data && data.ok) {
      router.push(`/community/${data.post.id}`);
    }
  }, [data, router]);
  return (
    <RootLayout canGoBack title="Write Post">
      <form onSubmit={handleSubmit(onPostSubmit)}>
        <TextArea
          required
          placeholder="Ask a question"
          register={register("question", { required: true, minLength: 5 })}
        />
        <Button text={loading ? "Loading..." : "Submit"} />
      </form>
    </RootLayout>
  );
}
