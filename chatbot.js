// Crave Assistant - AI Powered Customer Support
// ⚠️ IMPORTANT: Get your key from https://platform.openai.com/api-keys
const API_KEY = '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';

(function () {
    'use strict';

    // The "Brain" - Context about your restaurant for the AI
    const SYSTEM_PROMPT = `
    You are Crave Assistant, the friendly AI helper for CraveBites Fast Food.
    Your traits: Friendly, Emojis-loving, Helpful, Short & Concise.
    
    WEBSITE CONTEXT:
    - Name: CraveBites
    - Slogan: The Ultimate Fast Food Experience
    - Working Hours: Mon-Fri 10AM-11PM, Sat-Sun 9AM-12AM
    - Delivery Time: Fast delivery (approx 30 mins)
    - Free Delivery: On orders over $20

    MENU ITEMS & PRICES:
    1. Super Family Feast ($39.99) - 3 Large Pizzas, 2 Sides, 4 Drinks (Hot Deal)
    2. Double Trouble Combo ($14.99) - 2x Double Cheeseburgers
    3. Loaded Fries Bucket ($6.99) - Cheesy Bacon Fries

    CATEGORIES:
    - Burgers: Classic, Double Cheese, Bacon, Veggie
    - Pizzas: Margherita, Pepperoni, BBQ Chicken, Veggie Supreme
    - Sides: Fries, Wings, Onion Rings
    - Drinks: Coke, Pepsi, Fresh Juice, Milkshakes

    OFFERS:
    - Use code 'CRAVE50' for 50% off first order
    - Spin & Win game available for free prizes

    RULES:
    - If asked about order status, ask for Order ID.
    - If customer is angry, be empathetic and offer support contact: (555) 123-4567.
    - Keep answers under 3-4 sentences.
    - Always answer in the context of this restaurant.
    `;

    // Chat state
    let chatHistory = [
        { role: 'system', content: SYSTEM_PROMPT }
    ];

    // Initialize chatbot
    function initChatbot() {
        const chatToggle = document.getElementById('chatToggle');
        const chatWindow = document.getElementById('chatWindow');
        const closeChat = document.getElementById('closeChat');
        const chatForm = document.getElementById('chatForm');
        const chatInput = document.getElementById('chatInput');

        if (!chatToggle || !chatWindow || !closeChat || !chatForm) {
            console.error('Chat elements not found');
            return;
        }


        // Note: Toggle logic is now handled in index.html for better reliability

        // Handle Message Submit
        chatForm.onsubmit = async (e) => {
            e.preventDefault();
            const message = chatInput.value.trim();
            if (!message) return;

            // 1. Show User Message
            addMessageToUI(message, 'user');
            chatInput.value = '';

            // 2. Show Typing Indicator
            const typingId = showTypingIndicator();

            // 3. Check for API Key
            if (API_KEY === 'YOUR_OPENAI_API_KEY_HERE') {
                removeTypingIndicator(typingId);
                addMessageToUI("⚠️ Developer Mode: Please add your OpenAI API Key in chatbot.js to enable AI responses.", 'bot');
                return;
            }

            // 4. Call AI API
            try {
                const aiResponse = await fetchAIResponse(message);
                removeTypingIndicator(typingId);
                addMessageToUI(aiResponse, 'bot');
            } catch (error) {
                removeTypingIndicator(typingId);
                console.error('AI Error:', error);
                addMessageToUI("Oops! I'm having trouble connecting to the kitchen server. 😓 Please try again.", 'bot');
            }
        };
    }

    // Call OpenAI API
    async function fetchAIResponse(userMessage) {
        // Add user message to history
        chatHistory.push({ role: 'user', content: userMessage });

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo", // Cost-effective and fast
                messages: chatHistory,
                temperature: 0.7,
                max_tokens: 150
            })
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        const botReply = data.choices[0].message.content;

        // Add bot reply to history for context
        chatHistory.push({ role: 'assistant', content: botReply });

        // Keep history manageable (last 10 messages)
        if (chatHistory.length > 10) {
            chatHistory = [
                chatHistory[0], // Keep system prompt
                ...chatHistory.slice(chatHistory.length - 9)
            ];
        }

        return botReply;
    }

    // UI Helper: Add Message
    function addMessageToUI(text, sender) {
        const chatMessages = document.getElementById('chatMessages');
        const msgDiv = document.createElement('div');

        const isUser = sender === 'user';

        msgDiv.style.cssText = `
            background: ${isUser ? 'var(--primary-color)' : 'white'};
            color: ${isUser ? 'white' : 'var(--text-dark)'};
            padding: 12px 15px;
            border-radius: ${isUser ? '15px 15px 0 15px' : '15px 15px 15px 0'};
            max-width: 80%;
            font-size: 0.9rem;
            align-self: ${isUser ? 'flex-end' : 'flex-start'};
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            margin-bottom: 10px;
            word-wrap: break-word;
        `;

        msgDiv.textContent = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // UI Helper: Typing Indicator
    function showTypingIndicator() {
        const chatMessages = document.getElementById('chatMessages');
        const id = 'typing-' + Date.now();
        const typingDiv = document.createElement('div');
        typingDiv.id = id;
        typingDiv.style.cssText = `
            background: white; 
            padding: 12px 15px; 
            border-radius: 15px 15px 15px 0; 
            max-width: 80%; 
            align-self: flex-start;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            color: #888;
            font-style: italic;
            font-size: 0.8rem;
            margin-bottom: 10px;
        `;
        typingDiv.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Crave Assistant is thinking...';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return id;
    }

    function removeTypingIndicator(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }

    // Wait logic
    function waitForElements() {
        const chatToggle = document.getElementById('chatToggle');
        const chatWindow = document.getElementById('chatWindow');
        const closeChat = document.getElementById('closeChat');
        const chatForm = document.getElementById('chatForm');

        if (chatToggle && chatWindow && closeChat && chatForm) {
            initChatbot();
        } else {
            // Retry after a short delay if elements aren't ready
            setTimeout(waitForElements, 100);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForElements);
    } else {
        waitForElements();
    }
})();
