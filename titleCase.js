function titleCase(str) {
    str = str. split(' ');
    for (let i in str) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1).toLowerCase();
    }
    return str;
}
