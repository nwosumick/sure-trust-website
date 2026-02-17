import React from "react";
import { FiPhoneIncoming, FiPhoneMissed } from "react-icons/fi";

type Props = {
  account: {
    id: number;
    image: string;
    title: string;
    balance: string;
    percentage?: string;
    month?: string;
  };
  isFirst?: boolean;
};

const OverviewAccountCard = ({ account, isFirst = false }: Props) => {
  const showIncoming =
    account.title === "Active Loans" || account.title === "Total disturbed";

  const showMissed = account.title === "Total repaid";

  return (
    <div
      className={`rounded-xl p-5 transition-all ${
        isFirst
          ? "bg-blue-600 text-white"
          : "bg-white border border-gray-200 hover:bg-blue-600 transition-all duration-200"
      }`}
    >
      <div className="flex gap-2 mb-3">
        <img src={account.image} className="w-8 h-8" />
        <p className="text-sm">{account.title}</p>
      </div>

      <h2 className="text-xl font-semibold">{account.balance}</h2>

      {account.percentage && (
        <div className="flex gap-2 items-center text-xs mt-2">

          {showIncoming && <FiPhoneIncoming className="text-green-500" />}

          {showMissed && <FiPhoneMissed className="text-red-500" />}

          <span>
            {account.percentage} / {account.month}
          </span>

        </div>
      )}

      
    </div>
  );
};

export default OverviewAccountCard;
