const butInstall = document.getElementById('buttonInstall');

// storing the events

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    // removws hidden class form buttom
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }
  
    // Show prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt variable
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
  });


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
