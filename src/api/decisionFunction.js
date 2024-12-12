import toast from "react-hot-toast"
import dehashed from "./dehashed";
import blackbird from "./blackbird";
import antitor from "./antitor";
import siminfo from "./siminfo";
import hunterio from "./hunterio";
import blockchain from "./blockchain";

async function decisionFunction(currentTab, scanTarget, reqData, selectedModule, domain) {
    let dehashedResponse = { dehashed: []};
    let blackbirdResponse = { blackbird: []};
    let hunterioResponse = { hunterio: []};
    let blockchainResponse = { blockchain: []};
    let antitorResponse = { antitor: []};
    let siminfoResponse = {siminfo: []};
   
    if (currentTab ==='ByReqData')
    {
        if (domain ==="email")
        {
            dehashedResponse = await dehashed(scanTarget, "email");
            blackbirdResponse = await blackbird(scanTarget, "email");
        }
        else if (domain ==="username")
        {
            dehashedResponse = await dehashed(scanTarget, "username");
            blackbirdResponse = await blackbird(scanTarget, "username");
        }
        else if (domain ==="ipaddress")
        {
            dehashedResponse = await dehashed(scanTarget, "ip_address");
            antitorResponse = await antitor(scanTarget)
        }
        else if (domain === "phonenumber")
        {
            siminfoResponse = await siminfo(scanTarget)
        }
        else if (domain === "cnic")
        {
            siminfoResponse = await siminfo(scanTarget)
        }
        else if (domain === "domain")
        {
            hunterioResponse = await hunterio(scanTarget)
        }
        else if (domain === "blockchain")
        {
            blockchainResponse = await blockchain(scanTarget)
        }
    }
    else if (currentTab === 'ByModule')
    {
        if (selectedModule === "dehashed")
        {
            dehashedResponse = await dehashed(scanTarget, domain)
        }
        else if(selectedModule === "blackbird")
        {
            blackbirdResponse = await blackbird(scanTarget, domain)
        }
        else if(selectedModule === "siminfo")
        {
            siminfoResponse = await siminfo(scanTarget)
        }
        else if(selectedModule === "hunterio")
        {
            hunterioResponse = await hunterio(scanTarget)
        }
        else if(selectedModule === "blockchain")
        {
            blockchainResponse = await blockchain(scanTarget)
        }
        else if(selectedModule === "antitor")
        {
            antitorResponse = await antitor(scanTarget)
        }
    }

    return {
        ...dehashedResponse,
        ...blackbirdResponse,
        ...hunterioResponse,
        ...blockchainResponse,
        ...antitorResponse,
        ...siminfoResponse
    }
}

export default decisionFunction
