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
          <svg viewBox="0 0 24 24" class="platform-icon" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0001 2.5C12.3334 8.08333 16.5834 12.3333 22.1667 12.6667C16.5834 13 12.3334 17.25 12.0001 22.8333C11.6667 17.25 7.41675 13 1.83341 12.6667C7.41675 12.3333 11.6667 8.08333 12.0001 2.5Z" fill="url(#gemini_grad)"/>
            <defs>
              <linearGradient id="gemini_grad" x1="12" y1="2.5" x2="12" y2="22.8333" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4285F4"/>
                <stop offset="0.5" stop-color="#9B72CB"/>
                <stop offset="1" stop-color="#D96570"/>
              </linearGradient>
            </defs>
          </svg>
          <span>Gemini</span>
        </div>
        <div class="ask-ai-option" data-platform="chatgpt">
          <svg viewBox="0 0 24 24" class="platform-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5153-4.9066 6.0462 6.0462 0 0 0-3.947-3.1278 6.0277 6.0277 0 0 0-5.1899.7891 6.0561 6.0561 0 0 0-4.6643 0 6.0277 6.0277 0 0 0-5.1899-.7891 6.0462 6.0462 0 0 0-3.947 3.1278 6.0561 6.0561 0 0 0-.5253 4.9066c0 0-.01.0701-.01.1201A6.0561 6.0561 0 0 0 .5253 14.1789a5.9847 5.9847 0 0 0 .5153 4.9066 6.0462 6.0462 0 0 0 4.0571 3.1278A6.0277 6.0277 0 0 0 10.2876 21.4241a6.0561 6.0561 0 0 0 4.6643 0 6.0277 6.0277 0 0 0 4.19.7891 6.0462 6.0462 0 0 0 3.947-3.1278 6.0561 6.0561 0 0 0 .5253-4.9066c0 0 .01-.0701.01-.1201a6.0561 6.0561 0 0 0-.5253-4.3478zm-14.881 7.1524a4.0264 4.0264 0 0 1-.958-3.0454l.01-.0201 1.9579-1.129 0 4.3942a1.053 1.053 0 0 0 1.5796.911l3.8156-2.201.01.0701a4.0665 4.0665 0 0 1-1.0282 3.1755 4.0264 4.0264 0 0 1-3.2356 1.119 4.0665 4.0665 0 0 1-2.1513-1.2543zm12.396-4.5244-3.8055 2.191-1.9379 1.129 0-4.4143a1.053 1.053 0 0 0-1.5695-.911l-3.8156 2.2211A4.0264 4.0264 0 0 1 7.4258 12c0-2.238 1.8333-4.0463 4.0864-4.0463.5413 0 1.0626.1102 1.5494.3105l3.8055-2.191a4.0665 4.0665 0 0 1 1.8778 1.9627 4.0264 4.0264 0 0 1 .1502 2.1432 4.0665 4.0665 0 0 1-1.0983 2.2642zm1.6199 5.6171-1.9578-1.129 1.9278-1.119.01-.01c1.543-1.0198 3.5224-1.1396 5.1627-.3006a4.0264 4.0264 0 0 1 1.8978 2.0128 4.0665 4.0665 0 0 1 .05 2.524 4.0264 4.0264 0 0 1-1.1593 1.9627 4.0665 4.0665 0 0 1-2.2612 1.0583 4.0264 4.0264 0 0 1-2.2211-.2704l-3.2356-1.8724a1.053 1.053 0 0 1-.7892-1.5695v-.01zm-5.0223 3.996 0-2.258 0-2.238L8.647 16.489a4.0665 4.0665 0 0 1-2.0913.3605 4.0264 4.0264 0 0 1-1.8478-1.0084 4.0665 4.0665 0 0 1-1.0182-2.3142 4.0264 4.0264 0 0 1 .3706-2.201l3.2255-5.5972a1.053 1.053 0 0 1 1.5696-.3405l.02.01 3.8256 2.211 0 4.4944zm6.0506-2.121-.01.01-1.9379 1.119-1.9379 1.129 0-4.4042a1.053 1.053 0 0 1 .3305-1.5395l3.8156-2.201a4.0264 4.0264 0 0 1 2.2411-.3104 4.0665 4.0665 0 0 1 2.1613 1.119 4.0264 4.0264 0 0 1 1.0584 3.1956 4.0665 4.0665 0 0 1-3.7292 2.892z"/>
          </svg>
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
