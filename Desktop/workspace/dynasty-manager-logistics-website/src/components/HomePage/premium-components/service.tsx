import React from "react";

import { ChartLine, ScanFace, Share2 } from "lucide-react";

const Service = () => {
  return (
    <div>
      <p className="text-gray-600 mb-6">
        To quickly start my startup landing page design, I was looking for a
        landing page UI Kit. Landify is one of the best landing page UI kits I
        have come across. It’s so flexible, well-organized, and easily editable.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow space-y-4">
          <ChartLine size={40} stroke="#1cd219" className="h-1/3" />
          <p className="text-sm text-gray-500">
            Get closer to self-improvement and personal growth by learning more
            about yourself.
          </p>
        </div>

        <div className="p-4 bg-white rounded shadow space-y-4">
          <ScanFace size={40} color="orange" className="h-1/3" />
          <p className="text-sm text-gray-500">
            Improve your communication skills by being more self-aware of how
            you interact with others.
          </p>
        </div>

        <div className="p-4 bg-white rounded shadow space-y-4">
          <Share2 size={40} color="blue" className="h-1/3" />
          <p className="text-sm text-gray-500">
            Share your Jung’s profile test results with friends and see how you
            compare.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
