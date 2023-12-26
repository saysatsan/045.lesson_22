import axios from "axios";

async function requestData() {
    const response = await axios.get('https://6579f2251acd268f9afa71d7.mockapi.io/heroes');
    
    return response.data;
   
}

export default requestData;
