function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'app/components/skillsMember/skillsMember.html',
        controller: 'SkillsMemberController',
        controllerAs: 'skillsMemberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}