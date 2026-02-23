import React from "react";

// Images
import img1 from "../../assets/p1.jpeg";
import img2 from "../../assets/p2.jpeg";
import img3 from "../../assets/p3.jpeg";
import img4 from "../../assets/p4.jpeg";
import img5 from "../../assets/p5.jpeg";
import img6 from "../../assets/p6.jpeg";
import img7 from "../../assets/p7.jpeg";
import img8 from "../../assets/p8.jpeg";
import img9 from "../../assets/p9.jpeg";

// Videos
import video1 from "../../assets/gbv1.mp4";
import video2 from "../../assets/gbv2.mp4";
import video3 from "../../assets/gbv3.mp4";
import video4 from "../../assets/gbv4.mp4";
import video5 from "../../assets/gbv5.mp4";
import video6 from "../../assets/gbv6.mp4";

const galleryItems = [
  { type: "video", src: video1 },
  { type: "image", src: img1 },
  { type: "image", src: img2 },
  { type: "video", src: video2 },
  { type: "image", src: img3 },
  { type: "image", src: img4 },
  { type: "video", src: video3 },
  { type: "image", src: img5 },
  { type: "image", src: img1 },
  { type: "video", src: video4 },
  { type: "image", src: img6 },
  { type: "image", src: img7 },
  { type: "video", src: video5 },
  { type: "image", src: img8 },
  { type: "image", src: img9 },
  { type: "video", src: video6 },
];

export default function Gallery() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray/90 mb-6 text-center">
          Our <span className="text-orange-500">Gallery</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="Gallery"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  loop
                  // autoPlay
                  muted
                  playsInline
                  className="w-full h-64 object-cover absolute top-0 left-0 transform group-hover:scale-110 transition duration-500"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
