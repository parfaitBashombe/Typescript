import React from "react";

import ComponentWrapper from "./component-wrapper";
import CustomImage from "./custom-image";

const TrustedCompanies = () => {
  const enterprisesTrustedBy = [
    "https://ik.imagekit.io/zzot6yvyh/images/bloomberg.png?updatedAt=1735389501527",
    "https://ik.imagekit.io/zzot6yvyh/images/stanford.png?updatedAt=1735389499526",
    "https://ik.imagekit.io/zzot6yvyh/images/cambridge.png?updatedAt=1735389499672",
    "https://ik.imagekit.io/zzot6yvyh/images/microsoft.png?updatedAt=1735389499620",
    "https://ik.imagekit.io/zzot6yvyh/images/zurich.png?updatedAt=1735389499627",
    "https://ik.imagekit.io/zzot6yvyh/images/Group%203508.png?updatedAt=1735389501509",
    "https://ik.imagekit.io/zzot6yvyh/images/google.png?updatedAt=1735389501539",
    "https://ik.imagekit.io/zzot6yvyh/images/opengov.png?updatedAt=1735389499633",
    "https://ik.imagekit.io/zzot6yvyh/images/allerog.png?updatedAt=1735389499529",
    "https://ik.imagekit.io/zzot6yvyh/images/Group%203512.png?updatedAt=1735389499478",
    "https://ik.imagekit.io/zzot6yvyh/images/circle%20up.png?updatedAt=1735389499647",
    "https://ik.imagekit.io/zzot6yvyh/images/Group%203514.png?updatedAt=1735389499624",
  ];

  return (
    <ComponentWrapper>
      <div className="border-t py-16">
        <h2 className="text-lg font-bold text-center text-gray-700">
          Trusted By over 150,000 Companies including
        </h2>
        <div className="grid grid-cols-2 h-50 gap-4 mt-8 sm:grid-cols-4 lg:grid-cols-6">
          {enterprisesTrustedBy.map((company, i) => (
            <div key={i} className="flex h-20 items-center justify-center">
              <CustomImage
                objectFit="contain"
                src={`${company}`}
                alt={company}
              />
            </div>
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default TrustedCompanies;
