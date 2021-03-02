const isImage = (file) => {
    const types = ['image/png', 'image/jpg', 'image/jpeg'];
    return !!types.find(type => type === file.type);
}

export default isImage;
