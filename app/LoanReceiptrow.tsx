import { MoreVertical } from 'lucide-react';
import React from 'react'

type Props = {
   account: {
     name: string;
     date: number;
     repayment: number;
     principal: number;
     fee: number;
     penalty: number;
     due: number;
     amount: number;
     balance: number;
     status: string; 

   }   
}

const LoanReceiptrow = ({ account }: Props ) => {
  const statusStyle = 
    account.status === "Active"
    ? "bg-green-100 text-green-700 hover:bg-green-200"
    : account.status === "Overdue" 
    ? "bg-orange-100 text-orange-700 hover:bg-orange-200"   
    : "bg-gray-100 text-gray-700"
  return (
    <div className='grid md:grid-cols-10 grid-cols-10 border-b border-gray-200 space-y-5 text-gray-700 text-sm  items-center'>
      <span className="mt-3">{account.name}</span>
      <span className="ml-2">{account.date}</span>
      <span>{account.repayment}</span>
      <span>{account.principal}</span>
      <span>{account.fee}</span>
      <span>{account.penalty}</span>
      <span>{account.due}</span>
      <span>{account.amount}</span>
      <span>{account.balance}</span>    

            {/* Status column */}
       <span
  className={`inline-flex items-center justify-center px-3 py-2 rounded-full text-xs font-medium ${statusStyle}`}
>
  {account.status}
</span>

<MoreVertical className='flex items-center justify-center ml-[970] -mt-24'/>

    </div>
  )
}

export default LoanReceiptrow