


# 💱 Currency Converter App



A responsive currency converter application built with React that allows users to convert between different currencies using real-time exchange rates.

## ✨ Features

- 💵 Real-time currency conversion using live exchange rates
- 🔄 Swap currencies with one click
- 📊 Supports multiple currencies from around the world
- 🎨 Clean, intuitive user interface with background image
- ⚡ Optimized performance with custom hooks and components

## 🚀 Technologies Used

- React 18+
- Custom React Hooks
- Fetch API for data retrieval
- useId Hook for unique identifiers
- Tailwind CSS for styling

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shantanu-kulkarni-1229/currency-converter.git
   ```
2. Navigate to project directory:
   ```bash
   cd currency-converter
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development server:
   ```bash
   npm start
   ```
5. Open in browser:
   ```
   http://localhost:3000
   ```

## 🧠 Core Concepts Implemented

### 1. Custom Hook: `useCurrencyInfo`
**Location:** `./hooks/useCurrencyInfo.js`  
**Purpose:** Fetches and manages currency exchange rate data  
**Implementation:**
```javascript
function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.currencyapi.com/v3/latest?apikey=YOUR_API_KEY`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency])
    return data
}
```
**Key Features:**
- Fetches real-time exchange rates from currency API
- Automatically updates when base currency changes
- Returns only relevant currency data

### 2. Custom Component: `InputBox`
**Location:** `./components/InputBox.js`  
**Purpose:** Reusable input component for currency conversion  
**Implementation Highlights:**
```javascript
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {
    const amountInputId = useId()
    // ... component implementation
}
```
**Key Features:**
- Reusable for both "from" and "to" currency inputs
- Uses `useId` hook for accessible form labels
- Clean, consistent styling with Tailwind CSS
- Disabled states for readonly fields

### 3. useId Hook
**Purpose:** Generates unique IDs for accessibility  
**Usage:**
```javascript
const amountInputId = useId()
// Used with input and label:
<label htmlFor={amountInputId}>...</label>
<input id={amountInputId} ... />
```
**Benefits:**
- Ensures unique IDs in SSR applications
- Improves accessibility
- Solves hydration mismatch issues

## 🛠️ How It Works

### Conversion Flow
1. User selects source currency (`from`) and enters amount
2. User selects target currency (`to`)
3. On form submission:
   - Fetches latest exchange rates via custom hook
   - Calculates converted amount
   - Displays result in target currency field

### Key Functions
- **Swap:** Exchanges source and target currencies
- **Convert:** Calculates conversion using current rates
- **Dynamic Options:** Currency dropdowns update based on available options

## 📝 Project Structure

```bash
src/
├── App.js               # Main application component
├── components/
│   └── InputBox.js      # Reusable input component
├── hooks/
│   └── useCurrencyInfo.js # Custom currency hook
└── assets/              # Images and static files
```

## 🎓 Key Learnings

1. **Custom Hooks**
   - Creating reusable data-fetching logic
   - Separating concerns for cleaner components
   - Managing API responses and errors

2. **Component Design**
   - Building flexible, reusable components
   - Prop drilling and component composition
   - Accessible form controls

3. **React 18 Features**
   - useId for unique identifiers
   - Improved state management patterns
   - Performance optimization techniques

## 🛠️ Future Improvements

- [ ] Add currency conversion history
- [ ] Implement favorite currencies
- [ ] Add charts for rate trends
- [ ] Include currency symbols in UI
- [ ] Add offline capability with cached rates
- [ ] Implement error handling for API failures







