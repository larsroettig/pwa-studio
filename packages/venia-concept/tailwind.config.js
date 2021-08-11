module.exports = {
    mode: 'jit',
    purge: {
        content: ['./src/**/*.css'],
        extractors: [
            {
                extractor: content => content.match(matcher) || [],
                extensions: ['css']
            }
        ]
    },
    separator: '_'
};
