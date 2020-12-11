import projectConfig from '/adb/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig },
    'pagePath': "dpm.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "dpm.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/adb/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "rentianyu",
    'contributors': [
        "rentianyu"
    ],
    'date': "2020-12-11T07:17:16.000Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined
};
