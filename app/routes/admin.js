module.exports = function(app) {

    // Select
    app.get('/formulario_inclusao_noticia', function(req, res) {
        app.app.controllers.admin.formulario_inclusao_noticia(app, req, res);
    });

    // Insert
    app.post('/noticias/salvar', function(req, res) {
        app.app.controllers.admin.noticias_salvar(app, req, res);
    });
}