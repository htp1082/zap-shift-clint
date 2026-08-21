import React, { use } from "react";

const TestimonialCard = ({data}) => {
    console.log(data)
    const {userName,review,designation} =data
  return (
    <div>
      <div className="max-w-md bg-[#F8F8FA] rounded-3xl p-8 border border-gray-100 shadow-sm font-sans">
        {/* Quote Icon */}
        <div className="text-[#C2DFE3] text-6xl leading-none mb-4 select-none">
          “
        </div>

        {/* Testimonial Text */}
        <p className="text-[#555555] text-base leading-relaxed mb-6">
          {data.review}
        </p>

        {/* Dashed Separator */}
        <div className="border-t border-dashed border-[#BCC5CE] my-6"></div>

        {/* Profile Section */}
        <div className="flex items-center gap-4">
          {/* Profile Image/Avatar */}
          <div className="w-12 h-12 rounded-full bg-[#0A4B51] flex-shrink-0">
            {/* প্রয়োজনে এখানে <img> ট্যাগ ব্যবহার করতে পারেন */}
            {/* <img src="/profile.jpg" alt="Awlad Hossin" className="w-full h-full rounded-full object-cover" /> */}
          </div>

          {/* User Info */}
          <div>
            <h4 className="text-[#0A3236] text-lg font-bold leading-tight">
              {data.userName}
            </h4>
            <p className="text-[#666666] text-sm mt-1">
              {data.designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
