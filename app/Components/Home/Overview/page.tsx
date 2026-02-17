import React from "react";
import OverviewAccountCard from "../../Cards/OverviewAccountCard";
import SmallAccountCard from "../../Cards/SmallAccountCard";
import DisbursedChart from "../../DisbursedChart";
import { accountdata, accountdata2, paymentInvoices} from "@/data/dashboardData";
import PaymentReceiptRow from "../../PaymentReceiptRow";
import UserOverviewChart from "../../UserOverviewCart";

const OverviewPage = () => {
  return (
    <div className="pt-24 pb-16 px-4 md:px-0">

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full md:w-[70%] md:mx-auto">
        {accountdata.map((account, index) => (
          <OverviewAccountCard
            key={account.id}
            account={account}
            isFirst={index === 0}
          />
        ))}
      </div>

      {/* CHART + SMALL CARDS */}
      <div className="flex flex-col lg:flex-row gap-6 mt-10 w-full md:w-[80%] md:mx-auto">

        <div className="w-full lg:w-2/3">
          <DisbursedChart />
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-3 bg-gray-100 p-4 rounded-xl">
          {accountdata2.map((account) => (
            <SmallAccountCard key={account.id} account={account} />
          ))}
        </div>
      </div>

      {/* Payment Invoice */}
      <div className="w-full lg:w-[60%] md:w-[80%] lg:mx-46 md:mx-auto mt-10 p-4 sm:p-6 bg-white shadow rounded overflow-x-auto">

        <h1 className="text-lg sm:text-xl font-semibold mb-4">
          Recent Payment Invoices
        </h1>

        {/* Header */}
        <div className="grid grid-cols-4 min-w-[500px] font-semibold text-gray-500 border-b 
        border-gray-200 pb-2 text-sm">
          <span>ID</span>
          <span>Date</span>
          <span>Amount</span>
          <span>Status</span>
        </div>

        {/* Rows */}
        {paymentInvoices.map((account) => (
          <PaymentReceiptRow key={account.id} account={account} />
        ))}
      </div>

      
      <div className="w-full  lg:ml-22 md:w-[80%] md:mx-auto -mt-1 p-4">
        <UserOverviewChart />
      </div>

    </div>
  );
};

export default OverviewPage;
