---
sidebar: auto
---

# 入门指南

## 简介

Clever Framework 是一款基于Spring Boot，并整合多个三方开源组件的快速开发框架。

我们希望开发者免受众多组件复杂配置的困扰，节省项目搭建时间，提高开发效率，但又不失去开发本身的乐趣。


## 基础环境

Clever Framework 需要的基础环境与SpringBoot类似：

- Java
- IDEA
- Maven

在本章中我们会为大家一一介绍。

### Java

我们使用Jdk1.8作为开发SDK。



#### 下载安装

[JDK1.8下载地址](https://www.oracle.com/java/technologies/downloads/#java8)

java目标对于JDK的版本维护存在CPU（奇数）版本与PSU（偶数）版本。奇数版本为重要补丁，偶数版本为全部补丁。Oracle建议大多数用户应当选择 CPU 版本。

#### 环境变量

新建环境变量：

```
JAVA_HOME={安装路径}
```

PATH中加入：

```
%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;
```

#### 检验确认

终端中输入 java -version

```
java version "xxx"
Java(TM) SE Runtime Environment (build xxx)
Java HotSpot(TM) 64-Bit Server VM (build xxx, mixed mode)
```


### Maven

Apache Maven，是一个软件（特别是Java软件）项目管理及自动构建工具，由Apache软件基金会所提供。基于项目对象模型（缩写：POM）概念，Maven利用一个中央信息片断能管理一个项目的构建、报告和文档等步骤。

我们推荐使用maven3.5+以上版本，因为其引入的revision功能可以让其子项目共享版本，这也是实现bom的主要手段之一。

#### 下载安装

[Maven3.5下载地址](https://maven.apache.org/download.cgi)

下载Binary包后解压到自己的目录。


#### 环境变量

- windows

新建环境变量名：

```
JAVA_HOME={安装路径}
```

PATH中末尾新增（如果前面没分号增加一个）

```
%MAVEN_HOME%/bin
```

- mac

使用brew安装maven

```
brew install maven
```

#### 检验确认

终端中输入: mvn -v

```shell
Apache Maven 3.8.5 (3599d3414f046de2324203b78ddcf9b5e4388aa0)
Maven home: /usr/local/Cellar/maven/3.8.5/libexec
Java version: 1.8.0_322, vendor: Homebrew, runtime: /usr/local/Cellar/openjdk@8/1.8.0+322/libexec/openjdk.jdk/Contents/Home/jre
Default locale: zh_CN, platform encoding: UTF-8
OS name: "mac os x", version: "11.5.1", arch: "x86_64", family: "mac"
```
#### 镜像配置优化

推荐阿里镜像仓库，可以将其设置在`~/.m2/settings.xml`中作为全局仓库，也可以将其设置在项目中。

- 全局 setting 配置

```xml
<mirrors>
    <mirror>
      <id>alimaven</id>
      <name>aliyun maven</name>
  　　<url>http://maven.aliyun.com/nexus/content/groups/public/</url>
      <mirrorOf>central</mirrorOf>        
    </mirror>
</mirrors>
```

项目设置

```xml
<repositories>
    <repository>
        <id>alimaven</id>
        <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
    </repository>
</repositories>
```

### IDEA

IntelliJ IDEA是java语言开发的集成环境，IntelliJ在业界被公认为最好的java开发工具之一，尤其在智能代码助手、代码自动提示、重构、J2EE支持、各类版本工具(git、svn、github等)、JUnit、CVS整合、代码分析、 创新的GUI设计等方面的功能可以说是超常的。IDEA是JetBrains公司的产品，这家公司总部位于捷克共和国的首都布拉格，开发人员以严谨著称的东欧程序员为主。它的旗舰版本还支持HTML，CSS，PHP，MySQL，Python等。免费版只支持Java等少数语言。

#### 下载安装

我们推荐使用最新的IDEA开发工具

[下载安装IDEA](https://www.jetbrains.com/idea/download/)

Ultimate为收费版。

Community为社区版。

可自行选择下载安装。

### Lombok

Lombok 是一种 Java 实用工具，可用来帮助开发人员消除 Java 的冗长，尤其是对于简单的 Java 对象（POJO）。它通过注解实现这一目的（新版的IDEA已经集成Lombok）。

1. 打开 Intellij Idea , 进入 Settings -> Plugins。
2. 点击 Browse Repositories。
3. 在输入框中输入 Lombok Plugin ,安装即可

安装后，在项目中开启：

1. 打开 Intellij Idea , 进入 Settings。
2. 选择 Build,Execution , Deployment -> Annotation Processors
3. 右侧选择 Enable annotation processing

### SourceTree

## 快速启动

### 创建项目

### 配置

### 启动


