<template>
    <input
        type="text"
        :id="id"
        :class="inputClass"
    />
</template>


<script>

    import './assets/css/auto-complete.css';
    import autoComplete from './assets/js/auto-complete.js';

    export default {
        name: 'VueAutocompleteEle',
        props: {
            id: {
                type: String,
                default: 'vue-autocomplete'
            },
            minChars: {
                type: Number,
                default: 0
            },
            delay: {
                type: Number,
                default: 0
            },
            offsetLeft: {
                type: Number,
                default: 0
            },
            offsetTop: {
                type: Number,
                default: 1
            },
            inputClass: {
                type: String,
                default: ''
            },
            containerClass: {
                type: String,
                default: ''
            },
            suggestionClass: {
                type: String,
                default: ''
            },
            src: Object,
            noCache: Boolean,
            sourceHandler: Function,
            renderHandler: Function,
            onSelectHandler: Function,
        },

        data() {
            return {
                choices: [],
                selected: ''
            }
        },

        watch: {
            'src.data': {
                handler(newValue) {
                    if((newValue || []).length) {
                        this.choices = this.formatChoices(newValue);
                    }
                },
                immediate: true,
            },

            'src.request': {
                handler: async function () {
                    if(this.src.request) {
                        if(typeof this.src.request === 'function') {
                            let response = await this.src.request();
                            this.choices = this.formatChoices(response);
                        }
                    }
                },
                immediate: true
            }
        },

        methods: {
            formatChoices(choices) {
                if(typeof choices[0] !== 'object') {
                    choices = choices.map((choice) => {
                        return {
                            [this.src.valueIndex]: choice,
                            [this.src.labelIndex]: choice
                        }
                    });
                }
                return JSON.parse(JSON.stringify(choices || []));
            },

            getSourceList(query, suggest) {
                if(this.selected && this.selected === query) {
                    return;
                }

                this.selected = '';

                if(typeof this.sourceHandler === 'function') {
                    return this.sourceHandler(query, suggest);
                }
                suggest(this.setSuggestList(query));
            },

            setSuggestList(query) {
                query = query.toLowerCase();
                return this
                    .choices
                    .filter((choice) => ~(choice[this.src.labelIndex]).toLowerCase().indexOf(query));
            },

            renderSuggestList(item, search) {
                if(typeof this.renderHandler === 'function') {
                    return this.renderHandler(item, search);
                }

                search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&amp;');
                let pattern = new RegExp("(" + search.split(' ').join('|') + ")", "gi");

                return `<div
                    data-val="${item[this.src.valueIndex]}"
                    data-label="${item[this.src.labelIndex]}"
                    class="autocomplete-suggestion ${this.suggestionClass}"
                > ${item[this.src.labelIndex].replace(pattern, "<b>$1</b>")} </div>`;

            },

            onSelect(ele, term, item) {
                if(typeof this.onSelectHandler === 'function') {
                    return this.onSelectHandler(ele, term, item);
                }
                this.$emit('selected', item.getAttribute('data-val'));
                this.selected = document.getElementById(this.id).value = item.getAttribute('data-label');
            },

            initialize() {
                new autoComplete({
                    selector: `#${this.id}`,
                    delay: this.delay,
                    cache: !this.noCache,
                    minChars: this.minChars,
                    offsetTop: this.offsetTop,
                    offsetLeft: this.offsetLeft,
                    menuClass: this.containerClass,
                    onSelect: this.onSelect,
                    source: this.getSourceList,
                    renderItem: this.renderSuggestList,
                });
            }
        },

        mounted() {
            this.initialize();
        }
    }

</script>