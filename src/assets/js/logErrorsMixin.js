export default {
	watch: {
		minChars: {
			handler: 'noticeMinCharIssue',
			immediate: true
		},

		'src.data': {
			handler: 'checkDataType',
			immediate: true
		}
	},

	methods: {
		noticeMinCharIssue() {
			return;
			if(this.minChars && (this.src.data || []).length) {
				console.warn(`You have to enter atleast ${this.minChars} for suggestions to show up.`);
			}
		},

		checkDataType() {
			return
			if(!Array.isArray(this.src.data)) {
				console.error('"src.data" must be of type Array.');
			}
		},
	},
};