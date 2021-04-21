const initialValue={
    value:[]
}

const redForm=(state=initialValue,action)=>{
    switch(action.type){
        case "ADD_DATA":
            return{
                value:action.payload
            }

            default:return{
                ...state
            }
    }
   
}
export default redForm;