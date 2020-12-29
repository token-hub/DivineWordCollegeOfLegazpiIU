const stringTransform = (text, from, to) => {
    return text.split(from).join(to).toUpperCase();
}

const isCurrentPage = (path, key) => {
    return isHomePage(path, key) || path.includes(key); // /about
}

const isHomePage = (path, key = 'home') => {
    return (path === '/' && key === 'home');
}

const setObject= (title, link = '#') => {
    return {title, link};
}

const capitalizeAllFirstLetter = string => {
    return string.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join(" ");
}

const setImage = (alt, img) => {
    return { alt, img };
}

export {
    stringTransform,
    isCurrentPage,
    isHomePage,
    setObject,
    capitalizeAllFirstLetter,
    setImage
}