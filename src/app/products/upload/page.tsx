"use client";
import RootLayout from "@/app/layout";
import Button from "@/components/button";
import Input from "@/components/input";
import Navi from "@/components/navi";
import TextArea from "@/components/textarea";
import useMutation from "@/libs/client/useMutation";
import { Product } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface UploadProductForm {
  name: string;
  price: number;
  description: string;
}

interface UploadProductMutation {
  ok: boolean;
  product: Product;
}

export default function Upload() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UploadProductForm>();
  const [uploadProduct, { loading, data: uploadData }] =
    useMutation<UploadProductMutation>("/api/products");
  const onValid = (data: UploadProductForm) => {
    if (loading) return;
    uploadProduct(data);
  };
  useEffect(() => {
    if (uploadData?.ok) {
      router.push(`/products/${uploadData.product.id}`);
    }
  }, [uploadData, router]);
  return (
    <>
      <Navi title="상품등록" />
      <form className="px-4" onSubmit={handleSubmit(onValid)}>
        <div className="w-full flex items-center justify-center border-dashed border-2 hover:border-gray-300 py-6 h-48 rounded-md group border-emerald-600 transition">
          <label className="group-hover:text-orange-500 text-blue-200  cursor-pointer transition group-hover:shadow-md rounded-full">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="file" className="hidden" />
          </label>
        </div>
        <Input
          register={register("name", { required: true })}
          required
          label="Name"
          name="name"
          type="text"
        />
        <Input
          register={register("price", { required: true })}
          required
          label="Price"
          name="price"
          type="number"
          kind="price"
        />
        <TextArea
          register={register("description", { required: true })}
          label="Description"
          name="description"
          required
        />
        <Button text={loading ? "Loading..." : "Upload product"} />
      </form>
    </>
  );
}
