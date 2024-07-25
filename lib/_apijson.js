import { Temporal } from "@js-temporal/polyfill";
//const { Temporal } = require('@js-temporal/polyfill');
async function apijson(){
    const tempd = await fetch(process.env.WEATHERAPI_URL,{cache:'no-cache'});
    const tempj = await tempd.json();
    return tempj;
}
async function getWData(){
    let baseData = await apijson();
    const info_current = {... baseData.current}
    const info_forecast_day7 = baseData.forecast.forecastday.map((d,i)=>({date:d.date, ...d.day})).slice(1,8);
    const info_forecast_hour = baseData.forecast.forecastday.map((d,i)=>d.hour);
    const info_forecast_hour48 = [...info_forecast_hour[0],...info_forecast_hour[1]];
    const now = Temporal.Now.instant().epochSeconds;
    let i = 0;
    const info_forecast_nexthour12 = info_forecast_hour48.filter((d)=> {
        if (parseInt(d.time_epoch) > now && i < 12){
            i++;
            return true
    }})
    return {info_current, info_forecast_day7, info_forecast_nexthour12}
}
export {getWData}