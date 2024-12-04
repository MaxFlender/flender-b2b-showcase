export function format(first, middle, last) {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
export const EMPTY_STRING = '';
export const HASHTAG = '#';
export function parseAttributes(attributes) {
    try {
        if (attributes && attributes.trim() !== EMPTY_STRING) {
            return JSON.parse(attributes);
        }
    }
    catch (error) {
        // silent error
        console.error('Failed to parse attributes:', error);
    }
    return {}; // Fallback to an empty object
}
//# sourceMappingURL=utils.js.map
