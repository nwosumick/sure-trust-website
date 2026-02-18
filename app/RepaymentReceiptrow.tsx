import { MoreVertical } from 'lucide-react';
import React from 'react'



type Props = {
  account: {
    name: string;
    id: number;
    paymentmethod: string;
    account: number;
    repaymentdate: string;

  }
}

const RepaymentReceiptrow = ({account}: Props) => {
  return (
    <div className="grid md:grid-cols-5 grid-cols-5  border-b-gray-200 border-b text-gray-500 text-sm space-y-5 mt-4 ">
      <span>{account.name}</span>
      <span>{account.id}</span>
      <span>{account.paymentmethod}</span>
      <span>{account.account}</span>
      <span>{account.repaymentdate}</span>
      


      <MoreVertical className="flex items-center justify-center lg:ml-[890] md:ml-[625] ml-[345] lg:-mt-10 md:-mt-11 -mt-15 "/>
    </div>


  )
}

export default RepaymentReceiptrow