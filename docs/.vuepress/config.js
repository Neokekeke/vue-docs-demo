const enBase = '/en/'
const zhBase = '/zh/'

const LOCALES = {
    [enBase]: {
        lang: 'en-US',
        title: 'VuePress',
    },
    [zhBase]: {
        lang: 'zh-CN',
        title: 'VuePress 中文',
    }
}
const THEME_CONFIG_LOCALES = {
    [enBase]: {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en')(enBase),
        sidebar: {
            [enBase + 'guide/']: getGuideSidebar('Guide', 'Advanced'),
        }
    },
    [zhBase]: {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh')(zhBase),
        sidebar: {
            [zhBase + 'guide/']: getGuideSidebar('指南', '深入'),
        }
    }
}

const plugins = [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
        ga: 'UA-128189152-1'
    }],
    ['container', {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>'
    }],
    ['container', {
        type: 'upgrade',
        before: info => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>'
    }],
    ['flowchart']
]

// guide sidebar
function getGuideSidebar(groupA) {
    return [{
        title: groupA,
        collapsable: false,
        children: [
            'starter',
        ]
    }]
}

module.exports = ctx => ({
    extraWatchFiles: [
        '.vuepress/nav/en.js',
        '.vuepress/nav/zh.js'
    ],
    locales: LOCALES,
    themeConfig: {
        editLinks: true,
        smoothScroll: true,
        locales: THEME_CONFIG_LOCALES
    },
    plugins: plugins
})