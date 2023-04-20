import React from "react";
import { useState } from "react";
import Modal from "./Modal";

import Fetch from "../hooks/Fetch";

export default function CardComponent() {

    const { data, loading, error } = Fetch(`https://fakestoreapi.com/products`);
    // console.log(data);
    // const posts = [
    //     {
    //         title: "Grid 1",
    //         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    //     },
    //     {
    //         title: " Grid 2",
    //         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    //     },
    //     {
    //         title: " Grid 3",
    //         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    //     },
    //     {
    //         title: "Grid 3",
    //         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    //     },
    //     {
    //         title: " Grid 2",
    //     img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    //     },
    //     {
    //         title: " Grid 1",
    //         img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
    //         content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
    //     },
    // ];

    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        setOpenModal(!openModal);
        //console.log(openModal);



    }
    return (
        <>
            <div className="grid gap-28 mt-9 m-10 lg:grid-cols-3  mx-10">
                {data.map((items, key) => (
                    <div className="w-full rounded-2xl shadow-2xl lg:max-w-sm p-8" key={key}>
                        <img className=" max-h-48 min-h-fit object-contain w-full h-full rounded-2xl" src={items.image} alt="image" />
                        <div className="flex justify-end -mt-4 px-2">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                {items.category}
                            </button>
                        </div>
                        <div className="p-4">
                            <h4 className="text-sm font-semibold text-blue-600 py-4">

                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal text-black text-xs">
                                {items.description}
                            </p>

                        </div>
                    </div>
                ))}

            </div>
            <div className=" sticky bottom-6  flex justify-end px-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleClick}>
                    Button
                </button>
            </div >
            {openModal && <Modal setOpen={setOpenModal} />}

        </>
    );
}