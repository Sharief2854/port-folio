import axios from 'axios';

export let serviceObj=
{
    getDetails
}
let url='http://localhost:3005/api/'
function getDetails()
{
    return axios.get(url+"getDetails");
}
