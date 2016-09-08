import CalendarModalController from './calendar-modal.controller';
export default {
    name: 'calendarModalComponent',
    config: {
        template: '<div><md-button aria-label="Eat cake" ng-click=\'$ctrl.doSomething()\'>Component</md-button></div>',
        controller: ['$mdDialog', CalendarModalController],
        bindings: {
            option: '<',
            onOk: '&'            
        }
    }
}
