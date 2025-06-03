import React, { useEffect, useState } from "react";
import { FaArrowCircleRight, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ClothesProduct = () => {
  const { id } = useParams();
  // console.log(id)
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/clothes.json");
        const data = await response.json();
        console.log(data);
        const products = data.filter((p) => p.id == id);
        console.log(products);
        setProducts(products[0]);
      } catch (error) {
        console("Error is", error);
      }
    };
    fetchData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const { title, category, price, image, status } = products;
  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-5">
          <a href="/jewel&access" className="text-gray-600">
            Home
          </a>
          <a href="/jewel" className="font-bold text-black">
            {" "}
            / Shop
          </a>
        </div>
        <div className="mt-2 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
            <div>
              <img src={image} alt="" className="w-full" />
            </div>
            <div>
              <h1 className="title">{title}</h1>
              <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                laudantium aliquam alias repellendus ad, quibusdam cumque
                expedita dicta, tenetur maiores magnam, molestias asperiores.
                Ipsa voluptatem quis sint aperiam, molestiae cumque!
              </p>
              <span className="my-2 text-xl text-yellow-600 flex items-center gap-1 sm:my-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p className="text-xl text-red-500 font-semibold sm:text-2xl">
                $ {price}
              </p>
              <div className="mt-4">
                <div className="text-left flex flex-col gap-2 w-full">
                  <label className="font-semibold">Quantity</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={1}
                    required
                    className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:px-4 focus:border-red-500"
                  />
                </div>
                <div className="w-full text-left my-4">
                  <button className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow shadow-slate-600 hover:text-red-500 lg:m-0 md:px-6">
                    <span>Confirmed Order</span>
                    <FaArrowCircleRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-black/75 mt-12">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            consectetur incidunt inventore exercitationem reiciendis voluptate,
            autem laboriosam minus quia atque minima maxime quae distinctio
            dolor temporibus explicabo iusto accusamus. Reiciendis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            consectetur incidunt inventore exercitationem reiciendis voluptate,
            autem laboriosam minus quia atque minima maxime quae distinctio
            dolor temporibus explicabo iusto accusamus. Reiciendis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            consectetur incidunt inventore exercitationem reiciendis voluptate,
            autem laboriosam minus quia atque minima maxime quae distinctio
            dolor temporibus explicabo iusto accusamus. Reiciendis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClothesProduct;
