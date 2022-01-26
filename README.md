<h2 align="center">vue-autocomplete-ele</h2>

## Table of Contents
- [Introduction](#introduction)
- [Installation](#install)
- [Features](#features)
- [Usage](#usage)
- [Configuration](#configuration)
- [Example](#example)
- [References](#references)

## Introduction <a name = "introduction"></a>
vue-autocomplete-ele is an Vue component completion suggester.\
vue-autocomplete-ele is a MIT-licensed open source project, it is an autcomplete element for your Vue Project which do not use or depends on any third party library.\
Tested in Firefox, Safari, Chrome, Opera, Internet Explorer 8+. No dependencies, written in plain JavaScript.
vue-autocomplete-ele is Lightwight and Highly configurable which makes its useful in number of situations.

## Features <a name = "features"></a>
* Lightweight.
* No jQuery, written in vanilla JS.
* Smart caching, delay and minimum character settings.
* Callbacks

## Installation <a name = "install"></a>
```
npm install vue-autocomplete-ele
```

## Usage <a name = "usage"></a>
```
import VueAutocompleteEle from 'vue-autocomplete-ele';
```

## Configuration <a name = "configuration"></a>

| Prop                | Type          | <div style="width:290px">Default </div>                   | Description                   |
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


## Example <a name = "example"></a>
```
<vue-autocomplete-ele
    :src="{
        data: [
            {
                'id': 125,
                'sku': 'AAAAAAAAAA',
            },
            {
                'id': 154,
                'sku': 'LIQ-01',
            },
            {
                'id': 186,
                'sku': 'SHEET-01',
            },
            {
                'id': 187,
                'sku': 'SHEET-02',
            }
        ],
        valueIndex: 'id',
        labelIndex: 'sku'
    }"
    @selected="autocomplete = $event" // returning data for valueIndex for selected item
/>
```

## References <a name = "references"></a>
- Inspired from and wrap around [https://github.com/Pixabay/JavaScript-autoComplete](https://github.com/Pixabay/JavaScript-autoComplete).
