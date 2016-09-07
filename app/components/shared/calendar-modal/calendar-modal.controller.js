class CalendarModalController{    
    constructor($mdDialog){
        this.$mdDialog = $mdDialog;
        this.showDialog();
    }

    showDialog(){
        this.$mdDialog.confirm()
          .title('Would you like to delete your debt?')
          .textContent('All of the banks have agreed to forgive you your debts.')
          .ariaLabel('Lucky day')
          .targetEvent({})
          .ok('Please do it!')
          .cancel('Sounds like a scam');
    }    
}

export default CalendarModalController;