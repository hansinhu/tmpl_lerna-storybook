### 如何创建一个package.json

```shell
# 创建一个组件
yarn hygen lerna tsdx --name tuna-base-card --author jianba

# 创建一个stroybook
yarn hygen lerna storytpl --name BaseCard
```

### 添加内部依赖包

```
// 将card添加到form组件库里
lerna add @tuna/tuna-base-card --scope=@tuna/tuna-form
```

### 添加外部包

-P --peer

```
lerna add antd --scope=@tuna/tuna-base-card -P
```

### 内部包相互引用

```
lerna bootstrap
```

### 检查自上次发布以来哪些软件包被修改过

```
lerna changed
```

### 发布版本

```
1：提交git代码
2：lerna publish // 选择版本，发布组件
```

### 通过yalc测试包

#### 发包

```shell
yalc push
```