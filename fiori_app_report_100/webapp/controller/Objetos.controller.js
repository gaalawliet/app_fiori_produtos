sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Label",
    "sap/m/Input",
    "sap/m/TextArea",
    "sap/ui//layout/form/SimpleForm"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Label, Input, TextArea, SimpleForm) {
        "use strict";

        return Controller.extend("br.com.gestao.fioriappreport100.controller.Objetos", {
            onInit: function () {

            },

            onClicaSet: function (evt) {

                var objTitle = this.getView().byId("headerTitle");
                objTitle.setText("Novo Titulo do Header");

            },

            onClicaGet: function (evt) {
                var objTitle = this.getView().byId("headerTitle");
                var sValorText = objTitle.getText();

            },

            addFormulario: function (evt) {

                debugger;

                //estamos criando uma referencia do ojeto panel

                var objPanel = this.getView().byId("panel_formulario");

                //chama o metodo para eliminar todo o conteudo do panel

                objPanel.destroyContent();

                //criando os items do formulário

                var objItensFormulario = [];

                objItensFormulario.push(new Label("lblPergunta1", {
                    text: "pergunta 1",
                    required: true
                }));

                objItensFormulario.push(new Label("lblPergunta2", {
                    text: "pergunta 2",
                    required: false
                }));

                objItensFormulario.push(new TextArea("txtArea", {
                    rows: 7
                }));

                objItensFormulario.push(new Input("inputPergunta1", {
                    value: "Valor da pergunta 1"
                }));

                // criar simpleForm

                var oForm = new SimpleForm("simpleForm", {
                    content: objItensFormulario
                });

                //adicionar formulário dentro do Panel

                objPanel.addContent(oForm);

            }

        });
    });
