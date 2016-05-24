//fis-conf.js
fis.match('/js/*.js', {
  packTo: '/dolphin.js'
});

fis.media('prod').match('/js/*.js', {
  optimizer: fis.plugin('uglify-js')
});
fis.media('prod').match('/js/*.js', {
  packTo: '/dolphin.min.js'
});

fis.match('/js/core.js', {
    packOrder: -100
});
fis.match('/js/i18n.js', {
    packOrder: -90
});
fis.match('/js/formI18nBox.js', {
    packOrder: -85
});
fis.match('/js/formFileBox.js', {
    packOrder: -83
});
fis.match('/js/validate.js', {
    packOrder: -80
});
fis.match('/js/form.js', {
    packOrder: -70
});
fis.match('/js/enum.js', {
    packOrder: -60
});
fis.match('/js/pagination.js', {
    packOrder: -50
});
fis.match('/js/list.js', {
    packOrder: -40
});
fis.match('/js/tree.js', {
    packOrder: -30
});
fis.match('/js/horizontalTree.js', {
    packOrder: -20
});
fis.match('/js/grid.js', {
    packOrder: -15
});
fis.match('/js/templateGrid.js', {
    packOrder: -10
});
fis.match('/js/refWin.js', {
    packOrder: -5
});

//编译less
fis.match('/less/dolphin.less',{
  release : '/css/dolphin.css',
  parser: fis.plugin('less'),
  rExt: '.css'
});
fis.media('prod').match('/less/dolphin.less',{
  release : '/css/dolphin.min.css',
  parser: fis.plugin('less'),
  rExt: '.css'
});
fis.media('prod').match('/less/dolphin.less',{
    optimizer: fis.plugin('clean-css')
});
fis.media('prod').match('/custom/css/*.css',{
    optimizer: fis.plugin('clean-css')
});

fis.set('project.ignore', [
  'node_modules/**',
  'output/**',
  'fis-conf.js'
]);

//发布地址
fis.match('*', {
  deploy: [fis.plugin('local-deliver', {
    to: ["."]
  })]
});
