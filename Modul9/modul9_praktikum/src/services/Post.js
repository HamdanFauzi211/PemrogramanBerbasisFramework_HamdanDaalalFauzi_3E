import { domainPath } from "./Config";

const PostAPI = (path, data) =>{
    const promise = new Promise((resolve, reject)=>{
        fetch(`${domainPath}/${path}`,{
            method: 'post',
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((result)=>{
                resolve(result);                // jika success menerima response dari server, maka resolve response ke user
            }, (err)=>{
                reject(err);                    // jika terjadi error dari server (server down, dll), kirim pesan error ke user melalui reject
            })
    })
    return promise;
}

export default PostAPI;