import CalendarModalController from './calendar-modal.controller';
export default {
    name: 'calendarModalComponent',
    config: {
        template: '<div class="md-dialog-container" id="myDialog"></div>',
        controller: ['$mdDialog', CalendarModalController],
        bindings: {
            option: '<',
            onOk: '&'            
        }
    }
}
