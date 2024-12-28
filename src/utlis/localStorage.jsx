// export function setItem(key, value){
// try{
//     window.localStorage.setItem(key, JSON.stringify(value))
// }catch(error){
//     console.log(error)
// }
// }

// export function getItem(key){
//     try{
//         const item = window.localStorage.getItem(key)
//         return item ? JSON.parse(item) : undefined
//     }catch(error){
//         console.log(error)
//     }
// }

export const addVisitedProduct = (productId) => {
    const visited = JSON.parse(localStorage.getItem('visitedProducts')) || []
    if(!visited.includes(productId)){
        visited.push(productId)
        localStorage.setItem('visitedProducts', JSON.stringify(visited))
    }
}
export const  getVisitedProducts = () => {
    return JSON.parse(localStorage.getItem('visitedProducts')) || []
}
export const removeVisitedProduct = (productId) => {
    localStorage.removeItem('visitedProducts')
}