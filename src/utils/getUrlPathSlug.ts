export const getUrlPathSlug = () => { 
    const path = window.location.href
    const splittedPath = path.split('/')
    return splittedPath[splittedPath.length-1]
}