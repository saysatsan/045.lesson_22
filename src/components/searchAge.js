function getAgeUser(birthday) {
    const today = new Date();    

    const diffDate = today - new Date(birthday);
    
    return new Date(diffDate).getFullYear() - 1970;
}

export default getAgeUser;
