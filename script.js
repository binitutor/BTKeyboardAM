// Amharic Keyboard Data
const amharicKeyboard = {
    // First row
    'ሀ': 'ሀ', 'ሁ': 'ሁ', 'ሂ': 'ሂ', 'ሃ': 'ሃ', 'ሄ': 'ሄ', 'ህ': 'ህ', 'ሆ': 'ሆ',
    // Second row
    'ለ': 'ለ', 'ሉ': 'ሉ', 'ሊ': 'ሊ', 'ላ': 'ላ', 'ሌ': 'ሌ', 'ል': 'ል', 'ሎ': 'ሎ',
    // Third row
    'መ': 'መ', 'ሙ': 'ሙ', 'ሚ': 'ሚ', 'ማ': 'ማ', 'ሜ': 'ሜ', 'ም': 'ም', 'ሞ': 'ሞ',
    // Fourth row
    'ሠ': 'ሠ', 'ሡ': 'ሡ', 'ሢ': 'ሢ', 'ሣ': 'ሣ', 'ሤ': 'ሤ', 'ሥ': 'ሥ', 'ሦ': 'ሦ',
    // Fifth row
    'ረ': 'ረ', 'ሩ': 'ሩ', 'ሪ': 'ሪ', 'ራ': 'ራ', 'ሬ': 'ሬ', 'ር': 'ር', 'ሮ': 'ሮ',
    // Sixth row
    'ሰ': 'ሰ', 'ሱ': 'ሱ', 'ሲ': 'ሲ', 'ሳ': 'ሳ', 'ሴ': 'ሴ', 'ስ': 'ስ', 'ሶ': 'ሶ',
    // Seventh row
    'ተ': 'ተ', 'ቱ': 'ቱ', 'ቲ': 'ቲ', 'ታ': 'ታ', 'ቴ': 'ቴ', 'ት': 'ት', 'ቶ': 'ቶ',
    // Eighth row
    'ቀ': 'ቀ', 'ቁ': 'ቁ', 'ቂ': 'ቂ', 'ቃ': 'ቃ', 'ቄ': 'ቄ', 'ቅ': 'ቅ', 'ቆ': 'ቆ',
    // Ninth row
    'ከ': 'ከ', 'ኩ': 'ኩ', 'ኪ': 'ኪ', 'ካ': 'ካ', 'ኬ': 'ኬ', 'ክ': 'ክ', 'ኮ': 'ኮ',
    // Tenth row
    'ወ': 'ወ', 'ዉ': 'ዉ', 'ዊ': 'ዊ', 'ዋ': 'ዋ', 'ዌ': 'ዌ', 'ው': 'ው', 'ዎ': 'ዎ',
    // Eleventh row
    'ዐ': 'ዐ', 'ዑ': 'ዑ', 'ዒ': 'ዒ', 'ዓ': 'ዓ', 'ዔ': 'ዔ', 'ዕ': 'ዕ', 'ዖ': 'ዖ',
    // Twelfth row
    'ዘ': 'ዘ', 'ዙ': 'ዙ', 'ዚ': 'ዚ', 'ዛ': 'ዛ', 'ዜ': 'ዜ', 'ዝ': 'ዝ', 'ዞ': 'ዞ',
    // More characters
    'ዠ': 'ዠ', 'ዡ': 'ዡ', 'ዢ': 'ዢ', 'ዣ': 'ዣ', 'ዤ': 'ዤ', 'ዥ': 'ዥ', 'ዦ': 'ዦ',
    'ዩ': 'ዩ', 'ይ': 'ይ', 'ዪ': 'ዪ', 'ያ': 'ያ', 'ዬ': 'ዬ', 'ዮ': 'ዮ', 'ዯ': 'ዯ',
    'ደ': 'ደ', 'ዱ': 'ዱ', 'ዲ': 'ዲ', 'ዳ': 'ዳ', 'ዴ': 'ዴ', 'ድ': 'ድ', 'ዶ': 'ዶ',
};

// Global variables
let typingHistory = [];
let sessionStartTime = Date.now();
let charDistributionChart = null;
let typingProgressChart = null;
let dataTable = null;
let keyboardMapping = {};
let currentTypingBuffer = '';
let isShiftPressed = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadKeyboardMapping();
    initializeKeyboard();
    setupEventListeners();
    loadHistory();
    initializeCharts();
    loadStats();
});

// Load keyboard mapping from JSON file
function loadKeyboardMapping() {
    fetch('kbdmapping.json')
        .then(response => response.json())
        .then(data => {
            // Reverse the mapping: English key → Amharic character
            Object.entries(data).forEach(([amharic, keys]) => {
                keys.forEach(key => {
                    if (key && key.length > 0) {
                        keyboardMapping[key] = amharic;
                    }
                });
            });
            console.log('Keyboard mapping loaded successfully', Object.keys(keyboardMapping).length, 'mappings');
        })
        .catch(error => console.error('Error loading keyboard mapping:', error));
}

// Initialize Virtual Keyboard
function initializeKeyboard() {
    const container = document.getElementById('keyboard-container');
    container.innerHTML = '';

    // Create keyboard rows
    const keyboardRows = [
        ['ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ'],
        ['ለ', 'ሉ', 'ሊ', 'ላ', 'ሌ', 'ል', 'ሎ'],
        ['መ', 'ሙ', 'ሚ', 'ማ', 'ሜ', 'ም', 'ሞ'],
        ['ሠ', 'ሡ', 'ሢ', 'ሣ', 'ሤ', 'ሥ', 'ሦ'],
        ['ረ', 'ሩ', 'ሪ', 'ራ', 'ሬ', 'ር', 'ሮ'],
        ['ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ'],
        ['ተ', 'ቱ', 'ቲ', 'ታ', 'ቴ', 'ት', 'ቶ'],
        ['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ'],
        ['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ'],
        ['ወ', 'ዉ', 'ዊ', 'ዋ', 'ዌ', 'ው', 'ዎ'],
        ['ዐ', 'ዑ', 'ዒ', 'ዓ', 'ዔ', 'ዕ', 'ዖ'],
        ['ዘ', 'ዙ', 'ዚ', 'ዛ', 'ዜ', 'ዝ', 'ዞ'],
        ['ዠ', 'ዡ', 'ዢ', 'ዣ', 'ዤ', 'ዥ', 'ዦ'],
        ['ዩ', 'ይ', 'ዪ', 'ያ', 'ዬ', 'ዮ', 'ዯ'],
        ['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ'],
    ];

    // Create key buttons
    keyboardRows.forEach(row => {
        row.forEach(key => {
            const btn = document.createElement('button');
            btn.textContent = key;
            btn.className = 'key-btn';
            btn.type = 'button';
            btn.addEventListener('click', () => addCharacter(key));
            container.appendChild(btn);
        });
    });

    // Add space, backspace, and enter buttons
    const controlRow = document.createElement('div');
    controlRow.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(50px, 1fr)); gap: 8px; padding: 10px; background-color: #fff; border-radius: 8px; margin-top: 10px;';

    // Space button
    const spaceBtn = document.createElement('button');
    spaceBtn.innerHTML = '<i class="fas fa-spaceman"></i> Space';
    spaceBtn.className = 'key-btn space-btn';
    spaceBtn.type = 'button';
    spaceBtn.addEventListener('click', () => addCharacter(' '));
    controlRow.appendChild(spaceBtn);

    // Backspace button
    const backspaceBtn = document.createElement('button');
    backspaceBtn.innerHTML = '<i class="fas fa-backspace"></i> Backspace';
    backspaceBtn.className = 'key-btn backspace-btn';
    backspaceBtn.type = 'button';
    backspaceBtn.addEventListener('click', deleteLastCharacter);
    controlRow.appendChild(backspaceBtn);

    // Enter button
    const enterBtn = document.createElement('button');
    enterBtn.innerHTML = '<i class="fas fa-arrow-turn-down"></i> Enter';
    enterBtn.className = 'key-btn enter-btn';
    enterBtn.type = 'button';
    enterBtn.addEventListener('click', () => addCharacter('\n'));
    controlRow.appendChild(enterBtn);

    container.appendChild(controlRow);
}

// Add character to text area
function addCharacter(char) {
    const textArea = document.getElementById('textDisplay');
    textArea.value += char;
    updateCharacterCount();
    updateStatistics();
    updateCharts();
}

// Delete last character
function deleteLastCharacter() {
    const textArea = document.getElementById('textDisplay');
    if (textArea.value.length > 0) {
        textArea.value = textArea.value.slice(0, -1);
        updateCharacterCount();
        updateStatistics();
        updateCharts();
    }
}

// Handle keyboard input and translate to Amharic
function handleKeyboardInput(event) {
    const key = event.key.toLowerCase();
    const textArea = document.getElementById('textDisplay');
    
    // Handle special keys
    if (event.key === 'Backspace') {
        currentTypingBuffer = '';
        return; // Let default backspace work
    }
    
    if (event.key === 'Enter') {
        currentTypingBuffer = '';
        return; // Let default enter work
    }
    
    if (event.key === ' ') {
        currentTypingBuffer = '';
        return; // Let default space work
    }
    
    // Ignore control keys and other special keys
    if (event.ctrlKey || event.altKey || event.metaKey || event.key.length > 1) {
        return;
    }
    
    // Prevent default text input
    event.preventDefault();
    
    // Add to buffer
    currentTypingBuffer += key;
    
    // Check if buffer matches a mapping
    let found = false;
    
    // Try with shift if pressed
    if (isShiftPressed) {
        const shiftKey = 'shift+' + currentTypingBuffer;
        if (keyboardMapping[shiftKey]) {
            addCharacter(keyboardMapping[shiftKey]);
            currentTypingBuffer = '';
            found = true;
        }
    }
    
    // Try without shift
    if (!found && keyboardMapping[currentTypingBuffer]) {
        addCharacter(keyboardMapping[currentTypingBuffer]);
        currentTypingBuffer = '';
        found = true;
    }
    
    // If buffer is getting too long, clear it
    if (currentTypingBuffer.length > 5) {
        // If no match found, insert the last character as-is and keep the rest in buffer
        if (!found && currentTypingBuffer.length > 1) {
            currentTypingBuffer = currentTypingBuffer.slice(-1);
        } else if (!found) {
            currentTypingBuffer = '';
        }
    }
}

// Update character and word count
function updateCharacterCount() {
    const text = document.getElementById('textDisplay').value;
    const charCount = text.length;
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;

    document.getElementById('charCount').textContent = charCount;
    document.getElementById('wordCount').textContent = text.trim().length > 0 ? wordCount : 0;
}

// Setup Event Listeners
function setupEventListeners() {
    // Text area input
    document.getElementById('textDisplay').addEventListener('input', () => {
        updateCharacterCount();
        updateStatistics();
        updateCharts();
    });

    // Keyboard mapping - keydown event for shift detection
    document.getElementById('textDisplay').addEventListener('keydown', (e) => {
        if (e.key === 'Shift') {
            isShiftPressed = true;
        }
        
        // Prevent default text input and handle translation
        handleKeyboardInput(e);
    });

    // Keyboard mapping - keyup event for shift release
    document.getElementById('textDisplay').addEventListener('keyup', (e) => {
        if (e.key === 'Shift') {
            isShiftPressed = false;
        }
    });

    // Clear button
    document.getElementById('clearBtn').addEventListener('click', clearText);

    // Copy button
    document.getElementById('copyBtn').addEventListener('click', copyToClipboard);

    // Download button
    document.getElementById('downloadBtn').addEventListener('click', downloadText);

    // Export History button
    document.getElementById('exportHistoryBtn').addEventListener('click', exportHistoryAsCSV);

    // Clear History button
    document.getElementById('clearHistoryBtn').addEventListener('click', clearAllHistory);
}

// Clear text
function clearText() {
    Swal.fire({
        title: 'Clear Text',
        text: 'Are you sure you want to clear all text?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#234756',
        cancelButtonColor: '#C66F3D',
        confirmButtonText: 'Yes, clear it'
    }).then((result) => {
        if (result.isConfirmed) {
            const textArea = document.getElementById('textDisplay');
            const text = textArea.value;
            if (text.length > 0) {
                addToHistory(text);
            }
            textArea.value = '';
            updateCharacterCount();
            updateStatistics();
            updateCharts();
            Swal.fire('Cleared!', 'Text has been cleared.', 'success');
        }
    });
}

// Copy to clipboard
function copyToClipboard() {
    const textArea = document.getElementById('textDisplay');
    if (textArea.value.length === 0) {
        Swal.fire('Empty Text', 'There is no text to copy.', 'info');
        return;
    }

    navigator.clipboard.writeText(textArea.value).then(() => {
        Swal.fire('Copied!', 'Text copied to clipboard.', 'success');
    }).catch(err => {
        Swal.fire('Error', 'Failed to copy text.', 'error');
    });
}

// Download text as file
function downloadText() {
    const textArea = document.getElementById('textDisplay');
    if (textArea.value.length === 0) {
        Swal.fire('Empty Text', 'There is no text to download.', 'info');
        return;
    }

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textArea.value));
    element.setAttribute('download', `amharic_text_${new Date().getTime()}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    Swal.fire('Downloaded!', 'Text has been downloaded.', 'success');
}

// Update statistics
function updateStatistics() {
    const text = document.getElementById('textDisplay').value;
    const elapsed = (Date.now() - sessionStartTime) / 1000 / 60; // in minutes
    const speed = elapsed > 0 ? Math.round(text.length / elapsed) : 0;

    document.getElementById('statTotalChars').textContent = text.length;
    document.getElementById('statTotalWords').textContent = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    document.getElementById('statSpeed').textContent = speed;
}

// Add to history
function addToHistory(text) {
    const elapsed = (Date.now() - sessionStartTime) / 1000; // in seconds
    const speed = elapsed > 0 ? Math.round(text.length / (elapsed / 60)) : 0;

    const record = {
        timestamp: new Date(),
        text: text,
        characters: text.length,
        words: text.trim().split(/\s+/).filter(word => word.length > 0).length,
        duration: Math.round(elapsed),
        speed: speed
    };

    typingHistory.unshift(record);
    localStorage.setItem('typingHistory', JSON.stringify(typingHistory));
    updateHistoryTable();
}

// Load history from localStorage
function loadHistory() {
    const saved = localStorage.getItem('typingHistory');
    if (saved) {
        typingHistory = JSON.parse(saved);
        updateHistoryTable();
    }
}

// Update history table
function updateHistoryTable() {
    if (typingHistory.length === 0) {
        document.querySelector('#historyTable tbody').innerHTML = '<tr><td colspan="7" class="text-center" style="color: #666;">No history yet. Start typing!</td></tr>';
        return;
    }

    // Destroy existing DataTable if it exists
    if (dataTable) {
        dataTable.destroy();
    }

    const tbody = document.querySelector('#historyTable tbody');
    tbody.innerHTML = '';

    typingHistory.forEach((record, index) => {
        const row = document.createElement('tr');
        const preview = record.text.substring(0, 50) + (record.text.length > 50 ? '...' : '');
        
        row.innerHTML = `
            <td>${new Date(record.timestamp).toLocaleString()}</td>
            <td title="${record.text}">${preview}</td>
            <td>${record.characters}</td>
            <td>${record.words}</td>
            <td>${record.duration}</td>
            <td>${record.speed}</td>
            <td>
                <a href="#" onclick="viewRecord(${index}); return false;" title="View">
                    <i class="fas fa-eye"></i>
                </a>
                &nbsp;&nbsp;
                <a href="#" onclick="deleteRecord(${index}); return false;" title="Delete">
                    <i class="fas fa-trash-alt"></i>
                </a>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Initialize DataTable
    dataTable = $('#historyTable').DataTable({
        paging: true,
        searching: true,
        ordering: true,
        lengthMenu: [5, 10, 25, 50],
        language: {
            search: "Filter:",
            lengthMenu: "Show _MENU_ entries"
        }
    });
}

// View record
function viewRecord(index) {
    const record = typingHistory[index];
    Swal.fire({
        title: 'View Record',
        html: `
            <div style="text-align: left; color: #234756;">
                <p><strong>Date & Time:</strong> ${new Date(record.timestamp).toLocaleString()}</p>
                <p><strong>Characters:</strong> ${record.characters}</p>
                <p><strong>Words:</strong> ${record.words}</p>
                <p><strong>Duration:</strong> ${record.duration} seconds</p>
                <p><strong>Speed:</strong> ${record.speed} chars/min</p>
                <p><strong>Text Preview:</strong></p>
                <div style="background-color: #EAEAEA; padding: 10px; border-radius: 6px; margin-top: 10px; max-height: 200px; overflow-y: auto; text-align: right; direction: rtl; font-size: 14px;">
                    ${record.text.replace(/\n/g, '<br>')}
                </div>
            </div>
        `,
        confirmButtonColor: '#234756'
    });
}

// Delete record
function deleteRecord(index) {
    Swal.fire({
        title: 'Delete Record',
        text: 'Are you sure you want to delete this record?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#234756',
        cancelButtonColor: '#C66F3D',
        confirmButtonText: 'Yes, delete it'
    }).then((result) => {
        if (result.isConfirmed) {
            typingHistory.splice(index, 1);
            localStorage.setItem('typingHistory', JSON.stringify(typingHistory));
            updateHistoryTable();
            Swal.fire('Deleted!', 'Record has been deleted.', 'success');
        }
    });
}

// Clear all history
function clearAllHistory() {
    Swal.fire({
        title: 'Clear All History',
        text: 'Are you sure you want to delete all history records? This action cannot be undone.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#234756',
        cancelButtonColor: '#C66F3D',
        confirmButtonText: 'Yes, clear all'
    }).then((result) => {
        if (result.isConfirmed) {
            typingHistory = [];
            localStorage.setItem('typingHistory', JSON.stringify(typingHistory));
            updateHistoryTable();
            Swal.fire('Cleared!', 'All history has been cleared.', 'success');
        }
    });
}

// Export history as CSV
function exportHistoryAsCSV() {
    if (typingHistory.length === 0) {
        Swal.fire('No Data', 'There is no history to export.', 'info');
        return;
    }

    let csv = 'Date & Time,Character Count,Word Count,Duration (seconds),Speed (chars/min),Text Preview\n';

    typingHistory.forEach(record => {
        const date = new Date(record.timestamp).toLocaleString();
        const preview = record.text.substring(0, 100).replace(/"/g, '""');
        csv += `"${date}",${record.characters},${record.words},${record.duration},${record.speed},"${preview}"\n`;
    });

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
    element.setAttribute('download', `amharic_keyboard_history_${new Date().getTime()}.csv`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    Swal.fire('Exported!', 'History has been exported as CSV.', 'success');
}

// Initialize charts
function initializeCharts() {
    // Character Distribution Chart
    const charCtx = document.getElementById('charDistributionChart').getContext('2d');
    charDistributionChart = new Chart(charCtx, {
        type: 'doughnut',
        data: {
            labels: ['ሀ', 'ለ', 'መ', 'ሠ', 'ረ', 'ሰ', 'ተ', 'ቀ', 'ከ', 'ወ', 'Other'],
            datasets: [{
                data: [12, 15, 10, 8, 14, 9, 11, 13, 7, 6, 15],
                backgroundColor: [
                    '#234756',
                    '#C66F3D',
                    '#E8B4A1',
                    '#7DA3A3',
                    '#B8A4A1',
                    '#A89B8B',
                    '#9B9A8F',
                    '#8A8380',
                    '#7B7270',
                    '#6C6360',
                    '#EAEAEA'
                ],
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#234756',
                        font: {
                            size: 12,
                            weight: 'bold'
                        },
                        padding: 15
                    }
                }
            }
        }
    });

    // Typing Progress Chart
    const progressCtx = document.getElementById('typingProgressChart').getContext('2d');
    typingProgressChart = new Chart(progressCtx, {
        type: 'line',
        data: {
            labels: ['Session 1', 'Session 2', 'Session 3', 'Session 4', 'Session 5', 'Session 6'],
            datasets: [{
                label: 'Characters Typed',
                data: [150, 200, 280, 350, 420, 500],
                borderColor: '#234756',
                backgroundColor: 'rgba(35, 71, 86, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#C66F3D',
                pointBorderColor: '#234756',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#234756',
                        font: {
                            size: 12,
                            weight: 'bold'
                        },
                        padding: 15
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(35, 71, 86, 0.1)'
                    },
                    ticks: {
                        color: '#234756',
                        font: {
                            weight: 'bold'
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#234756',
                        font: {
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });
}

// Update charts based on history
function updateCharts() {
    // Update character distribution based on typing history
    if (charDistributionChart) {
        const text = document.getElementById('textDisplay').value;
        const charCount = {};

        for (let char of text) {
            if (char !== ' ' && char !== '\n') {
                charCount[char] = (charCount[char] || 0) + 1;
            }
        }

        const labels = Object.keys(charCount).slice(0, 10);
        const data = Object.values(charCount).slice(0, 10);

        if (labels.length > 0) {
            charDistributionChart.data.labels = labels;
            charDistributionChart.data.datasets[0].data = data;
            charDistributionChart.update();
        }
    }
}

// Load stats from history
function loadStats() {
    if (typingHistory.length === 0) {
        document.getElementById('statSessions').textContent = '0';
        return;
    }

    const totalChars = typingHistory.reduce((sum, record) => sum + record.characters, 0);
    const totalWords = typingHistory.reduce((sum, record) => sum + record.words, 0);
    const avgSpeed = Math.round(typingHistory.reduce((sum, record) => sum + record.speed, 0) / typingHistory.length);

    document.getElementById('statTotalChars').textContent = totalChars;
    document.getElementById('statTotalWords').textContent = totalWords;
    document.getElementById('statSessions').textContent = typingHistory.length;
    document.getElementById('statSpeed').textContent = avgSpeed;
}

// Session management - reset session timer every time text is cleared
const textArea = document.getElementById('textDisplay');
if (textArea) {
    textArea.addEventListener('change', function() {
        if (this.value === '') {
            sessionStartTime = Date.now();
        }
    });
}
