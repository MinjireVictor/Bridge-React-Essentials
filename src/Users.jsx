

const Users=(props)=>{

    

    return (
        <div className="flex">
            <div className="flex flex-col gap-2">
                <p>{props?.user?.name}</p>
                <p>{props?.user?.email}</p>

            </div>
            
           
        </div>
    )
}

export default Users