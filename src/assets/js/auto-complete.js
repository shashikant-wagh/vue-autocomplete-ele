// var autoComplete=function(){return function(e){if(document.querySelector){var t={selector:0,source:0,minChars:3,delay:150,offsetLeft:0,offsetTop:1,cache:1,menuClass:"",renderItem:function(e,t){t=t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");var s=new RegExp("("+t.split(" ").join("|")+")","gi");return'<div class="autocomplete-suggestion" data-val="'+e+'">'+e.replace(s,"<b>$1</b>")+"</div>"},onSelect:function(e,t,s){}};for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s]);for(var o="object"==typeof t.selector?[t.selector]:document.querySelectorAll(t.selector),l=0;l<o.length;l++){var c=o[l];c.sc=document.createElement("div"),c.sc.className="autocomplete-suggestions "+t.menuClass,c.autocompleteAttr=c.getAttribute("autocomplete"),c.setAttribute("autocomplete","off"),c.cache={},c.last_val="",c.updateSC=function(e,s){var o=c.getBoundingClientRect();if(c.sc.style.left=Math.round(o.left+(window.pageXOffset||document.documentElement.scrollLeft)+t.offsetLeft)+"px",c.sc.style.top=Math.round(o.bottom+(window.pageYOffset||document.documentElement.scrollTop)+t.offsetTop)+"px",c.sc.style.width=Math.round(o.right-o.left)+"px",!e&&(c.sc.style.display="block",c.sc.maxHeight||(c.sc.maxHeight=parseInt((window.getComputedStyle?getComputedStyle(c.sc,null):c.sc.currentStyle).maxHeight)),c.sc.suggestionHeight||(c.sc.suggestionHeight=c.sc.querySelector(".autocomplete-suggestion").offsetHeight),c.sc.suggestionHeight))if(s){var l=c.sc.scrollTop,n=s.getBoundingClientRect().top-c.sc.getBoundingClientRect().top;n+c.sc.suggestionHeight-c.sc.maxHeight>0?c.sc.scrollTop=n+c.sc.suggestionHeight+l-c.sc.maxHeight:n<0&&(c.sc.scrollTop=n+l)}else c.sc.scrollTop=0},u(window,"resize",c.updateSC),document.body.appendChild(c.sc),r("autocomplete-suggestion","mouseleave",function(e){var t=c.sc.querySelector(".autocomplete-suggestion.selected");t&&setTimeout(function(){t.className=t.className.replace("selected","")},20)},c.sc),r("autocomplete-suggestion","mouseover",function(e){var t=c.sc.querySelector(".autocomplete-suggestion.selected");t&&(t.className=t.className.replace("selected","")),this.className+=" selected"},c.sc),r("autocomplete-suggestion","mousedown",function(e){if(a(this,"autocomplete-suggestion")){var s=this.getAttribute("data-val");c.value=s,t.onSelect(e,s,this),c.sc.style.display="none"}},c.sc),c.blurHandler=function(){try{var e=document.querySelector(".autocomplete-suggestions:hover")}catch(t){e=0}e?c!==document.activeElement&&setTimeout(function(){c.focus()},20):(c.last_val=c.value,c.sc.style.display="none",setTimeout(function(){c.sc.style.display="none"},350))},u(c,"blur",c.blurHandler);var n=function(e){var s=c.value;if(c.cache[s]=e,e.length&&s.length>=t.minChars){for(var o="",l=0;l<e.length;l++)o+=t.renderItem(e[l],s);c.sc.innerHTML=o,c.updateSC(0)}else c.sc.style.display="none"};c.keydownHandler=function(e){var s,o=window.event?e.keyCode:e.which;if((40==o||38==o)&&c.sc.innerHTML)return(l=c.sc.querySelector(".autocomplete-suggestion.selected"))?(s=40==o?l.nextSibling:l.previousSibling)?(l.className=l.className.replace("selected",""),s.className+=" selected",c.value=s.getAttribute("data-val")):(l.className=l.className.replace("selected",""),c.value=c.last_val,s=0):((s=40==o?c.sc.querySelector(".autocomplete-suggestion"):c.sc.childNodes[c.sc.childNodes.length-1]).className+=" selected",c.value=s.getAttribute("data-val")),c.updateSC(0,s),!1;if(27==o)c.value=c.last_val,c.sc.style.display="none";else if(13==o||9==o){var l;(l=c.sc.querySelector(".autocomplete-suggestion.selected"))&&"none"!=c.sc.style.display&&(t.onSelect(e,l.getAttribute("data-val"),l),setTimeout(function(){c.sc.style.display="none"},20))}},u(c,"keydown",c.keydownHandler),c.keyupHandler=function(e){var s=window.event?e.keyCode:e.which;if(!s||(s<35||s>40)&&13!=s&&27!=s){var o=c.value;if(o.length>=t.minChars){if(o!=c.last_val){if(c.last_val=o,clearTimeout(c.timer),t.cache){if(o in c.cache)return void n(c.cache[o]);for(var l=1;l<o.length-t.minChars;l++){var a=o.slice(0,o.length-l);if(a in c.cache&&!c.cache[a].length)return void n([])}}c.timer=setTimeout(function(){t.source(o,n)},t.delay)}}else c.last_val=o,c.sc.style.display="none"}},u(c,"keyup",c.keyupHandler),c.focusHandler=function(e){c.last_val="\n",c.keyupHandler(e)},t.minChars||u(c,"focus",c.focusHandler)}this.destroy=function(){for(var e=0;e<o.length;e++){var t=o[e];i(window,"resize",t.updateSC),i(t,"blur",t.blurHandler),i(t,"focus",t.focusHandler),i(t,"keydown",t.keydownHandler),i(t,"keyup",t.keyupHandler),t.autocompleteAttr?t.setAttribute("autocomplete",t.autocompleteAttr):t.removeAttribute("autocomplete"),document.body.removeChild(t.sc),t=null}}}function a(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)}function u(e,t,s){e.attachEvent?e.attachEvent("on"+t,s):e.addEventListener(t,s)}function i(e,t,s){e.detachEvent?e.detachEvent("on"+t,s):e.removeEventListener(t,s)}function r(e,t,s,o){u(o||document,t,function(t){for(var o,l=t.target||t.srcElement;l&&!(o=a(l,e));)l=l.parentElement;o&&s.call(l,t)})}}}();export default autoComplete;
/*
    JavaScript autoComplete v1.0.4
    Copyright (c) 2014 Simon Steinberger / Pixabay
    GitHub: https://github.com/Pixabay/JavaScript-autoComplete
    License: http://www.opensource.org/licenses/mit-license.php
*/

/* eslint-disable */
var autoComplete = (function(){
    // "use strict";
    function autoComplete(options){
        if (!document.querySelector) return;

        // helpers
        function hasClass(el, className){ return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className); }

        function addEvent(el, type, handler){
            if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
        }
        function removeEvent(el, type, handler){
            // if (el.removeEventListener) not working in IE11
            if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
        }
        function live(elClass, event, cb, context){
            addEvent(context || document, event, function(e){
                var found, el = e.target || e.srcElement;
                while (el && !(found = hasClass(el, elClass))) el = el.parentElement;
                if (found) cb.call(el, e);
            });
        }

        var o = {
            selector: 0,
            source: 0,
            minChars: 3,
            delay: 150,
            offsetLeft: 0,
            offsetTop: 1,
            cache: 1,
            menuClass: '',
            renderItem: function (item, search){
                // escape special characters
                search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                return '<div class="autocomplete-suggestion" data-val="' + item + '">' + item.replace(re, "<b>$1</b>") + '</div>';
            },
            onSelect: function(e, term, item){}
        };
        for (var k in options) { if (options.hasOwnProperty(k)) o[k] = options[k]; }

        // init
        var elems = typeof o.selector == 'object' ? [o.selector] : document.querySelectorAll(o.selector);
        for (var i=0; i<elems.length; i++) {
            var that = elems[i];

            // create suggestions container "sc"
            that.sc = document.createElement('div');
            that.sc.className = 'autocomplete-suggestions '+o.menuClass;

            that.autocompleteAttr = that.getAttribute('autocomplete');
            that.setAttribute('autocomplete', 'off');
            that.cache = {};
            that.last_val = '';

            that.updateSC = function(resize, next){
                var rect = that.getBoundingClientRect();
                that.sc.style.left = Math.round(rect.left + (window.pageXOffset || document.documentElement.scrollLeft) + o.offsetLeft) + 'px';
                that.sc.style.top = Math.round(rect.bottom + (window.pageYOffset || document.documentElement.scrollTop) + o.offsetTop) + 'px';
                that.sc.style.width = Math.round(rect.right - rect.left) + 'px'; // outerWidth
                if (!resize) {
                    that.sc.style.display = 'block';
                    if (!that.sc.maxHeight) { that.sc.maxHeight = parseInt((window.getComputedStyle ? getComputedStyle(that.sc, null) : that.sc.currentStyle).maxHeight); }
                    if (!that.sc.suggestionHeight) that.sc.suggestionHeight = that.sc.querySelector('.autocomplete-suggestion').offsetHeight;
                    if (that.sc.suggestionHeight)
                        if (!next) that.sc.scrollTop = 0;
                        else {
                            var scrTop = that.sc.scrollTop, selTop = next.getBoundingClientRect().top - that.sc.getBoundingClientRect().top;
                            if (selTop + that.sc.suggestionHeight - that.sc.maxHeight > 0)
                                that.sc.scrollTop = selTop + that.sc.suggestionHeight + scrTop - that.sc.maxHeight;
                            else if (selTop < 0)
                                that.sc.scrollTop = selTop + scrTop;
                        }
                }
            }
            addEvent(window, 'resize', that.updateSC);
            document.body.appendChild(that.sc);

            live('autocomplete-suggestion', 'mouseleave', function(e){
                var sel = that.sc.querySelector('.autocomplete-suggestion.selected');
                if (sel) setTimeout(function(){ sel.className = sel.className.replace('selected', ''); }, 20);
            }, that.sc);

            live('autocomplete-suggestion', 'mouseover', function(e){
                if(this.getAttribute('disabled') === 'true') {
                    return;
                }

                var sel = that.sc.querySelector('.autocomplete-suggestion.selected');
                if (sel) sel.className = sel.className.replace('selected', '');
                this.className += ' selected';
            }, that.sc);

            live('autocomplete-suggestion', 'mousedown', function(e){
                if (hasClass(this, 'autocomplete-suggestion')) { // else outside click
                    var v = this.getAttribute('data-label');
                    that.value = v;
                    o.onSelect(e, v, this);
                    that.sc.style.display = 'none';
                }
            }, that.sc);

            that.blurHandler = function(){
                try { var over_sb = document.querySelector('.autocomplete-suggestions:hover'); } catch(e){ var over_sb = 0; }
                if (!over_sb) {
                    that.last_val = that.value;
                    that.sc.style.display = 'none';
                    setTimeout(function(){ that.sc.style.display = 'none'; }, 350); // hide suggestions on fast input
                } else if (that !== document.activeElement) setTimeout(function(){ that.focus(); }, 20);
            };
            addEvent(that, 'blur', that.blurHandler);

            var suggest = function(data){
                var val = that.value;
                that.cache[val] = data;
                if (data.length && val.length >= o.minChars) {
                    var s = '';
                    for (var i=0;i<data.length;i++) s += o.renderItem(data[i], val);
                    that.sc.innerHTML = s;
                    that.updateSC(0);
                }
                else
                    that.sc.style.display = 'none';
            }

            that.keydownHandler = function(e){
                var key = window.event ? e.keyCode : e.which;
                // down (40), up (38)
                if ((key == 40 || key == 38) && that.sc.innerHTML) {
                    var next, sel = that.sc.querySelector('.autocomplete-suggestion.selected');
                    if (!sel) {
                        next = (key == 40) ? that.sc.querySelector('.autocomplete-suggestion') : that.sc.childNodes[that.sc.childNodes.length - 1]; // first : last
                        next = next.getAttribute('disabled') === 'true'
                            ? ((key == 40) ? next.nextSibling : next.previousSibling)
                            : next;

                        // console.log("Upper", next.getAttribute('disabled') === 'true', sel, next);
                        next.className += ' selected';
                        that.value = next.getAttribute('data-label');
                    } else {
                        next = (key == 40) ? sel.nextSibling : sel.previousSibling;

                        if (next) {
                            next = next.getAttribute('disabled') === 'true'
                                ? ((key == 40) ? (next.nextSibling) : next.previousSibling)
                                : next;
                            sel.className = sel.className.replace('selected', '');
                            next.className += ' selected';
                            that.value = next.getAttribute('data-label');
                        }
                        else { sel.className = sel.className.replace('selected', ''); that.value = that.last_val; next = 0; }
                    }
                    that.updateSC(0, next);
                    return false;
                }
                // esc
                else if (key == 27) { that.value = that.last_val; that.sc.style.display = 'none'; }
                // enter
                else if (key == 13 || key == 9) {
                    var sel = that.sc.querySelector('.autocomplete-suggestion.selected');
                    if (sel && that.sc.style.display != 'none') { o.onSelect(e, sel.getAttribute('data-label'), sel); setTimeout(function(){ that.sc.style.display = 'none'; }, 20); }
                }
            };
            addEvent(that, 'keydown', that.keydownHandler);

            that.keyupHandler = function(e){
                var key = window.event ? e.keyCode : e.which;
                if (!key || (key < 35 || key > 40) && key != 13 && key != 27) {
                    var val = that.value;
                    if (val.length >= o.minChars) {
                        if (val != that.last_val) {
                            that.last_val = val;
                            clearTimeout(that.timer);
                            if (o.cache) {
                                if (val in that.cache) { suggest(that.cache[val]); return; }
                                // no requests if previous suggestions were empty
                                for (var i=1; i<val.length-o.minChars; i++) {
                                    var part = val.slice(0, val.length-i);
                                    if (part in that.cache && !that.cache[part].length) { suggest([]); return; }
                                }
                            }
                            that.timer = setTimeout(function(){ o.source(val, suggest) }, o.delay);
                        }
                    } else {
                        that.last_val = val;
                        that.sc.style.display = 'none';
                    }
                }
            };
            addEvent(that, 'keyup', that.keyupHandler);

            that.focusHandler = function(e){
                that.last_val = '\n';
                that.keyupHandler(e)
            };
            if (!o.minChars) addEvent(that, 'focus', that.focusHandler);

            that.closeSuggest = function(e){
                that.last_val = '';
                that.sc.style.display = 'none';
            };
            if(o.parentEl) ['scroll', 'wheel'].forEach((event) => addEvent(o.parentEl, event, that.closeSuggest));
        }

        // public destroy method
        this.destroy = function(){
            for (var i=0; i<elems.length; i++) {
                var that = elems[i];
                removeEvent(window, 'resize', that.updateSC);
                removeEvent(that, 'blur', that.blurHandler);
                removeEvent(that, 'focus', that.focusHandler);
                removeEvent(that, 'keydown', that.keydownHandler);
                removeEvent(that, 'keyup', that.keyupHandler);

                if(o.parentEl) ['scroll', 'wheel'].forEach((event) => removeEvent(o.parentEl, event, that.closeSuggest));

                if (that.autocompleteAttr)
                    that.setAttribute('autocomplete', that.autocompleteAttr);
                else
                    that.removeAttribute('autocomplete');
                document.body.removeChild(that.sc);
                that = null;
            }
        };
    }
    return autoComplete;
})();

export default autoComplete;