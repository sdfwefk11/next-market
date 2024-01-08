"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import Navi from "@/components/navi";
import TextArea from "@/components/textarea";
import useMutation from "@/libs/client/useMutation";
import { Stream } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface CreateStreamDataType {
  name: string;
  price: number;
  description: string;
}
interface ResponseData {
  ok: boolean;
  stream: Stream;
}

export default function Create() {
  const { register, handleSubmit } = useForm<CreateStreamDataType>();
  const [createStream, { data, loading }] =
    useMutation<ResponseData>("/api/streams");
  const router = useRouter();
  const onValid = (formData: CreateStreamDataType) => {
    if (loading) return;
    createStream(formData);
  };
  useEffect(() => {
    if (data && data.ok) {
      router.push(`/stream/${data.stream.id}`);
    }
  }, [data, router]);
  console.log(data);
  return (
    <>
      <Navi title="라이브 생성" />
      <div className="px-3">
        <form onSubmit={handleSubmit(onValid)}>
          <Input
            label="제품명"
            kind="text"
            type="text"
            required
            name="제품명"
            placeholder="제품명을 입력해주세요."
            register={register("name", { required: true })}
          />
          <Input
            label="가격"
            kind="price"
            type="number"
            name="가격"
            required
            placeholder="가격을 입력해주세요."
            register={register("price", {
              required: true,
              valueAsNumber: true,
            })}
          />
          <TextArea
            required
            label="제품설명"
            placeholder="제품 설명을 입력해주세요."
            register={register("description", { required: true })}
          />
          <Button text="스트리밍 시작" loading={loading} />
        </form>
      </div>
    </>
  );
}
