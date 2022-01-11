# DOC

## 新增lerna组件

```sh
npx hygen lerna tsdx --name <component-name> --author <author>
```

## 新增sotorybook文档

```sh
yarn hygen lerna storytpl --name <doc-name>
```

### 添加内部依赖包

```
// 将button添加到card组件库里
lerna add @my_scope/button --scope=@my_scope/card
```

### 添加外部包

-P --peer

```
lerna add react --scope=@my_scope/button -P
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
yarn push
```
