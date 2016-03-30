/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function (ng) {

    var mod = ng.module("editorialModule");

    mod.controller("editorialCtrl", ["$scope", function ($scope) {

            $scope.alerts = [];
            $scope.currentRecord = {};
            $scope.records = [{
                    id: 1,
                    name: "Norma"
                }];

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

            this.showSuccess = function (msg) {
                showMessage(msg, "success");
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
            showMessage("Bienvenido!, Esto es un ejemplo para mostrar un mensaje exitoso", "success");

            this.createRecord = function () {

                this.editMode = true;
                console.log("Create");

            };
            this.editRecord = function (record) {
                console.log("Edit");
                self.editMode = true;
            };

            this.fetchRecords = function () {
                console.log("Fetch");
                self.editMode = false;
            };
            this.saveRecord = function () {
                console.log("Save");
            };

            this.deleteRecord = function (record) {
                console.log("Delete");
            };

            this.fetchRecords();
        }]);

})(window.angular);