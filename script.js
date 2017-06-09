var superAgent = require('superagent')

superAgent
   .post('http://live.bilibili.com/msg/send')
   .send({
     color: 16777215,
     fontsize: 25,
     mode: 1,
     msg: '哔哩哔哩 (゜-゜)つロ 干杯~',
     mark: 'record',
     rnd: Date.now(),
     roomId: 545342
   })
   .set("Cookie", "buvid2=140F6155-78B8-4475-8D72-339A9026068423963infoc; sid=9dks4hid; dssid=75oe56a863963991d; dsess=BAh7CkkiD3Nlc3Npb25faWQGOgZFVEkiFTU2YTg2Mzk2Mzk5MWQxZTQGOwBG%0ASSIJY3NyZgY7AEZJIiU5MzBjMWUwNGU4NDBmMGIyMzRiMjEyYTg5YTQxMmVj%0AYQY7AEZJIg10cmFja2luZwY7AEZ7B0kiFEhUVFBfVVNFUl9BR0VOVAY7AFRJ%0AIi1mZmQwYTlhY2Y5OGRmYTdjNzgwNzM4N2QyNzUxNmU2YjM2ZmIyNGMwBjsA%0ARkkiGUhUVFBfQUNDRVBUX0xBTkdVQUdFBjsAVEkiLWE5YTAzMTQyZDQyYzVk%0AMDA5Mzg5YjRlN2ZiYTYxYWFjYTE4MjM3YzEGOwBGSSIKY3RpbWUGOwBGbCsH%0APCslWUkiCGNpcAY7AEYiEjE4My4xMzEuMTEuNTc%3D%0A--892a843c6965e7b10e9c6bf7272c0acb83942a66; LIVE_BUVID=02cbb414a106e70fbe027c447aa59afc; LIVE_BUVID__ckMd5=98f3f7cc4534155b; fts=1495637157; UM_distinctid=15c3e94efbd378-070c0e1162e06c-30657509-13c680-15c3e94efbe5ff; _cnt_dyn=0; uTZ=-480; pgv_pvi=4343221248; buvid3=AEFF742D-8D69-491A-9C6E-CA711A0ADEAF10299infoc; finger=14bc3c4e; _qddaz=QD.cxt1bc.elc7c0.j3449i5s; rpdid=kwmqqoqxomdoplxqoomqw; DedeUserID=51038685; DedeUserID__ckMd5=41dba783cc7103d9; SESSDATA=36a1c18a%2C1499415404%2C99164ef9; bili_jct=3d250620bf011b76f057d2832feeca09; pgv_si=s3626510336; _cnt_pm=0; _cnt_notify=0; _dfcaptcha=b93e4443023bce6b3045a7a27a413151; LIVE_LOGIN_DATA=6b041c2a0554761239c82ff5ceaf32c7ef590ea4; LIVE_LOGIN_DATA__ckMd5=8b0ae555949cb0cf")
   .set("Host", "live.bilibili.com")
   .set("Origin", "http://static.hdslb.com")
   .set("Referer", "http://live.bilibili.com/545342")
   .set("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36")
   .set('X-Requested-With', 'ShockwareFlash/21.0.0.213')
   .type("form")
   .end(function(res){
     console.log('xhjLog: res', res)
   });
