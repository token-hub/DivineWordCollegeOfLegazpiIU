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

const setImage = (alt, img) => {
    return { alt, img };
}

const setListContent = (title, link = '#', dateAndTime = null) => {
    return {title, link, dateAndTime};
}

const setObjectGen = (item = null, value = null) => {
    return {item, value};
}

const isNeedTextTransform = (type, text) => {
    return type === 'overview' ? capitalizeAllFirstLetter(text) : text;
}

const isBlock = (item, className, className2) => {
    return item ? clsx(className, className2) : className;
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
    isBlock
}
