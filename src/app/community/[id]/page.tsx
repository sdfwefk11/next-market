"use client";
import RootLayout from "@/app/layout";
import CommunityHashTag from "@/components/community-hashtag";
import Navi from "@/components/navi";
import TextArea from "@/components/textarea";
import useMutation from "@/libs/client/useMutation";
import { cls } from "@/libs/utils";
import { Answer, Post, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

interface ProductId {
  params: { id: string };
}

interface PostAndUser extends Post {
  user: User;
  answer: [
    answer: {
      answer: string;
      id: number;
      createdAt: string;
      user: {
        avatar: string;
        name: string;
      };
    }
  ];
  _count: {
    wondering: number;
    answer?: number;
  };
}

interface PostData {
  ok: boolean;
  findPostData: PostAndUser;
  isWondering: boolean;
}

interface AnswerForm {
  answer: string;
}

interface AnswerAndUser extends Answer {
  user: User;
}

interface AnswerResponse {
  ok: boolean;
  answer: AnswerAndUser;
}

export default function CommunityDetail({ params }: ProductId) {
  const { data, error, mutate } = useSWR<PostData>(
    params.id ? `/api/posts/${params.id}` : null
  );
  const [wonder, { loading }] = useMutation(`/api/posts/${params.id}/wonder`);
  const [answer, { data: answerData, loading: answerLoading }] =
    useMutation<AnswerResponse>(`/api/posts/${params.id}/answers`);
  const { register, handleSubmit, reset } = useForm<AnswerForm>();
  const onWonderClick = () => {
    if (!data) return;
    mutate(
      {
        ...data,
        findPostData: {
          ...data.findPostData,
          _count: {
            ...data.findPostData._count,
            wondering:
              data.isWondering === false
                ? data.findPostData._count.wondering + 1
                : data.findPostData._count.wondering - 1,
          },
        },
        isWondering: !data.isWondering,
      },
      false
    );
    if (!loading) {
      wonder({});
    }
  };
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.push("/404page");
    }
    if (answerData && answerData.ok) {
      reset();
      mutate();
    }
  }, [data, router, reset, answerData, mutate]);
  if (error) console.log(error);
  const onValid = (form: AnswerForm) => {
    if (answerLoading) return;
    answer(form);
  };

  return (
    <div className="mb-10">
      <Navi />
      <div className="px-4 -mt-4 pb-1">
        <CommunityHashTag />
      </div>
      <div className="flex items-center space-x-3 py-3 border-t border-b px-4">
        <div className="w-12 h-12 rounded-full bg-pink-300 shadow-md" />
        <div>
          <p className="text-sm font-medium text-gray-700">
            {data?.findPostData?.user?.name}
          </p>
          <p className="text-xs font-medium text-gray-500 cursor-pointer">
            View profile &rarr;
          </p>
        </div>
      </div>
      <div className="px-4">
        <div className="mt-2 text-gray-700">
          <span className="text-orange-500 font-medium">Q. </span>
          {data?.findPostData?.question}
        </div>
        <div className="flex space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[1.5px] w-full shadow-sm">
          <button
            onClick={onWonderClick}
            className={cls(
              "flex mt-1 space-x-1 items-center justify-center text-sm hover:text-emerald-500 transition-colors",
              data?.isWondering ? "text-emerald-500 text font-extrabold" : ""
            )}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>궁금해요 {data?.findPostData?._count?.wondering}</span>
          </button>
          <span className="flex mt-1 space-x-1 items-center justify-center text-sm hover:text-emerald-500 transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>답변 {data?.findPostData?._count?.answer}</span>
          </span>
        </div>
      </div>
      {data?.findPostData?.answer.map((result) => (
        <div key={result.id} className="px-7 my-5">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500" />
            <div>
              <span className="text-sm block font-medium text-gray-700">
                {result.user.name}
              </span>
              <span className="text-xs text-gray-500 block">
                {result.createdAt}
              </span>
              <p className="text-gray-700 mt-2">{result.answer}</p>
            </div>
          </div>
        </div>
      ))}
      <form className="mt-3 px-4" onSubmit={handleSubmit(onValid)}>
        <TextArea
          register={register("answer", { required: true, minLength: 5 })}
          name="description"
          placeholder="Answer this question!"
          required
        />
        <button className="bg-emerald-500 hover:text-orange-300 hover:bg-emerald-600 mt-2 shadow-md text-white rounded-md border-transparent py-2 px-4 text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:outline-none transition w-full">
          {answerLoading ? "Loading..." : "Reply"}
        </button>
      </form>
    </div>
  );
}
