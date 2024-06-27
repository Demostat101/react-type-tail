
const apiRequest = async (url="", optionObj= null,errMsg=null) =>{
    try {
        const data = await fetch(url, optionObj)
        if (!data.ok) {
            throw Error ("please reload the app")
        }
        
    } catch (error) {
        errMsg = error.message
    } finally {
        return errMsg
    }
}

export default apiRequest