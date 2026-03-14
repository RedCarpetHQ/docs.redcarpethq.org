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
          <svg class="platform-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320">
            <path d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"/>
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
      option.addEventListener('click', function () {
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
