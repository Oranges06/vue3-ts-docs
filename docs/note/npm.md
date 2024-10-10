# <font style="color:rgb(0,0,0);">npm、pnpm 和 yarn 学习</font>

## <font style="color:rgb(38,38,38);">简介</font>

<font style="color:rgb(38,38,38);">在 JavaScript/Node.js 开发中，管理依赖包是开发流程中的重要环节。目前常见的包管理工具有 三种： npm 、 pnpm 和 yarn 。</font>

### <font style="color:rgb(38,38,38);">npm</font>

<font style="color:rgb(38,38,38);">npm (Node Package Manager) 是 Node.js 官方提供的包管理工具，发布于 2010 年。 npm 的特点是：</font>

- <font style="color:rgb(38,38,38);">与 Node.js 捆绑，安装 Node.js 后自动安装； </font>
- <font style="color:rgb(38,38,38);">使用广泛，是 JavaScript 社区的默认选择； </font>
- <font style="color:rgb(38,38,38);">提供强大的命令行工具，支持安装、发布和管理包</font>

### pnpm

<font style="color:rgb(38,38,38);">pnpm 是⼀个高效的包管理工具，特别注重磁盘空间的利用率和安装速度。 pnpm 的全称是 "Performant npm"：</font>

- <font style="color:rgb(38,38,38);">最大的特点是使用硬链接和符号链接来共享依赖，从而减少磁盘占用； </font>
- <font style="color:rgb(38,38,38);">支持 npm 和 Yarn 的命令格式，但有显著性能优势； </font>
- <font style="color:rgb(38,38,38);">适合大型项目和 monorepo 管理。</font>

### yarn

<font style="color:rgb(38,38,38);">yarn 是由 Facebook 于 2016 年发布的包管理工具，旨在解决 npm一些早期版本的性能和一致性问题：</font>

- <font style="color:rgb(38,38,38);">具有更快的安装速度和稳定性； </font>
- <font style="color:rgb(38,38,38);">使用锁文件（ yarn.lock ）来确保不同环境中安装的依赖⼀致； </font>
- <font style="color:rgb(38,38,38);">具有并行化安装和离线安装的能力。</font>

## <font style="color:rgb(38,38,38);">安装与初始化</font>

### <font style="color:rgb(38,38,38);">npm 安装与初始化</font>

<font style="color:rgb(38,38,38);">npm 是否安装：</font>

```bash
npm -v
```

<font style="color:rgb(38,38,38);">初始化⼀个项目：</font>

```bash
npm init
```

<font style="color:rgb(38,38,38);">或者使用快捷方式：</font>

```bash
npm init -y
```

### <font style="color:rgb(38,38,38);">pnpm 安装与初始化</font>

<font style="color:rgb(38,38,38);">安装 pnpm 需要使用 npm 或 Yarn：</font>

```bash
npm install -g pnpm
# 或者
yarn global add pnpm
```

<font style="color:rgb(38,38,38);">验证安装：</font>

```bash
pnpm -v
```

<font style="color:rgb(38,38,38);">初始化⼀个项目：</font>

```bash
pnpm init
```

### <font style="color:rgb(38,38,38);">yarn 安装与初始化</font>

```bash
npm install -g yarn
```

<font style="color:rgb(38,38,38);">验证安装：</font>

```bash
yarn -v
```

<font style="color:rgb(38,38,38);">初始化⼀个项目：</font>

```bash
yarn init
```

## <font style="color:rgb(38,38,38);">基本命令对比</font>

<font style="color:rgb(38,38,38);">以下是 npm 、 pnpm 和 yarn 常用的基本命令对比。</font>

<font style="color:rgb(38,38,38);"></font>

| <font style="color:rgb(38,38,38);">功能 </font>      | <font style="color:rgb(38,38,38);">npm 命令 </font>          | <font style="color:rgb(38,38,38);">pnpm 命令 </font>                                                     | <font style="color:rgb(38,38,38);">yarn 命令</font>           |
| ---------------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| <font style="color:rgb(38,38,38);">初始化项目</font> | <font style="color:rgb(38,38,38);">npm init</font>           | <font style="color:rgb(38,38,38);">pnpm init</font>                                                      | <font style="color:rgb(38,38,38);">yarn init</font>           |
| <font style="color:rgb(38,38,38);">安装依赖 </font>  | <font style="color:rgb(38,38,38);">npm install </font>       | <font style="color:rgb(38,38,38);">pnpm install </font>                                                  | <font style="color:rgb(38,38,38);">yarn install </font>       |
| <font style="color:rgb(38,38,38);">添加依赖包</font> | <font style="color:rgb(38,38,38);">npm install pkg </font>   | <font style="color:rgb(38,38,38);">pnpm add pkg </font>                                                  | <font style="color:rgb(38,38,38);">yarn add pkg </font>       |
| <font style="color:rgb(38,38,38);">删除依赖包</font> | <font style="color:rgb(38,38,38);">npm uninstall pkg </font> | <font style="color:rgb(38,38,38);">pnpm remove pkg</font>                                                | <font style="color:rgb(38,38,38);">yarn remove pkg</font>     |
| <font style="color:rgb(38,38,38);">更新依赖</font>   | <font style="color:rgb(38,38,38);">npm update</font>         | <font style="color:rgb(38,38,38);">pnpm update</font>                                                    | <font style="color:rgb(38,38,38);">yarn update</font>         |
| <font style="color:rgb(38,38,38);">安装全局包</font> | <font style="color:rgb(38,38,38);">npm install -g pkg</font> | <font style="color:rgb(38,38,38);">pnpm add -g pkg</font>                                                | <font style="color:rgb(38,38,38);">yarn global add pkg</font> |
| <font style="color:rgb(38,38,38);">执行脚本</font>   | <font style="color:rgb(38,38,38);">npm run script</font>     | <font style="color:rgb(38,38,38);">pnpm run </font><br/><font style="color:rgb(38,38,38);">script</font> | <font style="color:rgb(38,38,38);">yarn run script </font>    |
| <font style="color:rgb(38,38,38);">清理缓存 </font>  | <font style="color:rgb(38,38,38);">npm cache clean</font>    | <font style="color:rgb(38,38,38);">pnpm store prune</font>                                               | <font style="color:rgb(38,38,38);">yarn cache clean</font>    |

## <font style="color:rgb(38,38,38);">性能与特点对比</font>

### <font style="color:rgb(38,38,38);">磁盘空间占用</font>

- <font style="color:rgb(38,38,38);">npm：每个项目都会有自己的 node_modules ，即使不同项目中使用相同的依赖包，也会重复下载和存储，导致磁盘空间浪费； </font>
- <font style="color:rgb(38,38,38);">pnpm：通过硬链接和符号链接来共享依赖包，依赖只会在本地存储⼀次，大大减少了磁盘空间的占用； </font>
- <font style="color:rgb(38,38,38);">yarn：与 npm 类似，项目之间不会共享 node_modules ，但通过 yarn cache 能减少重复下载。</font>

### <font style="color:rgb(38,38,38);">安装速度</font>

- <font style="color:rgb(38,38,38);">npm：在 5.x 版本之后，npm 通过引入 package-lock.json 和并行化下载，安装速度有所提升，但对于大型项目，速度仍然偏慢； </font>
- <font style="color:rgb(38,38,38);">pnpm：因为 pnpm 使用硬链接，安装速度非常快，并且会缓存已安装的包，下次安装相同的包时几乎是即时完成； </font>
- <font style="color:rgb(38,38,38);">yarn：通过并行下载、离线模式和缓存机制，安装速度相较于 npm 快，特别是在使用 yarn.lock 确保⼀致性时。</font>

### <font style="color:rgb(38,38,38);">项目⼀致性</font>

- <font style="color:rgb(38,38,38);">npm：通过 package-lock.json 文件确保依赖版本的⼀致性； </font>
- <font style="color:rgb(38,38,38);">pnpm：同样生成 pnpm-lock.yaml 文件，保证项目在不同环境下的依赖⼀致性； </font>
- <font style="color:rgb(38,38,38);">yarn： yarn.lock 文件确保每次安装的包版本完全⼀致，是 Yarn 的⼀大优势。</font>

### <font style="color:rgb(38,38,38);">Monorepo 支持</font>

- <font style="color:rgb(38,38,38);">npm：支持 monorepo 结构，但并不是最优选择； </font>
- <font style="color:rgb(38,38,38);">pnpm： pnpm 的结构和工作流非常适合 monorepo，具有天然的支持和优化； </font>
- <font style="color:rgb(38,38,38);">yarn：Yarn 支持 monorepo，通过 Yarn Workspaces 可以管理多个包，非常方便。</font>

## <font style="color:rgb(38,38,38);">锁文件的比较</font>

<font style="color:rgb(38,38,38);">锁文件的作用是确保项目在不同环境下安装的依赖完全⼀致。三者的锁文件如下： </font>

- <font style="color:rgb(38,38,38);">npm： package-lock.json </font>
- <font style="color:rgb(38,38,38);">pnpm： pnpm-lock.yaml </font>
- <font style="color:rgb(38,38,38);">yarn： yarn.lock </font>

<font style="color:rgb(38,38,38);">锁文件记录了每个依赖的精确版本号及其子依赖树，保证项目在不同设备或团队成员之间拥有相同的依赖环境。</font>

## <font style="color:rgb(38,38,38);">使用场景</font>

## <font style="color:rgb(38,38,38);">选择 npm 的场景</font>

- <font style="color:rgb(38,38,38);">如果已经熟悉并使用 npm ，它是 Node.js 的默认包管理器，更新较为频繁且有良好的社区支持； </font>
- <font style="color:rgb(38,38,38);">如果需要快速开始⼀个项目，但又不想安装额外的工具。</font>

## <font style="color:rgb(38,38,38);">选择 </font><font style="color:rgb(38,38,38);">pnpm</font><font style="color:rgb(38,38,38);"> 的场景</font>

- <font style="color:rgb(38,38,38);">如果关心磁盘空间使用，特别是想维护多个项目时； </font>
- <font style="color:rgb(38,38,38);">适合大型项目或 monorepo 项目， pnpm 的依赖管理方式能显著提升性能和降低磁盘占用。</font>

## <font style="color:rgb(38,38,38);">选择 </font><font style="color:rgb(38,38,38);">yarn</font><font style="color:rgb(38,38,38);"> 的场景</font>

- <font style="color:rgb(38,38,38);">如果需要更快的包安装速度，并且想确保在不同机器上的包版本完全⼀致； </font>
- <font style="color:rgb(38,38,38);">Yarn Workspaces 使其成为 monorepo 项目的优秀选择。</font>

## 结论

<font style="color:rgb(38,38,38);">npm </font><font style="color:rgb(38,38,38);">、 </font><font style="color:rgb(38,38,38);">pnpm </font><font style="color:rgb(38,38,38);">和 </font><font style="color:rgb(38,38,38);">yarn </font><font style="color:rgb(38,38,38);">各有优缺点，选择适合自己的工具取决于项目的需求和个人的习惯。 </font>

<font style="color:rgb(38,38,38);">对于大多数中小型项目， </font><font style="color:rgb(38,38,38);">npm </font><font style="color:rgb(38,38,38);">足够应付大部分场景； </font>

<font style="color:rgb(38,38,38);">如果比较在意安装速度、磁盘占用或是管理大型 monorepo 项目， pnpm 是⼀个非常优秀的选择； </font>

<font style="color:rgb(38,38,38);">yarn 则在锁文件的⼀致性和 workspace 管理方面表现出色，特别适合需要高性能和⼀致性的大型团队。 </font>

<font style="color:rgb(38,38,38);">无论选择哪⼀个工具，理解其工作原理并根据项目需求灵活使用才是最重要的。</font>
