import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

// daftar API- GET
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');

// daftar API- POST

const postNewsBlog = (dataYgDikirim)=> PostAPI('posts', dataYgDikirim);

// daftar API- DELETE

const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('posts', dataYgDiHapus);

const API = {  // inisialisasi function2 yang akan disediakan global API
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;