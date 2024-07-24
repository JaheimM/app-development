const helper = (data) => {
    return `${data} is logged in.`;
}

const id = function(i) {
    return i;
}

const email = function(e) {
    return `${e}`
}


// multiple exports
module.exports = {helper, id, email};

// single export
/* module.exports = helper; */

/* module.exports.helper = helper;
module.exports.id = id;
module.exports.email = email; */