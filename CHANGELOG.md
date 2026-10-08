# Changelog

## NEW FEATURES

#### Auto-Location Detection Features

- **Geolocation-Based Weather Fetching**: The app now automatically fetches weather data using the device's geolocation
  on page load, eliminating the need for manual city entry on initial load
    - Detects user's current coordinates and retrieves the nearest location
    - Automatically fetches weather data for the detected location
    - Provides instant weather information without user input

- **IP Address-Based Weather Fallback**: When geolocation is unavailable, the app falls back to IP address tracking to
  fetch weather data
    - Serves as a secondary method for automatic location detection
    - Ensures weather data is displayed as quickly as possible
    - Only activates when geolocation is not accessible

#### Improved User Experience

- **Seamless Auto-Loading**: Weather data now loads immediately upon page visit without requiring manual location entry
- **Smart Fallback Chain**: Implements a priority system to provide data as fast as possible:
    1. Geolocation (primary method)
    2. IP Address tracking (fallback)
    3. Manual location entry (final option)

### Limitations

- **In-App Browser Restrictions**: When accessing the app through an in-app browser (embedded browsers in social media
  apps, email clients, etc.), both geolocation and IP address tracking are disabled for security and privacy reasons.
  Users will need to enter their location manually in these contexts.
- **Manual Entry Required**: If both geolocation and IP address detection are unavailable or disabled, users must
  manually enter their location to fetch weather data.

### Technical Details

The auto-location feature prioritizes user privacy and security while ensuring the fastest possible weather data
retrieval:

- Geolocation requests require explicit user permission
- IP-based detection is used only when geolocation is unavailable
- In-app browser detection prevents tracking in restricted environments
