# VueUse学习笔记

VueUse 是一个基于 Vue 3 Composition API 的实用工具库，它提供了一系列可组合的函数，旨在帮助开发者提高开发效率。以下是 VueUse 的一些核心能力和简单示例：

## 窗口尺寸检测 (`useWindowSize`)：

- 可以获取并响应窗口尺寸的变化。
- 示例代码：

```vue
<template>
  <div>
    <p>当前窗口大小：宽：{{ width }},高：{{ height }}px</p>
    <div :class="{ 'mobile-layout': isMobile }">
      <p>{{ isMobile ? '移动端布局' : '桌面端布局' }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

//获取窗口大小
const { width, height } = useWindowSize()

// 判断是否为移动端布局（窗口宽度小于768px时）
const isMobile = computed(() => width.value < 768)
</script>

<style scoped>
div {
  text-align: center;
  margin-top: 20px;
}

.mobile-layout {
  background-color: lightblue;
}

.mobile-layout p {
  font-size: 36px;
}

@media (min-width: 768px) {
  .mobile-layout {
    background-color: lightcoral;
  }

  .mobile-layout p {
    font-size: 24px;
  }
}
</style>
```

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/VueUse/1.gif)

## 鼠标位置跟踪 (`useMouse`)：

- 实时监听鼠标位置变化。
- 示例代码：

```vue
<template>
  <div>
    <p>鼠标位置：x{{ x }},y:{{ y }}</p>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
</script>
```

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/VueUse/2.gif)

## 使用全屏（`useFullscreen`）：

- 反应式全屏API。
- 实例代码：

```vue
<template>
  <div class="text-center">
    <div class="flex" p="y-4">
      <video
        ref="el"
        class="m-auto rounded"
        src="https://vjs.zencdn.net/v/oceans.mp4"
        width="600"
        controls
      />
    </div>
    <button @click="toggle">全屏</button>
  </div>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import { ref } from 'vue'

const el = ref(null)
const { toggle } = useFullscreen(el)
</script>
```

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/VueUse/3.gif)

## 使用剪贴板（useClipboard）

- 复制内容到剪贴板。
- 实例代码：

```vue
<template>
  <div v-if="isSupported">
    <p>
      复制内容: <code>{{ text || 'none' }}</code>
    </p>
    <input v-model="input" type="text" />
    <button @click="copy(input)">复制</button>
  </div>
  <p v-else>你的浏览器不支持剪贴板 API</p>
</template>

<script setup lang="ts">
import { useClipboard, usePermission } from '@vueuse/core'
import { ref } from 'vue'

const input = ref('')

const { text, isSupported, copy } = useClipboard()
const permissionRead = usePermission('clipboard-read')
const permissionWrite = usePermission('clipboard-write')
</script>
```

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/VueUse/4.gif)

## 使用吸管取色（useEyeDropper）

- 可以获取颜色
- 实例代码：

```vue
<template>
  <template v-if="isSupported">
    <div>
      颜色值: <span :style="{ color: sRGBHex }">{{ sRGBHex }}</span>
    </div>
    <button :disabled="!isSupported" @click="() => open()">打开吸管吸色</button>
  </template>
  <div v-else>
    <span>您的浏览器不支持</span>
  </div>
</template>

<script lang="ts" setup>
import { useEyeDropper } from '@vueuse/core'

const { isSupported, open, sRGBHex } = useEyeDropper()
</script>
```

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/VueUse/5.gif)

## 使用文件管理器（useFileDialog）

- 可以轻松打开文件对话框选择文件
- 实例代码：

```vue
<template>
  <button type="button" @click="open()">选择文件</button>
  <button type="button" :disabled="!files" @click="reset()">重置</button>
  <template v-if="files">
    <p>
      你选择的文件：
      <b>{{ `${files.length} ${files.length === 1 ? 'file' : 'files'}` }}</b>
    </p>
    <li v-for="file of files" :key="file.name">
      {{ file.name }}
    </li>
  </template>
</template>

<script setup lang="ts">
import { useFileDialog } from '@vueuse/core'

const { files, open, reset } = useFileDialog()
</script>
```

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/VueUse/6.gif)

## 刷新（usePerformanceObserver）

- 刷新
- 实例代码：

```typescript
import { ref, watch } from 'vue'

export function useCountdown(duration = 60) {
  const seconds = ref(duration)

  const start = () => {
    const intervalId = setInterval(() => {
      if (seconds.value > 0) {
        seconds.value--
      } else {
        clearInterval(intervalId)
      }
    }, 1000)
    return () => clearInterval(intervalId)
  }

  watch(seconds, (newValue) => {
    if (newValue === 0) {
      alert('倒计时结束！')
    }
  })

  return {
    seconds,
    start
  }
}
```

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/VueUse/7.gif)

## 共享（useShare）

- 共享
- 实例代码：

```vue
<template>
  <div>
    <input
      v-if="isSupported"
      v-model="options.text"
      type="text"
      placeholder="Note"
    />
    <button :disabled="!isSupported" @click="startShare">
      {{ isSupported ? 'Share' : 'Web share is not supported in your browser' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useShare } from '@vueuse/core'
import { isClient } from '@vueuse/shared'
import { ref } from 'vue'

const options = ref({
  title: 'VueUse',
  text: 'Collection of essential Vue Composition Utilities!',
  url: isClient ? location.href : ''
})

const { share, isSupported } = useShare(options)

function startShare() {
  return share().catch((err) => err)
}
</script>
```

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/VueUse/8.gif)

## 文本框自动大小（useTextareaAutosize）

- 根据内容自动更新 textarea 的高度<font style="color:rgb(60, 60, 67);">。</font>
- 实例代码：

```vue
<template>
  <div class="textarea-container">
    <span>输入内容：</span>
    <textarea
      ref="textarea"
      v-model="input"
      class="resize-none"
      placeholder="内容"
    />
  </div>
</template>

<script setup lang="ts">
import { useTextareaAutosize } from '@vueuse/core'

const { textarea, input } = useTextareaAutosize()
</script>

<style scoped>
.textarea-container {
  max-width: 200px;
  /* 限制容器最大宽度 */
  margin: 20px 0;
  /* 上下边距 */
}

.resize-none {
  resize: none;
  /* 禁止调整大小 */
  width: 100%;
  /* 宽度100% */
  /* 内边距 */
  border: 1px solid #ccc;
  /* 边框 */
  border-radius: 4px;
  /* 边框圆角 */
  font-size: 16px;
  /* 字体大小 */
  line-height: 1.5;
  /* 行高 */
  color: #333;
  /* 字体颜色 */
  background-color: #fff;
  /* 背景色 */
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  /* 内阴影 */
}

/* 聚焦时的样式 */
.resize-none:focus {
  outline: none;
  /* 移除默认的聚焦轮廓 */
  border-color: #4a90e2;
  /* 聚焦时边框颜色 */
  box-shadow:
    inset 0 1px 2px rgba(0, 0, 0, 0.1),
    0 0 5px rgba(74, 144, 226, 0.5);
  /* 聚焦时的外阴影 */
}
</style>
```

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/VueUse/9.gif)

## 方向控制（onKeyStroke）

- 监听键盘的按键。
- 实例代码：

```vue
<template>
  <div>
    <div class="container border-base">
      <div
        class="ball"
        :style="{ transform: `translate(${translateX}px, ${translateY}px)` }"
      />
    </div>
    <div class="text-center mt-4">
      <p>使用方向键或w键和d键来控制球的移动。</p>
      <p>按' d '或' -> '键忽略重复事件</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'
import { ref } from 'vue'

const translateX = ref(0)
const translateY = ref(0)

onKeyStroke(['w', 'W', 'ArrowUp'], (e) => {
  e.preventDefault()
  translateY.value -= 10
})

onKeyStroke(['s', 'S', 'ArrowDown'], (e) => {
  e.preventDefault()
  translateY.value += 10
})

onKeyStroke(['a', 'A', 'ArrowLeft'], () => {
  translateX.value -= 10
})

onKeyStroke(
  ['d', 'D', 'ArrowRight'],
  () => {
    translateX.value += 10
  },
  { dedupe: true }
)
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 100px;
  margin: auto;
  overflow: hidden;
  border: 1px solid #a1a1a130;
  border-radius: 5px;
}

.ball {
  width: 16px;
  height: 16px;
  background: #a1a1a1;
  border-radius: 50%;
}
</style>
```

![](https://oranges-oss.oss-cn-hangzhou.aliyuncs.com/note/VueUse/10.gif)

VueUse 的强大之处在于它的可组合性，可以将这些工具函数自由组合，以满足特定需求。更多详细信息和高级用法，建议参考[官方文档](https://vueuse.pages.dev/guide/)。
