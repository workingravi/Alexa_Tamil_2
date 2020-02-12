module.exports = {
    en: {
        translation: {
            POSITIVE_SOUND: `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_02'/>`,
            WELCOME_MSG: 'Welcome, you can say Hello or Help. Which would you like to try?',
            HELLO_MSG: '<amazon:effect name="whispered">Hello World!</amazon:effect>',
            HELP_MSG: 'You can say hello to me! How can I help?',
            LOVE_MSG: '<voice name="Joey">I\'m your man! How can I help?</voice>',
            GOODBYE_MSG: 'Goodbye!',
            REFLECTOR_MSG: 'You just triggered {{intent}}',
            FALLBACK_MSG: 'Sorry, I don\'t know about that. Please try again.',
            ERROR_MSG: 'Sorry, there was an error. Please try again.'
        }
    },
    hi: {
        translation: {
            //WELCOME_MSG: 'आइए ',
            POSITIVE_SOUND: `<audio src='soundbank://soundlibrary/ui/gameshow/amzn_ui_sfx_gameshow_positive_response_02'/>`,
            WELCOME_MSG: 'Vango {{ name }}! Eppidi irukkel?',
            LOVE_MSG: '<amazon:effect name="whispered">Naanum Unnai lovvu panren, {{ name}}</amazon:effect>',
            HELLO_MSG: 'Vanakkam',
            HELP_MSG: 'Eppidi udhavi sei atum ?',
            REFLECTOR_MSG: 'You just triggered {{intent}}',
            GOODBYE_MSG: 'Parkuhlaam',
            FALLBACK_MSG: 'Mannikavum. Puri yalai. Mindum try sey inguh',
            ERROR_MSG: 'Sorry. Mindum try sey inguh'
        }
    }
};
