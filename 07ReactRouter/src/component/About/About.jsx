import React from "react";
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://imgs.search.brave.com/F0z6KWAp4iANUow134MoJ3uFsmwyfpEN402n12E98HA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd3d3LmNvbnRl/bnRmdWwuY29tL2Zv/OXR3eXJ3cHZlZy81/YUYyM2pEQm9MSXRv/UFQ2ZDNjUjM5LzU4/MGViOTE5MzgzNzM4/OTdmZTk4YzdiZWQ0/ZmJmMjBiLy1ibG9n/LV9SZWFjdF9TVkdf/XzFfLnBuZz93PTEz/MjAmcT02MCZmbT13/ZWJw"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}