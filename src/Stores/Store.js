import { EventEmitter } from 'events';
let apikey = '';

// Superclass for Store.
class Store extends EventEmitter {

    // Base can be set per store, or defaulted to some config or string.
    constructor(base='http://localhost:8000') {
        super();
        // Set the api base.
        this.base = base;
        this.doFetch = this.doFetch.bind(this);
    }

    // Does api calls via fetch()
    doFetch({ url, body=null, options={ METHOD: 'GET' }, headers={}}) {
        const baseheaders = {
            'Content-Type': 'application/json',
            mode: 'cors'
        };

        options.headers = { ...baseheaders, ...headers };


        if(body) options.body = JSON.stringify(body);

        // Do the actual fetch() call
        return new Promise((resolve, reject) => fetch(this.base + url + '?api_key=' + apikey, options)
            .then((response) =>  {
                if(!response) {
                    reject(response);
                }
                // Check for status and response
                let status = Promise.resolve(response.status);
                let json = response.json();
                return Promise.all([json, status]);
            }).then(([json={}, statusCode=500]) => {
                // Check for validity in the response
                if(statusCode !== 200) {
                    let { error } = json;
                    reject({ error, statusCode });
                }
                // Resolve with the final json if no errors.
                Array.isArray(json) ? resolve(json) : resolve({ ...json });
            })
            .catch(reject)
            .catch(reject))
    }
}

export default Store;
