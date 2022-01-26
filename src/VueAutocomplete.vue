<template>
    <input
        :id="identifier"
        v-model="query"
        type="text"
        class="form-control"
    >
</template>

<style>
    @import './auto-complete.css';
</style>

<script>
    import autoComplete from './auto-complete.js';
    import logErrorsMixin from './logErrorsMixin.js';

    export default {
        props: {
            identifier: {
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
            valueIndex: {
                type: String,
                default: 'value'
            },
            labelIndex: {
                type: String,
                default: 'label'
            },
            containerClass: {
                type: String,
                default: ''
            },
            suggestionClass: {
                type: String,
                default: ''
            },
            api: Object,
            noCache: Boolean,
            suggestions: Array,
            sourceFn: Function,
            renderFn: Function,
            filterFn: Function,
            validation: String,
            onSelectFn: Function,
            formatLabel: Function,
            parentEl: HTMLDivElement,
        },

        mixins: [logErrorsMixin],

        data() {
            return {
                query: '',
                choices: [],
                selected: ''
            };
        },

        watch: {
            query: {
                handler(newValue, oldValue) {
                    if (oldValue !== newValue) {
                        this.setChoices(newValue);
                    }
                }
            }
        },

        methods: {
            setChoices(query = '') {
                return this
                    .fetchChoices(query)
                    .then((response) => {
                    	console.log(response);
                    	this.$set(this.$data, 'choices', this.formatChoices(response));
                    });
            },

            fetchChoices(query) {
                if (
                    (query && !this.api)
                    || ((query || '').trim().length < 2)
                    || (!query && Array.isArray(this.suggestions))
                ) {
                    return Promise.resolve(this.suggestions || []);
                }

                let request = this.getRequest(query);

                if (!(request || {}).status) {
                    return Promise.resolve(this.choices);
                }

                return fetch(request.endpoint, {'headers': this.api.headers})
                    .then((response) => response.json())
                    .then(response => response[this.api.responseIndex] || response);
            },

            getRequest(query) {
                if (this.tokenNotUsed() || this.tokenUsedInMultiplePlaces()) {
                    return;
                }

                let endpoint = this.api.endpoint.replace('$token', query);
                let params = JSON.parse(JSON.stringify(this.api.queryParam || {}).replaceAll('$token', query));
                let status = (endpoint !== this.api.endpoint) || (!params.isEqualsTo(this.api.queryParam || {}));

                return {
                    status,
                    params,
                    endpoint
                };
            },

            formatChoices(choices) {
                if (typeof choices[0] !== 'object') {
                    choices = choices.map((choice) => ({
                        [this.valueIndex]: choice,
                        [this.labelIndex]: choice
                    }));
                }
                return JSON.parse(JSON.stringify(choices || []));
            },

            getSourceList(query, suggest) {
            	console.log('getSourceList', query);
                if (typeof this.sourceFn === 'function') {
                    return this.sourceFn(query, suggest);
                }

                this
                    .setChoices(this.selected === query ? '' : query)
                    .then(() => this.setSuggestList(query, suggest));
            },

            setSuggestList(query, suggest) {
                query = query.toLowerCase();

                let suggestions = this
                    .choices
                    .filter((choice) => {
                        if (typeof this.filterFn === 'function') {
                            return this.filterFn(choice, query);
                        }
                        return !!this.selected || ~(choice[this.labelIndex] || '').toLowerCase().indexOf(query);
                    });

                console.log(query, suggestions);

                suggest(suggestions);
            },

            renderSuggestList(item, search) {
            	console.log('renderSuggestList', item, search);
                if (typeof this.renderFn === 'function') {
                    return this.renderFn(item, search);
                }

                search = search.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&amp;');
                let pattern = new RegExp(`(${search.split(' ').join('|')})`, 'gi');
                let labelText = (this.formatLabel ? this.formatLabel(item) : item[this.labelIndex]) || '';

                // eslint-disable-next-line
                return `<div
                        data-label="${labelText}"
                        data-val="${item[this.valueIndex]}"
                        class="autocomplete-suggestion ${this.suggestionClass}">
                        ${(labelText || '').replace(pattern, '<b>$1</b>')}
                    </div>`;
            },

            onSelect(event, term, item) {
                event.preventDefault();

                if (typeof this.onSelectFn === 'function') {
                    return this.onSelectFn(event, term, item);
                }
                this.$emit('selected', item.getAttribute('data-val'));
                this.$set(this.$data, 'selected', item.getAttribute('data-label'));
                document.getElementById(this.identifier).value = this.selected;
            },

            initialize() {
                // eslint-disable-next-line new-cap,no-new
                new autoComplete({
                    selector: `#${this.identifier}`,
                    delay: this.delay,
                    cache: !this.noCache,
                    parentEl: this.parentEl,
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
            this
                .setChoices()
                .then(this.initialize);
        }
    };

</script>
