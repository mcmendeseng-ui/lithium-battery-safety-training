// Define time zones to display
const timeZones = [
    { name: 'New York', tz: 'America/New_York' },
    { name: 'London', tz: 'Europe/London' },
    { name: 'Paris', tz: 'Europe/Paris' },
    { name: 'Tokyo', tz: 'Asia/Tokyo' },
    { name: 'Sydney', tz: 'Australia/Sydney' },
    { name: 'Dubai', tz: 'Asia/Dubai' },
    { name: 'São Paulo', tz: 'America/Sao_Paulo' },
    { name: 'Mumbai', tz: 'Asia/Kolkata' },
    { name: 'Singapore', tz: 'Asia/Singapore' },
    { name: 'Hong Kong', tz: 'Asia/Hong_Kong' },
    { name: 'Los Angeles', tz: 'America/Los_Angeles' },
    { name: 'Bangkok', tz: 'Asia/Bangkok' }
];

/**
 * Format time with leading zeros
 */
function padZero(num) {
    return num.toString().padStart(2, '0');
}

/**
 * Get current time for a specific timezone
 */
function getTimeInTimezone(timezone) {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    const parts = formatter.formatToParts(now);
    const time = {};
    
    parts.forEach(part => {
        time[part.type] = part.value;
    });

    return {
        time: `${time.hour}:${time.minute}:${time.second}`,
        date: `${time.year}-${time.month}-${time.day}`
    };
}

/**
 * Get UTC offset for a timezone
 */
function getUTCOffset(timezone) {
    const now = new Date();
    const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
    const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    
    const offset = (tzDate - utcDate) / (1000 * 60); // offset in minutes
    const hours = Math.floor(Math.abs(offset) / 60);
    const minutes = Math.abs(offset) % 60;
    const sign = offset >= 0 ? '+' : '-';
    
    return `UTC ${sign}${padZero(hours)}:${padZero(minutes)}`;
}

/**
 * Create clock card HTML
 */
function createClockCard(tzData) {
    const { time, date } = getTimeInTimezone(tzData.tz);
    const offset = getUTCOffset(tzData.tz);
    
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.innerHTML = `
        <div class="timezone-name">${tzData.name}</div>
        <div class="timezone-offset">${offset}</div>
        <div class="digital-time">${time}</div>
        <div class="date-display">${date}</div>
    `;
    
    return card;
}

/**
 * Update all clocks
 */
function updateClocks() {
    const grid = document.querySelector('.clocks-grid');
    grid.innerHTML = '';
    
    timeZones.forEach(tzData => {
        const card = createClockCard(tzData);
        grid.appendChild(card);
    });
}

/**
 * Initialize and start the clock updates
 */
function initClock() {
    updateClocks();
    
    // Update every second
    setInterval(updateClocks, 1000);
}

// Start the clock when DOM is ready
document.addEventListener('DOMContentLoaded', initClock);
