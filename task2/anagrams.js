/**
 * Получения двумерный массив анаграмм из произвольного массива слов
 * @param   {string[]} list
 * @returns {Array<[string, string]>}
 */
 function getAnagrams(list) {
    let obj = {};
    for(let str of list){
         let key = str.split('').sort().join('');
         if(!obj[key]) {
             obj[key] = [str];
         } else {
             obj[key].push(str);
         }
    }
    return(Object.values(obj));
};

const inputList = [
	'кот', 'пила', 'барокко',
	'стоп', 'ток', 'кошка',
	'липа', 'коробка', 'пост',
];

// Проверка (лучше смотреть в консоль)
console.log(getAnagrams(inputList));
// [
//   ['кот', 'ток'],
//   ['пила', 'липа'],
//   ['барокко', 'коробка'],
//   ['стоп', 'пост'],
// ]