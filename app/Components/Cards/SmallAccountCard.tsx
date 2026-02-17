import React from "react";
import { FiPhoneIncoming, FiPhoneMissed } from "react-icons/fi";


type Props = {
  account: {
    id: number;
    title: string;
    balance: string;
    image: string;
    percentage?: string;
    month?: string;
  };
};

const SmallAccountCard = ({ account }: Props) => {
  const showIncoming = !!account.percentage;
  const showMissed = account.title === "Total repaid";

  return (
    <div className="border rounded-lg p-3 bg-white hover:bg-gray-100 transition-all duration-200">
      <div className="flex gap-2 mb-3 items-center">
        <img
          src={account.image}
          alt={account.title}
          className="w-8 h-8 object-contain"
        />

        <p className="text-sm text-gray-500">{account.title}</p>
      </div>

      <h2 className="font-semibold">{account.balance}</h2>

      {account.percentage && (
        <div className="flex gap-2 items-center text-xs mt-2 text-gray-500">
          {showIncoming && <FiPhoneIncoming className="text-green-500 w-4 h-4" />}

          {showMissed && <FiPhoneMissed className="text-red-500 w-4 h-4" />}

          <span>
            {account.percentage} / {account.month}
          </span>  
        </div>
      )}
       
    </div>
    
  );
};


export default SmallAccountCard;
