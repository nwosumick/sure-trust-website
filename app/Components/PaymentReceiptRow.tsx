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
    <div className="grid grid-cols-4 py-3 border-b  border-gray-100 text-sm text-gray-700 items-center">

      <span>{account.id}</span>

      {/* Date with calendar icon */}
      <div className="flex items-center gap-2">
        <Calendar size={16} className="text-gray-400" />
        <span>{account.date}</span>
      </div>

      <span>{account.amount}</span>

      <span className="text-green-600 bg-green-200 hover:bg-green-400 rounded font-medium py-3 px-3 text-center w-20">
        {account.status}
      </span>

    </div>
  );
};

export default PaymentReceiptRow;
