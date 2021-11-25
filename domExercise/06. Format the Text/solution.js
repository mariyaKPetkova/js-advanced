function solve() {
  const input = document.querySelector('textarea')
  const divEl = document.querySelector('#output')
  let sentences = input.value.split('.')
    .filter(el => el !== '')
    .map(sentence => sentence+'.')
  let text = [];
  Array.from(sentences).map((sentence, i) => {
    text.push(sentence)
    if(i == sentences.length-1 || (i != 0 && (i+1) % 3 == 0)){
      let pEl = document.createElement('p')
      pEl.textContent = text.join('')
      divEl.appendChild(pEl)
      text = []
    }
  })
}