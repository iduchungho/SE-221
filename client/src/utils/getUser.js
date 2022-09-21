import axios from "axios";
const backendUrl = 'http://localhost:3001';
const getCurrentUser = async () => {
    const cookies = document.cookie.split(';');
    const {data} = await axios.post(`${backendUrl}/currentUser`, {sessionId: cookies[0].split('=')[1]},{withCredentials: true});
    return data;
}

export default getCurrentUser;