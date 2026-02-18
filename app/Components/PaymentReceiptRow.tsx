import React from "react";
import { Calendar } from "lucide-react";

type Props = {
  account: {
    id: number;
    date: string;
    amount: string;
    status: string;
  };
};

const PaymentReceiptRow = ({ account }: Props) => {
  return (
    <div className="grid grid-cols-4 py-3 border-b border-gray-100 text-sm text-gray-700 items-center">

      <span>{account.id}</span>

      {/* Date with calendar icon */}
      <div className="flex items-center gap-2">
        <Calendar size={16} className="text-gray-400 md:-ml-7" />
        <span className="whitespace-nowrap md:-ml-1">{account.date}</span>
      </div>

      <span className="lg:ml-1 md:-ml-1 ml-20">{account.amount}</span>

      <span className="text-green-600 bg-green-200 hover:bg-green-400 rounded font-medium py-3 px-3 text-center lg:ml-1 md:-ml-5 ml-32  w-20">
        {account.status}
      </span>

    </div>
  );
};

export default PaymentReceiptRow;
