# Review of javascript and Typescript for React

## 🧩 Variables: const, let y var

- const: valor constante, no se reasigna. Úsalo por defecto.
- let: valor que puede cambiar.
- var: evítalo, tiene alcance de función y causa bugs.

```javascript
const name = "Gus";
let count = 0;
count++;
```

## 🧾 Template Strings

Permiten interpolar variables fácilmente.

```javascript
const user = "Gus";
console.log(`Hello, ${user}!`);
```

## 🧱 Interfaces en TypeScript

Definen la forma de un objeto, útil para tipar props, datos o respuestas de API.

```typescript
interface User {
  id: number;
  name: string;
  email?: string; // opcional
}

const user: User = { id: 1, name: "Gus" };
```

## 🧮 Arreglos y recorridos

Usa los métodos modernos (map, filter, reduce, find, etc).

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n \* 2);
```

## ⚙️ Funciones simples y complejas

```javascript
function greet(name: string): string {
  return `Hello, ${name}`;
}

// Arrow function
const sum = (a: number, b: number) => a + b;
```

## 🎁 Retornar múltiples valores

Usa objetos o arrays para retornos múltiples.

```javascript
function getUserData() {
  return { name: "Gus", age: 30 };
}

const { name, age } = getUserData();
```

## 🧩 Desestructuración

Extrae valores fácilmente de objetos o arrays.

```javascript
const [a, b] = [1, 2];
const { title } = { title: "Dev", year: 2025 };
```

## ⚖️ Enums en TypeScript

Para valores constantes y legibles.

```ts
enum Role {
  Admin = "ADMIN",
  User = "USER",
}

const currentRole = Role.Admin;
```

## 📦 Importar y Exportar Módulos

Usa ESModules (import / export).

```ts
// math.ts
export const sum = (a, b) => a + b;

// main.ts
import { sum } from "./math";
```

## 🌐 Promesas y Fetch API

Promesas manejan operaciones asincrónicas.

```ts
fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

## 🌐 Async/Await

Sintaxis moderna para promesas más limpias.

```typescript
async function loadData() {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

## 🧠 Buenas Prácticas

- Usa const por defecto.
- Nombra variables y funciones con claridad.
- Divide el código en módulos pequeños.
- Evita mutar datos directamente.
- Maneja errores con try/catch.
- Prettier + ESLint para mantener estilo y calidad.
