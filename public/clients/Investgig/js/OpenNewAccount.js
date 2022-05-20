var app = new Vue({
    el: '#OpenNewAccount',
    data: {
        CurrentStep: 1,
        Accounts: [
            {
                Name: 'Traditional IRA',
                Selected: false
            },
            {
                Name: 'Roth IRA',
                Selected: false
            },
            {
                Name: 'SEP IRA',
                Selected: false
            },
            {
                Name: 'Solo 401(k)',
                Selected: false
            }
        ],
        SelectedAccount: null,
        Partners: [
            {
                Name: 'wealthfront',
                Logo: '../img/partners/wealthfront.png',
                Selected: false
            },
            {
                Name: 'Betterment',
                Logo: '../img/partners/betterment.png',
                Selected: false
            },
            {
                Name: 'SoFi',
                Logo: '../img/partners/sofi.png',
                Selected: false
            },
            {
                Name: 'Fidelity Investments',
                Logo: '../img/partners/fidelity.png',
                Selected: false
            }
        ],
        SelectedPartner: null,
        Savings: [
            {
                Label: 'Select a percentage of earnings to save each month',
                Selected: false
            },
            {
                Label: 'I\'d rather save a specific dollar amount each month',
                Selected: false
            }
        ],
        SavingsPercent: 7,
        SavingsAmount: 200
    },
    watch: {
        
    },
    computed: {
        SelectedAccounts: function() {
            var self = this;
            return self.Accounts.filter(function (x) {
                return x.Selected;
            });
        }
    },
    methods: {
        selectAccount(account) {
            var self = this;
            for (var i = 0; i < self.Accounts.length; i++) {
                self.Accounts[i].Selected = false;
            }
            account.Selected = true;
        },
        selectPartner(partner) {
            var self = this;
            for (var i = 0; i < self.Partners.length; i++) {
                self.Partners[i].Selected = false;
            }
            partner.Selected = true;
        },
        selectSavingsType: function(savings) {
            var self = this;
            for (var i = 0; i < self.Savings.length; i++) {
                self.Savings[i].Selected = false;
            }
            savings.Selected = true;
        },
        getSavingsNextStep: function () {
            var self = this;
            if (self.Savings[0].Selected) {
                self.CurrentStep = 4;
            }
            else {
                self.CurrentStep = 6;
            }
        }
    },
    created: function() {
        var self = this;
    }
});

Vue.component('formatted-input', {
    props: {
        value: {
            type: Number,
            required: false
        },
        format: {
            type: String,
            required: true
        }
    },
    template: `<input type="text" v-model="displayValue" @blur="isInputActive = false" @focus="isInputActive = true"/>`,
    data: function () {
        return {
            isInputActive: false
        }
    },
    computed: {
        displayValue: {
            get: function () {
                if (this.value === null || this.value === undefined) {
                    return this.value;
                }

                if (this.isInputActive) {
                    // Cursor is inside the input field. unformat display value for user
                    return this.value.toString();
                } else {
                    // User is not modifying now. Format display value for user interface
                    if (this.format === 'dollar') {
                        return '$ ' + this.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
                    }

                    if (this.format === 'percent') {
                        return this.value + '%';
                    }
                }

                return this.value;
            },
            set: function (modifiedValue) {
                // Recalculate value after ignoring "$" and "," in user input
                let NewValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, ''));
                // Ensure that it is not NaN
                if (isNaN(NewValue)) {
                    NewValue = 0;
                }
                // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
                // $emit the event so that parent component gets it
                this.$emit('input', NewValue);
            }
        }
    }
});