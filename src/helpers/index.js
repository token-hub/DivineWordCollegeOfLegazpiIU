import clsx from 'clsx';

const stringTransform = (text, from, to) => {
    return text.split(from).join(to).toUpperCase();
}

const isCurrentPage = (path, key) => {
    return isHomePage(path, key) || path.includes(key); // /about
}

const isHomePage = (path, key = 'home') => {
    return (path === '/' && key === 'home');
}

const setObject= (title, link = '#', sublinks = undefined) => {
    return {title, link, sublinks};
}

const capitalizeAllFirstLetter = string => {
    return string.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(" ");
}

const capitalizeAllFirstLetterAndTransform = (string, from = '_', to = ' ') => {
    return capitalizeAllFirstLetter(stringTransform(string, from, to));
}

const setImage = (alt, img) => {
    return { alt, img };
}

const setListContent = (title, link = '#', dateAndTime = null) => {
    return {title, link, dateAndTime};
}

const setObjectGen = (item = null, value = null, link = null) => {
    return {item, value};
}

const updateInitialInputState = (object, key, value = '') => {
    Object.assign(object, {[key]: value});
}


/*
    setObjects(['key', 'value'], [['email', 'johnsuyang@gmail.com'], ['email', 'johnsuyang2118@gmail.com']] )
    
    [
        {key: email, value: johnsuyang.com},
        {key: email, value: johnsuyang2118.com}
    ]
    
*/
const setObjects = (keys = [], values = []) => {
    let newObject = [];
    let object = {};
   
    values.forEach( value => {
        value.forEach((val, valueIndex) => {
            keys.forEach( (key, keyIndex) => {
                // checking if the current index value of the previous array (value)
                // is equal to the current index value of the keys array
                // because, the length of the keys must be equal to the length of the values(value -> previous array) array
                if (keyIndex === valueIndex) {
                    object = {...object, [keys[keyIndex]]: val};
                }
            })
        });

        // this push must be at the very first loop,
        // in order to get the same count of the array values
        newObject.push(object);
    });

    return newObject;
}


const isNeedTextTransform = (type, text) => {
    return type === 'overview' ? capitalizeAllFirstLetter(text) : text;
}

const textTransformCamelCase = text => {
    return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

const isBlock = (item, className, className2) => {
    return item ? clsx(className, className2) : className;
    // return Object.keys(item).length > 0 ? clsx(className, className2) : className;
}

const setUpdates = (dateAndTime, type, title, subtitle = null, link = '#', image = null) => {
    return {dateAndTime, type, title, subtitle, link, image};
}

const renderIconFromObject = (key, object, color='inherit', breakLines = false) => {
    const Icon = object[key];

    return Icon && <>
                <Icon color={color} /> 
                {breakLines && <><br /><br /><br /></> }
            </> 
}

const setCard = (link, title, image) => {
    return {link, title, image};
}

const setImageWithParagraph = (title, name, jobDescription, image) => {
    return {title, name, jobDescription, image};
}

const handleInputChange = (object, setState) => e => {
    const {name, value} = e.target;
    
    setState(prevState => ({
        ...prevState,
        [object]: {
            ...prevState.[object],
            [name]: value
        }
    }))
}

export {
    stringTransform,
    isCurrentPage,
    isHomePage,
    setObject,
    capitalizeAllFirstLetter,
    setImage,
    setListContent,
    setObjectGen,
    isNeedTextTransform,
    isBlock,
    setUpdates,
    renderIconFromObject,
    textTransformCamelCase,
    setCard,
    setImageWithParagraph,
    setObjects,
    updateInitialInputState,
    handleInputChange,
    capitalizeAllFirstLetterAndTransform
}
