


function displayAlphabet() {
    const upperCase = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
    const myalpha = upperCase.split('');
    const alpha_array = [...myalpha]
    const alphabet = document.querySelector('.alphabet');
    const html = alpha_array.map(letter => {
        return`
            <div class="alpha_layout">
                <li><a href="#"><span>${letter}</span></a></li>
            </div>        
        `;

    })
    
      
    alphabet.innerHTML = html;
}

  

displayAlphabet()