import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    document.execCommand('copy');
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Password Generator</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <input
          type="text"
          value={password}
          className="w-full bg-gray-700 px-4 py-2 mb-4 rounded-lg border border-gray-600 text-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Generated Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        >
          Copy Password
        </button>
      </div>
      <div className="flex items-center mt-8">
        <input
          type="range"
          min={6}
          max={20}
          value={length}
          className="flex-grow h-5 bg-gray-700 rounded-md overflow-hidden appearance-none"
          onChange={(e) => setLength(e.target.value)}
        />
        <span className="mx-4 text-gray-400">Length: {length}</span>
      </div>
      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          checked={numberAllowed}
          id="numberInput"
          onChange={() => setNumberAllowed((prev) => !prev)}
          className="mr-2 cursor-pointer"
        />
        <label htmlFor="numberInput" className="text-gray-400 cursor-pointer">
          Include Numbers
        </label>
      </div>
      <div className="flex items-center mt-2">
        <input
          type="checkbox"
          checked={charAllowed}
          id="characterInput"
          onChange={() => setCharAllowed((prev) => !prev)}
          className="mr-2 cursor-pointer"
        />
        <label htmlFor="characterInput" className="text-gray-400 cursor-pointer">
          Include Special Characters
        </label>
      </div>
    </div>
  );
}

export default App;
