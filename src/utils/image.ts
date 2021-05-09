export const base64ToFile = async (base:any) => {
    const res = await fetch(base);
    const blob = await res.blob();
    return new File([blob], "filename.jpeg");      
}