export default async function get_rawdata(){
    try{
        const weatherdata = await fetch(process.env.WEATHERAPI_URL);
        const datajson = await weatherdata.json();
        //console.log('Raw Fetched.')
        return datajson;
    }catch(err){
        return null
    }
}
