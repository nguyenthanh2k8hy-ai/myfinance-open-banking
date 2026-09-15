import {Bank,Account,Transaction} from "./types";

// Tên ngân hàng là các ngân hàng đang hoạt động tại Việt Nam; toàn bộ dữ liệu bên dưới chỉ là dữ liệu mô phỏng.
export const banks:Bank[]=[
{id:"vietcombank",name:"Vietcombank",type:"Ngân hàng thương mại",icon:"🏦"},
{id:"bidv",name:"BIDV",type:"Ngân hàng thương mại",icon:"🏛️"},
{id:"vietinbank",name:"VietinBank",type:"Ngân hàng thương mại",icon:"🏦"},
{id:"techcombank",name:"Techcombank",type:"Ngân hàng số & bán lẻ",icon:"🔴"},
{id:"mbbank",name:"MB Bank",type:"Ngân hàng số & bán lẻ",icon:"🟢"},
{id:"acb",name:"ACB",type:"Ngân hàng bán lẻ",icon:"🔵"}
];
export const seedAccounts:Account[]=[];
export const seedTransactions:Transaction[]=[];
