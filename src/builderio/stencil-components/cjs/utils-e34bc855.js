'use strict';

function format(first, middle, last) {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
const EMPTY_STRING = '';
const HASHTAG = '#';

exports.EMPTY_STRING = EMPTY_STRING;
exports.HASHTAG = HASHTAG;
exports.format = format;

//# sourceMappingURL=utils-e34bc855.js.map