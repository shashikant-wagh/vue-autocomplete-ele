<h2 align="center">vue-autocomplete-ele</h2>

## Table of Contents
- [Introduction](#introduction)
- [Installation](#install)
- [Usage](#usage)
- [Configuration](#configuration)
- [References](#references)

## Introduction <a name = "introduction"></a>
vue-autocomplete-ele is based on [https://github.com/Pixabay/JavaScript-autoComplete](https://github.com/Pixabay/JavaScript-autoComplete).\
vue-autocomplete-ele is a MIT-licensed open source project, it is an autcomplete element for your Vue Project which do not use or depends on any third party libraries like jQuery.\
vue-autocomplete-ele is Lightwight and Highly configurable which makes its useful in number of situations.

## Installation <a name = "install"></a>
```
npm install vue-autocomplete-ele
```

## Usage <a name = "usage"></a>
```
import VueAutocompleteEle from 'vue-autocomplete-ele';
```

## Configuration <a name = "configuration"></a>
| Prop                | Type          | Default                   | Description                   |
|---------------------|---------------|---------------------------|-------------------------------|
| src                 | Object        |                           | ```{ data: Array, valueIndex: String <from data>, labelIndex: String <from data>}```|
| id                  | String        | vue-autocomplete          |
| minChars            | Number        | 0                         | Minimum number of characters (>=1) a user must type before a search is performed.|
| delay               | Number        | 0                         | The delay in milliseconds between when a keystroke occurs and when a search is performed. A zero-delay is more responsive, but can produce a lot of load.|
| offsetLeft          | Number        | 1                         | Optional left offset of the suggestions container.|
| offsetTop           | Number        | 1                         | Optional top offset of the suggestions container. |
| inputClass          | String        |                           | Custom class/es that get/s added to the input element.|
| containerClass      | String        |                           | Custom class/es that get/s added to the dropdown menu container.|
| suggestionClass     | String        |                           | Custom class/es that get/s added to the dropdown menu.|
| noCache             | Boolean       |   false                   | Determines if performed searches should be cached.|
| sourceHandler       | Function      |                           | The sourceHandler function iterates through an array of (local) choices and we return a new array containing all (lowercased) matches.|
| renderHandler       | Function      |                           | The renderHandler function allows to customize the dropdown menu item|
| onSelectHandler     | Function      |                           | The onSelectHandler function allows to do something on select event| 


## References <a name = "references"></a>
- [https://github.com/Pixabay/JavaScript-autoComplete](https://github.com/Pixabay/JavaScript-autoComplete).
