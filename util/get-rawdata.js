export default async function get_rawdata(){
    try{
        const weatherdata = await fetch(process.env.WEATHERAPI_URL,{cache:'no-cache'});
        const datajson = await weatherdata.json();
        return datajson;
    }catch(err){
        return null
    }
}
