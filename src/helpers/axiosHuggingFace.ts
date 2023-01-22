import axios from "axios";

const axiosHuggingFace = axios.create( {
    baseURL:
    "https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment",
    headers: {
        Authorization: "Bearer " + "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",
        "Content-Type": "application/json",
    },
} );

export default axiosHuggingFace;
