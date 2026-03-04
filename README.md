# 🌍 Currency Converter

A simple and responsive **Currency Converter Web App** built using **HTML, CSS, and JavaScript**.  
It fetches real-time exchange rates from the **Fawaz Ahmed Currency API** and updates the UI instantly.

---

## 📸 Preview

> A clean, minimal UI with flag icons, dropdown selectors, and live exchange rate results.

---

## 🚀 Features

- 🔄 **Real-time exchange rates** fetched from a live public API
- 🏳️ **Country flag icons** that update dynamically based on selected currency
- 💱 **150+ currencies** supported via dropdown menus
- 📱 **Responsive design** that works on desktop and mobile
- ⚡ **Instant conversion** on button click or currency change

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML5 | Structure and markup |
| CSS3 | Styling and layout (Flexbox) |
| JavaScript (ES6+) | Logic, DOM manipulation, API calls |
| [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/exchange-api) | Live exchange rate data |
| [FlagsAPI](https://flagsapi.com/) | Country flag images |
| [Font Awesome](https://fontawesome.com/) | Icons |

---

## 📁 Project Structure

```
currency-converter/
│
├── index.html       # Main HTML structure
├── style.css        # Styling and layout
├── app.js           # Core logic - API calls, DOM updates, event handling
└── codes.js         # Currency-to-country code mapping object
```

---

## ⚙️ How It Works

1. **On page load**, the app populates both dropdowns with all available currency codes from `codes.js` and sets defaults to **USD → INR**
2. **Flag icons** are rendered using the country code mapped from the selected currency
3. When the user clicks **Convert** (or changes a dropdown), `updateExchangeRate()` is called:
   - Reads the amount and selected currencies
   - Fetches the latest rates from the API: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{from}.json`
   - Calculates and displays the converted amount

---

## 🧠 JavaScript Concepts Used

This project was built as a hands-on exercise to practice core JS fundamentals:

- **Async / Await & Fetch API** - making asynchronous HTTP requests and handling JSON responses
- **DOM Manipulation** - dynamically creating `<option>` elements, querying and updating the DOM
- **Event Listeners** - responding to `change`, `click`, and `load` events
- **Arrow Functions** - used for `updateFlag` and `updateExchangeRate`
- **Template Literals** - dynamically building API URLs and result messages
- **for...of loop** - iterating over the dropdowns NodeList
- **for...in loop** - iterating over the `countryList` object keys
- **Conditional logic** - setting default selected options based on currency code

---

## 🔌 API Reference

**Base URL:**
```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies
```

**Endpoint used:**
```
GET /{fromCurrency}.json
```

**Example:**
```
GET /usd.json
→ Returns all exchange rates relative to USD
```

The API is free, open-source, and requires no authentication.  
Source: [fawazahmed0/exchange-api](https://github.com/fawazahmed0/exchange-api)

---

## 🏃 Getting Started

No installation or build tools needed - just open it in a browser.

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/currency-converter.git
   ```

2. **Navigate into the folder**
   ```bash
   cd currency-converter
   ```

3. **Open `index.html` in your browser**
   ```bash
   open index.html
   # or just double-click the file
   ```

> ⚠️ The app fetches from a live API, so an internet connection is required.

---

## 🔮 Possible Future Improvements

- [ ] Add `try/catch` error handling for failed API requests
- [ ] Make the swap icon (⇄) clickable to swap currencies instantly
- [ ] Auto-convert as the user types (with debouncing)
- [ ] Show a loading spinner while fetching
- [ ] Save last used currencies with `localStorage`
- [ ] Refactor into ES6 modules using `import/export`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋♂️ Author

Tanmay Kadam

Software Developer | JavaScript Enthusiast

