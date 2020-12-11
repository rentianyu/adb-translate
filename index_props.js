import projectConfig from '/adb-translate/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "Hello World !",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Hello World !</h1>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/adb-translate/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Hello World !"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "rentianyu",
    'contributors': [
        "rentianyu"
    ],
    'date': "2020-12-11T08:16:05.000Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined
};
