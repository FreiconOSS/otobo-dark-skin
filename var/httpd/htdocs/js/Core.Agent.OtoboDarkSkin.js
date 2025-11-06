// --
// OTOBO is a web-based ticketing system for service organisations.
// --
// Copyright (C) 2019-2025 Rother OSS GmbH, https://otobo.io/
// --
// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU General Public License as published by the Free Software
// Foundation, either version 3 of the License, or (at your option) any later version.
// --

"use strict";

var Core = Core || {};
Core.Agent = Core.Agent || {};

/**
 * @namespace Core.Agent.OtoboDarkSkin
 * @memberof Core.Agent
 * @description
 *      This namespace contains the special functions for OtoboDarkSkin.
 */
Core.Agent.OtoboDarkSkin = (function (TargetNS) {

    /**
     * @name Init
     * @memberof Core.Agent.OtoboDarkSkin
     * @function
     * @description
     *      This function initializes the dark skin CKEditor styles.
     */
    TargetNS.Init = function () {
        // Add custom CKEditor content styles for dark mode
        var darkModeStyles = `
            .ck-content,
            .ck-content * {
                color: white !important;
            }
            .ck-content {
                background-color: black !important;
            }
            .ck-content strong {
                color: white !important;
            }
            .ck-content a,
            .ck-content u {
                color: #2D7DF4 !important;
            }
            .ck-content p,
            .ck-content span,
            .ck-content div {
                color: white !important;
            }
            .ck-content h1,
            .ck-content h2,
            .ck-content h3,
            .ck-content h4,
            .ck-content h5,
            .ck-content h6 {
                color: white !important;
            }
        `;

        // Inject styles into head
        $('head').append('<style type="text/css" id="otobo-dark-skin-ckeditor">' + darkModeStyles + '</style>');
    };

    Core.Init.RegisterNamespace(TargetNS, 'APP_MODULE');

    return TargetNS;
}(Core.Agent.OtoboDarkSkin || {}));

