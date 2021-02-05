//BASE URL
export const baseURL = 'https://api.genshin.dev'
//URLS FOR OTHER FETCHES
export const fetchEntityContentURL = (entity) => `${baseURL}/${entity}/`
export const entityItemIconURL = (entity, item) => `${baseURL}/${entity}/${item}/icon.png`;
export const charPortraitURL = (char_name) => `${baseURL}/characters/${char_name}/portrait.png`;
export const flowerOfLifeIconURL = (entity, item) => `${baseURL}/${entity}/${item}/flower-of-life.png`;
export const fetchItemInfoURL = (entity, item) => `${baseURL}/${entity}/${item}/`;
 