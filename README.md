#[Labrador-Components-Cli](https://github.com/jf3096/labrador-components-cli)

微信小程序Labrador组件构建工具

## 特性
* 组件具有独立性, 构建一套属于个人/公司的组件库大大减少工作量
* 基于Labrador框架进行常见业务场景的封装

## 安装

首先您的系统中安装Node.js [下载Node.js](https://nodejs.org/en/)，然后运行下面的命令将全局安装Labrador-Components-Cli命令行工具。

``` bash
    npm install -g labrador-components-cli
```

## 组件目录

```bash
├─bottomButton
├─plainInput
├─reviewStatus
├─scrollStatusBar
├─swiper
├─tab
└─toast
```

## Labrador-Components-Cli 命令

#### `labrador-components-cli <component name>` 创建组件

支持模糊搜索, <i>labrador-components-cli bot</i>, 这样能在列表中找到bottom直接创建
```bash
E:\WebstormProjects\labrador-components-cli>labrador-components-cli bot
Warning: component文件不存在, 自动创建路劲E:\WebstormProjects\labrador-components-cli\__components\bottomButton
Info: bottomButton.css 文件复制成功。
Info: bottomButton.js 文件复制成功。
Info: bottomButton.xml 文件复制成功。
Info: bottomButton.less 文件复制成功。
Info: bottomButton.ts 文件复制成功。
```


如果搜索结果大于1, 返回过滤后的列表。如：<i>labrador-components-cli s</i>

```bash
    E:\WebstormProjects\labrador-components-cli>labrador-components-cli s
    ? 选择组件 (Use arrow keys)
    > scrollStatusBar
      swiper
```

## 开源协议

本项目依据MIT开源协议发布，允许任何组织和个人免费使用。