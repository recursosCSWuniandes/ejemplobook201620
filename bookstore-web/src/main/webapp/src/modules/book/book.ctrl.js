/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function (ng) {

    var mod = ng.module("bookModule");

    mod.controller("bookCtrl", ["$scope", function ($scope) {
            //Se almacenan todas las alertas 
            $scope.alerts = [];
            $scope.currentRecord = {};
            $scope.records = [
                {id: 1,
                    name: 'La nieve del Almirante',
                    description: 'Libro Mock 1',
                    isbn: '12345-1',
                    image: 'http://unlibrocadadia.es/wp-content/uploads/2013/05/La_nieve_del_almirante_alvaro_mutis.jpg',
                    publishDate: '2016-01-22'},
                {id: 2,
                    name: 'Java 8',
                    description: 'Libro Mock 2',
                    isbn: '12345-2',
                    image: 'http://image.casadellibro.com/a/l/t0/55/9788441536555.jpg',
                    publishDate: '2015-01-22'}
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

            // Función showMessage: Recibe el mensaje en String y su tipo con el fin de almacenarlo en el array $scope.alerts.
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
                console.log($scope.tab);
            };

            //Ejemplo alerta
            showMessage("Bienvenido!, Esto es un ejemplo para mostrar un mensaje de información", "info");



            this.createRecord = function () {
                this.editMode = true;
                console.log("Crear record");

            };


            this.editRecord = function (record) {
                self.editMode = true;
                console.log("Edit record");

            };


            this.fetchRecords = function () {
                console.log("List record");

                self.editMode = false;

            };


            this.saveRecord = function () {
                console.log("Save record");
                self.fetchRecords();

            };


            this.deleteRecord = function (record) {

                console.log("Delete record");
            };


            this.fetchRecords();

        }]);

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