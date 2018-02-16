import axios from 'axios'
const urls = {
    bbc: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=25ccc48862834ff6b52e5a6aff987063",
    cnn: "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=25ccc48862834ff6b52e5a6aff987063",
    search: 'https://newsapi.org/v2/everything&from=2018-02-14&to=2018-02-15&sortBy=popularity&apiKey=25ccc48862834ff6b52e5a6aff987063?q='
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

export const getSearch = (params) => {
    return axios({
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${params}&from=2018-02-15&to=2018-02-15&sortBy=popularity&apiKey=25ccc48862834ff6b52e5a6aff987063`
    })
    .then(res => res.data)
    .catch(err => console.log(err))
}

