import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import React from "react";
import { paymentInvoices2 } from "../data/dashboardData";
import PaymentReceiptrow2 from "../PaymentReceiptrow2";

const Page = () => {
  return (
    <div className="pt-10 pb-10 px-3">
      <div className="w-full max-w-6xl mx-auto bg-gray-50 shadow rounded">

        {/* Top bar */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 p-6 border-b border-b-gray-200">
          <div>
            <h1 className="text-xl font-medium">Users</h1>
            <span className="text-sm text-gray-400">March 7, 2026</span>
          </div>

          <button className="flex md:ml-auto gap-2 bg-gray-200 py-2 px-3 rounded font-medium text-gray-500 hover:bg-gray-300">
            <SlidersHorizontal size={18} />
            Filter
          </button>
        </div>

        {/* Table wrapper */}
        <div className="overflow-x-auto">

          {/* Table Header (hidden on mobile) */}
          <div className="hidden md:grid grid-cols-6 text-gray-500 border-b border-b-gray-200 ml-3 py-3 px-6 text-sm font-medium">
            <span>ID</span>
            <span>Name</span>
            <span className="ml-7">Email</span>
            <span>Address</span>
            <span>Status</span>
            <span>Loan Received</span>
          </div>

          {/* Rows */}
          {paymentInvoices2.map((account, index) => (
            <PaymentReceiptrow2
              key={`${account.id}-${index}`}
              account={account}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4">
          <p className="text-sm text-gray-400">
            Showing 1 to 10 of 50 results
          </p>

          <div className="flex items-center gap-2">
            <ChevronLeft
              size={18}
              className="cursor-pointer text-gray-400 hover:text-blue-500"
            />

            <button className="text-sm text-gray-500 border border-gray-200 px-3 py-1 rounded">
              1
            </button>

            <p className="text-sm text-gray-400">
              out of <span className="text-gray-600">5</span>
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
