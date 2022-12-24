/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} value
 * @return {string}
 */
 function rle(value) {
     let result = '';
     let count = 0;
     for (let i = 0; i <value.length; i++){
        count++;
        if (value[i] != value[i + 1]){
            result = result + value[i] + count;
            count = 0;
        }
     }
     return result;
}


console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));