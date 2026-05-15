// src/components/cards/ProductCard.jsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Eye } from "lucide-react";

const ServiceCard = ({ service, index }) => {
  const {
    title,
    bangla,
    image,
    price,
    discount = service.percentage || 0,
    ratings,
    reviews,
    sold,
  } = service;

  // Calculate discounted price
  const finalPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            -{discount}%
          </span>
        </div>
      )}

      {/* Image Section */}
      <Link href={`/products/${index}`} className="block relative overflow-hidden">
        <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100">
          <img
            src={image}
            alt={title}
            fill
            className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <div className="bg-white p-3 rounded-full shadow-lg">
            <Eye className="w-5 h-5 text-gray-700" />
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <Link href={`/products/${index}`}>
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-pink-600 transition">
            {title}
          </h3>
        </Link>

        {/* Bangla Title */}
        <p className="text-sm text-gray-500 mt-1 line-clamp-1 font-medium">
          {bangla}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center text-amber-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="ml-1 text-sm font-semibold text-gray-700">
              {ratings}
            </span>
          </div>
          <span className="text-xs text-gray-400">
            ({reviews} reviews)
          </span>
        </div>

        {/* Sold */}
        <p className="text-xs text-gray-500 mt-1">
          {sold}+ sold
        </p>

        {/* Price */}
        <div className="mt-4 flex items-end gap-2">
          <span className="text-2xl font-extrabold text-pink-600">
            ৳{finalPrice}
          </span>

          {discount > 0 && (
            <span className="text-sm text-gray-400 line-through">
              ৳{price}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-5 flex gap-3">
          <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-2.5 rounded-xl font-semibold transition duration-300">
            Buy Now
          </button>

          <button className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-xl hover:bg-gray-100 transition">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;