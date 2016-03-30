/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function (ng) {

    var mod = ng.module("reviewModule");

    mod.controller("reviewCtrl", ["$scope", function ($scope) {

            $scope.alerts = [];
            $scope.currentRecord = {};
            $scope.records = [
                {
                    id: 1,
                    name: 'Para los amantes de la lectura',
                    source: 'El Tiempo',
                    description: 'El periódico El Tiempo recomienda a sus lectores más seleccionados este ejemplar. '
                   
                },
                {
                    id: 2,
                    name: 'Solo para programadores',
                    source: 'Universidad de Los Andes',
                    description: 'Se recomienda el libro únicamente para programadores.'
                   
                }
            ];

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
                self.fetchRecords();

            };


            this.fetchRecords();

        }]);

})(window.angular);