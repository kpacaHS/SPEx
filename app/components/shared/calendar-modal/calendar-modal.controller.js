class TestController{
    constructor(){

    }
}

class CalendarModalController{    
    constructor($mdDialog){
        this.$mdDialog = $mdDialog;
        this.showDialog();
    }

    showDialog(){
        /*var confirm = this.$mdDialog.confirm()
          .title('Would you like to delete your debt?')
          .textContent('All of the banks have agreed to forgive you your debts.')
          .ariaLabel('Lucky day')
          .targetEvent({})
          .ok('Please do it!')
          .cancel('Sounds like a scam');*/

        this.$mdDialog.show({
            controller: TestController,
            template: '<md-dialog>Testing <md-button aria-label="Eat cake" ng-click=\'$ctrl.doSomething()\'>Dialog</md-button></md-dialog>',
            parent: angular.element(document.body),
            targetEvent: {},
            clickOutsideToClose: true
        })
        .then(() => {
            console.log('dodo ng cow1');                    
        },
        () => {
            console.log('dodo ng cow2');
        });
    }

    doSomething()
    {
        console.log('dodo ng cow');
    }    
}

export default CalendarModalController;