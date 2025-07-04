export class AppConfig{

    url:string=''  //dev/
    websocket:string=''
       

    extractProtocol(url: string): string | null {
        const match = url.match(/^(https?):\/\//);
        return match ? match[1] : null;
    }


    extractIPWithPort(url: string): string | null {
        const match = url.match(/((?:\d{1,3}\.){3}\d{1,3}|\blocalhost\b|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(:\d+)?/);
        return match ? match[0] : null;
    }
    
    


    findhttporhttpsForWebSocket(storedUrl:any){
        if(this.extractProtocol(storedUrl)=='https')
        {
            return 'wss'
        }
        else
        {
            return 'ws'
        }

    }

    // url:string='https://localhost:7010/api'

    // url:string='http://84.255.173.139/paper.api.local/api'
    
    // 192.168.1.71
    // url:string='http://88.201.64.166/demo.api.local/api'

    //  url:string='http://88.201.64.166/MEATAPI/api'
    //  url:string='https://meat.remedihms.com/api'
    //  http://meat.remedihms.com
     MobileApp:boolean=true
    //MobileApp:boolean=false


    constructor() {
        const storedUrl = localStorage.getItem('mercattomisurl'); // Retrieve from localStorage
        let urlnew = storedUrl
        console.log(storedUrl);
        
        // this.url = storedUrl+'/api' ; // Default URL if not found
           this.url = storedUrl+'/demo.api.local/api' ; // Default URL if not found

        
        console.log(this.websocket);
        

    }


    //common status
    //--EntryActive = 0 ====active /enable
    //--""          = 1 ====deleted
    //--""          =2 ==== disabled
}