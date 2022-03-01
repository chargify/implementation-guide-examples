//hosted: https://gist.github.com/mmeo/9cda8d2f88b3242e85867472a35d460c


var chargify = new Chargify();

//**********
//AVAILABLE STYLES
//https://developer.chargify.com/content/chargify-js/configurations.html#styles
//**********

chargify.load({
    publicKey: 'chjs_hy39j8rc2krnhdx9db73ynmb',
    serverHost: 'https://demo-integrations2.chargify.com',
    type: 'card',
    hideCardImage: false,
    optionalLabel: ' ',
    requiredLabel: '*',
    addressDropdowns: true,
    style: {
        field: {
            maxWidth: '100%',
            backgroundColor: null,
            paddingTop: null,
            paddingBottom: null,
            borderRadius: '.25rem',
            color: null,
            border: null,
            fontSize: null,
            fontWeight: null
        },
        input: {
            maxWidth: '100%',
            backgroundColor: null,
            paddingTop: null,
            paddingBottom: null,
            borderRadius: '.25rem',
            color: null,
            border: '1px solid #ced4da',
            fontSize: '16px',
            fontWeight: null
        },
        label: {
            maxWidth: null,
            backgroundColor: '#ffffff',
            paddingTop: '2px',
            paddingBottom: '1px',
            borderRadius: null,
            color: null,
            border: null,
            fontSize: '16px',
            fontWeight: '400'
        },
        message: { 
            maxWidth: null,
            backgroundColor: null,
            paddingTop: '2px', 
            paddingBottom: '1px',
            borderRadius: null,
            color: null,
            border: null,
            fontSize: null,
            fontWeight: null 
        }
    },
    fields: {
        firstName: {
            selector: '#first_name',
            label: 'First Name on Card',
            placeholder: 'John',
            message: 'Invalid First Name',
            maxlength: '30',
            required: true
        },
        lastName: {
            selector: '#last_name',
            label: 'Last Name on Card',
            placeholder: 'Smith',
            message: 'Invalid Last Name',
            maxlength: '30',
            required: true
        },
        number: {
            selector: '#cc_number',
            label: 'Card Number',
            placeholder: 'Card Number',
            message: 'Invalid Card',
            required: true
        },
        month: {
            selector: '#cc_month',
            label: 'Month',
            placeholder: 'MM',
            message: 'Invalid Month',
            required: true
        },
        year: {
            selector: '#cc_year',
            label: 'Year',
            placeholder: 'YYYY',
            message: 'Invalid Year',
            required: true
        },
        cvv: {
            selector: '#cc_cvv',
            label: 'CVV',
            placeholder: 'CVV',
            message: 'Invalid CVV',
            required: true
        }
    }
});
