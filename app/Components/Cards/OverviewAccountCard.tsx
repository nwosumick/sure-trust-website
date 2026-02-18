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
  // Map id to image path in public folder
  const imageMap: Record<number, string> = {
    1: "/images/item1.png",
    2: "/images/item2.png",
    3: "/images/item3.png",
    4: "/images/item4.png",
  };

  const imageSrc = imageMap[account.id];

  // Icon logic
  const showIncoming =
    account.title === "Active Loans" || account.title === "Total Disturbed";
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
        <Image src={imageSrc} alt="" width={32} height={32} />
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
