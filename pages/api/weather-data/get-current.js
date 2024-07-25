import get_rawdata from "@/util/get-rawdata";
export default async function handler(req,res){
    if (req.method=='GET'){
        try{
            const data = await get_rawdata();
            const current_data = data.current;
            return res.status(200).json(current_data);
        }catch(err){
            console.log(`Weather API ERR. ${err}`)
        }
    }
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}