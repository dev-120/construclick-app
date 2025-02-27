export const base64ToFile = async (base:any) => {
    const res = await fetch(base);
    const blob = await res.blob();
    return new File([blob], "filename.jpeg");      
}

export const dataURLtoFile = (dataurl: any, filename: any) => {
 
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename, {type:mime});
}