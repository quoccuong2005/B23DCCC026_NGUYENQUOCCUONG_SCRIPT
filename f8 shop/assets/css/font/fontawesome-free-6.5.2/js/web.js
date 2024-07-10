document.addEventListener('DOMContentLoaded', () => {
    const registerModal = document.getElementById('registerModal');
    const loginModal = document.getElementById('loginModal');
    
    const registerBtn = document.getElementById('registerBtn');
    const loginBtn = document.getElementById('loginBtn');
    const closeButtons = document.getElementsByClassName('btn--nomal');
  
    registerBtn.addEventListener('click', () => {
      registerModal.style.display = 'block';
     
    });
  
    loginBtn.addEventListener('click', () => {
      loginModal.style.display = 'block';
     
    });
  
    for (let i = 0; i < closeButtons.length + 1; i++) {
      closeButtons[i].addEventListener('click', () => {
        registerModal.style.display = 'none';
        loginModal.style.display = 'none';
        
      });
    }
  
    window.addEventListener('click', (event) => {
      if (event.target == registerModal || event.target == loginModal ) {
        registerModal.style.display = 'none';
        loginModal.style.display = 'none';
        
      }
    });
  });
  