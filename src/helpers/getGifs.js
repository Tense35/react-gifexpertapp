export const getGifs = async( category ) => {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=ct6GoDusXAORgyH09ouAJTin4kTnd0P4';
    const resp = await fetch( `${ url }&q=${ encodeURI(category) }&limit=10` );
    const { data } = await resp.json();

    return data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
}