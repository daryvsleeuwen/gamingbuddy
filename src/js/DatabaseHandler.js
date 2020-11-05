import database from '../js/database';

export default class DatabaseHandler {
    read = (url, callback) => {
        database.ref(url).once('value').then(data => {
            if(typeof callback === 'function'){
                callback(data);
            }
        });  
    }

    // updateData = (url, changes) => {
    //     database.ref('projects/').child(url).update(changes);
    // }
}