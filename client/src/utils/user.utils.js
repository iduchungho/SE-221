import axios from "axios"
import backendUrl from "../component/config/backendUrl";
const getCurrentUser = async (id) => {
    const {data} = await axios.post(`${backendUrl}/currentUser`, {id: id},{withCredentials: true});
    if(data.state === "success") {
        return data.user;
    }
    else {
        return null;
    }
}

export {getCurrentUser}