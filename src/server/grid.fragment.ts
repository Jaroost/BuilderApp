export class GridFragment {
    modelName:string;
    totalCount:number;
    loadedData: any[];
    
    constructor(modelName:string, totalCount:number) {
        this.modelName=modelName;
        this.totalCount=totalCount;
    }
    
    createFragment(data: any){
        return {
            totalCount: this.totalCount,
            data,
            
        }
    }    
}
