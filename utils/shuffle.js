export default function shuffle(arr) {
    let array = [...arr];
    let len = array.length;
    for (let x = len - 1; x >= 0; x--) {
      let y = Math.floor(Math.random() * x);
      let temp = array[x];
      array[x] = array[y];
      array[y] = temp;
    }
    return array;
}