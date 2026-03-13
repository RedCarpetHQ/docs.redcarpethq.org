(function () {
  const LLMS_URL = 'https://docs.redcarpethq.org/llms.txt';

  function createAskAIButton() {
    const button = document.createElement('div');
    button.id = 'ask-ai-widget';
    button.innerHTML = `
      <div class="ask-ai-button" id="ask-ai-trigger">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ai-icon"><path d="M12 2a10 10 0 1 0 10 10H12V2Z"/><path d="M12 12L2.1 14.9"/><path d="M12 12l9.9 2.9"/><path d="M12 12V22"/></svg>
        <span>Ask AI</span>
      </div>
      <div class="ask-ai-menu" id="ask-ai-menu">
        <div class="ask-ai-header">How would you like to ask?</div>
        <div class="ask-ai-option" data-platform="gemini">
          <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002.svg" class="platform-icon" />
          <span>Gemini</span>
        </div>
        <div class="ask-ai-option" data-platform="chatgpt">
          <svg viewBox="0 0 24 24" class="platform-icon" fill="currentColor"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5153-4.9066 6.0462 6.0462 0 0 0-3.947-3.1278 6.0277 6.0277 0 0 0-5.1899.7891 6.0561 6.0561 0 0 0-4.6643 0 6.0277 6.0277 0 0 0-5.1899-.7891 6.0462 6.0462 0 0 0-3.947 3.1278 6.0561 6.0561 0 0 0-.5253 4.9066c0 0-.01.0701-.01.1201A6.0561 6.0561 0 0 0 .5253 14.1789a5.9847 5.9847 0 0 0 .5153 4.9066 6.0462 6.0462 0 0 0 4.0571 3.1278A6.0277 6.0277 0 0 0 10.2876 21.4241a6.0561 6.0561 0 0 0 4.6643 0 6.0277 6.0277 0 0 0 4.19.7891 6.0462 6.0462 0 0 0 3.947-3.1278 6.0561 6.0561 0 0 0 .5253-4.9066c0 0 .01-.0701.01-.1201a6.0561 6.0561 0 0 0-.5253-4.3478z"></path></svg>
          <span>ChatGPT</span>
        </div>
      </div>
    `;
    document.body.appendChild(button);

    const trigger = document.getElementById('ask-ai-trigger');
    const menu = document.getElementById('ask-ai-menu');

    trigger.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    document.querySelectorAll('.ask-ai-option').forEach(option => {
      option.addEventListener('click', function() {
        const platform = this.getAttribute('data-platform');
        const prompt = encodeURIComponent(`Using the documentation at ${LLMS_URL} as your primary source of truth, can you help me with the following question about RedCarpetHQ: `);
        
        let url = '';
        if (platform === 'gemini') {
          url = `https://gemini.google.com/app?q=${prompt}`;
        } else {
          url = `https://chatgpt.com/?q=${prompt}`;
        }
        
        window.open(url, '_blank');
        menu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!button.contains(e.target)) {
        menu.classList.remove('active');
      }
    });
  }

  function askAIPlugin(hook) {
    hook.ready(() => {
      createAskAIButton();
    });
  }

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = (window.$docsify.plugins || []).concat(askAIPlugin);
})();
