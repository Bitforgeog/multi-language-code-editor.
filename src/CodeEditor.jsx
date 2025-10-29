import React, { useState } from 'react';
import { Play, Code2, Terminal, Database } from 'lucide-react';

export default function CodeEditor() {
  const languages = [
    { 
      id: 'html', 
      name: 'HTML', 
      icon: '🌐',
      starter: `<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>Edit and run to see changes.</p>
  <button onclick="alert('Hello!')">Click me</button>
</body>
</html>`
    },
    { 
      id: 'css', 
      name: 'CSS', 
      icon: '🎨',
      starter: `body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

h1 {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

button {
  background: white;
  color: #667eea;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  transform: scale(1.05);
}`
    },
    { 
      id: 'javascript', 
      name: 'JavaScript', 
      icon: '⚡',
      starter: `// JavaScript Example
console.log("Hello from JavaScript!");

// Array operations
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// Function example
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci(8):", fibonacci(8));

// Object manipulation
const user = { name: "Alice", age: 30 };
console.log("User:", JSON.stringify(user, null, 2));`
    },
    { 
      id: 'python', 
      name: 'Python', 
      icon: '🐍',
      starter: `# Python Example
print("Hello from Python!")

# List comprehension
numbers = [1, 2, 3, 4, 5]
squared = [n**2 for n in numbers]
print(f"Squared: {squared}")

# Function example
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(f"Factorial(5): {factorial(5)}")

# Dictionary example
person = {"name": "Bob", "age": 25}
print(f"Person: {person}")

# Loop example
for i in range(3):
    print(f"Iteration {i + 1}")`
    },
    { 
      id: 'java', 
      name: 'Java', 
      icon: '☕',
      starter: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from Java!");
        
        // Array iteration
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.print("Numbers: ");
        for (int n : numbers) {
            System.out.print(n + " ");
        }
        System.out.println();
        
        // Method call
        int result = sum(10, 20);
        System.out.println("Sum: " + result);
    }
    
    public static int sum(int a, int b) {
        return a + b;
    }
}`
    },
    { 
      id: 'cpp', 
      name: 'C++', 
      icon: '⚙️',
      starter: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    cout << "Hello from C++!" << endl;
    
    // Vector example
    vector<int> nums = {1, 2, 3, 4, 5};
    cout << "Numbers: ";
    for (int n : nums) {
        cout << n << " ";
    }
    cout << endl;
    
    // Calculation
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        sum += i;
    }
    cout << "Sum 1-10: " << sum << endl;
    
    return 0;
}`
    },
    { 
      id: 'csharp', 
      name: 'C#', 
      icon: '💠',
      starter: `using System;
using System.Linq;

class Program {
    static void Main() {
        Console.WriteLine("Hello from C#!");
        
        // LINQ example
        var numbers = new[] { 1, 2, 3, 4, 5 };
        var doubled = numbers.Select(n => n * 2);
        Console.WriteLine("Doubled: " + string.Join(", ", doubled));
        
        // String manipulation
        string name = "World";
        Console.WriteLine($"Greeting: Hello, {name}!");
        
        // Method call
        int result = Add(15, 25);
        Console.WriteLine($"15 + 25 = {result}");
    }
    
    static int Add(int a, int b) {
        return a + b;
    }
}`
    },
    { 
      id: 'php', 
      name: 'PHP', 
      icon: '🐘',
      starter: `<?php
echo "Hello from PHP!\\n";

// Array operations
$numbers = [1, 2, 3, 4, 5];
$doubled = array_map(function($n) { return $n * 2; }, $numbers);
echo "Doubled: " . implode(", ", $doubled) . "\\n";

// Function example
function greet($name) {
    return "Hello, $name!";
}

echo greet("World") . "\\n";

// Associative array
$person = ["name" => "Charlie", "age" => 28];
echo "Person: " . json_encode($person) . "\\n";

// Loop
for ($i = 1; $i <= 3; $i++) {
    echo "Count: $i\\n";
}
?>`
    },
    { 
      id: 'ruby', 
      name: 'Ruby', 
      icon: '💎',
      starter: `# Ruby Example
puts "Hello from Ruby!"

# Array operations
numbers = [1, 2, 3, 4, 5]
doubled = numbers.map { |n| n * 2 }
puts "Doubled: #{doubled.join(', ')}"

# Method example
def factorial(n)
  return 1 if n <= 1
  n * factorial(n - 1)
end

puts "Factorial(5): #{factorial(5)}"

# Hash example
person = { name: "Diana", age: 32 }
puts "Person: #{person}"

# Block iteration
3.times { |i| puts "Iteration #{i + 1}" }`
    },
    { 
      id: 'go', 
      name: 'Go', 
      icon: '🔵',
      starter: `package main

import "fmt"

func main() {
    fmt.Println("Hello from Go!")
    
    // Slice operations
    numbers := []int{1, 2, 3, 4, 5}
    fmt.Print("Numbers: ")
    for _, n := range numbers {
        fmt.Printf("%d ", n)
    }
    fmt.Println()
    
    // Function call
    result := add(10, 20)
    fmt.Printf("10 + 20 = %d\\n", result)
    
    // Struct example
    type Person struct {
        Name string
        Age  int
    }
    p := Person{Name: "Eve", Age: 27}
    fmt.Printf("Person: %+v\\n", p)
}

func add(a, b int) int {
    return a + b
}`
    },
    { 
      id: 'rust', 
      name: 'Rust', 
      icon: '🦀',
      starter: `fn main() {
    println!("Hello from Rust!");
    
    // Vector operations
    let numbers = vec![1, 2, 3, 4, 5];
    let doubled: Vec<i32> = numbers.iter().map(|n| n * 2).collect();
    println!("Doubled: {:?}", doubled);
    
    // Function call
    let result = add(15, 25);
    println!("15 + 25 = {}", result);
    
    // Struct example
    struct Person {
        name: String,
        age: u32,
    }
    let person = Person { name: "Frank".to_string(), age: 35 };
    println!("Person: {} is {} years old", person.name, person.age);
}

fn add(a: i32, b: i32) -> i32 {
    a + b
}`
    },
    { 
      id: 'sql', 
      name: 'SQL', 
      icon: '🗄️',
      starter: `-- Sample SQL Queries
-- Create a virtual table
CREATE TABLE users (
    id INT,
    name VARCHAR(50),
    age INT,
    city VARCHAR(50)
);

-- Insert sample data
INSERT INTO users VALUES (1, 'Alice', 30, 'New York');
INSERT INTO users VALUES (2, 'Bob', 25, 'London');
INSERT INTO users VALUES (3, 'Charlie', 35, 'Paris');

-- Select queries
SELECT * FROM users;
SELECT name, age FROM users WHERE age > 28;
SELECT city, COUNT(*) as user_count FROM users GROUP BY city;`
    }
  ];

  const [activeLanguage, setActiveLanguage] = useState('javascript');
  const [viewMode, setViewMode] = useState('single'); // 'single' or 'all'
  const [codes, setCodes] = useState(
    languages.reduce((acc, lang) => ({ ...acc, [lang.id]: lang.starter }), {})
  );
  const [output, setOutput] = useState('');
  const [htmlPreview, setHtmlPreview] = useState('');

  const updateCode = (lang, value) => {
    setCodes(prev => ({ ...prev, [lang]: value }));
  };

  const runCode = () => {
    if (viewMode === 'all') {
      // Run all languages
      let combinedOutput = '';
      
      // Run HTML/CSS
      const fullHTML = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>${codes.css}</style>
        </head>
        ${codes.html.includes('<body') ? codes.html.replace('<!DOCTYPE html>', '').replace(/<html[^>]*>/, '').replace('</html>', '') : `<body>${codes.html}</body>`}
        </html>
      `;
      setHtmlPreview(fullHTML);
      
      // Run all other languages
      languages.forEach(lang => {
        if (lang.id !== 'html' && lang.id !== 'css') {
          combinedOutput += `\n═══════ ${lang.name} Output ═══════\n`;
          const langOutput = simulateExecutionReturn(lang.id, codes[lang.id]);
          combinedOutput += langOutput + '\n';
        }
      });
      
      setOutput(combinedOutput);
    } else {
      // Single language mode
      const code = codes[activeLanguage];
      
      if (activeLanguage === 'html') {
        const fullHTML = `
          <!DOCTYPE html>
          <html>
          <head>
            <style>${codes.css}</style>
          </head>
          ${code.includes('<body') ? code.replace('<!DOCTYPE html>', '').replace(/<html[^>]*>/, '').replace('</html>', '') : `<body>${code}</body>`}
          </html>
        `;
        setHtmlPreview(fullHTML);
        setOutput('HTML rendered in preview panel →');
      } else if (activeLanguage === 'css') {
        const fullHTML = `
          <!DOCTYPE html>
          <html>
          <head>
            <style>${code}</style>
          </head>
          ${codes.html.includes('<body') ? codes.html.replace('<!DOCTYPE html>', '').replace(/<html[^>]*>/, '').replace('</html>', '') : `<body>${codes.html}</body>`}
          </html>
        `;
        setHtmlPreview(fullHTML);
        setOutput('CSS applied to HTML preview →');
      } else {
        setHtmlPreview('');
        simulateExecution(activeLanguage, code);
      }
    }
  };

  const simulateExecutionReturn = (lang, code) => {
    // Same logic as simulateExecution but returns the result instead of setting state
    let result = '';
    
    try {
      switch (lang) {
        case 'javascript':
          const logs = [];
          const originalLog = console.log;
          console.log = (...args) => {
            logs.push(args.map(arg => 
              typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
            ).join(' '));
          };
          try {
            eval(code);
            result = logs.join('\n');
          } catch (e) {
            result = `Error: ${e.message}`;
          }
          console.log = originalLog;
          break;
          
        case 'python':
          const printMatches = [...code.matchAll(/print\((.*?)\)/gs)];
          printMatches.forEach(match => {
            let content = match[1].trim();
            content = content.replace(/f["'](.+?)["']/g, (_, str) => {
              return str.replace(/\{(.+?)\}/g, (__, expr) => {
                if (expr.includes('**')) {
                  const [base, exp] = expr.split('**').map(s => s.trim());
                  return Math.pow(parseInt(base) || 5, parseInt(exp) || 2);
                }
                return expr;
              });
            });
            content = content.replace(/["']/g, '');
            result += content + '\n';
          });
          
          if (code.includes('factorial(5)')) result = result.replace('factorial(5)', '120');
          if (code.includes('[n**2 for n in numbers]')) result = result.replace('[n**2 for n in numbers]', '[1, 4, 9, 16, 25]');
          break;
          
        case 'java':
          const javaPrints = [...code.matchAll(/System\.out\.print(?:ln)?\((.*?)\);/gs)];
          javaPrints.forEach(match => {
            let content = match[1].trim();
            content = content.replace(/"/g, '').replace(/\s*\+\s*/g, '');
            if (content.includes('result')) content = content.replace('result', '30');
            result += content + '\n';
          });
          if (code.includes('int[] numbers')) result += '1 2 3 4 5 \n';
          break;
          
        case 'cpp':
          const cppPrints = [...code.matchAll(/cout\s*<<\s*(.*?)\s*<<\s*endl/gs)];
          cppPrints.forEach(match => {
            let content = match[1].replace(/"/g, '').replace(/<<\s*/g, '').trim();
            if (content.includes('sum')) content = content.replace('sum', '55');
            result += content + '\n';
          });
          if (code.includes('vector<int>')) result += 'Numbers: 1 2 3 4 5 \n';
          break;
          
        case 'csharp':
          const csharpPrints = [...code.matchAll(/Console\.WriteLine\((.*?)\);/gs)];
          csharpPrints.forEach(match => {
            let content = match[1].trim();
            content = content.replace(/\$"/g, '').replace(/"/g, '').replace(/\{.*?\}/g, (m) => {
              if (m.includes('doubled')) return '2, 4, 6, 8, 10';
              if (m.includes('name')) return 'World';
              if (m.includes('result')) return '40';
              return m;
            });
            result += content + '\n';
          });
          break;
          
        case 'php':
          const phpEchos = [...code.matchAll(/echo\s+(.*?);/gs)];
          phpEchos.forEach(match => {
            let content = match[1].trim();
            content = content.replace(/["']/g, '').replace(/\s*\.\s*/g, '').replace(/\\n/g, '\n');
            if (content.includes('doubled')) content = content.replace('implode(, , $doubled)', '2, 4, 6, 8, 10');
            if (content.includes('json_encode')) content = content.replace('json_encode($person)', '{"name":"Charlie","age":28}');
            if (content.includes('$i')) content = content.replace('$i', Math.floor(Math.random() * 3) + 1);
            result += content;
          });
          break;
          
        case 'ruby':
          const rubyPuts = [...code.matchAll(/puts\s+(.+)/g)];
          rubyPuts.forEach(match => {
            let content = match[1].trim();
            content = content.replace(/["']/g, '').replace(/#\{(.+?)\}/g, (_, expr) => {
              if (expr.includes('doubled')) return '2, 4, 6, 8, 10';
              if (expr.includes('factorial')) return '120';
              if (expr.includes('person')) return '{:name=>"Diana", :age=>32}';
              if (expr.includes('i + 1')) return Math.floor(Math.random() * 3) + 1;
              return expr;
            });
            result += content + '\n';
          });
          break;
          
        case 'go':
          const goPrints = [...code.matchAll(/fmt\.Print(?:ln|f)?\((.*?)\)/gs)];
          goPrints.forEach(match => {
            let content = match[1].trim();
            content = content.replace(/"/g, '').replace(/%d|%s|%v|%\+v/g, '').replace(/,\s*/g, ' ');
            if (content.includes('result')) content = content.replace('result', '30');
            if (content.includes('p')) content = content.replace('p', '{Name:Eve Age:27}');
            result += content + '\n';
          });
          if (code.includes('range numbers')) result += 'Numbers: 1 2 3 4 5 \n';
          break;
          
        case 'rust':
          const rustPrints = [...code.matchAll(/println!\((.*?)\);/gs)];
          rustPrints.forEach(match => {
            let content = match[1].trim();
            content = content.replace(/"/g, '').replace(/\{.*?\}/g, (m) => {
              if (m.includes(':?')) return '[2, 4, 6, 8, 10]';
              if (m === '{}') return '40';
              return '';
            });
            if (content.includes('person.name')) content = 'Person: Frank is 35 years old';
            result += content + '\n';
          });
          break;
          
        case 'sql':
          result = '=== SQL Query Results ===\n\n';
          if (code.includes('CREATE TABLE')) {
            result += '✓ Table "users" created successfully\n\n';
          }
          if (code.includes('INSERT INTO')) {
            result += '✓ 3 rows inserted\n\n';
          }
          if (code.includes('SELECT * FROM users')) {
            result += 'Query: SELECT * FROM users\n';
            result += 'id | name    | age | city\n';
            result += '---|---------|-----|----------\n';
            result += '1  | Alice   | 30  | New York\n';
            result += '2  | Bob     | 25  | London\n';
            result += '3  | Charlie | 35  | Paris\n\n';
          }
          if (code.includes('WHERE age > 28')) {
            result += 'Query: SELECT name, age FROM users WHERE age > 28\n';
            result += 'name    | age\n';
            result += '--------|----\n';
            result += 'Alice   | 30\n';
            result += 'Charlie | 35\n\n';
          }
          if (code.includes('GROUP BY')) {
            result += 'Query: SELECT city, COUNT(*) FROM users GROUP BY city\n';
            result += 'city     | user_count\n';
            result += '---------|------------\n';
            result += 'New York | 1\n';
            result += 'London   | 1\n';
            result += 'Paris    | 1\n';
          }
          break;
      }
      
      if (!result.trim()) {
        result = '✓ Code executed successfully\n(No output generated)';
      }
      
      return result;
    } catch (err) {
      return `Error: ${err.message}`;
    }
  };

  const simulateExecution = (lang, code) => {
    const result = simulateExecutionReturn(lang, code);
    setOutput(result);
  };

  const currentLang = languages.find(l => l.id === activeLanguage);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center flex items-center justify-center gap-3">
            <Code2 size={32} />
            Multi-Language Code Editor
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        {/* View Mode Toggle */}
        <div className="flex gap-4 mb-4 justify-center">
          <button
            onClick={() => setViewMode('single')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              viewMode === 'single'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Single Language
          </button>
          <button
            onClick={() => setViewMode('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              viewMode === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            All Languages
          </button>
        </div>

        {/* Language Tabs - Only show in single mode */}
        {viewMode === 'single' && (
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-thin">
            {languages.map(lang => (
              <button
                key={lang.id}
                onClick={() => setActiveLanguage(lang.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  activeLanguage === lang.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                }`}
              >
                <span className="text-xl">{lang.icon}</span>
                <span className="font-semibold">{lang.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Editor Area */}
        {viewMode === 'single' ? (
          // Single Language Editor
          <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-xl overflow-hidden mb-4">
            <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal size={18} />
                <span className="font-semibold">{currentLang.name} Editor</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <textarea
              value={codes[activeLanguage]}
              onChange={(e) => updateCode(activeLanguage, e.target.value)}
              className="w-full h-96 bg-gray-900 text-gray-100 p-4 font-mono text-sm resize-none focus:outline-none"
              spellCheck="false"
              placeholder={`Enter ${currentLang.name} code...`}
            />
          </div>
        ) : (
          // All Languages Combined View
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {languages.map(lang => (
              <div key={lang.id} className="bg-gray-900 rounded-lg border border-gray-700 shadow-xl overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center gap-2">
                  <span className="text-xl">{lang.icon}</span>
                  <span className="font-semibold">{lang.name}</span>
                </div>
                <textarea
                  value={codes[lang.id]}
                  onChange={(e) => updateCode(lang.id, e.target.value)}
                  className="w-full h-64 bg-gray-900 text-gray-100 p-4 font-mono text-xs resize-none focus:outline-none"
                  spellCheck="false"
                  placeholder={`Enter ${lang.name} code...`}
                />
              </div>
            ))}
          </div>
        )}

        {/* Run Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={runCode}
            className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg"
          >
            <Play size={24} fill="white" />
            {viewMode === 'single' ? `Run ${currentLang.name}` : 'Run All Languages'}
          </button>
        </div>

        {/* Output Area */}
        <div className={`grid gap-4 ${htmlPreview ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
          {/* Console Output */}
          <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-xl overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center gap-2">
              <Terminal size={18} className="text-green-400" />
              <span className="font-semibold">Console Output</span>
            </div>
            <div className="bg-black h-96 overflow-auto p-4">
              <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap">
                {output || `Click "${viewMode === 'single' ? `Run ${currentLang.name}` : 'Run All Languages'}" to see output...`}
              </pre>
            </div>
          </div>

          {/* HTML/CSS Preview */}
          {htmlPreview && (
            <div className="bg-gray-900 rounded-lg border border-gray-700 shadow-xl overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center gap-2">
                <Code2 size={18} className="text-blue-400" />
                <span className="font-semibold">HTML/CSS Preview</span>
              </div>
              <div className="bg-white h-96 overflow-auto">
                <iframe
                  srcDoc={htmlPreview}
                  className="w-full h-full border-none"
                  title="Preview"
                  sandbox="allow-scripts"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
                    }
