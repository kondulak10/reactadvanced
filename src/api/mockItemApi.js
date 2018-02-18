import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const items = [{"id":1,"title":"LS","brand":"Lexus","country":"Indonesia","authorId":1},
{"id":2,"title":"1500","brand":"Ram","country":"Peru","authorId":1},
{"id":3,"title":"Prizm","brand":"Chevrolet","country":"Portugal","authorId":1},
{"id":4,"title":"LTD Crown Victoria","brand":"Ford","country":"China","authorId":1},
{"id":5,"title":"Range Rover","brand":"Land Rover","country":"Portugal","authorId":1},
{"id":6,"title":"Yukon XL 2500","brand":"GMC","country":"Russia","authorId":1},
{"id":7,"title":"Ram Wagon B150","brand":"Dodge","country":"China","authorId":1},
{"id":8,"title":"X6","brand":"BMW","country":"China","authorId":1},
{"id":9,"title":"Previa","brand":"Toyota","country":"Turkmenistan","authorId":1},
{"id":10,"title":"Justy","brand":"Subaru","country":"Japan","authorId":1},
{"id":11,"title":"RAV4","brand":"Toyota","country":"China","authorId":1},
{"id":12,"title":"Justy","brand":"Subaru","country":"Russia","authorId":1},
{"id":13,"title":"Crown Victoria","brand":"Ford","country":"Philippines","authorId":1},
{"id":14,"title":"Festiva","brand":"Ford","country":"Canada","authorId":1},
{"id":15,"title":"Sable","brand":"Mercury","country":"Russia","authorId":1},
{"id":16,"title":"Rodeo","brand":"Isuzu","country":"Poland","authorId":1},
{"id":17,"title":"Grand Cherokee","brand":"Jeep","country":"Palestinian Territory","authorId":1},
{"id":18,"title":"Continental Flying Spur","brand":"Bentley","country":"Mongolia","authorId":1},
{"id":19,"title":"Durango","brand":"Dodge","country":"China","authorId":1},
{"id":20,"title":"M","brand":"Infiniti","country":"Indonesia","authorId":1}]

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function generateId() {
  return Math.max.apply(Math,items.map(function(o){return o.id;})) + 1;
}

class ItemApi {
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
        const length = 4;
        if (item.title.length < length) {
          reject(`Title must be at least ${length} characters.`);
        }

        if (item.id) {
          const existingIndex = items.findIndex(a => a.id == item.id);
          items.splice(existingIndex, 1, item);
        } else {
          item.id = generateId(item);
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

export default ItemApi;
