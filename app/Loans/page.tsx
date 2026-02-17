"use client";

import { ChevronLeft, ChevronRight, MessageCircle, Phone } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { loaninvoice } from "../data/dashboardData";
import LoanReceiptrow from "../LoanReceiptrow";

const Page = () => {
  return (
    <div className="pt-32 pb-16 px-4 lg:ml-10 min-h-screen">
      <div className="w-full max-w-5xl mx-auto bg-gray-50 shadow rounded p-4 sm:p-8">
        
        {/* Top Bar */}
        <h1 className="text-2xl font-medium mb-6">
          View Loan Details
        </h1>

        {/* Customer Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Profile */}
          <div className="flex items-center gap-4">
            <img
              src="/images/dotun.png"
              alt="Mr Dotun Ayobade"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="flex flex-col space-y-1">
              <h1 className="text-sm font-medium text-black">
                Mr Dotun Ayobade
              </h1>
              <p className="text-xs text-gray-500">Age: 40</p>
              <p className="text-xs text-gray-500">Sex: Male</p>
              <p className="text-xs text-gray-500">BVN: 0009988998</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2 mt-7">
            <p className="text-sm text-gray-500">Address: 22, Agbe road Ojodu Berger</p>
            <p className="text-sm text-gray-500">Mobile: 0049473722</p>
            <p className="text-sm text-gray-500">Email: bade140@gmail.com</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            {[
              { icon: <MessageCircle size={22} className="text-yellow-500" />, text: "Send SMS" },
              { icon: <FaWhatsapp size={22} className="text-green-500" />, text: "Message" },
              { icon: <Phone size={22} className="text-blue-500" />, text: "Call" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded px-4 py-2 whitespace-nowrap"
              >
                {item.icon}
                <span className="text-sm text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Loans */}
        <div className="text-gray-500 border-b border-gray-200 p-2 mt-6">
          <p className="text-medium text-gray-700">Loans</p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          {/* Hide header on small screens */}
          <div className="grid md:grid-col-10 grid-cols-10 text-gray-500 border-b border-gray-200 py-3 px-4 mt-2 min-w-[900px]">
            <span>Name</span>
            <span>Date</span>
            <span>Repayment</span>
            <span>Principal</span>
            <span>Fees</span>
            <span>Penalty</span>
            <span>Due</span>
            <span>Amount Paid</span>
            <span>Balance</span>
            <span>Status</span>
          </div>

          {/* Rows */}
          <div className="border-t border-gray-200 min-w-[900px]">
            {loaninvoice.map((account, index) => (
              <LoanReceiptrow key={`${account.name}-${index}`} account={account} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3">
          <p className="text-sm text-gray-400">
            Showing 1 to 10 of 50 results
          </p>

          <div className="flex items-center gap-2">
            <ChevronLeft size={18} className="cursor-pointer text-gray-400 hover:text-blue-500" />
            <button className="text-sm text-gray-400 border border-gray-300 hover:bg-gray-100 px-3 py-1 rounded">
              1
            </button>
            <p className="text-sm text-gray-400">
              out of <span className="text-gray-500">5</span>
            </p>
            <ChevronRight size={18} className="cursor-pointer text-gray-400 hover:text-blue-500" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
