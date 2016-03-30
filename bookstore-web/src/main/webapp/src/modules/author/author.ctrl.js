(function (ng) {
    var mod = ng.module("authorModule");

    mod.controller("authorCtrl", ["$scope", function ($scope) {
            $scope.currentRecord = {};
            $scope.records = [{
                    id: 1,
                    name: "Nombre del autor",
                    birthDate: "12-12-2016"
                }];
            $scope.alerts = [];

            $scope.today = function () {
                $scope.value = new Date();
            };

            $scope.clear = function () {
                $scope.value = null;
            };

            $scope.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();

                $scope.opened = true;
            };

            //Alertas
            this.closeAlert = function (index) {
                $scope.alerts.splice(index, 1);
            };

            function showMessage(msg, type) {
                var types = ["info", "danger", "warning", "success"];
                if (types.some(function (rc) {
                    return type === rc;
                })) {
                    $scope.alerts.push({type: type, msg: msg});
                }
            }

            this.showError = function (msg) {
                showMessage(msg, "danger");
            };

            var self = this;
            function responseError(response) {
                self.showError(response.data);
            }

            //Variables para el controlador
            this.readOnly = false;
            this.editMode = false;

            this.changeTab = function (tab) {
                $scope.tab = tab;
            };

            //Ejemplo alerta
            showMessage("Bienvenido!, Esto es un ejemplo para mostrar un mensaje de atención", "warning");


            this.createRecord = function () {

                this.editMode = true;

            };

            this.editRecord = function (record) {
                self.editMode = true;

            };

            this.fetchRecords = function () {
                self.editMode = false;

            };
            this.saveRecord = function () {
                self.fetchRecords();
            };
            this.deleteRecord = function (record) {
            };

            this.fetchRecords();
        }]);

})(window.angular);
