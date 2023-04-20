import React from "react";
import { useState } from "react";

export default function CardComponent() {
    const [pie, setPie] = useState(false);
    const posts = [
        {
            title: "Grid 1",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: " Grid 2",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: " Grid 3",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: "Grid 3",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: " Grid 2",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
        {
            title: " Grid 1",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
        },
    ];

    const openPie = () => {
        setPie(!pie);
        console.log(pie);
        if (setPie === true) {
            <div>hi</div>
        }
    }
    return (
        <>
            <div className="grid gap-28 mt-9 m-10 lg:grid-cols-3  mx-10 ">
                {posts.map((items, key) => (
                    <div className="w-full rounded-2xl shadow-2xl lg:max-w-sm p-8" key={key}>
                        <img className="object-cover w-full h-48 rounded-2xl" src={items.img} alt="image" />
                        <div className="flex justify-end -mt-12 px-2">
                            <button class="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-1 px-2 border border-black hover:border-transparent rounded">Catogery</button>
                        </div>
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">

                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                                {items.content}
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 rounded-2xl bg-blue-500 ">
                                Read more
                            </button>
                        </div>
                    </div>
                ))}

            </div>
            <div className=" sticky bottom-6  flex justify-end px-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={openPie}>
                    Button
                </button>
            </div >

        </>
    );
}