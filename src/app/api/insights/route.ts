import {NextResponse} from "next/server";

type Tx={
  bankName?:string;
  category?:string;
  amount?:number;
  kind?:"income"|"expense";
};

const money=(n:number)=>new Intl.NumberFormat("vi-VN",{
  style:"currency",
  currency:"VND",
  maximumFractionDigits:0
}).format(n);

export async function POST(request:Request){
  try{
    const body=await request.json().catch(()=>({}));
    const transactions:Array<Tx>=Array.isArray(body?.transactions)?body.transactions:[];

    if(!transactions.length){
      return NextResponse.json({
        insight:"Chưa có dữ liệu giao dịch để phân tích. Hãy kết nối ngân hàng hoặc thêm giao dịch mô phỏng trước."
      });
    }

    const income=transactions
      .filter(t=>t.kind==="income")
      .reduce((sum,t)=>sum+Number(t.amount||0),0);
    const expense=transactions
      .filter(t=>t.kind==="expense")
      .reduce((sum,t)=>sum+Number(t.amount||0),0);

    const categoryTotals=transactions
      .filter(t=>t.kind==="expense")
      .reduce((acc,t)=>{
        const key=t.category||"Khác";
        acc[key]=(acc[key]||0)+Number(t.amount||0);
        return acc;
      },{} as Record<string,number>);

    const topCategories=Object.entries(categoryTotals)
      .sort((a,b)=>b[1]-a[1])
      .slice(0,3);

    const banks=Array.from(new Set(transactions.map(t=>t.bankName).filter(Boolean)));
    const topText=topCategories.length
      ?topCategories.map(([name,value],i)=>`${i+1}. ${name}: ${money(value)}`).join("\n")
      :"Chưa có khoản chi nào để xếp hạng.";
    const net=income-expense;
    const ratio=income>0?Math.round((expense/income)*100):null;
    const recommendation=income===0
      ?"Hiện chưa có giao dịch thu nhập trong dữ liệu mô phỏng, vì vậy chưa thể tính tỷ lệ chi trên thu nhập."
      :ratio!==null&&ratio>80
        ?"Mức chi đang cao so với thu nhập mô phỏng. Bạn có thể xem lại nhóm chi lớn nhất để đặt hạn mức phù hợp."
        :"Dòng tiền mô phỏng hiện vẫn dương. Bạn có thể tiếp tục theo dõi nhóm chi lớn nhất để tối ưu ngân sách.";

    const insight=[
      `Tôi đã phân tích ${transactions.length} giao dịch từ ${banks.length||1} ngân hàng/tài khoản mô phỏng.`,
      `Tổng tiền vào: ${money(income)} · Tổng tiền ra: ${money(expense)} · Dòng tiền ròng: ${net>=0?"+":"-"}${money(Math.abs(net))}.`,
      ratio!==null?`Tỷ lệ chi tiêu trên thu nhập: khoảng ${ratio}%.`:"Chưa đủ dữ liệu để tính tỷ lệ chi tiêu trên thu nhập.",
      `Nhóm chi tiêu lớn nhất:\n${topText}`,
      `Gợi ý: ${recommendation}`
    ].join("\n\n");

    return NextResponse.json({insight});
  }catch{
    return NextResponse.json({error:"INSIGHT_GENERATION_FAILED"},{status:500});
  }
}
