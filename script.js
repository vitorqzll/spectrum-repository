// const creating a NodeList that select all the class called ".item"
const divs = document.querySelectorAll('.item');

// O método .forEach() percorre cada elemento da NodeList (divs) e executa a função fornecida em cada um deles.
// O parâmetro div representa o elemento atual em cada iteração.
divs.forEach(div => {
  // Adiciona um ouvinte de evento ao elemento atual. Ele "escuta" cliques e executa a função fornecida quando o evento ocorre.
  div.addEventListener('click', function() {
    // Remove a classe 'selected' de todas as divs
    divs.forEach(d => d.classList.remove('selected'));
    
    // Adiciona a classe 'selected' à div clicada
    div.classList.add('selected');
  });
});