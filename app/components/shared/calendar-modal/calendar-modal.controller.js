class CalendarModalController{    
    constructor($mdDialog){
        this.$mdDialog = $mdDialog;
        this.showDialog();
    }

    showDialog(){
        var confirm = this.$mdDialog.confirm()
          .title('Would you like to delete your debt?')
          .textContent('All of the banks have agreed to forgive you your debts.')
          .ariaLabel('Lucky day')
          .targetEvent({})
          .ok('Please do it!')
          .cancel('Sounds like a scam');

        this.$mdDialog.show(confirm)
            .then(() => {
                console.log('dodo ng cow1');                    
            },
            () => {
                console.log('dodo ng cow2');
            });
    }    
}

export default CalendarModalController;