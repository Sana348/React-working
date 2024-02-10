import { useState, useCallback,  } from "react";
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(""); 

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~``?";
  
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Password Generator</h1>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Password Length:</label>
          <input
            type="number"
            min="1"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2"> Numbers:</label>
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(!numberAllowed)}
            className="mr-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2"> Special Characters:</label>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed(!charAllowed)}
            className="mr-2"
          />
        </div>
        <button
          onClick={passwordGenerator}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        >
          Generate Password
        </button>
        {password && (
          <div className="mt-4">
            <label className="block text-sm font-semibold mb-2">Generated Password:</label>
            <input
              type="text"
              value={password}
              readOnly
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-gray-100 focus:outline-none"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
