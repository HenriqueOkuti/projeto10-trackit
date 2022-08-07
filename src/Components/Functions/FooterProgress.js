import axios from "axios";
import { useEffect } from "react";

export default FooterProgress({ update, setUpdate }){
    let config = {
        headers: {
            "Authorization": `Bearer ${userToken}`
        }
    };
    useEffect(() => {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            .then(() => setUpdate(!update))
            .catch((response) => console.log(response));
    }, [update]);

}

