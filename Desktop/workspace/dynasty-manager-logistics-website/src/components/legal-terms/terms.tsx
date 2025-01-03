import { KeyRound } from "lucide-react";
import Link from "next/link";
import React from "react";
import ComponentWrapper from "../component-wrapper";

const Terms = () => {
  const terms = [
    {
      title: "Privacy Statement",
      description:
        "About this Privacy Statement, Opmantek is committed to maintaining the security of...",
      link: "#",
    },
    {
      title: "Trust & Data Processing",
      description:
        "Opmantek prides itself on getting all our users access to all their data. This...",
      link: "#",
    },
    {
      title: "NDA - Confidentiality Agreement",
      description:
        "Party and Counterparty have agreed to make available Confidential....",
      link: "#",
    },
    {
      title: "ToS - Terms of Service",
      description:
        "Access and Use License. Subject to the terms and conditions of this Agreement...",
      link: "#",
    },
    {
      title: "EULA - End User License Agreement",
      description:
        "Subject to the terms and conditions of this Agreement, Licensor hereby...",
      link: "#",
    },
    {
      title: "Licensing",
      description:
        "The purpose of this licensing page is to list the products and licenses included in Opmantek...",
      link: "#",
    },
    {
      title: "Cookie Policy",
      description:
        "We use technologies and third-party services that use Google Analytics, pixels, tags and web...",
      link: "#",
    },
    {
      title: "Privacy Request",
      description:
        "We are committed to ensuring that the data you provide to us is secure. Reach out to use any time...",
      link: "#",
    },
  ];

  return (
    <ComponentWrapper bg="bg-blue-50" className=" py-16 text-start">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {terms.map((term, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="bg-white p-2 rounded-full">
              <KeyRound className="h-full" />
            </div>
            <div>
              <p className="font-bold mb-2 text-md">{term.title}</p>
              <p className="w-full md:w-8/12 text-sm text-gray-500">
                {term.description}
              </p>
              <Link className="text-xs text-blue-400" href={term.link}>
                Download PDF
              </Link>
            </div>
          </div>
        ))}
      </section>
    </ComponentWrapper>
  );
};

export default Terms;
