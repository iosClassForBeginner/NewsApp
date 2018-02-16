import axios from 'axios'
const urls = {
    bbc: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=25ccc48862834ff6b52e5a6aff987063",
    cnn: "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=25ccc48862834ff6b52e5a6aff987063"
}

export const getCnnNews =  () => {
    return axios({
        method: 'GET',
        url: urls.cnn
    })
    .then(res => res.data)
}

export const getBbcNews =  () => {
    return axios({
        method: 'GET',
        url: urls.bbc
    })
    .then(res => res.data)
}
