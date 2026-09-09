# Multi-Timezone Digital Clock

A responsive web application that displays the current time across 12 major time zones worldwide, with automatic updates every second.

## Features

✅ **Real-time Updates** - Displays current time that updates every second  
✅ **12 Global Time Zones** - New York, London, Paris, Tokyo, Sydney, Dubai, São Paulo, Mumbai, Singapore, Hong Kong, Los Angeles, and Bangkok  
✅ **UTC Offset Display** - Shows the offset from UTC for each timezone  
✅ **Date Information** - Displays the current date for each timezone  
✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices  
✅ **Modern UI** - Clean, card-based interface with smooth animations  
✅ **Accurate Timezone Conversion** - Uses JavaScript's Intl API for precise timezone handling  

## How It Works

The application uses the `Intl.DateTimeFormat` API to accurately convert the current time to different timezones without relying on external libraries. Each timezone card updates in real-time, showing:

- Timezone name
- UTC offset (e.g., UTC +05:30)
- Digital time in HH:MM:SS format
- Current date in YYYY-MM-DD format

## File Structure

```
├── index.html      # Main HTML structure
├── styles.css      # Responsive styling and animations
├── script.js       # Clock logic and timezone handling
└── README.md       # Documentation
```

## Quick Start

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. The clocks will start automatically and update every second

## Customizing Time Zones

To modify the displayed timezones, edit the `timeZones` array in `script.js`:

```javascript
const timeZones = [
    { name: 'Your City', tz: 'Continent/City' },
    // Add more timezones using IANA timezone identifiers
];
```

Valid IANA timezone identifiers can be found here: [IANA Time Zone Database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support (iOS 11+)
- Internet Explorer: ❌ Not supported

## Performance

- Lightweight: No external dependencies
- Efficient: Uses native browser APIs
- Responsive: Optimized grid layout with CSS media queries

## License

This project is open source and available under the MIT License.
