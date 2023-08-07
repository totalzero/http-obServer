import { getSavedHosts } from "../../proxy/ProxyStorage";

export default function requests() {
 const requests = getSavedHosts();
 requests.forEach((value, index) => {
 console.log(`${index}: ${value}`);       
 })
}