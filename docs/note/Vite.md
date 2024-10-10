# 关于Vite创建项目

## <font style="color:rgb(38,38,38);">安装 Vite</font>

```bash
npm install -g create-vite
```

<font style="color:rgb(38,38,38);">或者使⽤ yarn 或 pnpm ：</font>

```bash
yarn global add create-vite
# 或
pnpm add -g create-vite
```

## <font style="color:rgb(38,38,38);">创建 Vite 项⽬</font>

```bash
npm create vite@latest
```

<font style="color:rgb(38,38,38);">执⾏后，终端会提示你输⼊项⽬名称，并选择你想要使⽤的框架（如 Vue、React、Svelte、Vanilla 等）以及对应的语⾔（JavaScript 或 TypeScript）。根据提示选择后，Vite 会⾃动为你⽣成⼀个项⽬模板。</font>

```bash
yarn create vite // 要 node18 及以下，否则报错
# 或
pnpm create vite
```

## <font style="color:rgb(38,38,38);">选择模板</font>

<font style="color:rgb(38,38,38);">常⻅的模板选项包括：</font>

- `<font style="color:rgb(38,38,38);">vanilla</font>`<font style="color:rgb(38,38,38);"> ：原⽣ JavaScript 项⽬ </font>
- `<font style="color:rgb(38,38,38);">vanilla-ts</font>`<font style="color:rgb(38,38,38);"> ：原⽣ TypeScript 项⽬ </font>
- `<font style="color:rgb(38,38,38);">vue</font>`<font style="color:rgb(38,38,38);"> ：Vue 3 项⽬ </font>
- `<font style="color:rgb(38,38,38);">vue-ts</font>`<font style="color:rgb(38,38,38);"> ：Vue 3 + TypeScript 项⽬ </font>
- `<font style="color:rgb(38,38,38);">react</font>`<font style="color:rgb(38,38,38);"> ：React 项⽬ </font>
- `<font style="color:rgb(38,38,38);">react-ts</font>`<font style="color:rgb(38,38,38);"> ：React + TypeScript 项⽬ </font>
- `<font style="color:rgb(38,38,38);">preact</font>`<font style="color:rgb(38,38,38);"> ：Preact 项⽬ </font>
- `<font style="color:rgb(38,38,38);">preact-ts</font>`<font style="color:rgb(38,38,38);"> ：Preact + TypeScript 项⽬ </font>
- `<font style="color:rgb(38,38,38);">lit</font>`<font style="color:rgb(38,38,38);"> ：Lit 项⽬ </font>
- `<font style="color:rgb(38,38,38);">lit-ts</font>`<font style="color:rgb(38,38,38);"> ：Lit + TypeScript 项⽬ </font>
- `<font style="color:rgb(38,38,38);">svelte</font>`<font style="color:rgb(38,38,38);"> ：Svelte 项⽬ </font>
- `<font style="color:rgb(38,38,38);">svelte-ts</font>`<font style="color:rgb(38,38,38);"> ：Svelte + TypeScript 项⽬</font>

## <font style="color:rgb(38,38,38);">直接指定模板</font>

<font style="color:rgb(38,38,38);">例如，如果你想创建⼀个 Vue 3 项⽬，可以使⽤：</font>

```bash
npm create vite@latest my-vue-app -- --template vue
```

<font style="color:rgb(38,38,38);">这条命令将会创建⼀个名为 </font>`<font style="color:rgb(38,38,38);">my-vue-app</font>`<font style="color:rgb(38,38,38);"> 的 Vue 3 项⽬。</font>

## <font style="color:rgb(38,38,38);">项⽬启动和开发</font>

<font style="color:rgb(38,38,38);">创建完项⽬后，需要安装依赖并启动开发服务器：</font>

```bash
cd my-vite-project
npm install
npm run dev
```

<font style="color:rgb(38,38,38);">运⾏ </font><font style="color:rgb(38,38,38);">npm run dev </font><font style="color:rgb(38,38,38);">后，Vite 会启动⼀个开发服务器，通常会在 </font>

<font style="color:rgb(17,124,238);">http://localhost:5173 </font><font style="color:rgb(38,38,38);">上运⾏。</font>

<font style="color:rgb(38,38,38);">使⽤ Vite 创建项⽬时，可以使⽤不同的模板来快速启动各种类型的应⽤程序。Vite 提供了多种内置的模板和脚⼿架选项，⽀持不同的框架和技术栈。</font>

<font style="color:rgb(38,38,38);">下⾯是⼀些常⽤的 Vite 模板脚⼿架命令及其含义：</font>

## <font style="color:rgb(38,38,38);">Vite 模板详细解释</font>

### <font style="color:rgb(38,38,38);">Vue 模板</font>

```bash
npm create vite@latest my-vue-app -- --template vue
```

- <font style="color:rgb(38,38,38);">Vue：这是⼀个基于 Vue.js 的模板。Vue 是⼀个渐进式 JavaScript 框架，⽤于构建⽤户界⾯ 和单⻚应⽤程序（SPA）。该模板创建的项⽬是基于 Vue 3 的。 </font>

<font style="color:rgb(38,38,38);">示例：适合需要使⽤ Vue.js 的项⽬。项⽬中将包含基本的 Vue.js 配置和⽂件结构。</font>

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/Vite/1.png)

### <font style="color:rgb(38,38,38);">Vue + TypeScript 模板</font>

```bash
npm create vite@latest my-vue-app -- --template vue-ts
```

- <font style="color:rgb(38,38,38);">vue-ts：这是⼀个基于 Vue.js 3 和 TypeScript 的模板。TypeScript 是 JavaScript 的⼀个超集，增加了类型系统，可以帮助开发者编写更健壮的代码。 </font>

<font style="color:rgb(38,38,38);">示例：适合使⽤ Vue.js 和 TypeScript 的项⽬。项⽬中将包含 TypeScript 配置和 Vue 3 的配置，允许开发者使⽤ TypeScript 来编写 Vue 组件和逻辑。</font>

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/Vite/2.png)

### <font style="color:rgb(38,38,38);">React 模板</font>

```bash
npm create vite@latest my-react-app -- --template react
```

<font style="color:rgb(38,38,38);">React：这是⼀个基于 React 的模板。React 是⼀个⽤于构建⽤户界⾯的 JavaScript 库，尤其适合构建单⻚应⽤程序。 </font>

<font style="color:rgb(38,38,38);">示例：适合需要使⽤ React 的项⽬。项⽬将包括 React 和基本的构建配置。</font>

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/Vite/3.png)

### <font style="color:rgb(38,38,38);">React + TypeScript 模板</font>

```bash
npm create vite@latest my-react-app -- --template react-ts
```

- <font style="color:rgb(38,38,38);">react-ts：这是⼀个基于 React 和 TypeScript 的模板。与纯 React 模板类似，但⽀持TypeScript，以提供类型检查和更好的开发体验。 </font>

<font style="color:rgb(38,38,38);">示例：适合需要使⽤ React 和 TypeScript 的项⽬。项⽬将包括 TypeScript 配置和 React 的配置。 </font>

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/Vite/4.png)

### <font style="color:rgb(38,38,38);">Preact 模板</font>

```bash
npm create vite@latest my-preact-app -- --template preact
```

- <font style="color:rgb(38,38,38);">Preact：这是⼀个基于 Preact 的模板。Preact 是⼀个轻量级的 React 替代品，提供类似的API 但体积更⼩。 </font>

<font style="color:rgb(38,38,38);">示例：适合需要使⽤ Preact 的项⽬。项⽬中将包含 Preact 的配置和⽂件结构。</font>

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/Vite/5.png)

### <font style="color:rgb(38,38,38);">Preact + TypeScript 模板</font>

```bash
npm create vite@latest my-preact-app -- --template preact-ts
```

- <font style="color:rgb(38,38,38);">preact-ts：这是⼀个基于 Preact 和 TypeScript 的模板。结合了 Preact 的轻量级优势和TypeScript 的类型检查功能。 </font>

<font style="color:rgb(38,38,38);">示例：适合需要使⽤ Preact 和 TypeScript 的项⽬。项⽬将包括 TypeScript 配置和 Preact 的配置。</font>

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/Vite/6.png)

### <font style="color:rgb(38,38,38);">Svelte 模板</font>

```bash
npm create vite@latest my-svelte-app -- --template svelte
```

- <font style="color:rgb(38,38,38);">Svelte：这是⼀个基于 Svelte 的模板。Svelte 是⼀个编译型前端框架，与传统的前端框架不同，它在编译时将组件转换为⾼效的 JavaScript 代码。 </font>

<font style="color:rgb(38,38,38);">示例：适合需要使⽤ Svelte 的项⽬。项⽬中将包括 Svelte 的配置和⽂件结构。</font>

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/Vite/7.png)

### <font style="color:rgb(38,38,38);">Svelte + TypeScript 模板</font>

```bash
npm create vite@latest my-svelte-app -- --template svelte-ts
```

- <font style="color:rgb(38,38,38);">svelte-ts：这是⼀个基于 Svelte 和 TypeScript 的模板。将 Svelte 的编译特性与 TypeScript 的类型检查功能结合起来。 </font>

<font style="color:rgb(38,38,38);">示例：适合需要使⽤ Svelte 和 TypeScript 的项⽬。项⽬将包括 TypeScript 配置和 Svelte 的配置。</font>

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/Vite/8.png)

### <font style="color:rgb(38,38,38);">Lit 模板</font>

```bash
npm create vite@latest my-lit-app -- --template lit
```

- <font style="color:rgb(38,38,38);">Lit：这是⼀个基于 Lit 的模板。Lit 是⼀个⽤于构建 Web 组件的框架，专注于⾼效的组件创建和管理。 </font>

<font style="color:rgb(38,38,38);">示例：适合需要使⽤ Lit 的项⽬。项⽬将包括 Lit 的配置和基本的组件结构。</font>

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/Vite/9.png)

### <font style="color:rgb(38,38,38);">Vanilla 模板</font>

```bash
npm create vite@latest my-vanilla-app -- --template vanilla
```

- <font style="color:rgb(38,38,38);">Vanilla：这是⼀个基于 Vanilla JavaScript 的模板。Vanilla JavaScript 指的是没有使⽤任何框架或库的原⽣ JavaScript。 </font>

<font style="color:rgb(38,38,38);">示例：适合需要使⽤纯 JavaScript 的项⽬。项⽬将包括基本的 JavaScript 和 Vite 配置，适⽤于不依赖任何框架的应⽤。</font>

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/Vite/10.png)

### <font style="color:rgb(38,38,38);">Vanilla + TypeScript 模板</font>

```bash
npm create vite@latest my-vanilla-app -- --template vanilla-ts
```

- <font style="color:rgb(38,38,38);">vanilla-ts：这是⼀个基于 Vanilla JavaScript 和 TypeScript 的模板。结合了原⽣ JavaScript 和 TypeScript 的功能。 </font>

<font style="color:rgb(38,38,38);">示例：适合需要使⽤ TypeScript 的原⽣ JavaScript 项⽬。项⽬将包括 TypeScript 配置和基本的 JavaScript 结构。</font>

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/Vite/11.png)

### <font style="color:rgb(38,38,38);">总结</font>

- <font style="color:rgb(38,38,38);">Vue：Vue.js 前端框架</font>
- <font style="color:rgb(38,38,38);">Vue + TypeScript：Vue.js 和 TypeScript </font>
- <font style="color:rgb(38,38,38);">React：React 前端库 </font>
- <font style="color:rgb(38,38,38);">React + TypeScript：React 和 TypeScript </font>
- <font style="color:rgb(38,38,38);">Preact：轻量级的 React 替代品 </font>
- <font style="color:rgb(38,38,38);">Preact + TypeScript：Preact 和 TypeScript </font>
- <font style="color:rgb(38,38,38);">Svelte：编译型前端框架 </font>
- <font style="color:rgb(38,38,38);">Svelte + TypeScript：Svelte 和 TypeScript </font>
- <font style="color:rgb(38,38,38);">Lit：⽤于构建 Web 组件的框架 </font>
- <font style="color:rgb(38,38,38);">Vanilla：原⽣ JavaScript </font>
- <font style="color:rgb(38,38,38);">Vanilla + TypeScript：原⽣ JavaScript 和 TypeScript</font>
