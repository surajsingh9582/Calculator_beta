let Btn = ({arr,data}) => {
    let getValue=(element)=>{
        data(element);
    }
    return <>
    <div className="m-5 p-2">
        {arr.map((element,index) => (
            <button key={index} className="border text-white p-1 w-14 h-11 rounded-lg bg-orange-500 m-3" onClick={()=>{getValue(element)}}>{element}</button>
        ))}
    </div>
    </>
}
export default Btn;