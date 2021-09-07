<script>
    import "../css/app.postcss";
    import "../css/app.css";
</script>

<div class="flex w-screen h-screen text-gray-700">
    <div class="nav">
        <div class="nav-title">
            <span class="font-bold">野椿集團</span>
        </div>
        <a class="nav-item" href="/">
            <svg class="nav-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span class="nav-item-font">Item 1</span>
        </a>
        <a class="nav-item" href="/">
            <svg class="nav-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span class="nav-item-font">Item 2</span>
        </a>
        <a class="nav-item" href="/">
            <svg class="nav-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <span class="nav-item-font">Item 3</span>
        </a>
        <a class="nav-item" href="/">
            <svg class="nav-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span class="nav-item-font">Item 4</span>
        </a>
        <a class="nav-item" href="/">
            <svg class="nav-svg"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span class="nav-item-font">Item 5</span>
        </a>
        <a class="nav-footer" href="/">
            <svg class="nav-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="nav-item-font">Footer</span>
        </a>
    </div>

    <div class="flex flex-col flex-grow">
        <div class="header">
            <h1 class="header-title">Page Title</h1>
            <button class="header-btn ml-auto">
                Action 1
            </button>
            <button class="header-btn ml-2 bg-gray-200 rounded">
                Action 2
            </button>
            <button class="relative ml-2 text-sm focus:outline-none group">
                <div class="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-300">
                    <svg class="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </div>
                <div class="absolute right-0 flex-col items-start hidden w-40 pb-1 bg-white border border-gray-300 shadow-lg group-focus:flex">
                    <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="/">Menu Item 1</a>
                    <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="/">Menu Item 1</a>
                    <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="/">Menu Item 1</a>
                </div>
            </button>
        </div>
        <div class="main-content">
            <slot></slot>
        </div>
    </div>
</div>
