import { CRBillDtls } from "./CRBillDtls";

export class CRBill{
    CompPrefixCode: string | null = null;
    SctId: string | null = null;
    CustId: string | null = null;
    PartyName: string | null = null;
    CrbcAmount: number=0;
    CounterId: string | null = null;
    // LoginEmpId: string | null = null;
    PayChqNo: string | null = null;   //cheque no
    PayChqDate: string | null = null;  //chequedate
    PayChqAmt: string | null = null;   //chequeamt
    PayChqBankId: string | null = null;//cheque fro bank
    PayCcNo: string | null = null;    //card no
    PayCcAmt: string | null = null;   //creditcard amount
    PayCcBankId: string | null = null;    //cc bank
    PayCashAmt: string | null = null;   //cash amount
    PayWalletId: string | null = null;   //Wallet
    PayWalletTransNo: string | null = null;  //wallet ref no
    PayWalletDate: string | null = null;  //wallet date 
    PayWalletAmt: string | null = null;    //wallet amopunt
    PayWalletBankId: string | null = null;   //wallet bank
    PayBankTransRefNo: string | null = null;  //bt reference no
    PayBankTransDate: string | null = null;   //bt transfer date
    PayFromTransBankId: string | null = null;   //bt from bank
    PayToTransBankId: string | null = null;   //bt to bank
    PayBankTransAmt: string | null = null;   //bt bank tarnasfer amt
    PayToChequeBankId: string | null = null;  //Cheque to bank
    CrbcDiscAmt: string | null = null;   //disc amount
    CrbcDiscType: string | null = null;
    CrbcSettledAmt: string | null = null; //settled amt
    CrbcTotalAmt: string | null = null;   //net amount

    crbilDetails:CRBillDtls[]=[]

}