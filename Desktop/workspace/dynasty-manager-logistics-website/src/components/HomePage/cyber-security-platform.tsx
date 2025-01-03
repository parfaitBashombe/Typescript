import React from "react";
import CustomImage from "../custom-image";
import { Button } from "../ui/button";
import { ChartNetwork, EarthLock, GlobeLock, KeyRound } from "lucide-react";
import ComponentWrapper from "../component-wrapper";

const CyberSecurityPlatform = () => {
  return (
    <ComponentWrapper className="text-center py-16">
      <div className="text-start">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4">
          <div className="w-full  h-60 md:full flex md:h-96 overflow-hidden justify-center">
            <CustomImage
              alt={"img"}
              src={
                "https://ik.imagekit.io/zzot6yvyh/default-image.jpg?updatedAt=1734360051798"
              }
              className="md:w-4/6 rounded-[40px]  overflow-hidden"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Cybersecurity Platform</h2>
            <p className="text-gray-600 mb-6">
              Use our machine learning-powered proprietary solutions to protect
              your business from any cybersecurity attacks.
            </p>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-200 p-2 rounded-full">
                  <EarthLock className="h-full" />
                </div>
                <div>
                  <p className="font-bold mb-2 text-md">
                    Plug-n-play configuration
                  </p>
                  <p className="text-sm text-gray-500 w-full md:w-2/3">
                    Secure your organization without changing all the settings.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-200 p-2 rounded-full">
                  <EarthLock className="h-full" />
                </div>
                <div>
                  <p className="font-bold mb-2 text-md">Easy Integration</p>
                  <p className="text-sm text-gray-500 w-full md:w-2/3">
                    Smooth integration with Microsoft Office 365.
                  </p>
                </div>
              </div>
            </div>
            <Button className="bg-blue-500 rounded-2xl shadow hover:bg-blue-600">
              Schedule a demo
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center gap-4">
            <div className="bg-gray-200 p-2 rounded-full">
              <EarthLock className="h-full" />
            </div>
            <div>
              <p className="font-bold mb-2 text-md">Web Security</p>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                eveniet, rem fugiat.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-200 p-2 rounded-full">
              <KeyRound className="h-full" />
            </div>
            <div>
              <p className="font-bold mb-2 text-md">Endpoint Security</p>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                eveniet, rem fugiat.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-200 p-2 rounded-full">
              <GlobeLock className="h-full" />
            </div>
            <div>
              <p className="font-bold mb-2 text-md">Email Security</p>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                eveniet, rem fugiat.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-200 p-2 rounded-full">
              <ChartNetwork className="h-full" />
            </div>
            <div>
              <p className="font-bold mb-2 text-md">Firewall & ADR</p>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                eveniet, rem fugiat. elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default CyberSecurityPlatform;
