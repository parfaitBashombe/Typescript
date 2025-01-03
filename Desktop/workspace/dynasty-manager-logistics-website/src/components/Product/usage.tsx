import React from "react";
import { Settings, Siren } from "lucide-react";
import ComponentWrapper from "../component-wrapper";

type UseProps = {
  icon: React.JSX.Element;
  title: string;
  content: string;
};

const Usage = () => {
  const uses: UseProps[] = [
    {
      icon: <Settings className="h-full" />,
      title: "Sophisticated Business Rules",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, nostrum. Amet perferendis atque fuga corporis architecto non autem corrupti adipisci.",
    },
    {
      icon: <Settings className="h-full" />,
      title: "Pre-Configured Out-of-the-Box",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, nostrum. Amet perferendis atque fuga corporis architecto non autem corrupti adipisci.",
    },
    {
      icon: <Settings className="h-full" />,
      title: "Massively Scalable",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, nostrum. Amet perferendis atque fuga corporis architecto non autem corrupti adipisci.",
    },
    {
      icon: <Settings className="h-full" />,
      title: "Visible Operational Impact",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, nostrum. Amet perferendis atque fuga corporis architecto non autem corrupti adipisci.",
    },
    {
      icon: <Settings className="h-full" />,
      title: "Automated Health Management",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, nostrum. Amet perferendis atque fuga corporis architecto non autem corrupti adipisci.",
    },
    {
      icon: <Siren className="h-full" />,
      title: "Customizable Alert Escalation",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, nostrum. Amet perferendis atque fuga corporis architecto non autem corrupti adipisci.",
    },
  ];
  return (
    <ComponentWrapper
      bg="bg-gradient-to-r from-purple-50 to-blue-50"
      className="py-16 text-start "
    >
      <p className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Why Top Companies use NMIS 9
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {uses.map((use, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className="bg-white p-2 rounded-full">{use.icon}</div>
            <div className="text-center">
              <p className="font-bold mb-2 text-md">{use.title}</p>
              <p className="text-sm text-gray-500">{use.content}</p>
            </div>
          </div>
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default Usage;
