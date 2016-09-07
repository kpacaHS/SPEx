import CalendarModalController from './calendar-modal.controller';
export default {
    name: 'calendarModalComponent',
    config: {
        template: '<div></div>',
        controller: ['$mdDialog', CalendarModalController],
        bindings: {
            option: '<',
            onOk: '&'            
        }
    }
}
