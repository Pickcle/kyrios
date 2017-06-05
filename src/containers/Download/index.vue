<template lang="jade">
  div
    div
      a(href="http://upos.hz-cdnws.acgvideo.com/liverec/20170516/14/g170516997zjv59ubd19b5hmzf6yo7g7.flv?wsTime=1496681745&rate=400&wsSecret2=f1a3e1e05651840b5fcf012951314a42") download1
    div
      a(href="http://upos.hz-cdnws.acgvideo.com/liverec/20170518/11/g1705189932u16y1no6x1791ppcwclsf.flv?wsTime=1496681745&rate=400&wsSecret2=1aa1342479f60c42ecb333712e58839c", download="file") download2
    div
      a(@click="onDownloadClick") download3
</template>

<script>
  export default {
    methods: {
      onDownloadClick () {
        downloadFile('file')
      }

      downloadFile (fileName, content) {
        var aLink = document.createElement('a');
        var blob = new Blob([content]);
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("click", false, false);//initEvent 不加后两个参数在FF下会报错, 感谢 Barret Lee 的反馈
        aLink.download = fileName;
        aLink.href = URL.createObjectURL(blob);
        aLink.dispatchEvent(evt);
      },

      downloadFile2 () {
        var a = document.createElement('a');
        var url = res.data.url;
        var filename = 'myfile.zip';
        a.href = url;
        a.download = filename;
        a.click();
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>
