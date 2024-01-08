"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import Navi from "@/components/navi";
import TextArea from "@/components/textarea";
import useMutation from "@/libs/client/useMutation";
import { useForm } from "react-hook-form";

interface CreateStreamDataType {
  name: string;
  price: number;
  description: string;
}

export default function Create() {
  const { register, handleSubmit } = useForm<CreateStreamDataType>();
  const [] = useMutation("/api/lives");
  const onValid = (data: CreateStreamDataType) => {
    console.log(data);
  };
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
            register={register("price", { required: true })}
          />
          <TextArea
            required
            label="제품설명"
            placeholder="제품 설명을 입력해주세요."
            register={register("description", { required: true })}
          />
          <Button text="스트리밍 시작" />
        </form>
      </div>
    </>
  );
}
