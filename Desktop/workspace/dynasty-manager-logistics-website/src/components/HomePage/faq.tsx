"use client";

import {
  BookCopy,
  ClipboardCheck,
  Mail,
  Package,
  Smile,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ComponentWrapper from "../component-wrapper";

type FaqProps = {
  icon: React.JSX.Element;
  question: string;
  answer: string;
};

const faqs: FaqProps[] = [
  {
    icon: <Smile />,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.",
  },
  {
    icon: <Package />,
    question: "Can I change my plan later?",
    answer:
      "Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.",
  },
  {
    icon: <X />,
    question: "What is your cancellation policy?",
    answer:
      "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.",
  },
  {
    icon: <ClipboardCheck />,
    question: "Can other info be added to an invoice?",
    answer:
      "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually.",
  },
  {
    icon: <Mail />,
    question: "How do I change my account email?",
    answer:
      "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
  },
  {
    icon: <BookCopy />,
    question: "Do you provide tutorials?",
    answer:
      "Not yet, but we're working on it! In the meantime, we’ve done our best to make it intuitive and we’re building our documentation page.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <ComponentWrapper className="py-16">
      <div className="text-start">
        <p className="text-3xl font-bold mb-6">Frequently Asked Questions</p>
        <p className="text-gray-800 mb-8">
          Quick answers to questions you may have. Can’t find what you’re
          looking for? Check out our{" "}
          <Link href="#" className="text-blue-500 underline">
            full documentation
          </Link>
          .
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-300 h-fit w-full"
          >
            <div
              className={`flex items-center justify-between cursor-pointer ${
                expanded === index ? " border-b border-black pb-2 " : " "
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex flex-col md:flex-row items-center w-full">
                <div className="text-xl mr-4 p-1 border border-gray-700 rounded-lg">
                  {faq.icon}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-base text-start">
                    {faq.question}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`text-start transition-all duration-300 ease-in-out overflow-hidden ${
                expanded === index
                  ? "max-h-40 opacity-100 mt-4"
                  : "h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <p>
          Still have questions? Please{" "}
          <a href="#" className="text-blue-500 underline">
            chat to our friendly team
          </a>
          .
        </p>
      </div>
    </ComponentWrapper>
  );
};

export default FAQ;
