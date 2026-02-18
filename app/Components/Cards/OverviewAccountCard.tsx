import React from "react";
import Image from "next/image";
import { FiPhoneIncoming, FiPhoneMissed } from "react-icons/fi";

type Props = {
  account: {
    id: number; // 1–4
    title: string;
    balance: string;
    percentage?: string;
    month?: string;
  };
  isFirst?: boolean;
};

const OverviewAccountCard = ({ account, isFirst = false }: Props) => {
  // Incoming icon for Active Loans & Total Disturbed
  const showIncoming =
    account.title === "Active Loans" || account.title === "Total Disturbed";

  // Missed icon for Total Repaid
  const showMissed = account.title === "Total Repaid";

  return (
    <div
      className={`rounded-xl p-5 transition-all ${
        isFirst
          ? "bg-blue-600 text-white"
          : "bg-white border border-gray-200 hover:bg-blue-600 transition-all duration-200"
      }`}
    >
      <div className="flex gap-2 mb-3 items-center">
        <Image
          src={`/images/item${account.id}.png`}
          alt="title"
          width={32}
          height={32}
        />
        <p className="text-sm">{account.title}</p>
      </div>

      <h2 className="text-xl font-semibold">{account.balance}</h2>

      <div className="flex gap-2 items-center text-xs mt-2">
        {showIncoming && <FiPhoneIncoming className="text-green-500" />}
        {showMissed && <FiPhoneMissed className="text-red-500" />}
        {account.percentage && (
          <span>
            {account.percentage} / {account.month}
          </span>
        )}
      </div>
    </div>
  );
};

export default OverviewAccountCard;
