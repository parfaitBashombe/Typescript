import React from "react";
import CustomImage from "../custom-image";
import ComponentWrapper from "../component-wrapper";

const MeetOurTeamLeaders = () => {
  const teamLeaders = [
    {
      name: "John Doe",
      position: "General Manager",
      imageUrl:
        "https://ik.imagekit.io/zzot6yvyh/default-image.jpg?updatedAt=1734360051798",
    },
    {
      name: "Jane Smith",
      position: "Community Manager",
      imageUrl:
        "https://ik.imagekit.io/zzot6yvyh/image(1).png?updatedAt=1734365712102",
    },
    {
      name: "Mark Taylor",
      position: "Community Manager",
      imageUrl:
        "https://ik.imagekit.io/zzot6yvyh/Hunter.jpeg?updatedAt=1734360188711",
    },
    {
      name: "Emily Johnson",
      position: "General Manager",
      imageUrl:
        "https://ik.imagekit.io/zzot6yvyh/default-image.jpg?updatedAt=1734360051798",
    },
    {
      name: "Michael Brown",
      position: "Community Manager",
      imageUrl:
        "https://ik.imagekit.io/zzot6yvyh/Hunter.jpeg?updatedAt=1734360188711",
    },
    {
      name: "Sarah Davis",
      position: "Community Manager",
      imageUrl:
        "https://ik.imagekit.io/zzot6yvyh/default-image.jpg?updatedAt=1734360051798",
    },
  ];

  return (
    <ComponentWrapper bg="bg-blue-50" className="py-16 text-start">
      <div className="container px-4">
        <p className="text-xl text-center lg:text-4xl font-bold text-blue-950 mb-8 p-2">
          Meet Our Team Leaders
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamLeaders.map((leader, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32">
                <CustomImage
                  src={leader.imageUrl}
                  objectFit="cover"
                  alt={leader.name}
                  className="rounded-3xl object-cover overflow-hidden mb-4"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {leader.name}
              </h3>
              <p className="text-gray-600 text-sm">{leader.position}</p>
            </div>
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default MeetOurTeamLeaders;
