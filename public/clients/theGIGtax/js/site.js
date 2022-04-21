var app = new Vue({
    el: '#Wizard',
    data: {
        Sections: [
            {
                Id: 0,
                Name: 'Income',
                Active: true,
                Steps: [
                    {
                        Id: 0,
                        Name: 'Intro',
                        Active: true,
                        Footer: null
                    },
                    {
                        Id: 1,
                        Name: 'Partner Platforms',
                        Active: false,
                        Footer: '<p>Not seeing a platform you perform gig work through? <a href="#"><strong>Let us know!</strong></a> We\'re continuing to expand our partner network.</p>'
                    },
                    {
                        Id: 2,
                        Name: 'Income Categorization',
                        Active: false,
                        Footer: null
                    },
                    {
                        Id: 3,
                        Name: 'Profit Margins',
                        Active: false,
                        Footer: '<p><strong>Why do I need to do this?</strong> Your net profit (income less tax-deductible expenses) from gig work is a key driver of self-employment and income tax obligations so we need this to calculate an estimated tax payment.</p>'
                    },
                    {
                        Id: 4,
                        Name: 'Summary',
                        Active: false,
                        Footer: null
                    }
                ]
            },
            {
                Id: 1,
                Name: 'Tax Profile',
                Active: false,
                Steps: [
                    {
                        Id: 0,
                        Name: 'Intro',
                        Active: false,
                        Footer: null
                    },
                    {
                        Id: 1,
                        Name: 'Filing Status',
                        Active: false,
                        Footer: null
                    },
                    {
                        Id: 2,
                        Name: 'Other Income',
                        Active: false,
                        Footer: null
                    },
                    {
                        Id: 3,
                        Name: 'Other Income Earnings',
                        Active: false,
                        Footer: null
                    },
                    {
                        Id: 4,
                        Name: 'Other Income Withholdings',
                        Active: false,
                        Footer: null
                    },
                    {
                        Id: 5,
                        Name: 'Include Other Income Withholdings',
                        Active: false,
                        Footer: null
                    },
                    {
                        Id: 6,
                        Name: 'Summary',
                        Active: false,
                        Footer: null
                    }
                ]
            },
            {
                Id: 2,
                Name: 'Payments',
                Active: false,
                Steps: [
                    {
                        Id: 0,
                        Name: 'Intro',
                        Active: false,
                        Footer: null
                    },
                    {
                        Id: 0,
                        Name: 'Contact',
                        Active: false,
                        Footer: null
                    }
                ]
            },
            {
                Id: 3,
                Name: 'Form Filing',
                Active: false,
                Steps: [
                    {
                        Id: 0,
                        Name: 'Intro',
                        Active: false,
                        Footer: null
                    }
                ]
            },
            {
                Id: 4,
                Name: 'Retirement',
                Active: false,
                Steps: [
                    {
                        Id: 0,
                        Name: 'Intro',
                        Active: false,
                        Footer: null
                    }
                ]
            }
        ],
        SelectedPlatforms: [],
        Platforms: [
            {
                Id: 0,
                Order: 1,
                Name: 'Uber',
                Thumbnail: 'img/platforms/uber.png',
                Category: 'Transportation',
                SelectedCategory: 'Transportation',
                Selected: false,
                Margin: 10,
                Profit: null
            },
            {
                Id: 1,
                Order: 1,
                Name: 'Lyft',
                Thumbnail: 'img/platforms/lyft.png',
                Category: 'Transportation',
                SelectedCategory: 'Transportation',
                Selected: false,
                Margin: 10,
                Profit: null
            },
            {
                Id: 2,
                Order: 1,
                Name: 'Etsy',
                Thumbnail: 'img/platforms/etsy.png',
                Category: 'Retail',
                SelectedCategory: 'Retail',
                Selected: false,
                Margin: 20,
                Profit: null
            },
            {
                Id: 3,
                Order: 1,
                Name: 'TaskRabbit',
                Thumbnail: 'img/platforms/taskrabbit.png',
                Category: 'Home Services',
                SelectedCategory: 'Home Services',
                Selected: false,
                Margin: 20,
                Profit: null
            },
            {
                Id: 4,
                Order: 1,
                Name: 'Thumbtack',
                Thumbnail: 'img/platforms/thumbtack.png',
                Category: 'Home Services',
                SelectedCategory: 'Home Services',
                Selected: false,
                Margin: 30,
                Profit: null
            },
            {
                Id: 5,
                Order: 1,
                Name: 'Rover',
                Thumbnail: 'img/platforms/rover.png',
                Category: 'Home Services',
                SelectedCategory: 'Home Services',
                Selected: false,
                Margin: 30,
                Profit: null
            },
            {
                Id: 6,
                Order: 1,
                Name: 'Fiverr',
                Thumbnail: 'img/platforms/fiverr.jpg',
                Category: 'Creative Services',
                SelectedCategory: 'Creative Services',
                Selected: false,
                Margin: 40,
                Profit: null
            },
            {
                Id: 7,
                Order: 1,
                Name: 'DoorDash',
                Thumbnail: 'img/platforms/doordash.webp',
                Category: 'Food & Grocery',
                SelectedCategory: 'Food & Grocery',
                Selected: false,
                Margin: 40,
                Profit: null
            },
            {
                Id: 8,
                Order: 1,
                Name: 'Uber Eats',
                Thumbnail: 'img/platforms/ubereats.png',
                Category: 'Food & Grocery',
                SelectedCategory: 'Food & Grocery',
                Selected: false,
                Margin: 50,
                Profit: null
            },
            {
                Id: 9,
                Order: 1,
                Name: 'Instacart',
                Thumbnail: 'img/platforms/instacart.png',
                Category: 'Food & Grocery',
                SelectedCategory: 'Food & Grocery',
                Selected: false,
                Margin: 50,
                Profit: null
            },
            {
                Id: 10,
                Order: 1,
                Name: 'Airbnb',
                Thumbnail: 'img/platforms/airbnb.png',
                Category: 'Accommodation',
                SelectedCategory: 'Accommodation',
                Selected: false,
                Margin: 60,
                Profit: null
            },
            {
                Id: 11,
                Order: 1,
                Name: 'Vrbo',
                Thumbnail: 'img/platforms/vrbo.png',
                Category: 'Accommodation',
                SelectedCategory: 'Accommodation',
                Selected: false,
                Margin: 60,
                Profit: null
            }
        ],
        CategoryFilter: [],
        TaxStatus: 'Select...',
        TaxStatusOptions: [
            'Select...',
            'Single',
            'Married filing jointly',
            'Married filing separately',
            'Head of household',
            'Qualifying widow(er) with dependent child'
        ],
        OtherIncome: null,
        AnticipatedEarnings: null,
        SeparateWithholding: null,
        IncludeSeparateWithholding: null,
        Notifications: [
            {
                Name: 'Email',
                IconClass: 'bi-envelope',
                Selected: false
            },
            {
                Name: 'SMS',
                IconClass: 'bi-phone',
                Selected: false
            },
            {
                Name: 'Mail',
                IconClass: 'bi-mailbox',
                Selected: false
            }
        ],
        SelectedNotifications: [],
        SelfEmploymentTax: 1800,
        FederalIncomeTax: 2500,
        EstimatedTaxPayment: 4300
    },
    computed: {
        CurrentSection() {
            var self = this;
            for (var i = 0; i < self.Sections.length; i++) {
                if (self.Sections[i].Active) {
                    return self.Sections[i];
                }
            }
        },
        CurrentStep() {
            var self = this;
            for (var i = 0; i < self.CurrentSection.Steps.length; i++) {
                if (self.CurrentSection.Steps[i].Active) {
                    return self.CurrentSection.Steps[i];
                }
            }
        },
        PlatformCategories() {
            var self = this;
            var results = [];
            for (var i = 0; i < self.Platforms.length; i++) {
                if (results.indexOf(self.Platforms[i].Category) < 0) {
                    results.push(self.Platforms[i].Category);
                }
            }
            results.sort((a, b) => a.localeCompare(b));
            return results;
        },
        TodaysDate() {
            return new Date(Date.now()).toLocaleString().split(',')[0];
        }
    },
    methods: {
        changeSection(section) {
            var self = this;
            for (var i = 0; i < self.Sections.length; i++) {
                self.Sections[i].Active = false;
                for (var j = 0; j < self.Sections[i].Steps.length; j++) {
                    self.Sections[i].Steps[j].Active = false;
                }
            }
            section.Active = true;
            section.Steps[0].Active = true;
        },
        nextSection() {
            var self = this;
            var currentIndex = self.CurrentSection.Id;
            for (var i = 0; i < self.Sections.length; i++) {
                self.Sections[i].Active = false;
            }
            self.Sections[currentIndex + 1].Active = true;
            self.Sections[currentIndex + 1].Steps[0].Active = true;
        },
        nextStep() {
            var self = this;
            var currentIndex = self.CurrentStep.Id;
            var skipCount = 0;

            if(self.CurrentSection.Id === 1) {
                if (currentIndex === 2 && !self.OtherIncome) {
                    skipCount = 2;
                }

                if (currentIndex === 4 && self.SeparateWithholding) {
                    skipCount = 1;
                }
            }

            var nextIndex = currentIndex + 1 + skipCount;

            for (var i = 0; i < self.CurrentSection.Steps.length; i++) {
                self.CurrentSection.Steps[i].Active = false;
            }

            if (nextIndex >= self.CurrentSection.Steps.length) {
                self.nextSection();
                return;
            }

            self.CurrentSection.Steps[nextIndex].Active = true;
        },
        filterCategories(cat) {
            var self = this;
            var index = self.CategoryFilter.indexOf(cat);
            if (index < 0) {
                self.CategoryFilter.push(cat);
            }
            else {
                self.CategoryFilter.splice(index, 1);
            }
            self.sortPlatforms();
        },
        showCategory(cat) {
            var self = this;
            if (self.CategoryFilter.length <= 0) {
                return true;
            }
            return self.CategoryFilter.indexOf(cat) >= 0;
        },
        sortPlatforms() {
            var self = this;
            for (var i = 0; i < self.Platforms.length; i++) {
                if (self.CategoryFilter.length <= 0) {
                    self.Platforms[i].Order = 1;
                    continue;
                }

                if (self.CategoryFilter.indexOf(self.Platforms[i].Category) < 0) {
                    self.Platforms[i].Order = 5;
                }
                else {
                    self.Platforms[i].Order = 1;
                }
            }
        },
        selectPlatform(plat) {
            var self = this;
            plat.Selected = !plat.Selected;
            var index = self.SelectedPlatforms.indexOf(plat);

            if (index < 0 && plat.Selected) {
                self.SelectedPlatforms.push(plat);
            }
            else if (index >= 0 && !plat.Selected) {
                self.SelectedPlatforms.splice(index, 1);
            }
        },
        formatDollars(d) {
            var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            });

            return formatter.format(d);
        },
        selectNotification(noti) {
            var self = this;
            noti.Selected = !noti.Selected;
            var index = self.SelectedNotifications.indexOf(noti);

            if (index < 0 && noti.Selected) {
                self.SelectedNotifications.push(noti);
            }
            else if (index >= 0 && !noti.Selected) {
                self.SelectedNotifications.splice(noti, 1);
            }
        }
    },
    created: function() {
        var self = this;

        //Temp startup work just to make things easier
        for (var i = 0; i < self.Platforms.length; i++) {
            /*self.Platforms[i].Profit = self.formatDollars((self.Platforms[i].Id + 1) * 1000);*/
            self.Platforms[i].Profit = ((self.Platforms[i].Id + 1) * 1000);
        }
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