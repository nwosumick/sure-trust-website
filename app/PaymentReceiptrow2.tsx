import { MoreVertical } from "lucide-react";
import React from "react";

type Props = {
  account: {
    id: number;
    name: string;
    email: string;
    address: string;
    status: string;
    loanreceived: number;
  };
};

const PaymentReceiptrow2 = ({ account }: Props) => {
  const statusStyle =
    account.status === "Active"
      ? "bg-green-100 text-green-700 hover:bg-green-200"
      : account.status === "Overdue"
      ? "bg-orange-100 text-orange-700 hover:bg-orange-200"
      : "bg-gray-100 text-gray-700";

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-col-6 gap-2 py-3 px-2 mt-5 border-b border-b-gray-200  text-sm text-gray-700 items-center">

      <span className="md:hidden font-semibold">ID:</span>
      <span>{account.id}</span>

      <span className="md:hidden font-semibold">Name:</span>
      <span>{account.name}</span>

      <span className="md:hidden font-semibold ">Email:</span>
      <span>{account.email}</span>

      <span className="md:hidden font-semibold">Address:</span>
      <span>{account.address}</span>

      <span className="md:hidden font-semibold">Status:</span>
      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium w-fit ${statusStyle}`}>
        {account.status}
      </span>

      <span className="md:hidden font-semibold">Loan:</span>
      <span>{account.loanreceived}</span>

      {/* Action */}
      <div className="">
        <MoreVertical className="cursor-pointer text-gray-500 lg:ml-[990] md:ml-[680] lg:-mt-8 md:-mt-10" />
      </div>
    </div>
  );
};

export default PaymentReceiptrow2;
