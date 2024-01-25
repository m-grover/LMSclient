import { styles } from "@/app/styles/style";
import {
  useEditLayoutMutation,
  useGetHeroDataQuery,
} from "@/redux/features/layout/layoutApi";
import React, { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineCamera } from "react-icons/ai";

type Props = {};

const EditHero: FC<Props> = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  const { data, refetch } = useGetHeroDataQuery("Banner", {
    refetchOnMountOrArgChange: true,
  });

  const [editLayout, { isLoading, isSuccess, error }] = useEditLayoutMutation();

  useEffect(() => {
    if (data) {
      setTitle(data?.layout?.banner.title);
      setSubTitle(data?.layout?.banner.subTitle);
      setImage(data?.layout?.banner?.image?.url);
    }
    if (isSuccess) {
      refetch();
      toast.success("Hero section updated successfully!");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData?.data?.message);
      }
    }
  }, [data, isSuccess, error, refetch]);

  const handleUpdate = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setImage(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async (e: any) => {
    await editLayout({
      type: "Banner",
      image,
      title,
      subTitle,
    });
  };

  const isDataChanged =
    data?.layout?.banner?.title !== title ||
    data?.layout?.banner?.subTitle !== subTitle ||
    data?.layout?.banner?.image?.url !== image;

  return (
    <div className="w-full flex items-center">
      <div className="absolute top-[100px] h-[50vh] lg:w-[700px] xl:w-[700px] lg:h-[700px] xl:h-[500px] hero_animation"></div>
      <div className="w-[1000px] flex min-h-screen items-center justify-end pt-[70px] z-10">
        <div className="relative flex items-center justify-end w-[40%]">
          <img
            src={image}
            alt=""
            className="object-contain max-w-[90%] w-[90%] max-w-[85%] h-auto z-10"
          />
          <input
            type="file"
            name=""
            id="banner"
            accept="image/*"
            onChange={handleUpdate}
            className="hidden"
          />
          <label htmlFor="banner" className="absolute bottom-0 right-0 z-20">
            <AiOutlineCamera className="dark:text-white text-black text-[18px] cursor-pointer" />
          </label>
        </div>

        <div className="w-[60%] flex flex-col items-center mt-[150px] text-center">
          <textarea
            className="dark:text-white resize-none text-[#000000c7] text-[30px] px-3 w-full  xl:text-[70px] font-semibold bg-transparent"
            placeholder="Improve Your Online Learning Experience Better Instantly"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            rows={4}
          />

          <br />

          <textarea
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            placeholder="We have 40k+ Online courses & 500K+ Online registered students. Find your desired Courses from them."
            className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-semibold text-[18px] w-[55%] xl:w-[74%] bg-transparent no-scrollbar"
            style={{ overflowY: "hidden" }}
          ></textarea>

          <br />
          <br />
          <br />
          <div
            className={`${
              styles.button
            } w-[100px] min-h-[40px] h-[40px] dark:text-white text-black bg-[#cccccc34] ${
              isDataChanged
                ? "cursor-pointer bg-[#42d383]"
                : "cursor-not-allowed"
            } rounded absolute bottom-12 right-12`}
            onClick={isDataChanged ? handleEdit : () => null}
          >
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHero;
