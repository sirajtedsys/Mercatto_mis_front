export class StockAdjustmentHeaders{
    Reason:string=''
    SctId:string=''
    CounterId:string=''
    UserId:string=''
    FromDate:any
    ToDate:any
}

export class StockAdjustmentDetailss{
    ItemId:number=0
    LblId:number=0
    BatchCode:string=''
    Quantity:number=0
    UnitId:number=0
    SysQty:number=0
    SysUnitId:number=0
    Mrp:number=0
    Mfp:number=0
    FinYearId:number=0
    CompId:number=0
    ITEM_CODE:string=''
    ITEM_NAME:string=''
    UNIT_CODE:string=''
    SALE_RATE:number=0
    CUR_QTY: number=0

}

export class StockAdjustmentCombine{
    StockAdjustmentHeader = new StockAdjustmentHeaders()
    StockAdjustmentDetails= new StockAdjustmentDetailss()
}