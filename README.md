# BT Amharic Keyboard
## አማርኛ

A responsive, modern web-based virtual keyboard for typing Amharic language with comprehensive typing statistics, history tracking, and data visualization.

![Version](https://img.shields.io/badge/version-1.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple)
![Keyboard Mapping](https://img.shields.io/badge/Keyboard%20Mapping-Active-success)

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [File Structure](#file-structure)
- [Usage Guide](#usage-guide)
- [Features in Detail](#features-in-detail)
- [Browser Support](#browser-support)
- [Color Scheme](#color-scheme)
- [Keyboard Layout](#keyboard-layout)
- [API Reference](#api-reference)
- [Tips & Tricks](#tips--tricks)
- [Troubleshooting](#troubleshooting)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Functionality
- **Virtual Amharic Keyboard**: 15 rows containing complete Amharic character set (Fidel)
- **Physical Keyboard Mapping** (NEW!): Type English to automatically convert to Amharic
- **Real-time Text Input**: Live character and word counting as you type
- **Text Management**: Clear, copy, and download functionality
- **Session Tracking**: Automatic typing session monitoring and statistics
- **Multiple Input Methods**: Virtual keyboard + physical keyboard + mixed input

### Keyboard Mapping (NEW!)
- **265+ Character Mappings**: English phonetic to Amharic translation
- **Smart Buffer Management**: Intelligent pattern matching for multi-character sequences
- **Shift Key Combinations**: Access alternate character forms
- **Instant Translation**: Real-time conversion with zero latency
- **Mapping Guide**: Interactive reference page with examples and patterns

### Statistics & Analytics
- **Live Statistics**: Real-time display of characters, words, and typing speed
- **Character Distribution Chart**: Visual pie chart showing character usage frequency
- **Typing Progress Chart**: Line graph tracking typing progress over sessions
- **Session History**: Complete history of all typing sessions with timestamps

### User Interface
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern Styling**: Bootstrap 5.3 framework with custom color scheme
- **Intuitive Controls**: Easy-to-use virtual keyboard with visual feedback
- **Dark/Light Theme Ready**: Light background with contrasting accents

### Data Management
- **Local Storage**: Persistent storage of typing history in browser
- **History Table**: Searchable DataTable with sorting and pagination
- **Export Functionality**: Download typing history as CSV file
- **Record Management**: View, delete, or manage individual typing sessions

## 🛠 Technology Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **HTML5** | Structure & Markup | Latest |
| **CSS3** | Styling & Responsive Design | Latest |
| **JavaScript (Vanilla)** | Interactivity & Logic | ES6+ |
| **Bootstrap** | Responsive Framework | 5.3.0 |
| **Chart.js** | Data Visualization | 4.4.0 |
| **DataTables** | Advanced Tables | 1.13.8 |
| **SweetAlert2** | Notifications & Modals | 11 |
| **Font Awesome** | Icons | 6.4.0 |

## 📦 Installation

### Option 1: Direct File Access
1. Download or clone the repository
2. Navigate to the `BTKeyboardAm` folder
3. Open `index.html` in your web browser

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

### Option 3: Deploy to Web Hosting
1. Upload all files to your web server
2. Access via your domain: `https://yourdomain.com/BTKeyboardAm/`

## 📁 File Structure

```
BTKeyboardAm/
├── index.html                      # Main HTML file with page structure
├── script.js                       # JavaScript functionality and logic
├── styles.css                      # Custom CSS styling and responsive design
├── kbdmapping.json                 # Keyboard mapping data (265+ mappings)
│
├── mapping-guide.html              # Interactive keyboard mapping reference (NEW!)
├── ReadMe.MD                       # Complete project documentation
├── KEYBOARD_MAPPING.md             # Technical implementation details (NEW!)
├── QUICK_REFERENCE.md              # Quick start guide and cheat sheet (NEW!)
├── FEATURE_COMPLETE.md             # Implementation overview (NEW!)
└── IMPLEMENTATION_SUMMARY.txt      # Visual summary (NEW!)
```

### File Descriptions

**index.html** (800+ lines)
- Navigation bar with links to keyboard, statistics, history, and mapping guide
- Keyboard mapping info banner in input section
- Text input textarea with character/word counter
- Virtual Amharic keyboard grid (105 keys + control buttons)
- Statistics cards (4 metric cards)
- Chart containers (2 chart canvases)
- DataTable for typing history
- Footer with project information
- CDN links for all libraries

**script.js** (670+ lines)
- Keyboard mapping loading and initialization
- Physical keyboard input handling and translation
- Amharic character mapping logic
- Keyboard grid initialization
- Character input/deletion logic
- Statistics calculation
- Chart initialization and updates
- LocalStorage management
- DataTable initialization
- History export/import
- Event listener setup for keyboard and virtual buttons
- Utility functions for text management

**styles.css** (700+ lines)
- Base typography and color scheme
- Navigation styling
- Keyboard button styles (normal, hover, active states)
- Card and stat card styling
- Responsive grid system
- Mobile breakpoints (768px, 576px)
- Custom scrollbar styling
- Print-friendly styles
- SweetAlert customization
- DataTables theme integration
- Keyboard mapping feature styling

**kbdmapping.json** (265+ mappings)
- Complete English to Amharic character mapping data
- Consonant + vowel combinations
- Shift key alternate forms
- Organized by Amharic Fidel characters
- Used for real-time keyboard translation

**mapping-guide.html** (370+ lines) (NEW!)
- Interactive user guide for keyboard mappings
- Complete reference tables with examples
- Consonant-vowel combination guide
- Shift key combinations reference
- Tips and best practices
- Professional styling matching main app
- Linked from main navigation bar

**Documentation Files** (NEW!)
- **KEYBOARD_MAPPING.md**: Technical implementation details, function descriptions, testing checklist
- **QUICK_REFERENCE.md**: Quick start guide, mappings table, keyboard shortcuts, troubleshooting
- **FEATURE_COMPLETE.md**: Implementation overview, feature list, usage examples
- **IMPLEMENTATION_SUMMARY.txt**: Visual ASCII summary, project statistics, getting started guide

## 🎯 Usage Guide

### Typing Methods

#### Method 1: Virtual Keyboard (Click Buttons)
1. **Click any character button** to add that Amharic character
2. **Click Space** to add spaces between words
3. **Click Backspace** to delete the last character
4. **Click Enter** to create a new line

#### Method 2: Physical Keyboard (NEW!)
1. **Type English phonetic patterns** directly in the text area
2. **Automatic conversion** to Amharic characters happens in real-time
3. **Examples**: Type `ha` to get `ሀ`, type `me` to get `መ`
4. **Shift combinations** for alternate forms: Type `shift+h` to get `ኀ`
5. **View all mappings** by clicking "Mapping Guide" in the navbar

#### Method 3: Mixed Input
- **Combine both methods freely**: Use virtual keyboard for some characters and physical keyboard for others
- **Seamless switching**: Move between input methods without disruption

### Keyboard Mapping Examples
```
Type 'ha'      → Get 'ሀ'      (ha vowel form)
Type 'me'      → Get 'መ'      (me vowel form)
Type 'qui'     → Get 'ቁ'      (qui vowel form)
Type 'shift+h' → Get 'ኀ'      (alternate h form)
Type 'l'       → Get 'ል'      (schwa/final form)
Type 'le'      → Get 'ለ'      (default vowel form)
```

### Keyboard Shortcuts
- The virtual keyboard provides on-screen buttons for all Amharic characters
- Characters are organized in logical rows by Amharic Fidel system
- Special keys: Space, Backspace, Enter
- Supported input: Virtual buttons + physical keyboard typing

### Text Management
1. **Clear Text**: Click "Clear" button to remove all text (confirmation required)
2. **Copy Text**: Click "Copy to Clipboard" to copy current text
3. **Download**: Click "Download" to save text as .txt file
4. **View Mappings**: Click "Mapping Guide" link to see all keyboard mappings with examples

### Viewing Statistics
- Check real-time stats in the "Typing Statistics" section
- View character distribution in pie chart
- Track typing progress in line chart
- Monitor typing speed in characters per minute

### Managing History
- View all typing sessions in the History table
- **Search**: Use the search box to filter history
- **Sort**: Click column headers to sort by any metric
- **Paginate**: Navigate through pages (5, 10, 25, 50 entries)
- **View**: Click the eye icon to view full text of a session
- **Delete**: Click trash icon to remove a specific session
- **Export**: Click "Export as CSV" to download all history

## 🎨 Features in Detail

### Statistics Cards
Four cards display key metrics:
1. **Total Characters**: Count of all characters typed in current session
2. **Total Words**: Count of complete words typed
3. **Sessions**: Number of completed typing sessions
4. **Typing Speed**: Characters typed per minute (dynamic calculation)

### Character Distribution Chart
- **Type**: Doughnut/Pie chart
- **Display**: Shows frequency of each Amharic character used
- **Update**: Updates in real-time as you type
- **Colors**: Uses brand color palette

### Typing Progress Chart
- **Type**: Line chart with area fill
- **Display**: Shows character count progression across sessions
- **Timeline**: Displays up to 6 recent sessions
- **Features**: Interactive points showing session data

### History Table Features
- **Searchable**: Filter records by any text content
- **Sortable**: Click headers to sort ascending/descending
- **Paginated**: Choose display entries (5, 10, 25, 50 per page)
- **Columns**:
  - Date & Time (timestamp)
  - Text Preview (first 50 characters)
  - Character Count (total characters)
  - Word Count (total words)
  - Duration (session length in seconds)
  - Speed (characters per minute)
  - Actions (view/delete buttons)

## 🌐 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ | Full support |
| Firefox | ✅ | Full support |
| Safari | ✅ | Full support |
| Edge | ✅ | Full support |
| Opera | ✅ | Full support |
| IE 11 | ⚠️ | Limited support (ES6 issues) |

## 🎨 Color Scheme

The application uses a professional, accessible color palette:

| Element | Color | Hex Code | Usage |
|---------|-------|----------|-------|
| Primary | Teal | #234756 | Text, button backgrounds, borders |
| Secondary | Orange | #C66F3D | Accents, highlights, special buttons |
| Background | White | #fff | Main background |
| Secondary BG | Light Gray | #EAEAEA | Card backgrounds, sections |
| Text Dark | Dark Gray | #234756 | Primary text color |
| Text Light | Medium Gray | #666 | Secondary text color |

### Accessibility
- High contrast ratios for readability
- Color-blind friendly palette
- Sufficient contrast for WCAG AA compliance

## ⌨️ Keyboard Layout

### Organized by Amharic Fidel System

The keyboard is arranged in 15 rows containing the Amharic character set:

**Row 1-7**: First set of Fidel characters
```
ሀ ሁ ሂ ሃ ሄ ህ ሆ
ለ ሉ ሊ ላ ሌ ል ሎ
መ ሙ ሚ ማ ሜ ም ሞ
... and so on
```

**Control Keys**:
- Space: Add space between words
- Backspace: Delete last character
- Enter: Create new line

Each character is clickable and updates the text area in real-time.

## 📚 API Reference

### JavaScript Functions

#### Core Functions
```javascript
// Initialize keyboard on page load
initializeKeyboard()

// Add character to textarea
addCharacter(char)

// Delete last character
deleteLastCharacter()

// Update character and word count
updateCharacterCount()

// Update typing statistics
updateStatistics()
```

#### History Management
```javascript
// Add current text to history
addToHistory(text)

// Load history from localStorage
loadHistory()

// Update history table with current data
updateHistoryTable()

// View specific history record
viewRecord(index)

// Delete specific history record
deleteRecord(index)

// Clear all history
clearAllHistory()

// Export history as CSV
exportHistoryAsCSV()
```

#### Chart Functions
```javascript
// Initialize Chart.js charts
initializeCharts()

// Update charts based on current typing
updateCharts()

// Load statistics from history
loadStats()
```

#### Event Handlers
```javascript
// Clear all text
clearText()

// Copy text to clipboard
copyToClipboard()

// Download text as file
downloadText()

// Setup all event listeners
setupEventListeners()
```

### LocalStorage Keys

- `typingHistory`: JSON array of typing session records

### Record Structure
```javascript
{
  timestamp: Date,           // When the session occurred
  text: String,              // Full text typed
  characters: Number,        // Total character count
  words: Number,             // Total word count
  duration: Number,          // Duration in seconds
  speed: Number              // Characters per minute
}
```

## 💡 Tips & Tricks

### Productivity Tips
1. **Keyboard Familiarity**: Take time to learn character positions for faster typing
2. **Copy & Paste**: Use clipboard feature for quick text management
3. **Check Speed**: Monitor typing speed improvement over time
4. **Export Data**: Regularly export history for backup

### Performance Tips
1. **Clear Old History**: Remove very old records to keep app responsive
2. **Browser Cache**: Clear cache if experiencing slow performance
3. **Close Tabs**: Close unnecessary browser tabs for better performance

### Best Practices
1. **Backup History**: Export CSV regularly as backup
2. **Session Management**: Clear text between different typing tasks
3. **Monitor Stats**: Use statistics to track improvement
4. **Review Progress**: Check charts to visualize typing patterns

## 🔧 Troubleshooting

### Issue: Text doesn't appear when clicking keys
**Solution**: 
- Ensure JavaScript is enabled in your browser
- Check browser console for errors (F12)
- Try refreshing the page
- Clear browser cache and reload

### Issue: History not saving
**Solution**:
- Check if LocalStorage is enabled (Settings > Privacy)
- Ensure you're not in private/incognito mode
- Clear browser cache and try again

### Issue: Charts not displaying
**Solution**:
- Verify Chart.js CDN is accessible
- Check internet connection
- Ensure JavaScript is enabled
- Try a different browser

### Issue: Mobile keyboard not responsive
**Solution**:
- Ensure viewport meta tag is correct (it is)
- Try zooming out for better view
- Use landscape orientation for larger keys
- Update browser to latest version

### Issue: Copy to clipboard not working
**Solution**:
- Ensure HTTPS is used (some browsers require it)
- Check browser permissions for clipboard access
- Try using the download feature instead

## 🚀 Future Enhancements

Planned features for upcoming versions:

### Version 2.0
- [ ] Keyboard layout switching (QWERTY, Dvorak, etc.)
- [ ] User accounts and cloud sync
- [ ] Advanced analytics dashboard
- [ ] Dark mode toggle
- [ ] Audio feedback for key presses

### Version 3.0
- [ ] Physical keyboard integration
- [ ] Voice-to-text input
- [ ] Spellcheck and autocorrect
- [ ] Multi-language support
- [ ] Collaborative typing sessions

### Community Requests
- Customizable keyboard layouts
- Theme customization
- Typing games/exercises
- Performance metrics

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Reporting Issues
1. Open GitHub Issues tab
2. Provide detailed description
3. Include browser information
4. Attach screenshots if applicable

### Submitting Changes
1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Code Guidelines
- Use vanilla JavaScript (no frameworks required)
- Follow existing code style
- Add comments for complex logic
- Test across browsers
- Update documentation

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 📞 Support & Contact

- **Issues**: Open an issue on GitHub
- **Documentation**: See detailed comments in source files
- **Questions**: Check FAQ or troubleshooting section

## 🙏 Acknowledgments

- Amharic character set (Fidel)
- Bootstrap 5.3 framework
- Chart.js for visualization
- DataTables for table management
- SweetAlert2 for notifications
- Font Awesome for icons

## 📊 Project Statistics

- **Lines of Code**: 2,100+
- **Characters Supported**: 200+
- **Keyboard Mappings**: 265+
- **Responsive Breakpoints**: 3 (desktop, tablet, mobile)
- **External Libraries**: 6 (Bootstrap, Chart.js, DataTables, SweetAlert2, Font Awesome, jQuery)
- **Features**: 20+
- **Documentation Pages**: 4 (mapping-guide.html, ReadMe.MD, KEYBOARD_MAPPING.md, QUICK_REFERENCE.md)
- **Total Project Size**: ~150 KB

## 🔐 Privacy & Security

- **Data Storage**: All data stored locally in browser (LocalStorage)
- **No Server Communication**: No data sent to external servers
- **No Cookies**: No tracking or analytics cookies
- **Privacy First**: Your typing history is completely private

## 📚 Additional Resources

### User Guides
- **[mapping-guide.html](mapping-guide.html)** - Interactive reference with complete keyboard mapping examples
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Quick start cheat sheet with common patterns

### Technical Documentation
- **[KEYBOARD_MAPPING.md](KEYBOARD_MAPPING.md)** - Implementation details and technical overview
- **[FEATURE_COMPLETE.md](FEATURE_COMPLETE.md)** - Feature list and usage examples
- **[IMPLEMENTATION_SUMMARY.txt](IMPLEMENTATION_SUMMARY.txt)** - Visual summary and statistics

---

**Last Updated**: February 6, 2026  
**Version**: 1.1.0 (Added Keyboard Mapping Feature)  
**Author**: Biniam Alemayehu

For more information or to report issues, please check the documentation files included or visit the project repository.
