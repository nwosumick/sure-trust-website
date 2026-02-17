"use client";

import { repaymentinvoice } from "@/data/dashboardData";
import RepaymentReceiptrow from "@/RepaymentReceiptrow";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="pt-32 pb-16 px-4 min-h-screen ">
      <div className="w-full max-w-5xl mx-auto shadow rounded bg-white p-4 sm:p-6">

        {/* Top Bar */}
        <h1 className="font-semibold text-lg mb-4">Repayments</h1>

        {/* Table Header */}
        <div className="overflow-x-auto">
        <div className="grid md:grid grid-cols-5 border-b border-gray-200 text-gray-500 px-4 py-2 font-medium">
          <span>Name</span>
          <span>ID</span>
          <span className="-ml-4">Payment Method</span>
          <span className="-ml-2">Account</span>
          <span>Repayment Date</span>
        </div>

        {/* Rows */}
        <div className="flex flex-col divide-y divide-gray-200">
          {repaymentinvoice.map((account, index) => (
            <RepaymentReceiptrow key={`${account.name}-${index}`} account={account} />
          ))}
        </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-2 mt-6">
          <p className="text-sm text-gray-400">
            Showing 1 to 10 of 50 results
          </p>

          <div className="flex items-center gap-2">
            <ChevronLeft
              size={18}
              className="cursor-pointer text-gray-400 hover:text-blue-500"
            />
            <button className="text-sm text-gray-400 border border-gray-300 hover:bg-gray-100 px-3 py-1 rounded">
              1
            </button>
            <p className="text-sm text-gray-400">
              out of <span className="text-gray-500">5</span>
            </p>
            <ChevronRight
              size={18}
              className="cursor-pointer text-gray-400 hover:text-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
