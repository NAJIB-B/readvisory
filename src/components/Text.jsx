export const Text =({
    style,
    Clickfunc,
    value
})=>{
    return(
        <h6 
            className={style}
            onClick={Clickfunc}
        >{value}</h6>
    )
}