function Timeclock(){
    
    let time = new Date();

    return(<p>This is the current Time : {time.toDateString()} - {time.toLocaleTimeString()}</p>);
}
export default Timeclock;