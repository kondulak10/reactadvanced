import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const items = [{"id":1,"email":"celrick0@spiegel.de","password":"contextually-based","admin":true},
{"id":2,"email":"lmcknockiter1@bbb.org","password":"middleware","admin":true},
{"id":3,"email":"drizzardi2@scribd.com","password":"Cloned","admin":true},
{"id":4,"email":"fgergher3@themeforest.net","password":"fault-tolerant","admin":true},
{"id":5,"email":"bderycot4@baidu.com","password":"Versatile","admin":false},
{"id":6,"email":"ajarrell5@netscape.com","password":"Object-based","admin":false},
{"id":7,"email":"krundle6@livejournal.com","password":"neural-net","admin":true},
{"id":8,"email":"jmackneis7@indiatimes.com","password":"protocol","admin":false},
{"id":9,"email":"dhuie8@businessweek.com","password":"installation","admin":false},
{"id":10,"email":"dcaseborne9@epa.gov","password":"De-engineered","admin":false},
{"id":11,"email":"dboultona@mozilla.com","password":"5th generation","admin":true},
{"id":12,"email":"aruckledgeb@tamu.edu","password":"help-desk","admin":true},
{"id":13,"email":"zfogartyc@vimeo.com","password":"concept","admin":true},
{"id":14,"email":"rcockshuttd@tuttocitta.it","password":"Reverse-engineered","admin":true},
{"id":15,"email":"acoppocke@jugem.jp","password":"matrices","admin":true},
{"id":16,"email":"esolesf@redcross.org","password":"service-desk","admin":true},
{"id":17,"email":"merrettg@cnbc.com","password":"algorithm","admin":true},
{"id":18,"email":"tduffieldh@t-online.de","password":"3rd generation","admin":true},
{"id":19,"email":"hcurweni@purevolume.com","password":"implementation","admin":true},
{"id":20,"email":"koxherdj@latimes.com","password":"Down-sized","admin":false}]

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function generateId() {
  return Math.max.apply(Math,array.map(function(o){return o.id;})) + 1;
}

class UserApi {
  static getAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items));
      }, delay);
    });
  }

  static saveItem(item) {
    item = Object.assign({}, item); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const length = 1;
        if (item.title.length < length) {
          reject(`Title must be at least ${length} characters.`);
        }

        if (item.id) {
          const existingIndex = items.findIndex(a => a.id == course.id);
          items.splice(existingIndex, 1, item);
        } else {
          item.id = generateId(course);
          items.push(item);
        }

        resolve(item);
      }, delay);
    });
  }

  static deleteItem(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = items.findIndex(item => {
          item.id == id;
        });
        items.splice(index, 1);
        resolve();
      }, delay);
    });
  }
}

export default UserApi;
