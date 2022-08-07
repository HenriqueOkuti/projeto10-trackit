import axios from "axios";
import { useEffect } from "react";

export default function FooterProgress(userToken, update, setUpdate, userprogress, setUserProgress) {
    let config = {
        headers: {
            "Authorization": `Bearer ${userToken}`
        }
    };
    useEffect(() => {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            .then(handleSuccess)
            .catch((response) => console.log(response));
    }, [update]);

    function handleSuccess(event , previousValue = 0) {
        let progress = previousValue;
        let total = event.data.length;
        for (let i = 0; i < total; i++) {
            if (event.data[i].done) {
                progress++;
            }
        }
        if (progress !== 0) {
            setUserProgress(Math.round((progress / total) * 100));
        }
    }

};

