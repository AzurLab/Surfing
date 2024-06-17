let result = $request.url.match(/^https:\/\/duckduckgo\.com\/\?q=.*?(https?%3A%2F%2F[A-Za-z0-9_\-.:?&@=\/%#,;]*).*/)
let result2 = decodeURIComponent(result[1]).match(/(https?:\/\/[A-Za-z0-9_\-\+.:?&@=\/%#,;]*)/)
$notification.post("链接自动提取","", result2[1],{url: result2[1]})
//如加载异常可以点击通知跳转
$done({url: result2[1]})
