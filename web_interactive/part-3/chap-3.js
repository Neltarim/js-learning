// chain promises

Promise.all[get(url1), get(url2)]
    .then(function(result) {
        return Promise.all([results, post(url3)]); //use .all to chain
    })
    .then(function(allResults) {
        // and here we use the results !
    });
