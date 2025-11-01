'use strict'

const file2Base64 = function(file) {
    try {
        const base64 = new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function(e) {
                let base64 = e.target.result?.toString();
                resolve(base64);
            }
            reader.readAsDataURL(file);
        });
        return base64;
    }
    catch(e) {
        console.log(e.message);
    }
};

const handleFile = (e) => {
    try {
        e.preventDefault();
        const file = e.target.files[0];

        if(file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                //callback de retorno
            }

            reader.readAsDataURL();
        }
    }
    catch(e) {
        console.log(e.message)
    }
};