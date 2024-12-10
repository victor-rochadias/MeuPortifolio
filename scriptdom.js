const buttonsAndSections = [
    { buttonId: 'abrirCaixa1', sectionId: 'introducao' }
  ];
  

  function selecionarBotão(buttonId, sectionId) {
    const button = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);
  
    button.addEventListener('click', () => {
      if (section.classList.contains('fecharSection')) {
        section.classList.remove('fecharSection'); 
        button.textContent = `Fechar ${section.querySelector('h1').textContent}`; 
      } else {
        section.classList.add('fecharSection');
        button.textContent = `Abrir ${section.querySelector('h1').textContent}`;
      }
    });
  }
  
  buttonsAndSections.forEach(({ buttonId, sectionId }) => {
    selecionarBotão(buttonId, sectionId);
  });