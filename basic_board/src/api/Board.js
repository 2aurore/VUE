import axios from 'axios';

const BASE_URL = "https://jssampletest.herokuapp.com/api"
const boards = [];


export function getAllBoard() {
    return axios.get(BASE_URL+'/board/all');
}

export function getBoardBySeq(seq) {
    return axios.get(BASE_URL+`/board/${seq}`);
}

// export function createBoard(board) {
//     return axios.post(BASE_URL+'/board/' , board);
// }

// export function updateBoard(board) {
//     return axios.put(BASE_URL+'/board/' , board);
// }

// export function deleteBoard(seq) {
//     return axios.delete(BASE_URL+`/board/${seq}`);
// }

