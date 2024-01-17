<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
    <meta name="renderer" content="webkit">
    <meta name="format-detection" content="telephone=no" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'WebPage') }}</title>
    <link rel="shortcut icon" href="{{ asset_main('favicon.ico') }}">
    @if($style)
        <link rel="stylesheet" type="text/css" href="{{ $style }}">
    @endif
    <link rel="stylesheet" type="text/css" href="{{ asset_main('css/iview.css') }}?v={{ $version }}">
    <link rel="stylesheet" type="text/css" href="{{ asset_main('css/loading.css') }}?v={{ $version }}">
    <script src="{{ asset_main('js/jsencrypt.min.js') }}?v={{ $version }}"></script>
    <script src="{{ asset_main('js/scroll-into-view.min.js') }}?v={{ $version }}"></script>
    <script>
        window.csrfToken = {
            csrfToken: "{{ csrf_token() }}"
        };
        window.systemInfo = {
            title: "{{config('app.name', 'WebPage')}}",
            debug: "{{config('app.debug') ? 'yes' : 'no'}}",
            version: "{{ $version }}",
            origin: window.location.origin + "/",
            homeUrl: null,
            apiUrl: null,
            //
            language: window.localStorage.getItem('__system:language__') || '',
            userId: window.localStorage.getItem('__system:userid__') || '',
            userToken: window.localStorage.getItem('__system:token__') || '',
        };

        window.systemInfo.themeList = [
            {name: '跟随系统', value: 'auto'},
            {name: '明亮', value: 'light'},
            {name: '暗黑', value: 'dark'},
        ];
        window.systemInfo.setTheme = function(theme) {
            if (theme === null) {
                theme = window.localStorage.getItem('__system:theme__')
            } else {
                window.localStorage.setItem("__system:theme__", theme)
            }
            if (!['dark', 'light'].includes(theme)) {
                let isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
                if (/eeui/i.test(window.navigator.userAgent)) {
                    isDark = requireModuleJs("eeui").getThemeName() === "dark"
                }
                theme = isDark ? 'dark' : 'light'
            }
            window.systemInfo.theme = theme;    // 参数只有 light 和 dark
        };
        window.systemInfo.setTheme(null);


        if (window.systemInfo.theme === 'dark') {
            let style = document.createElement('style');
            style.rel = 'stylesheet';
            style.innerHTML = '.app-view-loading { background-color: #000000; }'
            document.head.appendChild(style);
        }
    </script>
</head>
<body>

@extends('ie')
<div id="app">
    <div class="app-view-loading">
        <div>
            <div>PAGE LOADING</div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</div>

<script type="module" src="{{$script}}"></script>
</body>
</html>
